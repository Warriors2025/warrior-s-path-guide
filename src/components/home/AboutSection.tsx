import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  "Ex-Defence Officers as Faculty",
  "SSB Interview Preparation",
  "Physical Fitness Training",
  "Mock Tests & Doubt Sessions",
  "Hostel & Mess Facility",
  "Personalized Mentoring",
];

export function AboutSection() {
  return (
    <section className="py-20 bg-warriors-cream">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-xl overflow-hidden shadow-lg border-4 border-warriors-gold">
                  <img
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
                    alt="Classroom Training"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="h-64 rounded-xl overflow-hidden shadow-lg border-4 border-warriors-green">
                  <img
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop"
                    alt="Physical Training"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 rounded-xl overflow-hidden shadow-lg border-4 border-warriors-maroon">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=400&fit=crop"
                    alt="Group Study"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="h-48 rounded-xl overflow-hidden shadow-lg border-4 border-warriors-gold">
                  <img
                    src="https://images.unsplash.com/photo-552664730-d307ca884978?w=400&h=300&fit=crop"
                    alt="Team Building"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-warriors-green text-white p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold text-warriors-gold">15+</p>
              <p className="text-sm">Years of<br />Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-warriors-maroon font-semibold mb-2 uppercase tracking-wider text-sm">Who We Are?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-warriors-green mb-4">
                Warriors Defence Academy -{" "}
                <span className="text-warriors-maroon">The Best NDA Coaching in India</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Warriors Defence Academy is the most famous NDA coaching center in India. It lays out a complete and well-organized environment for students who desire to get into the Indian Military. The institution supplies students with all the resources to clear the NDA test and succeed in the SSB interview.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our unique approach combines rigorous academic preparation with physical training, personality development, and SSB interview guidance, ensuring holistic development of every aspirant. We give emphasis to academic performance, physical fitness, and personality development.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 py-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-warriors-green shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild className="bg-warriors-maroon hover:bg-warriors-maroon/90 text-white font-semibold">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
