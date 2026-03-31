import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Trophy, ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?w=1920&h=600&fit=crop",
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=600&fit=crop",
  },
  {
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&h=600&fit=crop",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  return (
    <section>
      {/* Image Slider - clean, no overlay */}
      <div className="relative w-full h-[50vh] md:h-[65vh] lg:h-[75vh] overflow-hidden bg-warriors-green">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-warriors-gold" : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content below slider */}
      <div className="bg-warriors-maroon py-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                हमारे बच्चे, हमारा अभिमान!
              </h1>
              <div className="inline-block bg-warriors-green px-5 py-2 rounded-lg">
                <p className="text-xl md:text-2xl font-bold text-warriors-gold uppercase tracking-wide">
                  Highest Selections in India
                </p>
              </div>
              <p className="text-white/90 text-lg max-w-xl">
                Join India's most trusted defence coaching institute. With 15+ years of excellence, we've trained 5000+ officers for NDA, CDS, AFCAT, SSB & more.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
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

            <div className="hidden lg:block text-right">
              <div className="bg-white inline-block p-6 rounded-lg shadow-2xl">
                <h3 className="text-6xl font-black text-warriors-red">NDA</h3>
                <h4 className="text-4xl font-bold text-warriors-gold">CDS/SSB</h4>
                <p className="text-warriors-green font-medium mt-2">
                  MNS / AFCAT / AIRFORCE / NAVY / CAPF
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Users, value: "5000+", label: "Students Trained" },
              { icon: Trophy, value: "2500+", label: "Selections Made" },
              { icon: Award, value: "95%", label: "Success Rate" },
              { icon: Award, value: "15+", label: "Years Experience" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <Icon className="h-7 w-7 text-warriors-gold mx-auto mb-1" />
                  <p className="text-2xl font-bold text-warriors-gold">{stat.value}</p>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
