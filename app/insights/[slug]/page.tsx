import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="px-6 py-20">
      <article className="mx-auto max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
          {article.category}
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
          {article.title}
        </h1>

        <div className="mt-4 text-sm text-neutral-500">
          <p>{article.author}</p>
          <p>{article.date}</p>
        </div>

        <div className="mt-10 space-y-6">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-lg leading-8 text-neutral-700">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}