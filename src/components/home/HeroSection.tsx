import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Trophy, ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?w=1920&h=1080&fit=crop",
    title: "हमारे बच्चे, हमारा अभिमान!",
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop",
    title: "Shaping Future Defence Officers",
  },
  {
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&h=1080&fit=crop",
    title: "India's Best NDA Coaching",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Slider */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 warriors-maroon-gradient opacity-85" />
        </div>
      ))}

      {/* Slider Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-warriors-gold" : "w-2 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      <div className="container relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            {/* Animated Title */}
            <h2 
              key={currentSlide}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-warriors-gold leading-tight animate-fade-in"
            >
              {heroSlides[currentSlide].title}
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

            <div className="bg-warriors-gold/20 border-2 border-warriors-gold rounded-lg p-4">
              <p className="text-warriors-gold font-bold text-center text-lg">
                JOIN INDIA'S BEST DEFENCE ACADEMY
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
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
