import { CheckCircle2, Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import { courses } from "@/data/courses";

interface CourseHistory {
  courseId: string;
  enrolledDate: string;
  completedDate: string | null;
  progress: number;
  status: "completed" | "in-progress";
}

const History = () => {
  // Data history dummy
  const courseHistory: CourseHistory[] = [
    {
      courseId: "web-development",
      enrolledDate: "10 Januari 2025",
      completedDate: "10 Maret 2025",
      progress: 100,
      status: "completed",
    },
    {
      courseId: "data-science",
      enrolledDate: "15 Januari 2025",
      completedDate: null,
      progress: 65,
      status: "in-progress",
    },
    {
      courseId: "ui-design",
      enrolledDate: "20 Januari 2025",
      completedDate: null,
      progress: 30,
      status: "in-progress",
    },
  ];

  const getStatusBadge = (status: string) => {
    if (status === "completed") {
      return (
        <Badge className="bg-success text-success-foreground">
          <CheckCircle2 className="h-3 w-3 mr-1" />
          Selesai
        </Badge>
      );
    }
    return (
      <Badge variant="secondary" className="bg-warning/20 text-warning border-warning/30">
        <Clock className="h-3 w-3 mr-1" />
        Sedang Berjalan
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8 max-w-4xl">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">History Course</h1>
          <p className="text-muted-foreground">Daftar course yang telah dan sedang Anda ikuti</p>
        </div>

        <div className="space-y-4">
          {courseHistory.map((history, index) => {
            const course = courses.find((c) => c.id === history.courseId);
            if (!course) return null;

            return (
              <Card 
                key={history.courseId} 
                variant="interactive"
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Course Image */}
                    <div className="sm:w-48 h-32 sm:h-auto shrink-0">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
                      />
                    </div>

                    {/* Course Info */}
                    <div className="flex-1 p-4 sm:py-4 sm:pr-4">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-bold text-foreground">{course.title}</h3>
                        {getStatusBadge(history.status)}
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {course.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-primary" />
                          <span>Daftar: {history.enrolledDate}</span>
                        </div>
                        {history.completedDate && (
                          <div className="flex items-center gap-1">
                            <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                            <span>Selesai: {history.completedDate}</span>
                          </div>
                        )}
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium text-foreground">{history.progress}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full gradient-primary rounded-full transition-all duration-500"
                            style={{ width: `${history.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {courseHistory.length === 0 && (
          <Card className="animate-fade-in">
            <CardContent className="p-12 text-center">
              <div className="h-16 w-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Belum Ada History</h3>
              <p className="text-muted-foreground">Anda belum mendaftar ke course manapun</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default History;
