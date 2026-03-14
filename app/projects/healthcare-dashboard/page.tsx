"use client";
// change into local names: like qaran one, qaran branch 2

import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import { healthRecords } from "@/lib/health-data";

const facilities = [
  "All Facilities",
  "Central Hospital",
  "North Clinic",
  "South Medical Center",
] as const;

const departments = [
  "All Departments",
  "General",
  "Pediatrics",
  "Maternity",
  "Respiratory",
] as const;

const periods = ["Monthly", "Quarterly", "Yearly"] as const;
const diseases = ["Respiratory", "Malaria", "Maternal"] as const;

function groupMonths(month: string) {
  if (["Jan", "Feb", "Mar"].includes(month)) return "Q1";
  if (["Apr", "May", "Jun"].includes(month)) return "Q2";
  return month;
}

function sum<T>(rows: T[], getter: (row: T) => number) {
  return rows.reduce((acc, row) => acc + getter(row), 0);
}

export default function HealthcareDashboardPage() {
  const [facility, setFacility] =
    useState<(typeof facilities)[number]>("All Facilities");
  const [department, setDepartment] =
    useState<(typeof departments)[number]>("All Departments");
  const [period, setPeriod] =
    useState<(typeof periods)[number]>("Monthly");
  const [focusDisease, setFocusDisease] =
    useState<(typeof diseases)[number]>("Respiratory");
  const [compareMode, setCompareMode] = useState(false);
  const [compareFacility, setCompareFacility] =
    useState<(typeof facilities)[number]>("North Clinic");

  const filtered = useMemo(() => {
    return healthRecords.filter((row) => {
      const facilityOk =
        facility === "All Facilities" || row.facility === facility;
      const departmentOk =
        department === "All Departments" || row.department === department;
      return facilityOk && departmentOk;
    });
  }, [facility, department]);

  const trendData = useMemo(() => {
    const grouped = new Map<
      string,
      {
        label: string;
        admissions: number;
        outpatient: number;
        bedOccupancyTotal: number;
        waitTimeTotal: number;
        respiratory: number;
        malaria: number;
        maternal: number;
        count: number;
      }
    >();

    filtered.forEach((row) => {
      const key =
        period === "Quarterly"
          ? groupMonths(row.month)
          : period === "Yearly"
          ? "Year"
          : row.month;

      const current = grouped.get(key) ?? {
        label: key,
        admissions: 0,
        outpatient: 0,
        bedOccupancyTotal: 0,
        waitTimeTotal: 0,
        respiratory: 0,
        malaria: 0,
        maternal: 0,
        count: 0,
      };

      current.admissions += row.admissions;
      current.outpatient += row.outpatient;
      current.bedOccupancyTotal += row.bedOccupancy;
      current.waitTimeTotal += row.waitTime;
      current.respiratory += row.respiratory;
      current.malaria += row.malaria;
      current.maternal += row.maternal;
      current.count += 1;

      grouped.set(key, current);
    });

    return Array.from(grouped.values()).map((item) => ({
      month: item.label,
      admissions: item.admissions,
      outpatient: item.outpatient,
      bedOccupancy: Number((item.bedOccupancyTotal / item.count).toFixed(1)),
      waitTime: Number((item.waitTimeTotal / item.count).toFixed(1)),
      respiratory: item.respiratory,
      malaria: item.malaria,
      maternal: item.maternal,
    }));
  }, [filtered, period]);

  const diseaseSeriesKey = useMemo(() => {
    if (focusDisease === "Malaria") return "malaria";
    if (focusDisease === "Maternal") return "maternal";
    return "respiratory";
  }, [focusDisease]);

  const latest = trendData[trendData.length - 1];
  const previous = trendData[trendData.length - 2] ?? latest;

  const kpis = useMemo(() => {
    const totalOutpatient = latest?.outpatient ?? 0;
    const totalAdmissions = latest?.admissions ?? 0;
    const bedOccupancy = latest?.bedOccupancy ?? 0;
    const waitTime = latest?.waitTime ?? 0;

    const outpatientDelta =
      previous.outpatient === 0
        ? 0
        : ((latest.outpatient - previous.outpatient) / previous.outpatient) * 100;

    const admissionsDelta =
      previous.admissions === 0
        ? 0
        : ((latest.admissions - previous.admissions) / previous.admissions) * 100;

    return {
      totalOutpatient,
      totalAdmissions,
      bedOccupancy,
      waitTime,
      outpatientDelta,
      admissionsDelta,
    };
  }, [latest, previous]);

  const diseaseSummary = useMemo(() => {
    return [
      { name: "Respiratory", value: sum(filtered, (r) => r.respiratory) },
      { name: "Malaria", value: sum(filtered, (r) => r.malaria) },
      { name: "Maternal", value: sum(filtered, (r) => r.maternal) },
    ];
  }, [filtered]);

  const utilizationData = useMemo(() => {
    const map = new Map<string, number>();

    filtered.forEach((row) => {
      map.set(row.department, (map.get(row.department) ?? 0) + row.outpatient);
    });

    return Array.from(map.entries()).map(([departmentName, visits]) => ({
      department: departmentName,
      visits,
    }));
  }, [filtered]);

  const facilityComparison = useMemo(() => {
    const facilityNames =
      facility === "All Facilities"
        ? ["Central Hospital", "North Clinic", "South Medical Center"]
        : compareMode
        ? [facility, compareFacility].filter((v, i, arr) => arr.indexOf(v) === i)
        : [facility];

    return facilityNames.map((facilityName) => {
      const rows = healthRecords.filter(
        (r) =>
          r.facility === facilityName &&
          (department === "All Departments" || r.department === department)
      );

      const totalAdmissions = sum(rows, (r) => r.admissions);
      const avgOccupancy =
        rows.length === 0
          ? 0
          : sum(rows, (r) => r.bedOccupancy) / rows.length;

      const avgSatisfaction =
        rows.length === 0
          ? 0
          : sum(rows, (r) => r.satisfaction) / rows.length;

      return {
        facility: facilityName,
        admissions: totalAdmissions,
        occupancy: Number(avgOccupancy.toFixed(1)),
        satisfaction: Number(avgSatisfaction.toFixed(1)),
      };
    });
  }, [facility, compareFacility, compareMode, department]);

  const alerts = useMemo(() => {
    const items: string[] = [];

    if ((latest?.bedOccupancy ?? 0) >= 85) {
      items.push("Bed occupancy is high and may require capacity planning.");
    }
    if ((latest?.waitTime ?? 0) >= 45) {
      items.push("Average waiting time is elevated and may indicate service pressure.");
    }
    if ((latest?.respiratory ?? 0) > (previous?.respiratory ?? 0)) {
      items.push("Respiratory disease burden is increasing relative to the previous period.");
    }

    return items;
  }, [latest, previous]);

  return (
    <main className="min-h-screen bg-[#020817] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Project Demonstration
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Healthcare Performance & Disease Trends Dashboard
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            This DataRay project demonstrates how healthcare institutions can use
            interactive dashboard systems to monitor operational performance,
            disease burden, and service utilization in a clear and
            decision-ready format.
          </p>
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          <select
            value={facility}
            onChange={(e) => setFacility(e.target.value as typeof facility)}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
          >
            {facilities.map((item) => (
              <option key={item} value={item} className="text-black">
                {item}
              </option>
            ))}
          </select>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value as typeof department)}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
          >
            {departments.map((item) => (
              <option key={item} value={item} className="text-black">
                {item}
              </option>
            ))}
          </select>

          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value as typeof period)}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
          >
            {periods.map((item) => (
              <option key={item} value={item} className="text-black">
                {item}
              </option>
            ))}
          </select>

          <select
            value={focusDisease}
            onChange={(e) => setFocusDisease(e.target.value as typeof focusDisease)}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
          >
            {diseases.map((item) => (
              <option key={item} value={item} className="text-black">
                {item}
              </option>
            ))}
          </select>

          <button
            onClick={() => setCompareMode((prev) => !prev)}
            className="rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950"
          >
            {compareMode ? "Disable Compare" : "Enable Compare"}
          </button>
        </div>

        {compareMode && (
          <div className="mb-6 max-w-sm">
            <select
              value={compareFacility}
              onChange={(e) =>
                setCompareFacility(e.target.value as typeof compareFacility)
              }
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
            >
              {facilities
                .filter((f) => f !== "All Facilities")
                .map((item) => (
                  <option key={item} value={item} className="text-black">
                    {item}
                  </option>
                ))}
            </select>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-300">Outpatient Visits</p>
            <h3 className="mt-2 text-3xl font-bold">
              {kpis.totalOutpatient.toLocaleString()}
            </h3>
            <p className="mt-2 text-sm text-cyan-300">
              {kpis.outpatientDelta.toFixed(1)}% vs previous period
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-300">Hospital Admissions</p>
            <h3 className="mt-2 text-3xl font-bold">
              {kpis.totalAdmissions.toLocaleString()}
            </h3>
            <p className="mt-2 text-sm text-cyan-300">
              {kpis.admissionsDelta.toFixed(1)}% vs previous period
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-300">Bed Occupancy</p>
            <h3 className="mt-2 text-3xl font-bold">{kpis.bedOccupancy}%</h3>
            <p className="mt-2 text-sm text-cyan-300">
              Operational capacity signal
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-300">Average Waiting Time</p>
            <h3 className="mt-2 text-3xl font-bold">{kpis.waitTime} min</h3>
            <p className="mt-2 text-sm text-cyan-300">
              Service flow pressure
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Admissions & Outpatient Trends</h2>
            <p className="mt-1 text-sm text-slate-300">
              Filter-responsive trends for healthcare utilization.
            </p>

            <div className="mt-6 h-[340px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      background: "#081225",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 16,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="outpatient"
                    stroke="#38bdf8"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="admissions"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Operational Alerts</h2>
            <div className="mt-4 space-y-3">
              {alerts.length === 0 ? (
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                  No critical alerts in the selected view.
                </div>
              ) : (
                alerts.map((alert) => (
                  <div
                    key={alert}
                    className="rounded-xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm text-slate-200"
                  >
                    {alert}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Department Utilization</h2>
            <div className="mt-6 h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={utilizationData} layout="vertical" margin={{ left: 10 }}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" horizontal={false} />
                  <XAxis type="number" stroke="#94a3b8" />
                  <YAxis
                    dataKey="department"
                    type="category"
                    stroke="#94a3b8"
                    width={90}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#081225",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 16,
                    }}
                  />
                  <Bar dataKey="visits" radius={[0, 12, 12, 0]} fill="#38bdf8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Disease Burden</h2>
            <div className="mt-4 space-y-3">
              {diseaseSummary.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setFocusDisease(item.name as typeof focusDisease)}
                  className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left ${
                    focusDisease === item.name
                      ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                      : "border-white/10 bg-white/5 text-slate-200"
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="font-semibold">{item.value}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">{focusDisease} Trend</h2>
            <div className="mt-6 h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      background: "#081225",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 16,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey={diseaseSeriesKey}
                    stroke="#38bdf8"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Facility Comparison</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-left text-slate-400">
                <tr>
                  <th className="pb-3">Facility</th>
                  <th className="pb-3">Admissions</th>
                  <th className="pb-3">Avg. Occupancy</th>
                  <th className="pb-3">Satisfaction</th>
                </tr>
              </thead>
              <tbody>
                {facilityComparison.map((item) => (
                  <tr key={item.facility} className="border-t border-white/10">
                    <td className="py-4 font-medium text-white">{item.facility}</td>
                    <td className="py-4 text-slate-300">{item.admissions}</td>
                    <td className="py-4 text-slate-300">{item.occupancy}%</td>
                    <td className="py-4 text-slate-300">{item.satisfaction}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}