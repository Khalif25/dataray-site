export default function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 h-10 w-10 rounded-2xl bg-neutral-100" />
      <h3 className="text-xl font-medium text-black">{title}</h3>
      <p className="mt-3 leading-7 text-neutral-600">{description}</p>
      <p className="mt-5 text-sm font-medium text-blue-600">Learn more →</p>
    </div>
  );
}