import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ArrowRight, Star } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "NDA Foundation Course",
    description: "Comprehensive preparation for National Defence Academy examination for 10th pass students.",
    duration: "2 Years",
    batch: "30 Students",
    rating: 4.9,
    popular: true,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "CDS Crash Course",
    description: "Intensive preparation for Combined Defence Services examination for graduates.",
    duration: "6 Months",
    batch: "25 Students",
    rating: 4.8,
    popular: false,
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "AFCAT Preparation",
    description: "Specialized coaching for Air Force Common Admission Test with focus on flying branch.",
    duration: "4 Months",
    batch: "20 Students",
    rating: 4.9,
    popular: true,
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "SSB Interview Coaching",
    description: "Complete SSB preparation including psychological tests, GTO tasks, and personal interview.",
    duration: "15 Days",
    batch: "15 Students",
    rating: 5.0,
    popular: true,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop",
  },
];

export function CoursesPreview() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wider text-sm">Our Programs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Defence Courses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our expertly designed courses tailored for different defence examinations. Each program includes comprehensive study material and personal mentoring.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {course.popular && (
                  <Badge className="absolute top-3 left-3 bg-military-gold text-primary hover:bg-military-gold">
                    Popular
                  </Badge>
                )}
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
                  <Star className="h-3 w-3 fill-military-gold text-military-gold" />
                  <span className="text-xs font-semibold">{course.rating}</span>
                </div>
              </div>

              <CardHeader className="pb-2">
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-1">
                  {course.title}
                </h3>
              </CardHeader>

              <CardContent className="pb-3">
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {course.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {course.batch}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link to="/courses">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/courses">
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
