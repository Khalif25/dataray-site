import Link from "next/link";
import {
  monthlyHospitalData,
  diseaseCategories,
  departmentPerformance,
} from "@/lib/health-data";


function formatNumber(value: number) {
  return new Intl.NumberFormat().format(value);
}

export default function HealthcareDashboardPage() {
  const totalVisits = monthlyHospitalData.reduce(
    (sum, item) => sum + item.patientVisits,
    0
  );

  const totalAdmissions = monthlyHospitalData.reduce(
    (sum, item) => sum + item.admissions,
    0
  );

  const avgLengthOfStay =
    monthlyHospitalData.reduce((sum, item) => sum + item.avgLengthOfStay, 0) /
    monthlyHospitalData.length;

  const avgBedOccupancy =
    monthlyHospitalData.reduce((sum, item) => sum + item.bedOccupancy, 0) /
    monthlyHospitalData.length;

  const maxVisits = Math.max(...monthlyHospitalData.map((d) => d.patientVisits));
  const maxDiseaseCases = Math.max(...diseaseCategories.map((d) => d.cases));

  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Project Demonstration
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Healthcare Performance & Disease Trends Dashboard
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            This DataRay project demonstrates how healthcare institutions can use
            dashboard systems to monitor operational performance, disease burden,
            and service utilization in a clear and decision-ready format.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Request Similar Dashboard
            </Link>

            <Link
              href="/projects"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Total Patient Visits</p>
              <p className="mt-3 text-4xl font-semibold text-slate-950">
                {formatNumber(totalVisits)}
              </p>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Total Admissions</p>
              <p className="mt-3 text-4xl font-semibold text-slate-950">
                {formatNumber(totalAdmissions)}
              </p>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Avg. Length of Stay</p>
              <p className="mt-3 text-4xl font-semibold text-slate-950">
                {avgLengthOfStay.toFixed(1)} days
              </p>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Avg. Bed Occupancy</p>
              <p className="mt-3 text-4xl font-semibold text-slate-950">
                {avgBedOccupancy.toFixed(0)}%
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Monthly Trend
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-slate-950">
                    Patient Visits by Month
                  </h2>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                {monthlyHospitalData.map((item) => (
                  <div key={item.month}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700">
                        {item.month}
                      </span>
                      <span className="text-slate-500">
                        {formatNumber(item.patientVisits)} visits
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-100">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        style={{
                          width: `${(item.patientVisits / maxVisits) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Disease Burden
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-slate-950">
                Top Disease Categories
              </h2>

              <div className="mt-8 space-y-5">
                {diseaseCategories.map((item) => (
                  <div key={item.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700">
                        {item.name}
                      </span>
                      <span className="text-slate-500">
                        {formatNumber(item.cases)} cases
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-100">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                        style={{
                          width: `${(item.cases / maxDiseaseCases) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Department Comparison
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-950">
              Service Utilization & Satisfaction
            </h2>

            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-y-3">
                <thead>
                  <tr className="text-left text-sm text-slate-500">
                    <th className="pb-2">Department</th>
                    <th className="pb-2">Satisfaction</th>
                    <th className="pb-2">Utilization</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentPerformance.map((item) => (
                    <tr key={item.department} className="rounded-2xl bg-slate-50">
                      <td className="rounded-l-2xl px-4 py-4 font-medium text-slate-900">
                        {item.department}
                      </td>
                      <td className="px-4 py-4 text-slate-600">
                        {item.satisfaction}%
                      </td>
                      <td className="rounded-r-2xl px-4 py-4 text-slate-600">
                        {item.utilization}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">
                Project Value
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                This dashboard helps healthcare leaders understand trends in
                admissions, service demand, disease burden, and utilization
                performance. It demonstrates how DataRay can convert healthcare
                data into practical intelligence for monitoring and planning.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">
                Suitable Use Cases
              </h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>• Hospital operations monitoring</li>
                <li>• Public health intelligence dashboards</li>
                <li>• Disease trend reporting systems</li>
                <li>• Executive performance reporting in healthcare institutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}