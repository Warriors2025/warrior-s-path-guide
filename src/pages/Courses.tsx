import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, CheckCircle, Calendar, BookOpen } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "NDA Foundation Course",
    subtitle: "For 10th Pass Students",
    description: "A comprehensive 2-year program designed for students who have cleared 10th standard. Covers complete syllabus for NDA written exam along with 11th-12th board preparation.",
    duration: "2 Years",
    batchSize: "30 Students",
    timing: "7 AM - 7 PM",
    eligibility: "10th Pass",
    rating: 4.9,
    popular: true,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
    features: ["Board + NDA Combined", "Hostel Available", "Physical Training", "SSB Foundation", "Weekly Tests", "Personal Mentoring"],
  },
  {
    id: 2,
    title: "NDA Crash Course",
    subtitle: "For 12th Pass/Appearing",
    description: "Intensive 6-month preparation program for NDA written examination. Ideal for students in 12th or those who have recently passed.",
    duration: "6 Months",
    batchSize: "35 Students",
    timing: "8 AM - 6 PM",
    eligibility: "12th Pass/Appearing",
    rating: 4.8,
    popular: true,
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
    features: ["Complete Syllabus", "Mock Tests", "Previous Papers", "Doubt Sessions", "Physical Training", "Current Affairs"],
  },
  {
    id: 3,
    title: "CDS Preparation",
    subtitle: "For Graduates",
    description: "Specialized coaching for Combined Defence Services examination covering IMA, OTA, Naval Academy, and Air Force Academy entries.",
    duration: "6 Months",
    batchSize: "25 Students",
    timing: "9 AM - 5 PM",
    eligibility: "Graduate",
    rating: 4.9,
    popular: false,
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&h=400&fit=crop",
    features: ["All Three Papers", "GK Special Classes", "English Grammar", "Mathematics", "Mock CDS", "Interview Guidance"],
  },
  {
    id: 4,
    title: "AFCAT Training",
    subtitle: "Air Force Entry",
    description: "Complete preparation for Air Force Common Admission Test including Flying Branch, Technical Branch, and Ground Duty entries.",
    duration: "4 Months",
    batchSize: "20 Students",
    timing: "9 AM - 4 PM",
    eligibility: "Graduate (60%)",
    rating: 4.9,
    popular: true,
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&h=400&fit=crop",
    features: ["AFCAT Written", "EKT Preparation", "AFSB Guidance", "Reasoning & Math", "English", "Military Aptitude"],
  },
  {
    id: 5,
    title: "SSB Interview Coaching",
    subtitle: "15-Day Intensive",
    description: "Comprehensive SSB preparation covering all stages - Screening, Psychology, GTO, and Personal Interview with mock SSB practice.",
    duration: "15 Days",
    batchSize: "15 Students",
    timing: "7 AM - 8 PM",
    eligibility: "SSB Call Letter",
    rating: 5.0,
    popular: true,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    features: ["Live GTO Tasks", "Psychology Tests", "Mock Interviews", "Lecturette Practice", "Group Discussions", "Personality Development"],
  },
  {
    id: 6,
    title: "Navy SSR/AA",
    subtitle: "Sailor Entry",
    description: "Preparation for Indian Navy Senior Secondary Recruit (SSR) and Artificer Apprentice (AA) entry examinations.",
    duration: "3 Months",
    batchSize: "40 Students",
    timing: "8 AM - 4 PM",
    eligibility: "12th (PCM)",
    rating: 4.7,
    popular: false,
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&h=400&fit=crop",
    features: ["Science Focus", "English", "Mathematics", "Reasoning", "GK", "Physical Fitness"],
  },
  {
    id: 7,
    title: "Air Force X & Y Group",
    subtitle: "Airmen Entry",
    description: "Complete training for Indian Air Force Group X (Technical) and Group Y (Non-Technical) trades selection.",
    duration: "4 Months",
    batchSize: "35 Students",
    timing: "8 AM - 5 PM",
    eligibility: "12th Pass",
    rating: 4.8,
    popular: false,
    image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=600&h=400&fit=crop",
    features: ["Physics & Math", "English", "Reasoning", "RAGA", "Physical Test", "Adaptability Test"],
  },
  {
    id: 8,
    title: "Territorial Army",
    subtitle: "For Working Professionals",
    description: "Weekend coaching program for employed individuals aspiring to join the Territorial Army as officers.",
    duration: "3 Months",
    batchSize: "20 Students",
    timing: "Weekends",
    eligibility: "Graduate (Employed)",
    rating: 4.6,
    popular: false,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    features: ["Weekend Classes", "Written Exam", "SSB Prep", "Flexible Timing", "Working Professional", "Physical Guidance"],
  },
];

const Courses = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 military-gradient">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-military-gold font-semibold mb-4 uppercase tracking-wider text-sm">Our Courses</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Choose Your Path to <span className="text-military-gold">Defence Career</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Explore our comprehensive range of courses designed for every defence examination. Each program is crafted by experts with proven track records.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 group">
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {course.popular && (
                      <Badge className="absolute top-4 left-4 bg-military-gold text-primary hover:bg-military-gold">
                        Popular
                      </Badge>
                    )}
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
                      <Star className="h-4 w-4 fill-military-gold text-military-gold" />
                      <span className="text-sm font-semibold">{course.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col">
                    <CardHeader className="p-0 mb-4">
                      <Badge variant="outline" className="w-fit mb-2">{course.subtitle}</Badge>
                      <h3 className="font-bold text-xl text-foreground">{course.title}</h3>
                    </CardHeader>

                    <CardContent className="p-0 flex-1">
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {course.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4 text-primary" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4 text-primary" />
                          {course.batchSize}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          {course.timing}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <BookOpen className="h-4 w-4 text-primary" />
                          {course.eligibility}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.features.slice(0, 3).map((feature) => (
                          <span key={feature} className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground">
                            {feature}
                          </span>
                        ))}
                        {course.features.length > 3 && (
                          <span className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground">
                            +{course.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </CardContent>

                    <CardFooter className="p-0 pt-4 border-t border-border">
                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <Link to="/contact">Enquire Now</Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's Included in Every Course
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Comprehensive Study Material",
              "Regular Mock Tests",
              "Doubt Clearing Sessions",
              "Physical Training",
              "Current Affairs Updates",
              "Personal Mentoring",
              "Previous Year Papers",
              "Interview Guidance",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
