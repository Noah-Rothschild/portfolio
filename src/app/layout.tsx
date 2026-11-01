import "./globals.css";
import Nav from "../components/Nav";
import ThemeToggle from "../components/ThemeToggle";
import { Viewport } from "next";
import type { Metadata } from "next";
import { Comfortaa, Source_Sans_3 } from "next/font/google";

const comfortaa = Comfortaa({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-comfortaa" 
});
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" });

const themeScript = `
  try {
    var theme = localStorage.getItem("theme");
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
`;

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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Sets the theme before first paint so dark mode doesn't flash white */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${comfortaa.variable} ${sourceSans.variable}`}>
        <Nav />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}