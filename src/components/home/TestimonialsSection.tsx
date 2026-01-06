import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Lt. Rahul Sharma",
    role: "NDA 145 Course",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&face",
    content: "Defence Academy transformed my dream into reality. The structured approach, dedicated faculty, and rigorous training prepared me not just for the exam but for life as an officer. Forever grateful!",
    rating: 5,
  },
  {
    id: 2,
    name: "Fg Offr. Priya Singh",
    role: "AFCAT Entry",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&face",
    content: "The SSB preparation here is unmatched. The mock interviews and psychological test guidance helped me crack the interview in my first attempt. Highly recommend to all defence aspirants!",
    rating: 5,
  },
  {
    id: 3,
    name: "Capt. Vikram Rathore",
    role: "CDS OTA Entry",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&face",
    content: "What sets this academy apart is the personal attention every student receives. The mentors are ex-defence officers who understand exactly what it takes to join the forces.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sub Lt. Ananya Verma",
    role: "Navy SSC Entry",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&face",
    content: "From day one, the focus was on overall personality development. The physical training, group discussions, and current affairs sessions built my confidence tremendously.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wider text-sm">Success Stories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Officers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our successful alumni who are now proudly serving in the Indian Armed Forces.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-primary/10">
              <Quote className="h-24 w-24" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="h-16 w-16 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="font-bold text-lg text-foreground">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-military-gold text-military-gold" />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </blockquote>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
