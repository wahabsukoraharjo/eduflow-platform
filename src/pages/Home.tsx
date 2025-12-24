import { useState, useMemo } from "react";
import { BookOpen, Users, Award, TrendingUp } from "lucide-react";
import Header from "@/components/layout/Header";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) return courses;
    
    const query = searchQuery.toLowerCase();
    return courses.filter((course) => 
      course.title.toLowerCase().includes(query) ||
      course.schedule.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const stats = [
    { icon: BookOpen, label: "Total Courses", value: "50+" },
    { icon: Users, label: "Active Students", value: "2,500+" },
    { icon: Award, label: "Certificates", value: "1,200+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="container py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Tingkatkan <span className="text-primary">Skill</span> Anda
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Platform pembelajaran online terbaik untuk mengembangkan kemampuan profesional Anda. 
            Belajar dari para ahli di bidangnya.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-card p-4 rounded-xl shadow-card animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-2">
                    <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Courses Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Courses Tersedia</h2>
              <p className="text-muted-foreground">
                {searchQuery 
                  ? `Menampilkan ${filteredCourses.length} hasil untuk "${searchQuery}"`
                  : "Pilih course yang sesuai dengan minat Anda"
                }
              </p>
            </div>
          </div>
          
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Tidak ada kursus yang sesuai dengan pencarian Anda.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
