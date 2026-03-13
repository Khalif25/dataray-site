import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">

        <p className="eyebrow">Demonstrations</p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Real-World DataRay Demonstrations
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-slate-600">
          These demonstrations illustrate how DataRay applies analytics,
          artificial intelligence, and data systems to generate actionable
          intelligence for organizations.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">
              Healthcare Analytics Dashboard
            </h3>

            <p className="mt-3 text-slate-600">
              An interactive dashboard that analyzes hospital performance,
              disease trends, and healthcare outcomes. Designed to help
              decision-makers monitor key health indicators and identify
              patterns in patient data.
            </p>

            <Link
              href="/projects/healthcare-dashboard"
              className="mt-5 inline-flex text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Explore Project →
            </Link>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">
              AI Disease Risk Prediction System
            </h3>

            <p className="mt-3 text-slate-600">
              A machine learning model that estimates chronic disease risk
              using lifestyle and health indicators. The system demonstrates
              how predictive analytics can support early intervention and
              health planning.
            </p>

            <Link
              href="/projects/ai-disease-prediction"
              className="mt-5 inline-flex text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              View AI Model →
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}