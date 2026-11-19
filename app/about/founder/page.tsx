import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { founder } from "@/lib/founder";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Abdinur Khalif | Founder & Technology Lead",
  description: "Meet Abdinur Khalif, Founder and Technology Lead of DataRay AI Technologies: AI and data science professional, software developer, technology entrepreneur, and university lecturer.",
  alternates: { canonical: `${SITE_URL}/about/founder` },
  openGraph: {
    title: "Abdinur Khalif | DataRay AI Technologies",
    description: "Founder and Technology Lead. AI, data science, intelligent enterprise systems, and accessible healthcare technologies.",
    url: `${SITE_URL}/about/founder`,
    siteName: "DataRay AI Technologies",
    type: "profile",
    firstName: "Abdinur",
    lastName: "Khalif",
    images: [{ url: `${SITE_URL}${founder.image}`, width: 1024, height: 1024, alt: "Abdinur Khalif, Founder and Technology Lead" }],
  },
  twitter: {
    card: "summary",
    title: "Abdinur Khalif | DataRay AI Technologies",
    description: "Founder and Technology Lead. AI and data science professional, software developer, and university lecturer.",
    images: [`${SITE_URL}${founder.image}`],
  },
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/about/founder`,
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/about/founder#person`,
    name: founder.name,
    jobTitle: founder.title,
    description: founder.biography[0],
    image: `${SITE_URL}${founder.image}`,
    url: `${SITE_URL}/about/founder`,
    worksFor: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "DataRay AI Technologies", url: SITE_URL },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Sunderland" },
    knowsAbout: ["Artificial Intelligence", "Data Science", "Software Engineering", "Machine Learning", "Natural Language Processing", "Healthcare Analytics", "Monitoring and Evaluation"],
  },
};

export default function FounderPage() {
  return (
    <main className="bg-white px-6 py-12 text-slate-900 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }} />
      <div className="mx-auto max-w-6xl">
        <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-cyan-800">
          <ArrowLeft size={16} aria-hidden="true" />
          About DataRay AI Technologies
        </Link>
        <header className="mt-8 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold text-cyan-800">Founder &amp; Technology Lead</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-950 sm:text-5xl">{founder.name}</h1>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium leading-6 text-slate-600">
            {founder.roles.map((role) => <li key={role}>{role}</li>)}
          </ul>
        </header>
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
          <aside className="min-w-0">
            <Image
              src={founder.image}
              alt="Professional portrait of Abdinur Khalif, founder of DataRay AI Technologies"
              width={1024}
              height={1024}
              priority
              sizes="(max-width: 1023px) calc(100vw - 48px), 438px"
              className="aspect-square h-auto w-full max-w-lg rounded-lg object-cover"
            />
            <div className="mt-8 border-t border-slate-200 pt-6">
              <h2 className="text-lg font-semibold text-slate-950">Education</h2>
              <ul className="mt-4 space-y-5 text-sm leading-6 text-slate-600">
                {founder.education.map((item) => (
                  <li key={item.qualification}>
                    <p className="font-medium text-slate-900">{item.qualification}</p>
                    {"institution" in item ? <p>{item.institution}</p> : null}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <article aria-label="Professional biography" className="min-w-0 space-y-6 text-base leading-8 text-slate-600">
            {founder.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="border-t border-slate-200 pt-6">
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-800 transition hover:text-slate-950">
                Connect with DataRay AI Technologies
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
