export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-neutral-600">{description}</p>
    </div>
  );
}