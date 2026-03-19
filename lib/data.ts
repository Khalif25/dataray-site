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

export const academyTracks = [
  {
    slug: "foundation",
    title: "Data Foundations",
    shortTitle: "Foundation",
    description:
      "Build essential data literacy, analytical thinking, and core technical confidence for modern data work.",
    courses: ["data-literacy", "python-data-analysis", "sql"],
    pathwayTitle: "Data Foundations Pathway",
    pathwayDescription:
      "For institutions building foundational data understanding and technical confidence across teams.",
  },
  {
    slug: "professional",
    title: "Applied Analytics & Visualization",
    shortTitle: "Professional",
    description:
      "Develop practical capability in dashboards, reporting, visualization, and monitoring for real-world decision support.",
    courses: ["powerbi-data-visualization", "dashboard-analytics", "me-analytics"],
    pathwayTitle: "Applied Analytics Pathway",
    pathwayDescription:
      "For institutions strengthening reporting systems, dashboard capability, and operational analytics.",
  },
  {
    slug: "advanced",
    title: "AI & Advanced Data Science",
    shortTitle: "Advanced",
    description:
      "Advance into machine learning, predictive analytics, sector-focused intelligence, and higher-value analytical systems.",
    courses: ["ml", "r-data-analysis", "healthcare-analytics", "ai-decision"],
    pathwayTitle: "AI & Advanced Data Science Pathway",
    pathwayDescription:
      "For institutions adopting predictive analytics, AI systems, and specialized decision intelligence.",
  },
];

export const academyCourses = [
  {
    slug: "data-literacy",
    title: "Data Literacy",
    track: "foundation",
    description:
      "An introductory course that builds core data understanding, analytical thinking, and confidence in working with information for decisions.",
    duration: "2–4 weeks",
    level: "Beginner",
    format: "Self-paced / guided",
    status: "coming-soon",
    objectives: [
      "Understand what data is and how it supports decision-making",
      "Interpret basic charts, tables, and indicators",
      "Build confidence in data-informed thinking",
      "Recognize common data quality issues",
    ],
    modules: [
      "What Data Means in Practice",
      "Basic Data Types and Structures",
      "Reading Tables and Charts",
      "Indicators, Trends, and Interpretation",
    ],
  },
  {
    slug: "python-data-analysis",
    title: "Python for Data Analysis",
    track: "foundation",
    description:
      "A practical introduction to using Python for cleaning, exploring, and analyzing data in real-world workflows.",
    duration: "5–7 weeks",
    level: "Beginner to Intermediate",
    format: "Self-paced / guided exercises",
    status: "coming-soon",
    objectives: [
      "Use Python for data loading and cleaning",
      "Work with tabular datasets effectively",
      "Perform basic exploratory data analysis",
      "Build confidence in practical analytical workflows",
    ],
    modules: [
      "Python Setup and Essentials",
      "Working with DataFrames",
      "Cleaning and Transforming Data",
      "Exploratory Data Analysis",
      "Summaries, Grouping, and Practical Workflows",
    ],
  },
  {
    slug: "sql",
    title: "SQL & Data Management",
    track: "foundation",
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
    slug: "powerbi-data-visualization",
    title: "Data Visualization with Power BI",
    track: "professional",
    description:
      "A practical course on designing clear, useful dashboards and visual reports in Power BI for real-world decision support.",
    duration: "4–6 weeks",
    level: "Intermediate",
    format: "Applied / project-based",
    status: "coming-soon",
    objectives: [
      "Design clear and effective visual reports",
      "Build dashboard pages in Power BI",
      "Connect visuals to decision-making needs",
      "Apply practical reporting and storytelling principles",
    ],
    modules: [
      "Power BI Foundations",
      "Data Modeling Basics",
      "Visual Design Principles",
      "Interactive Dashboards",
      "Reporting for Decision Support",
    ],
  },
  {
    slug: "dashboard-analytics",
    title: "Dashboard & Analytics",
    track: "professional",
    description:
      "A course focused on dashboard thinking, KPI design, analytics workflows, and operational reporting.",
    duration: "4–6 weeks",
    level: "Intermediate",
    format: "Practical / applied analytics",
    status: "coming-soon",
    objectives: [
      "Design dashboards around clear questions and metrics",
      "Build useful KPI frameworks",
      "Translate data into operational insights",
      "Improve reporting quality and usability",
    ],
    modules: [
      "Dashboard Thinking",
      "KPI and Metric Design",
      "Operational Analytics",
      "Reporting Workflows",
      "Interpreting and Communicating Insights",
    ],
  },
  {
    slug: "me-analytics",
    title: "M&E with Data",
    track: "professional",
    description:
      "A practical course on using data for monitoring, evaluation, and program performance improvement.",
    duration: "4–6 weeks",
    level: "Intermediate",
    format: "Applied / program-focused",
    status: "coming-soon",
    objectives: [
      "Understand data use in monitoring and evaluation",
      "Work with indicators and program metrics",
      "Support reporting and accountability workflows",
      "Interpret results for decision support",
    ],
    modules: [
      "Foundations of M&E with Data",
      "Indicators and Measurement",
      "Program Reporting and Dashboards",
      "Using Data for Learning and Improvement",
    ],
  },
  {
    slug: "ml",
    title: "Machine Learning",
    track: "advanced",
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
    slug: "r-data-analysis",
    title: "R for Data Analysis",
    track: "advanced",
    description:
      "A practical course on using R for statistical analysis, data exploration, and analytical workflows.",
    duration: "5–7 weeks",
    level: "Intermediate",
    format: "Applied / analytical",
    status: "coming-soon",
    objectives: [
      "Use R for structured data analysis",
      "Work with data transformation and summaries",
      "Build confidence in analytical scripting",
      "Apply R in practical data workflows",
    ],
    modules: [
      "R Foundations",
      "Working with Data in R",
      "Data Cleaning and Transformation",
      "Exploratory Analysis",
      "Applied Analytical Workflows",
    ],
  },
  {
    slug: "healthcare-analytics",
    title: "Healthcare Analytics",
    track: "advanced",
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
  {
    slug: "ai-decision",
    title: "AI for Decision-Making",
    track: "advanced",
    description:
      "A course focused on how AI and analytical systems can support strategic, operational, and sector-specific decisions.",
    duration: "4–6 weeks",
    level: "Intermediate to Advanced",
    format: "Conceptual / applied",
    status: "coming-soon",
    objectives: [
      "Understand how AI supports decision workflows",
      "Identify practical AI use cases in organizations",
      "Connect analytics outputs to real decisions",
      "Build confidence in AI-enabled decision support thinking",
    ],
    modules: [
      "AI in Decision Contexts",
      "From Data to Decision Intelligence",
      "Use Cases Across Sectors",
      "Risk, Interpretation, and Practical Adoption",
    ],
  },
];

export const academyPrograms = [
  {
    slug: "foundation-pathway",
    title: "Data Foundations Program",
    track: "foundation",
    description:
      "A structured training pathway for institutions building essential data understanding and analytical confidence across teams.",
    audience: "Beginners, junior staff, operational teams, institutions building baseline capability",
    duration: "4–8 weeks",
    format: "Live / cohort-based / customized",
    status: "available",
    highlights: [
      "Foundational data literacy and interpretation",
      "Practical exposure to Python and SQL basics",
      "Designed for broad organizational upskilling",
      "Suitable for early-stage data maturity contexts",
    ],
  },
  {
    slug: "applied-analytics-pathway",
    title: "Applied Analytics & Visualization Program",
    track: "professional",
    description:
      "A structured pathway for organizations strengthening dashboards, reporting, monitoring, and visualization capability.",
    audience: "Analysts, M&E teams, reporting teams, program staff, institutions",
    duration: "4–8 weeks",
    format: "Live / workshop-based / customized",
    status: "available",
    highlights: [
      "Dashboards, KPI design, and reporting workflows",
      "Power BI and visual decision support",
      "M&E-oriented analytical practice",
      "Strong fit for NGOs and operational teams",
    ],
  },
  {
    slug: "advanced-data-science-pathway",
    title: "AI & Advanced Data Science Program",
    track: "advanced",
    description:
      "A higher-level pathway for organizations adopting machine learning, advanced analytics, and sector-focused intelligence.",
    audience: "Technical teams, analysts, institutions, healthcare teams, innovation-focused organizations",
    duration: "6–10 weeks",
    format: "Live / cohort-based / customized",
    status: "available",
    highlights: [
      "Machine learning and predictive analytics",
      "Advanced analytical workflows with R and applied AI",
      "Healthcare and decision-intelligence specialization",
      "Suitable for ambitious teams building advanced capability",
    ],
  },
  {
    slug: "custom-training",
    title: "Custom Institutional Training",
    track: "professional",
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

export const getCoursesByTrack = (trackSlug: string) => {
  return academyCourses.filter((course) => course.track === trackSlug);
};

export const getProgramsByTrack = (trackSlug: string) => {
  return academyPrograms.filter((program) => program.track === trackSlug);
};