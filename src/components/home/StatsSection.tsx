import { useEffect, useState, useRef } from "react";
import { Users, Award, Trophy, GraduationCap } from "lucide-react";

const stats = [
  { icon: Users, value: 5000, suffix: "+", label: "Students Trained" },
  { icon: Trophy, value: 2500, suffix: "+", label: "Selections Made" },
  { icon: Award, value: 95, suffix: "%", label: "Success Rate" },
  { icon: GraduationCap, value: 50, suffix: "+", label: "Expert Faculty" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-military-gold">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 military-gradient relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Our Proven Track Record
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Numbers that speak louder than words. Our consistent results are a testament to our dedication and expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-military-gold/20 mb-4">
                  <Icon className="h-8 w-8 text-military-gold" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-primary-foreground/80 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
