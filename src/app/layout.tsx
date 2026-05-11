import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} antialiased bg-black`} suppressHydrationWarning>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
