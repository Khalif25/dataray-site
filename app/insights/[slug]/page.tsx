export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-300">
          Insight Article
        </p>
        <h1 className="mt-4 text-4xl font-semibold capitalize">
          {slug.replace(/-/g, " ")}
        </h1>
        <p className="mt-6 text-lg leading-8 text-neutral-300">
          This is a placeholder article page for DataRay insights. Later, this route
          will render dynamic research articles and analysis posts.
        </p>
      </div>
    </main>
  );
}