import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import { cn } from "@/lib/utils";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "400", "500", "600", "700", "900"]
})

export const metadata: Metadata = {
  title: "Marico",
  description: "Marico helps creators to engage with their audience automatically",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-black text-white font-sans antialiased",
          poppins.className
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
