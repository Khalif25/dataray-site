export default function ResearchSurvey() {
  return (
    <main className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Demand for Market Intelligence and Strategic Research
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          DataRay Smart Solutions is conducting a research survey on how
          organizations use research, analytics, and strategic intelligence
          in decision-making.
        </p>

        <p className="mt-4 text-slate-600">
          The survey takes about 5 minutes and responses are anonymous.
        </p>

        <div className="mt-12">
          <iframe
            src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
            width="100%"
            height="1800"
          >
            Loading…
          </iframe>
        </div>

      </div>
    </main>
  );
}