import Link from "next/link";
import { articles } from "@/lib/articles";

export default function InsightsPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
            DataRay Insights
          </p>

          <h1 className="mt-3 text-4xl font-semibold">
            Research, analysis, and perspectives on AI and data intelligence
          </h1>

          <p className="mt-6 text-lg text-neutral-400">
            Our insights explore how artificial intelligence, analytics,
            and modern data systems are transforming organizations.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">

          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <h2 className="text-2xl font-semibold">
                {article.title}
              </h2>

              <p className="mt-3 text-neutral-400">
                {article.excerpt}
              </p>

              <div className="mt-4 text-sm text-neutral-500">
                {article.date} • {article.readTime}
              </div>
            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}