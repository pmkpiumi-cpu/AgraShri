import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AgraShri Educational Institute | Empowering Minds, Building Futures",
  description: "Modern learning and counseling platform dedicated to academic excellence, personal growth, and career development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${plusJakarta.className} antialiased bg-[#F9FAF7]`} suppressHydrationWarning>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
