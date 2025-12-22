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
import courseQATester from "@/assets/course-qa-tester.jpg";
import courseAgileScrum from "@/assets/course-agile-scrum.jpg";
import courseLinux from "@/assets/course-linux.jpg";
import courseDataStorytelling from "@/assets/course-data-storytelling.jpg";
import courseGoogleAnalytics from "@/assets/course-google-analytics.jpg";
import courseDigitalMarketing from "@/assets/course-digital-marketing.jpg";
import courseCanva from "@/assets/course-canva.jpg";
import courseContentCreator from "@/assets/course-content-creator.jpg";

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
  },
  {
    id: "qa-tester-101",
    title: "QA Tester 101: Menemukan Bug Sebelum Ditemukan User",
    description: "Pelajari teknik testing manual dan exploratory testing untuk menemukan bug lebih awal. Kursus ini mencakup test case design, bug reporting, dan mindset seorang QA profesional.",
    image: courseQATester,
    schedule: "15 Maret 2025 - 15 Mei 2025",
    duration: "8 Minggu",
    instructor: "Yoga Pratama",
    syllabus: [
      "Pengenalan Software Testing",
      "Types of Testing (Functional, Non-Functional)",
      "Test Case Design Techniques",
      "Exploratory Testing Strategies",
      "Bug Reporting yang Efektif",
      "Test Management Tools (Jira, TestRail)",
      "API Testing Basics",
      "Mobile App Testing"
    ]
  },
  {
    id: "agile-scrum",
    title: "Agile & Scrum: Cara Kerja Startup Unicorn yang Wajib Kamu Tahu",
    description: "Pahami metodologi Agile dan framework Scrum yang digunakan startup unicorn. Pelajari sprint planning, daily standup, retrospective, dan cara kolaborasi tim yang efektif.",
    image: courseAgileScrum,
    schedule: "20 Maret 2025 - 17 April 2025",
    duration: "4 Minggu",
    instructor: "Reza Firmansyah",
    syllabus: [
      "Pengenalan Agile Manifesto",
      "Scrum Framework Overview",
      "Roles: Product Owner, Scrum Master, Dev Team",
      "Sprint Planning dan Backlog Grooming",
      "Daily Standup dan Sprint Review",
      "Retrospective yang Produktif",
      "User Stories dan Estimation",
      "Kanban vs Scrum"
    ]
  },
  {
    id: "linux-survival",
    title: "Linux Survival Guide: Perintah Dasar Terminal yang Wajib Tahu",
    description: "Kuasai command line Linux dari dasar. Kursus ini mengajarkan navigasi filesystem, file management, permissions, dan scripting dasar yang wajib dikuasai setiap developer.",
    image: courseLinux,
    schedule: "25 Maret 2025 - 25 Mei 2025",
    duration: "8 Minggu",
    instructor: "Bayu Aditya",
    syllabus: [
      "Pengenalan Linux dan Terminal",
      "Navigasi Filesystem (cd, ls, pwd)",
      "File Operations (cp, mv, rm, mkdir)",
      "Text Processing (cat, grep, sed, awk)",
      "File Permissions dan Ownership",
      "Process Management (ps, top, kill)",
      "Shell Scripting Basics",
      "Package Management dan System Admin"
    ]
  },
  {
    id: "data-storytelling",
    title: "Data Storytelling: Ubah Angka Membosankan Jadi Grafik Keren",
    description: "Pelajari seni menyampaikan insight data melalui visualisasi yang menarik. Dari pemilihan chart yang tepat hingga narrative structure, buat presentasi data yang memorable.",
    image: courseDataStorytelling,
    schedule: "1 April 2025 - 1 Mei 2025",
    duration: "4 Minggu",
    instructor: "Sinta Dewi",
    syllabus: [
      "Prinsip Data Storytelling",
      "Memilih Chart yang Tepat",
      "Color Theory untuk Visualisasi",
      "Narrative Structure dalam Data",
      "Tools: Excel, Google Sheets, Canva",
      "Infographic Design Basics",
      "Presentation Delivery Tips",
      "Portfolio: Data Story Project"
    ]
  },
  {
    id: "google-analytics",
    title: "Google Analytics: Baca Data Pengunjung Web agar Iklan Tidak Boncos",
    description: "Kuasai Google Analytics untuk memahami perilaku pengunjung website. Pelajari cara setup tracking, membaca reports, dan optimasi campaign agar budget iklan tidak terbuang sia-sia.",
    image: courseGoogleAnalytics,
    schedule: "5 April 2025 - 5 Juni 2025",
    duration: "8 Minggu",
    instructor: "Dian Pratiwi",
    syllabus: [
      "Setup Google Analytics 4",
      "Understanding GA4 Interface",
      "Traffic Sources dan Acquisition",
      "User Behavior dan Engagement",
      "Conversion Tracking Setup",
      "Custom Events dan Parameters",
      "Reports dan Dashboard Creation",
      "Data-Driven Marketing Decisions"
    ]
  },
  {
    id: "digital-marketing-career",
    title: "Digital Marketing Career 101: Pilih Jalur Karirmu (Generalis vs Spesialis)",
    description: "Panduan lengkap memulai karir di digital marketing. Eksplorasi berbagai spesialisasi seperti SEO, Social Media, Content, Performance Marketing dan temukan jalur yang cocok untukmu.",
    image: courseDigitalMarketing,
    schedule: "10 April 2025 - 24 April 2025",
    duration: "2 Minggu",
    instructor: "Maya Indah",
    syllabus: [
      "Landscape Digital Marketing 2025",
      "Career Path: Generalis vs Spesialis",
      "SEO Specialist Track",
      "Social Media Manager Track",
      "Content Strategist Track",
      "Performance Marketing Track",
      "Building Your Portfolio",
      "Interview Tips dan Salary Negotiation"
    ]
  },
  {
    id: "canva-marketers",
    title: "Canva for Marketers: Desain Grafis Profesional Tanpa Skill Desain",
    description: "Buat desain marketing profesional dengan Canva tanpa perlu skill desain. Dari social media posts hingga presentation, hasilkan konten visual yang standout dalam hitungan menit.",
    image: courseCanva,
    schedule: "15 April 2025 - 15 Mei 2025",
    duration: "4 Minggu",
    instructor: "Rina Hartati",
    syllabus: [
      "Pengenalan Canva Interface",
      "Template Selection dan Customization",
      "Brand Kit dan Konsistensi Visual",
      "Social Media Content Design",
      "Presentation dan Report Design",
      "Video dan Animation Basics",
      "Canva Pro Features",
      "Content Calendar dan Batch Creation"
    ]
  },
  {
    id: "content-creator-masterclass",
    title: "Content Creator Masterclass: Dari Ide Mentah Jadi Konten Berkualitas",
    description: "Pelajari proses lengkap content creation dari ideation hingga publishing. Kursus ini mencakup copywriting, video production basics, dan strategi grow audience di berbagai platform.",
    image: courseContentCreator,
    schedule: "20 April 2025 - 20 Juni 2025",
    duration: "8 Minggu",
    instructor: "Arief Budiman",
    syllabus: [
      "Content Creation Mindset",
      "Ideation dan Content Planning",
      "Copywriting untuk Social Media",
      "Basic Video Production",
      "Editing dengan CapCut/Premiere",
      "Platform Strategy (IG, TikTok, YouTube)",
      "Analytics dan Content Optimization",
      "Monetization dan Brand Deals"
    ]
  }
];
