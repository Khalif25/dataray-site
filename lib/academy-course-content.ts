import { academyCourses } from "@/lib/data";

export type CourseResource = {
  label: string;
  url: string;
};

export type CourseLesson = {
  slug: string;
  title: string;
  summary: string;
  duration?: string;
  videoUrl?: string;
  content: string[];
  resources?: CourseResource[];
};

export type CourseModule = {
  slug: string;
  title: string;
  lessons: CourseLesson[];
};

export type CourseContent = {
  courseSlug: string;
  title: string;
  description?: string;
  modules: CourseModule[];
};

type AcademyCourseLike = {
  slug: string;
  title: string;
  description?: string;
  duration?: string;
  level?: string;
};

const detailedCourseContent: Record<string, CourseContent> = {
  ml: {
    courseSlug: "ml",
    title: "Machine Learning",
    description:
      "A structured introduction to supervised learning, model thinking, and practical predictive workflows.",
    modules: [
      {
        slug: "foundations",
        title: "Foundations",
        lessons: [
          {
            slug: "what-is-machine-learning",
            title: "What Machine Learning Really Means",
            duration: "12 min",
            summary:
              "Understand what machine learning is, what it is not, and where it fits in analytics and decision systems.",
            content: [
              "Machine learning is about learning patterns from data in order to make predictions, classifications, or decisions.",
              "Not every analytics problem needs machine learning. In practice, ML works best when there is a repeatable pattern, enough data, and a clear outcome to predict.",
              "In this course, you will learn both conceptual foundations and how to connect ML to real-world use cases.",
            ],
            resources: [],
          },
          {
            slug: "supervised-learning-overview",
            title: "Supervised Learning Overview",
            duration: "14 min",
            summary:
              "Learn the difference between regression and classification and how labeled data drives supervised learning.",
            content: [
              "Supervised learning uses examples with known answers to train a model.",
              "Regression predicts numeric values, while classification predicts categories.",
              "Choosing the right framing is essential before selecting algorithms or tools.",
            ],
          },
        ],
      },
      {
        slug: "regression-and-classification",
        title: "Regression and Classification",
        lessons: [
          {
            slug: "linear-regression-intuition",
            title: "Linear Regression Intuition",
            duration: "16 min",
            summary:
              "Build intuition for line fitting, error, and model learning.",
            content: [
              "Linear regression estimates a relationship between input variables and a numeric output.",
              "The model learns by minimizing prediction error through a loss function.",
              "This lesson links the statistical meaning of regression with the machine learning workflow.",
            ],
          },
          {
            slug: "logistic-regression-and-decision-boundaries",
            title: "Logistic Regression and Decision Boundaries",
            duration: "18 min",
            summary:
              "Understand how logistic regression handles classification and how decision boundaries are formed.",
            content: [
              "Logistic regression outputs class probabilities rather than direct numeric targets.",
              "Decision boundaries separate classes in feature space.",
              "This model is simple, interpretable, and foundational for many classification tasks.",
            ],
          },
        ],
      },
    ],
  },
  "ai-decision": {
    courseSlug: "ai-decision",
    title: "AI for Decision-Making",
    description:
      "Use AI, analytics, and structured reasoning to support organizations and leadership decisions.",
    modules: [
      {
        slug: "decision-foundations",
        title: "Decision Foundations",
        lessons: [
          {
            slug: "from-data-to-decisions",
            title: "From Data to Decisions",
            duration: "10 min",
            summary:
              "Learn how organizations move from raw data to insight and then to decision intelligence.",
            content: [
              "Many organizations collect data but do not turn it into structured decisions.",
              "Decision-making improves when analysis, interpretation, and action are connected.",
              "This lesson introduces the DataRay-style logic of moving from tools to intelligence systems.",
            ],
          },
          {
            slug: "ai-support-in-organizations",
            title: "How AI Supports Organizational Decisions",
            duration: "13 min",
            summary:
              "Explore realistic ways AI can support planning, forecasting, prioritization, and monitoring.",
            content: [
              "AI can support decisions through prediction, pattern detection, and scenario analysis.",
              "The goal is not to replace leadership judgment, but to strengthen it.",
              "In applied contexts, AI works best when paired with domain understanding and strong data practices.",
            ],
          },
        ],
      },
    ],
  },
};

function toTitleCaseFromSlug(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function buildFallbackCourseContent(course: AcademyCourseLike): CourseContent {
  const courseTitle = course.title || toTitleCaseFromSlug(course.slug);

  return {
    courseSlug: course.slug,
    title: courseTitle,
    description: course.description,
    modules: [
      {
        slug: "getting-started",
        title: "Getting Started",
        lessons: [
          {
            slug: "course-orientation",
            title: "Course Orientation",
            duration: "8 min",
            summary:
              "A guided introduction to the course goals, learning flow, and expected outcomes.",
            content: [
              `Welcome to ${courseTitle}. This lesson introduces the structure of the course and how to move through the learning area.`,
              "Use the sidebar to navigate lessons, track progress, and return to any section at any time.",
              "As you expand the course later, you can attach your recorded videos, downloadable resources, and practice tasks to each lesson.",
            ],
          },
          {
            slug: "key-concepts-and-context",
            title: "Key Concepts and Context",
            duration: "12 min",
            summary:
              "Build the core conceptual understanding needed before moving into applied content.",
            content: [
              `${courseTitle} becomes much more useful when key concepts are understood in context rather than memorized in isolation.`,
              "This lesson should explain what the subject is, why it matters, and where it is applied in real organizations.",
              "As you refine this course, replace this starter content with your full recorded lesson and examples.",
            ],
          },
        ],
      },
      {
        slug: "applied-learning",
        title: "Applied Learning",
        lessons: [
          {
            slug: "applied-walkthrough",
            title: "Applied Walkthrough",
            duration: "15 min",
            summary:
              "A practical walkthrough showing how the course ideas work in an applied scenario.",
            content: [
              "Use this lesson for demonstrations, practical examples, or a walkthrough of a real workflow.",
              "For technical courses, this can be a coding demo. For strategic courses, it can be a case study or decision scenario.",
              "This is also a strong place to attach datasets, notebooks, slides, or templates.",
            ],
          },
          {
            slug: "next-steps-and-practice",
            title: "Next Steps and Practice",
            duration: "9 min",
            summary:
              "Close the course section with reflection, reinforcement, and clear next actions.",
            content: [
              "Summarize the most important takeaways from the course section.",
              "Point learners to the next lesson, exercise, or supporting material.",
              "As your Academy grows, you can turn this into an assignment, quiz, or project checkpoint.",
            ],
          },
        ],
      },
    ],
  };
}

export function getCourseContentBySlug(courseSlug: string): CourseContent | null {
  if (detailedCourseContent[courseSlug]) {
    return detailedCourseContent[courseSlug];
  }

  const matchedCourse = (academyCourses as AcademyCourseLike[]).find(
    (course) => course.slug === courseSlug,
  );

  if (!matchedCourse) return null;

  return buildFallbackCourseContent(matchedCourse);
}

export function getFlattenedLessons(course: CourseContent) {
  return course.modules.flatMap((module) =>
    module.lessons.map((lesson) => ({
      ...lesson,
      moduleSlug: module.slug,
      moduleTitle: module.title,
    })),
  );
}