import type { Metadata } from "next";
import { Inter, Montserrat, Onest } from "next/font/google";
import "./globals.css";
import AppBar from "../components/layouts/AppBar";
import Footer from "@/components/layouts/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ style: "normal", subsets: ["cyrillic"] })
const onest = Onest({ style: "normal", subsets: ["cyrillic"] })

export const metadata: Metadata = {
  title: "Jibhausy Global Concepts",
  description: "No One car rentals service in Abuja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.style} overflow-x-hidden`}>
        <AppBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
