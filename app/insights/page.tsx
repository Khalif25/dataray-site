import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { articles } from "@/lib/articles";

export default function InsightsPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Insights"
          title="Research, analysis, and strategic perspective"
          description="Explore DataRay articles on AI, analytics, dashboards, market intelligence, and decision-making."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                {article.category}
              </p>

              <h2 className="mt-3 text-xl font-semibold tracking-tight text-black">
                {article.title}
              </h2>

              <p className="mt-3 leading-7 text-neutral-600">{article.excerpt}</p>

              <div className="mt-5 text-sm text-neutral-500">
                <p>{article.author}</p>
                <p>{article.date}</p>
              </div>

              <Link
                href={`/insights/${article.slug}`}
                className="mt-5 inline-block text-sm font-medium text-blue-600"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}