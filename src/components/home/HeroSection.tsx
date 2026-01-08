import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Trophy } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background - Maroon gradient like Warriors */}
      <div className="absolute inset-0 warriors-maroon-gradient" />
      
      {/* Decorative overlay pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
        }}
      />

      <div className="container relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            {/* Hindi Tagline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warriors-gold leading-tight">
              हमारे बच्चे, हमारा अभिमान!
            </h2>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="inline-block bg-warriors-green px-6 py-3 rounded-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-warriors-gold uppercase tracking-wide">
                  Highest Selections in India
                </h3>
              </div>
              
              <div className="border-2 border-dashed border-warriors-gold/50 px-6 py-4 inline-block">
                <p className="text-warriors-gold text-xl md:text-2xl font-semibold">
                  Our Latest Selections in 2024 - 25
                </p>
              </div>
            </div>

            <p className="text-lg text-white/90 max-w-xl">
              Join India's most trusted defence coaching institute. With 15+ years of excellence, we've trained 5000+ officers for NDA, CDS, AFCAT, SSB & more.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-warriors-gold text-warriors-green hover:bg-warriors-yellow font-bold text-lg">
                <Link to="/courses">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold">
                <Link to="/contact">Book Free Counseling</Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Course Badges */}
          <div className="hidden lg:flex flex-col items-end space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-2xl text-right">
              <h3 className="text-6xl font-black text-warriors-red">NDA</h3>
              <h4 className="text-4xl font-bold text-warriors-gold">CDS/SSB</h4>
              <p className="text-warriors-green font-medium mt-2">
                MNS / AFCAT / AIRFORCE / NAVY / CAPF
              </p>
            </div>

            {/* Faculty Images Placeholder */}
            <div className="bg-warriors-gold/20 border-2 border-warriors-gold rounded-lg p-4">
              <p className="text-warriors-gold font-bold text-center text-lg">
                JOIN INDIA'S BEST DEFENCE ACADEMY
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats at bottom */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Users, value: "5000+", label: "Students Trained" },
            { icon: Trophy, value: "2500+", label: "Selections Made" },
            { icon: Award, value: "95%", label: "Success Rate" },
            { icon: Award, value: "15+", label: "Years Experience" },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Icon className="h-8 w-8 text-warriors-gold mx-auto mb-2" />
                <p className="text-2xl font-bold text-warriors-gold">{stat.value}</p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
