import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          {siteConfig.name}
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-300">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}