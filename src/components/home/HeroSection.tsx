import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 military-gradient opacity-95" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-8">
            <div className="inline-flex items-center gap-2 bg-military-gold/20 border border-military-gold/30 rounded-full px-4 py-2 text-military-gold text-sm font-medium">
              <Award className="h-4 w-4" />
              #1 Defence Coaching in India
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Journey to{" "}
              <span className="text-military-gold">Serve the Nation</span>{" "}
              Starts Here
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
              Join India's most trusted defence coaching institute. With 15+ years of excellence, we've trained 5000+ officers for NDA, CDS, AFCAT & more.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-military-gold text-primary hover:bg-military-gold/90 font-semibold">
                <Link to="/courses">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">Book Free Counseling</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-primary-foreground/20">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-military-gold/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-military-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-military-gold">5000+</p>
                  <p className="text-sm text-primary-foreground/70">Officers Trained</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-military-gold/20 flex items-center justify-center">
                  <Award className="h-6 w-6 text-military-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-military-gold">15+</p>
                  <p className="text-sm text-primary-foreground/70">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-military-gold/20 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-military-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-military-gold">95%</p>
                  <p className="text-sm text-primary-foreground/70">Success Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="h-[500px] w-[400px] rounded-2xl overflow-hidden border-4 border-military-gold/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1529686342540-1b43aec0df75?w=800&h=1000&fit=crop"
                  alt="Defence Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 text-primary-foreground">
                  <p className="text-lg font-semibold">Train like a soldier,</p>
                  <p className="text-2xl font-bold text-military-gold">Think like a leader</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-military-gold/20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-accent/20 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
