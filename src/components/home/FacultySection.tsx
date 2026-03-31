import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award } from "lucide-react";

const facultyMembers = [
  {
    id: 1,
    name: "Col. Rajesh Kumar (Retd.)",
    designation: "Director & Chief Mentor",
    experience: "28 Years",
    specialization: "SSB Interview & Leadership",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&face",
  },
  {
    id: 2,
    name: "Wg Cdr. Amit Sharma (Retd.)",
    designation: "Head - AFCAT Division",
    experience: "22 Years",
    specialization: "Air Force Examinations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&face",
  },
  {
    id: 3,
    name: "Cdr. Priya Nair (Retd.)",
    designation: "Head - Navy Division",
    experience: "20 Years",
    specialization: "Naval Examinations & SSB",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&face",
  },
  {
    id: 4,
    name: "Maj. Vikram Singh (Retd.)",
    designation: "Head - NDA Division",
    experience: "18 Years",
    specialization: "NDA Mathematics & GK",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&face",
  },
];

export function FacultySection() {
  return (
    <section className="py-20 bg-warriors-cream">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-warriors-maroon font-semibold mb-2 uppercase tracking-wider text-sm">
            Our Mentors
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-warriors-green mb-4">
            Learn From <span className="text-warriors-gold">The Best</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our faculty comprises retired defence officers and subject matter experts with decades of real-world experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white rounded-xl overflow-hidden border-2 border-warriors-green/20 hover:border-warriors-gold shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warriors-green/80 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-bold text-base">{member.name}</h3>
                  <p className="text-xs text-warriors-gold">{member.designation}</p>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                  <Award className="h-4 w-4 text-warriors-maroon" />
                  <span>{member.experience} Experience</span>
                </div>
                <Badge className="bg-warriors-green/10 text-warriors-green hover:bg-warriors-green/20 text-xs">
                  {member.specialization}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            size="lg"
            className="bg-warriors-maroon hover:bg-warriors-dark-maroon text-white font-semibold"
          >
            <Link to="/faculty">
              Meet All Faculty
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
