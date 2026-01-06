import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users } from "lucide-react";

const faculty = [
  {
    id: 1,
    name: "Col. Rajesh Kumar (Retd.)",
    designation: "Director & Chief Mentor",
    experience: "28 Years",
    specialization: "SSB Interview & Leadership",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&face",
    description: "Former Selection Centre Commandant with extensive experience in officer selection. Has trained over 2000+ successful candidates.",
    achievements: ["Shaurya Chakra Awardee", "Army Commendation Card", "Former SSB President"],
  },
  {
    id: 2,
    name: "Wg Cdr. Amit Sharma (Retd.)",
    designation: "Head - AFCAT Division",
    experience: "22 Years",
    specialization: "Air Force Examinations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&face",
    description: "Former Fighter Pilot with specialization in AFCAT and Flying Branch preparation. Expert in EKT and AFSB coaching.",
    achievements: ["Vayu Sena Medal", "Best Flying Instructor", "500+ Selections"],
  },
  {
    id: 3,
    name: "Cdr. Priya Nair (Retd.)",
    designation: "Head - Navy Division",
    experience: "20 Years",
    specialization: "Naval Examinations & SSB",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&face",
    description: "One of the first women officers in Indian Navy executive branch. Specializes in Navy entry exams and women candidates' preparation.",
    achievements: ["Nao Sena Medal", "Best Instructor Award", "Pioneer Women Officer"],
  },
  {
    id: 4,
    name: "Maj. Vikram Singh (Retd.)",
    designation: "Head - NDA Division",
    experience: "18 Years",
    specialization: "NDA Mathematics & GK",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&face",
    description: "NDA graduate with expertise in mathematics and general knowledge. Known for making complex topics simple.",
    achievements: ["Army Commendation Card", "NDA Topper (Maths)", "Author of 3 Books"],
  },
  {
    id: 5,
    name: "Prof. Sunita Rao",
    designation: "Head - English & Communication",
    experience: "15 Years",
    specialization: "English & Personality Development",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&face",
    description: "PhD in English Literature with specialization in communication skills and personality development for defence aspirants.",
    achievements: ["PhD Cambridge", "UPSC Interviewer", "200+ GD Expert"],
  },
  {
    id: 6,
    name: "Sub Maj. Harpreet Singh (Retd.)",
    designation: "Physical Training Instructor",
    experience: "24 Years",
    specialization: "Physical Fitness & Sports",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop&face",
    description: "Former Army PTI and National level athlete. Trains students to achieve peak physical fitness required for defence forces.",
    achievements: ["Arjuna Award Nominee", "National Athlete", "Army Gold Medalist"],
  },
  {
    id: 7,
    name: "Dr. Arun Mehta",
    designation: "Psychology Expert",
    experience: "16 Years",
    specialization: "Psychological Tests & TAT/WAT",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&face",
    description: "Clinical psychologist specializing in SSB psychological tests. Expert in TAT, WAT, SRT, and SD preparation.",
    achievements: ["PhD Psychology", "Former DRDO Consultant", "Published Researcher"],
  },
  {
    id: 8,
    name: "Capt. Rahul Verma (Retd.)",
    designation: "CDS & TA Coach",
    experience: "14 Years",
    specialization: "CDS & Territorial Army",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&face",
    description: "OTA graduate with expertise in CDS preparation and Territorial Army coaching for working professionals.",
    achievements: ["Best Young Officer", "CDS Topper", "TA Expert"],
  },
];

const Faculty = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 military-gradient">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-military-gold font-semibold mb-4 uppercase tracking-wider text-sm">Our Faculty</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Learn From The <span className="text-military-gold">Best Mentors</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Our faculty comprises retired defence officers and subject matter experts who bring decades of real-world experience to guide your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {faculty.map((member) => (
              <Card key={member.id} className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-primary-foreground/80">{member.designation}</p>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Award className="h-4 w-4 text-primary" />
                      {member.experience}
                    </div>
                  </div>

                  <Badge variant="secondary" className="mb-3">
                    {member.specialization}
                  </Badge>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {member.description}
                  </p>

                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold text-foreground mb-2">Key Achievements:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.achievements.map((achievement) => (
                        <span key={achievement} className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mb-4">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground">50+</p>
              <p className="text-muted-foreground">Expert Faculty Members</p>
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mb-4">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground">300+</p>
              <p className="text-muted-foreground">Years Combined Experience</p>
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mb-4">
                <BookOpen className="h-7 w-7 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground">25+</p>
              <p className="text-muted-foreground">Published Authors</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Faculty;
