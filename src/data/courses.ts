import courseWebDev from "@/assets/course-web-dev.jpg";
import courseDataScience from "@/assets/course-data-science.jpg";
import courseUIDesign from "@/assets/course-ui-design.jpg";
import courseMarketing from "@/assets/course-marketing.jpg";
import courseQAAutomation from "@/assets/course-qa-automation.jpg";
import courseDataAnalytics from "@/assets/course-data-analytics.jpg";
import courseLinkedIn from "@/assets/course-linkedin.jpg";
import courseDataStudio from "@/assets/course-data-studio.jpg";
import courseSQL from "@/assets/course-sql.jpg";
import courseFlutter from "@/assets/course-flutter.jpg";
import courseNetworking from "@/assets/course-networking.jpg";
import courseBI from "@/assets/course-bi.jpg";

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
  },
  {
    id: "qa-automation-python",
    title: "Pengenalan QA Automation dengan Python",
    description: "Pelajari cara mengotomatisasi pengujian software menggunakan Python. Kursus ini mencakup Selenium, Pytest, dan best practices dalam quality assurance untuk memastikan aplikasi bebas bug.",
    image: courseQAAutomation,
    schedule: "1 Februari 2025 - 1 April 2025",
    duration: "8 Minggu",
    instructor: "Andi Prasetyo",
    syllabus: [
      "Pengenalan Software Testing dan QA",
      "Python Basics untuk Automation",
      "Selenium WebDriver Fundamentals",
      "Locators dan Element Interaction",
      "Pytest Framework dan Test Structure",
      "Page Object Model (POM)",
      "API Testing dengan Requests",
      "CI/CD Integration dan Reporting"
    ]
  },
  {
    id: "data-science-analytics-python",
    title: "Pengenalan Data Science & Analytics dengan Python",
    description: "Mulai perjalanan Anda sebagai data analyst dengan Python. Pelajari cara mengolah, menganalisis, dan memvisualisasikan data untuk menghasilkan insight bisnis yang actionable.",
    image: courseDataAnalytics,
    schedule: "5 Februari 2025 - 5 Mei 2025",
    duration: "12 Minggu",
    instructor: "Diana Kusuma",
    syllabus: [
      "Pengenalan Data Science dan Python",
      "NumPy untuk Numerical Computing",
      "Pandas untuk Data Manipulation",
      "Data Cleaning dan Preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Visualisasi dengan Matplotlib & Plotly",
      "Statistical Analysis dan Hypothesis Testing",
      "Capstone Project: Business Analytics"
    ]
  },
  {
    id: "linkedin-makeover",
    title: "LinkedIn Makeover: Optimasi Profil untuk Dilirik Recruiter IT",
    description: "Transformasi profil LinkedIn Anda agar standout di mata recruiter IT. Pelajari strategi personal branding, optimasi keyword, dan networking efektif untuk mendapatkan pekerjaan impian.",
    image: courseLinkedIn,
    schedule: "10 Februari 2025 - 24 Februari 2025",
    duration: "2 Minggu",
    instructor: "Ratna Sari",
    syllabus: [
      "Audit Profil LinkedIn Anda",
      "Headline yang Menarik Perhatian",
      "Summary yang Bercerita",
      "Optimasi Pengalaman dan Skills",
      "Keyword Strategy untuk ATS",
      "Portfolio dan Featured Section",
      "Networking dan Engagement Strategy",
      "Personal Branding untuk IT Professional"
    ]
  },
  {
    id: "google-data-studio",
    title: "Google Data Studio: Membuat Dashboard Laporan Tanpa Koding",
    description: "Kuasai Google Data Studio (Looker Studio) untuk membuat dashboard interaktif tanpa coding. Hubungkan berbagai sumber data dan visualisasikan dengan cara yang mudah dipahami stakeholder.",
    image: courseDataStudio,
    schedule: "15 Februari 2025 - 15 Maret 2025",
    duration: "4 Minggu",
    instructor: "Hendra Wijaya",
    syllabus: [
      "Pengenalan Google Data Studio",
      "Menghubungkan Data Sources",
      "Chart Types dan Visualisasi",
      "Filters dan Interactive Controls",
      "Calculated Fields dan Metrics",
      "Styling dan Branding Dashboard",
      "Sharing dan Collaboration",
      "Project: Business Dashboard Real-World"
    ]
  },
  {
    id: "sql-dasar",
    title: "SQL Dasar: Cara 'Ngobrol' dengan Database Perusahaan",
    description: "Pelajari SQL dari nol untuk berkomunikasi dengan database. Kursus ini mengajarkan cara query, filter, join, dan aggregate data yang essential untuk setiap profesional IT dan bisnis.",
    image: courseSQL,
    schedule: "20 Februari 2025 - 20 April 2025",
    duration: "8 Minggu",
    instructor: "Fajar Nugroho",
    syllabus: [
      "Pengenalan Database dan SQL",
      "SELECT Statement dan Filtering",
      "Sorting dan Limiting Results",
      "Aggregate Functions (COUNT, SUM, AVG)",
      "GROUP BY dan HAVING",
      "JOIN Tables (INNER, LEFT, RIGHT)",
      "Subqueries dan CTEs",
      "Praktik dengan Real Database Cases"
    ]
  },
  {
    id: "flutter-pemula",
    title: "Pengenalan Flutter untuk Pemula",
    description: "Bangun aplikasi mobile cross-platform dengan Flutter dan Dart. Satu codebase untuk Android dan iOS, pelajari widget system, state management, dan best practices mobile development.",
    image: courseFlutter,
    schedule: "1 Maret 2025 - 1 Mei 2025",
    duration: "8 Minggu",
    instructor: "Kevin Hartanto",
    syllabus: [
      "Pengenalan Flutter dan Dart",
      "Widget Basics dan Layout",
      "Stateless vs Stateful Widgets",
      "Navigation dan Routing",
      "State Management dengan Provider",
      "HTTP Requests dan API Integration",
      "Local Storage dan Persistence",
      "Build dan Deploy ke Play Store/App Store"
    ]
  },
  {
    id: "jaringan-komputer",
    title: "Jaringan Komputer: Pahami Cara Internet Bekerja di Balik Layar",
    description: "Pelajari fundamental jaringan komputer dan bagaimana internet bekerja. Dari OSI model hingga TCP/IP, kursus ini memberikan pemahaman solid tentang infrastruktur digital modern.",
    image: courseNetworking,
    schedule: "5 Maret 2025 - 5 Mei 2025",
    duration: "8 Minggu",
    instructor: "Irwan Setiawan",
    syllabus: [
      "Pengenalan Jaringan Komputer",
      "OSI Model dan TCP/IP",
      "IP Addressing dan Subnetting",
      "Routing dan Switching Basics",
      "DNS, DHCP, dan Network Services",
      "Network Security Fundamentals",
      "Wireless Networking",
      "Troubleshooting dan Network Tools"
    ]
  },
  {
    id: "business-intelligence",
    title: "Pengenalan Business Intelligence untuk Pemula",
    description: "Mulai karir di bidang Business Intelligence. Pelajari konsep BI, data warehousing, ETL process, dan cara menggunakan tools BI untuk mendukung pengambilan keputusan bisnis.",
    image: courseBI,
    schedule: "10 Maret 2025 - 10 Mei 2025",
    duration: "8 Minggu",
    instructor: "Linda Permata",
    syllabus: [
      "Pengenalan Business Intelligence",
      "Data Warehouse Concepts",
      "ETL Process dan Data Pipeline",
      "Dimensional Modeling",
      "KPI dan Metrics Design",
      "BI Tools Overview (Power BI, Tableau)",
      "Dashboard Design Principles",
      "BI Project: Sales Analytics Dashboard"
    ]
  }
];
