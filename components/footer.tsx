import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04142B] text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">

        {/* Brand */}
        <div>
          <p className="text-lg font-semibold text-white">DataRay</p>

          <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">
            AI, analytics, dashboards, and decision intelligence for
            organizations that need clarity, insight, and practical execution.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3 text-sm">
          <p className="font-semibold text-white">Navigation</p>

          <Link href="/services" className="hover:text-cyan-300 transition">
            Services
          </Link>

          <Link href="/insights" className="hover:text-cyan-300 transition">
            Insights
          </Link>

          <Link href="/publications" className="hover:text-cyan-300 transition">
            Publications
          </Link>

          <Link href="/about" className="hover:text-cyan-300 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-cyan-300 transition">
            Contact
          </Link>
        </div>

        {/* Contact / Presence */}
        <div className="text-sm">
          <p className="font-semibold text-white">Presence</p>

          <div className="mt-3 space-y-2 text-slate-400 text-xs">
            <p>Somalia — Head Office</p>
            <p>Kenya — Regional Presence</p>
            <p>United Kingdom — International Presence</p>
          </div>

          <div className="mt-4 space-y-1 text-xs text-slate-400">
            <p>{siteConfig.contact.general}</p>
            <p>+252907736110</p>
          </div>

          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[#0B3B82] hover:bg-cyan-50"
          >
            Get in touch
          </Link>
        </div>

      </div>
    </footer>
  );
}