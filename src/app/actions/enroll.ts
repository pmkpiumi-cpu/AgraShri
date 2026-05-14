"use server";

import { headers } from "next/headers";

// In-memory rate limit store.
// Key: IP address, Value: { count, firstRequestTime }
// NOTE: For multi-instance Vercel deployments, use Upstash Redis instead.
const rateLimitStore = new Map<string, { count: number; firstRequest: number }>();

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 3;            // max 3 per hour per IP

type RateLimitResult =
  | { allowed: true }
  | { allowed: false; error: string };

/**
 * Server-side rate limit check only.
 * Called from EnrollmentForm before sending via EmailJS.
 */
export async function checkRateLimit(): Promise<RateLimitResult> {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (record) {
    if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
      // Window expired — reset
      rateLimitStore.set(ip, { count: 1, firstRequest: now });
    } else if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
      const minutesLeft = Math.ceil(
        (RATE_LIMIT_WINDOW_MS - (now - record.firstRequest)) / 60_000
      );
      return {
        allowed: false,
        error: `You have reached the maximum number of submissions. Please try again in ${minutesLeft} minute${minutesLeft !== 1 ? "s" : ""}.`,
      };
    } else {
      record.count++;
    }
  } else {
    rateLimitStore.set(ip, { count: 1, firstRequest: now });
  }

  return { allowed: true };
}
