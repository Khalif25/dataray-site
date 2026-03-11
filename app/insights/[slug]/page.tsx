
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { articles, getReadingTime } from "@/lib/articles";

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
          url: `https://dataray-site.vercel.app${article.image}`,
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
      images: [`https://dataray-site.vercel.app${article.image}`],
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: [`https://dataray-site.vercel.app${article.image}`],
    author: {
      "@type": "Organization",
      name: "DataRay",
    },
    publisher: {
      "@type": "Organization",
      name: "DataRay",
    },
    datePublished: article.date,
    mainEntityOfPage: `https://dataray-site.vercel.app/insights/${article.slug}`,
  };

  return (
    <main className="px-6 py-20">
      <article className="mx-auto max-w-4xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
          {article.category}
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
          {article.title}
        </h1>

        <div className="mt-4 text-sm text-neutral-500">
          <p>{article.author}</p>
          <p>
            {article.date} • {getReadingTime(article.content)}
          </p>
        </div>
        

        <div className="mt-8 overflow-hidden rounded-3xl">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={630}
            className="h-auto w-full object-cover"
          />
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