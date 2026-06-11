import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";



export const metadata: Metadata = {
  title: 'مطعم بغداد | مذاق بغداد الأصيل',
  description: 'اكتشف أشهى الأطباق العراقية الأصيلة في مطعم بغداد. تجربة طعام فاخرة وأجواء شرقية ساحرة.',
  openGraph: {
    "title": "مطعم بغداد | مذاق بغداد الأصيل",
    "description": "اكتشف أشهى الأطباق العراقية الأصيلة في مطعم بغداد. تجربة طعام فاخرة وأجواء شرقية ساحرة.",
    "url": "/",
    "siteName": "مطعم بغداد",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/dinner-setup-with-side-dish-salad-pickles-plates_140725-8495.jpg",
        "alt": "مائدة طعام عراقية فاخرة في مطعم بغداد"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "مطعم بغداد | مذاق بغداد الأصيل",
    "description": "اكتشف أشهى الأطباق العراقية الأصيلة في مطعم بغداد. تجربة طعام فاخرة وأجواء شرقية ساحرة.",
    "images": [
      "http://img.b2bpic.net/free-photo/dinner-setup-with-side-dish-salad-pickles-plates_140725-8495.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${sourceSans3.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
