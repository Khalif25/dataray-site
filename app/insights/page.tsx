import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { articles, getReadingTime } from "@/lib/articles";

export default function InsightsPage() {
  const [featured, ...rest] = articles;

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Insights"
          title="Research, analysis, and strategic perspective"
          description="Explore DataRay articles on AI, analytics, dashboards, market intelligence, and decision-making."
        />

        <div className="mt-12">
          <Link href={`/insights/${featured.slug}`}>
            <article className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative mb-6 h-[320px] w-full overflow-hidden rounded-2xl bg-neutral-100">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  priority
                />
              </div>

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                {featured.category}
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black">
                {featured.title}
              </h2>

              <p className="mt-4 text-lg leading-8 text-neutral-600">
                {featured.excerpt}
              </p>

              <div className="mt-6 text-sm text-neutral-500">
                <p>{featured.author}</p>
                <p>
                  {featured.date} • {getReadingTime(featured.content)}
                </p>
              </div>

              <span className="mt-6 inline-block text-sm font-medium text-blue-600">
                Read article →
              </span>
            </article>
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <article
              key={article.slug}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative mb-5 h-[220px] w-full overflow-hidden rounded-2xl bg-neutral-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                {article.category}
              </p>

              <h3 className="mt-3 text-xl font-semibold tracking-tight text-black">
                {article.title}
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">{article.excerpt}</p>

              <div className="mt-5 text-sm text-neutral-500">
                <p>{article.author}</p>
                <p>
                  {article.date} • {getReadingTime(article.content)}
                </p>
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