"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./animated-background";

export default function Hero() {
  const [forecast, setForecast] = useState(0);
  const [insights, setInsights] = useState(0);
  const [signalA, setSignalA] = useState(0);
  const [signalB, setSignalB] = useState(0);
  const [signalC, setSignalC] = useState(0);

  useEffect(() => {
    let f = 0;
    let i = 0;
    let a = 0;
    let b = 0;
    let c = 0;

    const interval = setInterval(() => {
      if (f < 92) f += 2;
      if (i < 18) i += 1;
      if (a < 78) a += 3;
      if (b < 62) b += 3;
      if (c < 85) c += 4;

      setForecast(Math.min(f, 92));
      setInsights(Math.min(i, 18));
      setSignalA(Math.min(a, 78));
      setSignalB(Math.min(b, 62));
      setSignalC(Math.min(c, 85));

      if (f >= 92 && i >= 18 && a >= 78 && b >= 62 && c >= 85) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#020B1F] px-4 py-16 text-white sm:px-6 sm:py-20 lg:py-24">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            Modern AI, Analytics & Intelligence
          </motion.p>

          <motion.h1
            className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(56,189,248,0.15)] sm:text-6xl lg:text-7xl xl:text-8xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            Data-driven intelligence for organizations that want to move with
            clarity.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            DataRay helps businesses, institutions, and public-sector teams turn
            complex data into executive dashboards, strategic research,
            predictive insight, and practical AI solutions.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3 lg:flex-nowrap"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
          >
            <Link
              href="/services"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition duration-300 hover:scale-[1.03] hover:shadow-cyan-400/40"
            >
              Explore Services
            </Link>

            <Link
              href="/projects"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition duration-300 hover:bg-cyan-400/20"
            >
              Explore Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:border-cyan-300/40 hover:bg-white/10"
            >
              Start a Project
            </Link>

            <a
              href="https://forms.gle/BxT6WPCRs3tt7KuHA"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-200 backdrop-blur-md transition duration-300 hover:border-cyan-300/45 hover:bg-cyan-400/15"
            >
              Participate in Survey
            </a>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap gap-8 text-sm text-slate-400"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
          >
            <div>
              <p className="text-2xl font-semibold text-white">AI</p>
              <p>Strategy & adoption</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">Data</p>
              <p>Analytics & dashboards</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">Research</p>
              <p>Intelligence & insight</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, x: 40, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
        >
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">
                  Decision Intelligence
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  Executive Snapshot
                </h3>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                Live View
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.4 }}
              >
                <p className="text-sm text-slate-400">Forecast Confidence</p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {forecast}%
                </p>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.46, duration: 0.4 }}
              >
                <p className="text-sm text-slate-400">Active Insights</p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {insights}
                </p>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.54, duration: 0.4 }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">Operational Signals</p>
                  <span className="text-xs text-slate-500">
                    Real-time activity
                  </span>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
                      <span>Forecast stream</span>
                      <span>{signalA}%</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-white/10">
                      <motion.div
                        className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${signalA}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
                      <span>Risk monitoring</span>
                      <span>{signalB}%</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-white/10">
                      <motion.div
                        className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${signalB}%` }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.08,
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
                      <span>Performance signals</span>
                      <span>{signalC}%</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-white/10">
                      <motion.div
                        className="h-3 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300"
                        initial={{ width: 0 }}
                        animate={{ width: `${signalC}%` }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.16,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 -z-10 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}