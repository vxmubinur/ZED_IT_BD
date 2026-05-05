import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZED IT Bangladesh | IT Firm & Digital Skill Training Center",
  description: "ZED IT Bangladesh is a leading IT firm and computer training center in Tongi, Gazipur. We offer courses in Microsoft Office, Graphics Design, Digital Marketing, Video Editing, and Web Design.",
  keywords: "ZED IT Bangladesh, IT training center Bangladesh, computer course Tongi, computer training Gazipur, graphics design course, digital marketing training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
