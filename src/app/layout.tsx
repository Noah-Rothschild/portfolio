import "./globals.css";
import Nav from "../components/Nav";
import { Viewport } from "next";
import type { Metadata } from "next";
import { Comfortaa, Source_Sans_3 } from "next/font/google";

const comfortaa = Comfortaa({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-comfortaa" 
});
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Noah Rothschild | Software Engineer",
  description: "Portfolio site showcasing full-stack web development projects, built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${comfortaa.variable} ${sourceSans.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}