import { User, Mail, BookOpen, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";

const Profile = () => {
  // Data profil dummy
  const profile = {
    username: "jotamvan",
    fullname: "Jo Tamvan",
    email: "jotamvan@email.com",
    enrolledCourses: 3,
    completedCourses: 1,
  };

  const stats = [
    { icon: BookOpen, label: "Enrolled Courses", value: profile.enrolledCourses },
    { icon: Award, label: "Completed", value: profile.completedCourses },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-foreground mb-8 animate-fade-in">Profile Saya</h1>

        <div className="space-y-6">
          {/* Profile Card */}
          <Card className="animate-slide-up">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="h-24 w-24 rounded-full gradient-primary flex items-center justify-center mb-4 shadow-button">
                  <User className="h-12 w-12 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{profile.fullname}</h2>
                <p className="text-muted-foreground">@{profile.username}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground">Username</div>
                    <div className="font-medium text-foreground">{profile.username}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground">Nama Lengkap</div>
                    <div className="font-medium text-foreground">{profile.fullname}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="font-medium text-foreground">{profile.email}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={stat.label} 
                  className="animate-slide-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center shadow-button">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
