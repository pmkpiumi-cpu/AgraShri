import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join AgraShri | Student Enrollment 2026",
  description: "Secure your spot at AgraShri Educational Institute. Enroll now for the 2026 academic year and start your journey towards excellence and personal growth.",
  openGraph: {
    title: "Join AgraShri | Student Enrollment 2026",
    description: "Start your journey with AgraShri. Professional education and counseling for a better future.",
  },
};

export default function EnrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
