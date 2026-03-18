"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [academyOpen, setAcademyOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[#06152D]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center">
          <div className="relative w-[190px] overflow-hidden sm:w-[220px]">
            <Image
              src="/logo.png"
              alt="DataRay"
              width={180}
              height={80}
              priority
              className="h-12 w-auto object-contain object-left sm:h-14"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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

          <Link
            href="/insights"
            className="text-sm text-white/80 transition-colors duration-300 hover:text-cyan-300"
          >
            Insights
          </Link>

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

          <Link
            href="/about"
            className="text-sm text-white/80 transition-colors duration-300 hover:text-cyan-300"
          >
            About
          </Link>

          <Link
            href="/publications"
            className="text-sm text-white/80 transition-colors duration-300 hover:text-cyan-300"
          >
            Publications
          </Link>

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
            className="hidden rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/10 md:inline-flex"
          >
            Request Consultation
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white md:hidden"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#06152D] md:hidden">
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

            <Link
              href="/insights"
              className="rounded-lg px-3 py-3 text-sm text-white/85 transition hover:bg-white/5 hover:text-cyan-300"
              onClick={() => setMenuOpen(false)}
            >
              Insights
            </Link>

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

            <Link
              href="/about"
              className="rounded-lg px-3 py-3 text-sm text-white/85 transition hover:bg-white/5 hover:text-cyan-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/publications"
              className="rounded-lg px-3 py-3 text-sm text-white/85 transition hover:bg-white/5 hover:text-cyan-300"
              onClick={() => setMenuOpen(false)}
            >
              Publications
            </Link>

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