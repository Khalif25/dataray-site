import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="mb-5 h-11 w-11 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100" />

      <h3 className="text-xl font-semibold tracking-tight text-slate-950">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>

      <Link
        href={href}
        className="mt-5 inline-flex text-sm font-medium text-blue-600 transition hover:text-cyan-600"
      >
        Learn more →
      </Link>
    </article>
  );
}