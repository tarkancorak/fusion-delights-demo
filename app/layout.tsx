import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fusion Delights - Demo: Chatbot-Integration für Restaurants mit KI",
  description:
    "Diese Webseite demonstriert die Integration eines Chatbots für Restaurants und stellt kein echtes Restaurant dar.",
  robots: "noindex,follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
