import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/"><img src="/logo.png" alt="Logo" /></Link>
      <Link href="/projects">Projects</Link>
      <Link className="text-accent" href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}