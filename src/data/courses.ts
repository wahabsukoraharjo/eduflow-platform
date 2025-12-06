import courseWebDev from "@/assets/course-web-dev.jpg";
import courseDataScience from "@/assets/course-data-science.jpg";
import courseUIDesign from "@/assets/course-ui-design.jpg";
import courseMarketing from "@/assets/course-marketing.jpg";

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  schedule: string;
  duration: string;
  instructor: string;
  syllabus: string[];
}

export const courses: Course[] = [
  {
    id: "web-development",
    title: "Web Development Fundamentals",
    description: "Pelajari dasar-dasar pengembangan web modern dengan HTML, CSS, JavaScript, dan React. Kursus ini mencakup praktik terbaik dalam membangun aplikasi web responsif dan interaktif.",
    image: courseWebDev,
    schedule: "10 Januari 2025 - 10 Maret 2025",
    duration: "8 Minggu",
    instructor: "Ahmad Rizki",
    syllabus: [
      "Pengenalan HTML5 dan Semantic Markup",
      "CSS3 dan Responsive Design",
      "JavaScript Fundamentals",
      "DOM Manipulation dan Events",
      "React.js Basics",
      "State Management dengan Hooks",
      "API Integration dan Fetch",
      "Project Akhir: Build Full Web App"
    ]
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    description: "Kuasai teknik analisis data dan machine learning. Dari Python basics hingga visualisasi data yang powerful, kursus ini mempersiapkan Anda menjadi data scientist profesional.",
    image: courseDataScience,
    schedule: "15 Januari 2025 - 15 April 2025",
    duration: "12 Minggu",
    instructor: "Sarah Putri",
    syllabus: [
      "Python untuk Data Science",
      "Pandas dan Data Manipulation",
      "Visualisasi Data dengan Matplotlib & Seaborn",
      "Statistik Dasar dan Inferensi",
      "Machine Learning Fundamentals",
      "Supervised Learning Algorithms",
      "Unsupervised Learning",
      "Project: End-to-End ML Pipeline"
    ]
  },
  {
    id: "ui-design",
    title: "UI/UX Design Masterclass",
    description: "Desain antarmuka yang indah dan user-friendly. Pelajari prinsip UX research, wireframing, prototyping, dan design system menggunakan tools industri seperti Figma.",
    image: courseUIDesign,
    schedule: "20 Januari 2025 - 20 Maret 2025",
    duration: "8 Minggu",
    instructor: "Dewi Anggraini",
    syllabus: [
      "Prinsip Dasar UI/UX Design",
      "User Research dan Personas",
      "Information Architecture",
      "Wireframing dan Prototyping",
      "Figma Fundamentals",
      "Design System dan Component Library",
      "Usability Testing",
      "Portfolio Project"
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Strategy",
    description: "Strategi pemasaran digital yang efektif untuk era modern. Pelajari SEO, social media marketing, content strategy, dan analytics untuk mengembangkan bisnis Anda.",
    image: courseMarketing,
    schedule: "25 Januari 2025 - 25 Maret 2025",
    duration: "8 Minggu",
    instructor: "Budi Santoso",
    syllabus: [
      "Fundamentals of Digital Marketing",
      "SEO dan Content Marketing",
      "Social Media Strategy",
      "Email Marketing Campaigns",
      "Google Ads dan PPC",
      "Analytics dan Performance Tracking",
      "Conversion Rate Optimization",
      "Marketing Campaign Project"
    ]
  }
];
