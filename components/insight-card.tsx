import Link from "next/link";

export default function InsightCard({
  slug,
  title,
  excerpt,
}: {
  slug: string;
  title: string;
  excerpt: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#4da3ff]/30 hover:bg-white/[0.06]">
      <p className="text-sm uppercase tracking-[0.2em] text-[#7ec8ff]">Insight</p>
      <h3 className="mt-3 text-xl font-medium text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{excerpt}</p>
      <Link
        href={`/insights/${slug}`}
        className="mt-5 inline-block text-sm font-medium text-[#7ec8ff]"
      >
        Read article →
      </Link>
    </div>
  );
}