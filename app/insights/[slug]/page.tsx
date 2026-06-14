
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { articles, getReadingTime } from "@/lib/articles";
import { SITE_URL } from "@/lib/site-url";

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
      title: "Article not found | DataRay Smart Solutions",
    };
  }

  return {
    title: `${article.title} | DataRay Smart Solutions`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${SITE_URL}/insights/${article.slug}`,
      siteName: "DataRay Smart Solutions",
      images: [
        {
          url: `${SITE_URL}${article.image}`,
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
      images: [`${SITE_URL}${article.image}`],
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
    image: [`${SITE_URL}${article.image}`],
    author: {
      "@type": "Organization",
      name: "DataRay Smart Solutions",
      alternateName: "DataRay",
    },
    publisher: {
      "@type": "Organization",
      name: "DataRay Smart Solutions",
      alternateName: "DataRay",
      url: SITE_URL,
      logo: `${SITE_URL}/premium_logo.png`,
    },
    datePublished: article.date,
    mainEntityOfPage: `${SITE_URL}/insights/${article.slug}`,
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
