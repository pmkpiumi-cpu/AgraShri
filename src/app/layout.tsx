import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://agrashri.lk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AgraShri Educational Institute | Empowering Minds, Building Futures",
    template: "%s | AgraShri Educational Institute",
  },
  description:
    "AgraShri Education Institute is a modern learning and counseling platform in Sri Lanka dedicated to academic excellence, personal growth, career development, and student wellbeing — from Grade 1 to A/L and beyond.",
  keywords: [
    "AgraShri",
    "educational institute",
    "tuition Sri Lanka",
    "A/L classes",
    "O/L classes",
    "counseling Sri Lanka",
    "career guidance",
    "university guidance",
    "student wellbeing",
    "school tuition",
  ],
  authors: [{ name: "AgraShri Educational Institute", url: siteUrl }],
  creator: "AgraShri Educational Institute",
  publisher: "AgraShri Educational Institute",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: siteUrl,
    siteName: "AgraShri Educational Institute",
    title: "AgraShri Educational Institute | Empowering Minds, Building Futures",
    description:
      "A modern learning and counseling platform dedicated to academic excellence, personal growth, career development, and student wellbeing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AgraShri Educational Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgraShri Educational Institute | Empowering Minds, Building Futures",
    description:
      "A modern learning and counseling platform dedicated to academic excellence, personal growth, and career development.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "AgraShri Educational Institute",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "AgraShri Education Institute is a modern learning and counseling platform in Sri Lanka dedicated to academic excellence, personal growth, career development, and student wellbeing.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gampaha",
      "addressRegion": "Western Province",
      "addressCountry": "LK"
    },
    "areaServed": "Sri Lanka",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+94-76-828-5067",
      "contactType": "customer service",
      "email": "agrashri.info@gmail.com",
      "availableLanguage": ["English", "Sinhala"]
    },
    "sameAs": [
      "https://www.facebook.com/agrashri",
      "https://www.instagram.com/agrashri"
    ]
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Enroll",
        "item": `${siteUrl}/enroll`
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className={`${plusJakarta.className} antialiased bg-[#F9FAF7]`} suppressHydrationWarning>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
