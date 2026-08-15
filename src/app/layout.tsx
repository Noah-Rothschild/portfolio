import "./globals.css";
import Nav from "../components/Nav";
import { Comfortaa, Source_Sans_3 } from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"], variable: "--font-comfortaa" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" });

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