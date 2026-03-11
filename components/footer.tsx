import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04142B] text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">DataRay</p>
          <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">
            AI, analytics, dashboards, and decision intelligence for organizations
            that need clarity, insight, and practical execution.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm">
          <Link href="/services" className="transition hover:text-cyan-300">
            Services
          </Link>
          <Link href="/insights" className="transition hover:text-cyan-300">
            Insights
          </Link>
          <Link href="/about" className="transition hover:text-cyan-300">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-cyan-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}