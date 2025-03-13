import type { Metadata } from "next";
import "./globals.css";
import { Inter, Anek_Latin } from "next/font/google";
import { twMerge } from "tailwind-merge"; // NOTE: dynamically add classes to base style body

// TODO: change the sans font to match later
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const anek = Anek_Latin({ subsets: ["latin"], variable: "--font-serif"});

export const metadata: Metadata = {
  title: "L.",
  description: "Powered by coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (// NOTE: base style
    <html lang="en">
      <body className={twMerge(inter.variable, anek.variable, "bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
