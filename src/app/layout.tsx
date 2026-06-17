import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Inter, Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Ram Shankar Upadhayaya — Scientist · Innovator · Visionary",
  description:
    "The cinematic legacy of Dr. Ram Shankar Upadhayaya — a scientist, innovator, and visionary dedicated to advancing human health through medicinal chemistry, drug discovery, and wellness innovation.",
  keywords: [
    "Dr. Ram Shankar Upadhayaya",
    "Medicinal Chemistry",
    "Drug Discovery",
    "Aryastha Life Sciences",
    "Laxai Life Sciences",
    "Evolv28",
    "Wellness Innovation",
    "Pharmaceutical Research",
  ],
  authors: [{ name: "Dr. Ram Shankar Upadhayaya" }],
  openGraph: {
    title: "Dr. Ram Shankar Upadhayaya — Scientist · Innovator · Visionary",
    description:
      "A lifetime devoted to science, innovation, wellness, and humanity.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${playfair.variable} ${inter.variable} ${manrope.variable} ${cormorant.variable}`}
    >
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
