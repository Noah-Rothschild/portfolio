import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-white fixed top-0 w-full flex items-center justify-between py-4 gap-3">
      <Link href="/"><img src="/logo.png" alt="Logo" /></Link>
      <div className="flex items-center gap-4">
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="absolute top-full left-0 w-full h-4 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
    </nav>
  );
}