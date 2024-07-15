import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strategic Digital Marketing and Expert Web Development in Nepal | Innov Tech",
  description: "In Kathmandu, Nepal, our agency crafts exceptional websites and executes effective digital strategies for impactful online presence",
  keywords : "Kathmandu web development agency, Digital marketing Kathmandu Nepal, Kathmandu web design and marketing, Nepal digital solutions provider,Kathmandu online presence experts",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
