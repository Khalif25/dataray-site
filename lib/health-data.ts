export type MonthlyHospitalRecord = {
  month: string;
  patientVisits: number;
  admissions: number;
  avgLengthOfStay: number;
  bedOccupancy: number;
  emergencyCases: number;
};

export type DiseaseCategory = {
  name: string;
  cases: number;
};

export type DepartmentPerformance = {
  department: string;
  satisfaction: number;
  utilization: number;
};

export const monthlyHospitalData: MonthlyHospitalRecord[] = [
  {
    month: "Jan",
    patientVisits: 1240,
    admissions: 310,
    avgLengthOfStay: 4.2,
    bedOccupancy: 78,
    emergencyCases: 185,
  },
  {
    month: "Feb",
    patientVisits: 1185,
    admissions: 295,
    avgLengthOfStay: 4.0,
    bedOccupancy: 75,
    emergencyCases: 172,
  },
  {
    month: "Mar",
    patientVisits: 1310,
    admissions: 328,
    avgLengthOfStay: 4.4,
    bedOccupancy: 81,
    emergencyCases: 190,
  },
  {
    month: "Apr",
    patientVisits: 1388,
    admissions: 347,
    avgLengthOfStay: 4.6,
    bedOccupancy: 84,
    emergencyCases: 205,
  },
  {
    month: "May",
    patientVisits: 1452,
    admissions: 360,
    avgLengthOfStay: 4.5,
    bedOccupancy: 86,
    emergencyCases: 214,
  },
  {
    month: "Jun",
    patientVisits: 1498,
    admissions: 372,
    avgLengthOfStay: 4.7,
    bedOccupancy: 88,
    emergencyCases: 221,
  },
];

export const diseaseCategories: DiseaseCategory[] = [
  { name: "Respiratory Conditions", cases: 420 },
  { name: "Cardiovascular Disease", cases: 315 },
  { name: "Diabetes & Metabolic", cases: 278 },
  { name: "Infectious Disease", cases: 246 },
  { name: "Maternal & Child Health", cases: 198 },
];

export const departmentPerformance: DepartmentPerformance[] = [
  { department: "Emergency", satisfaction: 82, utilization: 91 },
  { department: "Internal Medicine", satisfaction: 86, utilization: 84 },
  { department: "Pediatrics", satisfaction: 89, utilization: 76 },
  { department: "Surgery", satisfaction: 80, utilization: 88 },
  { department: "Outpatient", satisfaction: 91, utilization: 79 },
];