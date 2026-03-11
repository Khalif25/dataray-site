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
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm uppercase tracking-[0.2em] text-blue-500">Insight</p>
      <h3 className="mt-3 text-xl font-medium text-black">{title}</h3>
      <p className="mt-3 leading-7 text-neutral-600">{excerpt}</p>
      <Link href={`/insights/${slug}`} className="mt-5 inline-block text-sm font-medium text-blue-600">
        Read article →
      </Link>
    </div>
  );
}