import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[#06152D]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
  <div className="relative h-17 w-[220px] overflow-hidden">
    <Image
      src="/logo.png"
      alt="DataRay"
      width={180}
      height={80}
      priority
      className="object-contain object-left"
      //className="h-13 w-auto"
    />
  </div>
</Link>


        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm text-white/78 transition-colors duration-300 hover:text-cyan-300"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm text-white/78 transition-colors duration-300 hover:text-cyan-300"
          >
            Services
          </Link>
          <Link
            href="/insights"
            className="text-sm text-white/78 transition-colors duration-300 hover:text-cyan-300"
          >
            Insights
          </Link>
          <Link
            href="/about"
            className="text-sm text-white/78 transition-colors duration-300 hover:text-cyan-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm text-white/78 transition-colors duration-300 hover:text-cyan-300"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/10 md:inline-flex"
        >
          Request Consultation
        </Link>
      </div>
    </header>
  );
}