import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-header.png"
            alt="DataRay"
            width={160}
            height={40}
            priority
          />
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