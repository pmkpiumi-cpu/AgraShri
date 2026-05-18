import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enroll Online",
  description: "Secure your spot for the 2026 Academic Year at AgraShri Educational Institute, Sri Lanka's premium platform for Grade 1 to A/L education, wellness, and professional mentoring.",
  alternates: {
    canonical: "https://agrashri.lk/enroll",
  },
};

export default function EnrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
