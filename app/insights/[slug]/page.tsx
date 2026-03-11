import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article not found | DataRay",
    };
  }

  return {
    title: `${article.title} | DataRay`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://dataray-site.vercel.app/insights/${article.slug}`,
      siteName: "DataRay",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: ["/og-image.png"],
    },
  };
}

export default async function InsightArticlePage({
  params,
}: PageProps) {
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