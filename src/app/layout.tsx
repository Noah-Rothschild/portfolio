import "./globals.css";
import Nav from "../components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-20">
        <Nav />
        {children}
      </body>
    </html>
  );
}