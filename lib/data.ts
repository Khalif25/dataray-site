export const siteConfig = {
  name: "DataRay Smart Solutions",
  tagline: "AI-driven analytics, dashboards, and strategic intelligence",
  description:
    "DataRay helps businesses, institutions, and public-sector teams turn complex data into dashboards, predictive insight, and decision-ready intelligence.",
  contact: {
    general: "info@dataraysmart.com",
    founder: "abdinur.khalif@dataraysmart.com",
  },
  location: "Garowe, Somalia",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  {
    label: "Academy",
    href: "/academy",
    children: [
      { href: "/academy", label: "Overview" },
      { href: "/academy/courses", label: "Courses" },
      { href: "/academy/programs", label: "Training Programs" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];


// =======================
// ACADEMY TRACKS (NEW CORE STRUCTURE)
// =======================

export const academyTracks = [
  {
    slug: "foundation",
    title: "Foundation Track",
    description:
      "Build essential data understanding and core analytical thinking for practical decision-making.",
    courses: ["data-literacy", "basic-analytics"],
    pathwayTitle: "Foundation Pathway",
    pathwayDescription:
      "For institutions building foundational data literacy and analytical awareness across teams.",
  },
  {
    slug: "professional",
    title: "Professional Track",
    description:
      "Develop applied capability in dashboards, reporting, SQL, and monitoring frameworks.",
    courses: ["sql", "dashboard-analytics", "me-analytics"],
    pathwayTitle: "Professional Pathway",
    pathwayDescription:
      "For institutions strengthening reporting systems, dashboards, and operational analytics.",
  },
  {
    slug: "advanced",
    title: "Advanced Track",
    description:
      "Support advanced capability in machine learning, AI, decision intelligence, and specialized analytics.",
    courses: ["ml", "ai-decision", "healthcare-analytics"],
    pathwayTitle: "Advanced Pathway",
    pathwayDescription:
      "For institutions adopting predictive analytics, AI systems, and sector-focused decision intelligence.",
  },
];


// =======================
// COURSES
// =======================

export const academyCourses = [
  {
    slug: "ml",
    title: "Machine Learning",
    track: "advanced", // ✅ NEW
    description:
      "A practical machine learning course covering foundations, model building, evaluation, and real-world applications.",
    duration: "6–8 weeks",
    level: "Beginner to Intermediate",
    format: "Self-paced / instructor-supported",
    status: "live",
    objectives: [
      "Understand core machine learning concepts and workflows",
      "Build regression and classification models",
      "Evaluate model performance properly",
      "Work with real datasets and applied case studies",
      "Develop project-based ML skills",
    ],
    modules: [
      "Introduction to Machine Learning",
      "Data Preparation and Preprocessing",
      "Supervised Learning: Regression",
      "Supervised Learning: Classification",
      "Model Evaluation and Validation",
      "Feature Engineering",
      "Introduction to Neural Networks",
      "Capstone Project",
    ],
  },
  {
    slug: "sql",
    title: "SQL & Data Management",
    track: "professional", // ✅ NEW
    description:
      "A practical SQL course for querying, transforming, and managing structured data for analytics and reporting.",
    duration: "4–6 weeks",
    level: "Beginner to Intermediate",
    format: "Self-paced / guided exercises",
    status: "coming-soon",
    objectives: [
      "Understand relational databases and SQL basics",
      "Write practical analytical queries",
      "Use joins, grouping, filtering, and aggregation",
      "Prepare data for dashboards and reporting",
      "Build confidence in working with structured datasets",
    ],
    modules: [
      "Database Fundamentals",
      "SELECT, WHERE, ORDER BY",
      "GROUP BY and Aggregation",
      "JOINs and Relationships",
      "SQL for Data Cleaning",
      "SQL for Analytics and Dashboards",
    ],
  },
  {
    slug: "healthcare-analytics",
    title: "Healthcare Analytics",
    track: "advanced", // ✅ NEW
    description:
      "A specialized learning path on healthcare data, disease trends, indicators, dashboards, and analytical decision support.",
    duration: "6–8 weeks",
    level: "Intermediate",
    format: "Applied analytics / case-study based",
    status: "coming-soon",
    objectives: [
      "Understand healthcare data structures and indicators",
      "Analyze trends, utilization, and performance metrics",
      "Build dashboards for health decision support",
      "Apply analytics concepts to healthcare use cases",
      "Interpret health data in an operational context",
    ],
    modules: [
      "Healthcare Data Foundations",
      "Indicators and Health Metrics",
      "Disease Trend Analysis",
      "Healthcare Dashboards",
      "Predictive and Risk-Oriented Analytics",
      "Applied Case Studies",
    ],
  },
];


// =======================
// TRAINING PROGRAMS
// =======================

export const academyPrograms = [
  {
    slug: "ml-training",
    title: "Machine Learning Training Program",
    track: "advanced", // ✅ NEW
    description:
      "A structured team training program for organizations building machine learning and predictive analytics capacity.",
    audience: "Organizations, NGOs, institutions, technical teams",
    duration: "4–8 weeks",
    format: "Live / cohort-based / customized",
    status: "available",
    highlights: [
      "Tailored learning outcomes for teams",
      "Applied exercises and guided labs",
      "Practical project work",
      "Optional customized datasets and use cases",
    ],
  },
  {
    slug: "healthcare-training",
    title: "Healthcare Analytics Training Program",
    track: "advanced", // ✅ NEW
    description:
      "A specialized program for hospitals, health programs, NGOs, and public-sector teams using data for operational and strategic decisions.",
    audience: "Hospitals, NGOs, healthcare institutions, public health teams",
    duration: "4–8 weeks",
    format: "Live / workshop-based / customized",
    status: "coming-soon",
    highlights: [
      "Healthcare metrics and dashboard design",
      "Disease and trend analysis",
      "Operational data interpretation",
      "Decision-intelligence focused delivery",
    ],
  },
  {
    slug: "custom-training",
    title: "Custom Institutional Training",
    track: "professional", // ✅ NEW
    description:
      "Custom-designed data, analytics, dashboard, and AI training aligned to your organization’s goals and technical maturity.",
    audience: "Businesses, NGOs, universities, government teams",
    duration: "Flexible",
    format: "Custom engagement",
    status: "available",
    highlights: [
      "Tailored curriculum",
      "Organization-specific examples",
      "Flexible delivery model",
      "Suitable for executive and technical teams",
    ],
  },
];


// =======================
// HELPERS (VERY USEFUL)
// =======================

export const getCoursesByTrack = (trackSlug: string) => {
  return academyCourses.filter((course) => course.track === trackSlug);
};

export const getProgramsByTrack = (trackSlug: string) => {
  return academyPrograms.filter((program) => program.track === trackSlug);
};