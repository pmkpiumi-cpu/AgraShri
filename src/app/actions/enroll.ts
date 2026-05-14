"use server";

import { headers } from "next/headers";

// In-memory rate limit store.
// Key: IP address, Value: { count, firstRequestTime }
// NOTE: For multi-instance deployments (e.g. Vercel serverless),
//       use a persistent store like Upstash Redis instead.
const rateLimitStore = new Map<string, { count: number; firstRequest: number }>();

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour window
const RATE_LIMIT_MAX_REQUESTS = 3;            // max 3 submissions per hour per IP

type EnrollmentData = {
  fullName: string;
  email: string;
  phone: string;
  program: string;
  message?: string;
};

type ActionResult =
  | { success: true }
  | { success: false; error: string; rateLimited?: boolean };

export async function submitEnrollment(data: EnrollmentData): Promise<ActionResult> {
  // ── Rate limiting ──────────────────────────────────────────────────────
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (record) {
    // Reset window if expired
    if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
      rateLimitStore.set(ip, { count: 1, firstRequest: now });
    } else if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
      const minutesLeft = Math.ceil(
        (RATE_LIMIT_WINDOW_MS - (now - record.firstRequest)) / 60_000
      );
      return {
        success: false,
        rateLimited: true,
        error: `You have reached the maximum number of submissions. Please try again in ${minutesLeft} minute${minutesLeft !== 1 ? "s" : ""}.`,
      };
    } else {
      record.count++;
    }
  } else {
    rateLimitStore.set(ip, { count: 1, firstRequest: now });
  }

  // ── Form submission logic ──────────────────────────────────────────────
  // TODO: Replace with EmailJS / Nodemailer / a form service call.
  // Simulating network latency for now.
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log("New enrollment submission:", {
    ...data,
    submittedAt: new Date().toISOString(),
    ip,
  });

  return { success: true };
}
