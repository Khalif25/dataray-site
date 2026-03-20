import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Somalia AI & Data Literacy Initiative (SADLI)",
  description:
    "Building the foundation for Somalia’s digital future through AI and data literacy.",
  openGraph: {
    title: "Somalia AI & Data Literacy Initiative (SADLI)",
    description:
      "Building the foundation for Somalia’s digital future through AI and data literacy.",
    url: "https://www.dataraysmart.com/ai-initiative",
    siteName: "DataRay Smart Solutions",
    images: [
      {
        url: "https://www.dataraysmart.com/sadli-poster.png",
        width: 1200,
        height: 630,
        alt: "SADLI Poster",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Somalia AI & Data Literacy Initiative (SADLI)",
    description:
      "Building the foundation for Somalia’s digital future through AI and data literacy.",
    images: ["https://www.dataraysmart.com/sadli-poster.png"],
  },
};
export default function AIInitiativePage() {
  const focusAreas = [
    "Expanding access to AI and data education",
    "Developing practical, job-ready skills",
    "Enabling real-world application",
    "Strengthening national capacity in data-driven decision-making",
  ];

  const missionGoals = [
    "A future-ready workforce",
    "Stronger, data-driven institutions",
    "Smarter decision-making systems",
    "A new generation of innovators and problem-solvers",
    "Sustainable economic growth",
  ];

  const beneficiaries = [
    "University students",
    "High school graduates",
    "Unemployed youth",
    "Early-career professionals",
    "Individuals seeking digital and data-driven opportunities",
  ];

  const learningAreas = [
    "AI fundamentals and real-world applications",
    "Data literacy and analytical thinking",
    "Data analysis and visualization",
    "Introduction to machine learning concepts",
    "Problem-solving using real datasets",
  ];

  const outcomes = [
    "Access employment opportunities in data analysis, research, and digital operations",
    "Work remotely and participate in the global digital economy",
    "Engage in freelancing and digital services to generate their income sources",
    "Develop and launch small businesses or startups",
    "Apply AI and data solutions to real-world challenges",
  ];

  const whyItMatters = [
    "Access to structured learning",
    "Exposure to real-world tools",
    "Clear pathways to opportunity",
  ];

  const collaboration = [
    "Students and youth",
    "Professionals",
    "Institutions and universities",
    "NGOs and development partners",
    "Private sector organizations",
  ];

  return (
    <main className="bg-white text-neutral-900">
      <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              National Initiative
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Somalia AI &amp; Data Literacy Initiative (SADLI)
            </h1>

            <p className="mt-5 text-lg leading-8 text-neutral-600 sm:text-xl">
              Building the Foundation for Somalia’s Digital Future
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-700">
              A national initiative to strengthen foundational and applied AI and
              data skills across Somalia and prepare young people for the future
              economy.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#register-interest"
                className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Register Interest
              </a>
              <a
                href="/academy"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-50"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <SectionLabel>1. A National Moment of Transformation</SectionLabel>
            <SectionTitle>
              A new literacy challenge for a new era
            </SectionTitle>

            <div className="mt-6 space-y-5 text-base leading-8 text-neutral-700">
              <p>
                In 1974, Somalia launched a historic national literacy campaign,
                empowering its people with the ability to read and write and
                unlocking new pathways for national development.
              </p>
              <p>Today, the world stands at a similar turning point.</p>
              <p>
                Artificial intelligence and data are reshaping economies,
                industries, and the future of work. In this new era, literacy
                has evolved.
              </p>
              <blockquote className="border-l-4 border-blue-700 pl-5 text-lg font-medium text-neutral-900">
                Illiteracy is no longer only the inability to read and write; it
                is the inability to understand, use, and adapt to data and
                AI-driven technologies.
              </blockquote>
              <p>
                For Somalia, this presents both a challenge and an opportunity.
                To remain competitive and participate meaningfully in the global
                economy, AI and data literacy are no longer optional; they are
                essential national capabilities.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Mission Target
            </p>
            <p className="mt-4 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              100,000
            </p>
            <p className="mt-2 text-lg font-semibold text-neutral-900">
              Somali youth by 2031
            </p>
            <p className="mt-5 text-sm leading-7 text-neutral-600">
              The initiative is designed to expand access to AI and data skills,
              strengthen opportunity pathways, and support long-term national
              capacity in a rapidly changing digital economy.
            </p>

            <div className="mt-8 rounded-xl bg-white p-5 ring-1 ring-neutral-200">
              <p className="text-sm font-semibold text-neutral-900">
                Current Status
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                The initiative is currently in its early development phase.
                Efforts are underway to refine the program structure, build
                partnerships, and prepare for initial pilot cohorts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <SectionLabel>2. About the Initiative</SectionLabel>
        <SectionTitle>
          An independent national effort to expand AI and data capability
        </SectionTitle>
        <p className="mt-6 max-w-4xl text-base leading-8 text-neutral-700">
          The Somalia AI &amp; Data Literacy Initiative (SADLI) is an
          independent national effort aimed at building foundational and applied
          AI and data skills across the country.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {focusAreas.map((item) => (
            <FeatureCard key={item}>{item}</FeatureCard>
          ))}
        </div>
      </SectionWrapper>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <SectionLabel>3. Mission</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <SectionTitle>
                To train 100,000 Somali youth in AI and data literacy by 2031
              </SectionTitle>
            </div>

            <div>
              <p className="text-base leading-8 text-neutral-700">
                This initiative is designed to go beyond training. It aims to
                build the foundation for:
              </p>

              <ul className="mt-6 grid gap-3">
                {missionGoals.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>4. Target Beneficiaries</SectionLabel>
            <SectionTitle>Who this initiative is designed for</SectionTitle>
            <ul className="mt-6 grid gap-3">
              {beneficiaries.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </ul>
          </div>

          <div>
            <SectionLabel>5. Learning Areas</SectionLabel>
            <SectionTitle>Practical and in-demand skills</SectionTitle>
            <ul className="mt-6 grid gap-3">
              {learningAreas.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <SectionLabel>6. Outcomes and Opportunities</SectionLabel>
          <SectionTitle>Real pathways beyond knowledge alone</SectionTitle>
          <p className="mt-6 max-w-4xl text-base leading-8 text-neutral-700">
            This initiative is intended to create real pathways, not just
            knowledge. Participants will be equipped to:
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {outcomes.map((item) => (
              <FeatureCard key={item}>{item}</FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper>
        <SectionLabel>7. Program Structure</SectionLabel>
        <SectionTitle>
          A structured and progressive learning model
        </SectionTitle>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <ProgramCard
            title="Foundation Level"
            subtitle="AI and Data Literacy"
            items={[
              "Introduction to AI",
              "Data awareness",
              "Digital fundamentals",
            ]}
          />
          <ProgramCard
            title="Applied Level"
            subtitle="Analytics and Tools"
            items={[
              "Excel and data handling",
              "Power BI and data visualization",
              "Python fundamentals for data analysis",
            ]}
          />
          <ProgramCard
            title="Professional Level"
            subtitle="Applied Project Lab"
            items={[
              "Real-world datasets",
              "Sector-based projects (health, NGOs, business)",
              "Practical problem-solving and system thinking",
            ]}
          />
        </div>
      </SectionWrapper>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel>8. Why This Matters</SectionLabel>
              <SectionTitle>
                Unlocking Somalia’s talent through structure and opportunity
              </SectionTitle>
              <div className="mt-6 space-y-5 text-base leading-8 text-neutral-700">
                <p>
                  Somalia has a young, ambitious population with immense
                  potential.
                </p>
                <p>What is missing is not talent, but:</p>
              </div>
              <ul className="mt-6 grid gap-3">
                {whyItMatters.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </ul>
              <p className="mt-6 text-base leading-8 text-neutral-700">
                This initiative aims to help close that gap and enable
                meaningful participation in a rapidly evolving global economy.
              </p>
            </div>

            <div>
              <SectionLabel>9. Participation and Collaboration</SectionLabel>
              <SectionTitle>A national effort that depends on broad support</SectionTitle>
              <p className="mt-6 text-base leading-8 text-neutral-700">
                This is a national initiative that depends on collaboration and
                broad participation. We invite:
              </p>
              <ul className="mt-6 grid gap-3">
                {collaboration.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="register-interest" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-black px-6 py-10 text-white sm:px-10 sm:py-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                Registration
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Register your interest to be part of the first cohort
              </h2>
              <p className="mt-5 text-base leading-8 text-neutral-300">
                Individuals interested in participating are encouraged to
                register their interest for early access to program updates,
                enrollment opportunities, and pilot participation.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/academy/register"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-100"
              >
                Register Interest
              </a>
              <a
                href="/academy"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <SectionLabel>10. Implementation</SectionLabel>
        <SectionTitle>Institutional support and delivery model</SectionTitle>
        <p className="mt-6 max-w-4xl text-base leading-8 text-neutral-700">
          Training programs will be delivered through DataRay Academy, with
          technical support from DataRay Smart Solutions.
        </p>

        <div className="mt-10 grid gap-6 rounded-2xl border border-neutral-200 p-6 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Email
            </p>
            <p className="mt-2 text-base font-medium text-neutral-900">
              info@dataraysmart.com
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Website
            </p>
            <p className="mt-2 text-base font-medium text-neutral-900">
              www.dataraysmart.com
            </p>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">{children}</div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
      {children}
    </h2>
  );
}

function FeatureCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <p className="text-base leading-7 text-neutral-700">{children}</p>
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-sm">
      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-700" />
      <span className="text-base leading-7 text-neutral-700">{children}</span>
    </li>
  );
}

function ProgramCard({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
        {title}
      </p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-black">
        {subtitle}
      </h3>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-neutral-900" />
            <span className="text-sm leading-7 text-neutral-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}