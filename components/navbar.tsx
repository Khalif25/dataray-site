"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [academyOpen, setAcademyOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[linear-gradient(180deg,#243754_0%,#223451_100%)] shadow-[0_10px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="DataRay Smart Solutions home"
        >
          <div className="relative flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-full border border-cyan-300/20 bg-[#0a1730] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <Image
              src="/dataray-mark-clean.png"
              alt="DataRay logo"
              fill
              priority
              className="object-cover scale-[1.12]"
              sizes="64px"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-[1.55rem] font-semibold tracking-[-0.02em] text-white">
              DataRay
            </span>
            <span className="mt-1 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-cyan-200/80">
              Smart Solutions
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link
            href="/"
            className="text-sm text-white/80 transition-colors duration-300 hover:text-cyan-300"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="text-sm text-white/80 transition-colors duration-300 hover:text-cyan-300"
          >
            Services
          </Link>

          <Link
            href="/projects"
            className="text-sm text-white/80 transition-colors duration-300 hover:text-cyan-300"
          >
            Projects
          </Link>

          <div
            className="group relative"
            onMouseEnter={() => setInsightsOpen(true)}
            onMouseLeave={() => setInsightsOpen(false)}
          >
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors duration-300 hover:text-cyan-300"
            >
              Insights
              <span
                className={`text-xs transition-transform duration-200 ${
                  insightsOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </Link>

            <div
              className={`absolute left-0 top-full z-50 mt-3 w-56 rounded-2xl border border-white/10 bg-[#081a36]/95 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-200 ${
                insightsOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <Link
                href="/insights"
                className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Insights
              </Link>

              <Link
                href="/publications"
                className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Publications
              </Link>
            </div>
          </div>

          <div
            className="group relative"
            onMouseEnter={() => setAcademyOpen(true)}
            onMouseLeave={() => setAcademyOpen(false)}
          >
            <Link
              href="/academy"
              className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors duration-300 hover:text-cyan-300"
            >
              Academy
              <span
                className={`text-xs transition-transform duration-200 ${
                  academyOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </Link>

            <div
              className={`absolute left-0 top-full z-50 mt-3 w-60 rounded-2xl border border-white/10 bg-[#081a36]/95 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-200 ${
                academyOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <Link
                href="/academy"
                className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Overview
              </Link>

              <Link
                href="/academy/courses"
                className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Courses
              </Link>

              <Link
                href="/academy/programs"
                className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Training Programs
              </Link>
            </div>
          </div>

          <div
            className="group relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors duration-300 hover:text-cyan-300"
            >
              About
              <span
                className={`text-xs transition-transform duration-200 ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </Link>

            <div
              className={`absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-white/10 bg-[#081a36]/95 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-200 ${
                aboutOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <Link
                href="/about"
                className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                About
              </Link>

              <Link
                href="/ai-initiative"
                className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Somalia AI & Data Literacy Initiative
              </Link>

              <Link
                href="/about/somali-social-stability-ai"
                className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Somalia AI Initiative
              </Link>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-sm text-white/80 transition-colors duration-300 hover:text-cyan-300"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/10 lg:inline-flex"
          >
            Request Consultation
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white lg:hidden"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#06152D] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            <Link
              href="/"
              className="rounded-lg px-3 py-3 text-sm text-white/85 transition hover:bg-white/5 hover:text-cyan-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/services"
              className="rounded-lg px-3 py-3 text-sm text-white/85 transition hover:bg-white/5 hover:text-cyan-300"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>

            <Link
              href="/projects"
              className="rounded-lg px-3 py-3 text-sm text-white/85 transition hover:bg-white/5 hover:text-cyan-300"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>

            <div className="mt-1 rounded-xl border border-white/10 bg-white/[0.03] p-2">
              <Link
                href="/insights"
                className="block rounded-lg px-3 py-3 text-sm font-medium text-white transition hover:bg-white/5 hover:text-cyan-300"
                onClick={() => setMenuOpen(false)}
              >
                Insights
              </Link>

              <div className="ml-2 border-l border-white/10 pl-3">
                <Link
                  href="/publications"
                  className="block rounded-lg px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-cyan-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Publications
                </Link>
              </div>
            </div>

            <div className="mt-1 rounded-xl border border-white/10 bg-white/[0.03] p-2">
              <Link
                href="/academy"
                className="block rounded-lg px-3 py-3 text-sm font-medium text-white transition hover:bg-white/5 hover:text-cyan-300"
                onClick={() => setMenuOpen(false)}
              >
                Academy
              </Link>

              <div className="ml-2 border-l border-white/10 pl-3">
                <Link
                  href="/academy/courses"
                  className="block rounded-lg px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-cyan-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Courses
                </Link>

                <Link
                  href="/academy/programs"
                  className="block rounded-lg px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-cyan-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Training Programs
                </Link>
              </div>
            </div>

            <div className="mt-1 rounded-xl border border-white/10 bg-white/[0.03] p-2">
              <Link
                href="/about"
                className="block rounded-lg px-3 py-3 text-sm font-medium text-white transition hover:bg-white/5 hover:text-cyan-300"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>

              <div className="ml-2 border-l border-white/10 pl-3">
                <Link
                  href="/ai-initiative"
                  className="block rounded-lg px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-cyan-300"
                  onClick={() => setMenuOpen(false)}
                >
                  National Initiative
                </Link>

                <Link
                  href="/about/somali-social-stability-ai"
                  className="block rounded-lg px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-cyan-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Somali Social Stability AI
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="rounded-lg px-3 py-3 text-sm text-white/85 transition hover:bg-white/5 hover:text-cyan-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="mt-3 inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/10"
              onClick={() => setMenuOpen(false)}
            >
              Request Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}