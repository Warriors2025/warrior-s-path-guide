import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy } from "lucide-react";

const selections = [
  {
    id: 1,
    name: "Cadet Arjun Patel",
    exam: "NDA 2025",
    rank: "AIR 42",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&face",
  },
  {
    id: 2,
    name: "Lt. Sneha Sharma",
    exam: "CDS 2025",
    rank: "AIR 15",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&face",
  },
  {
    id: 3,
    name: "Fg Off. Rahul Yadav",
    exam: "AFCAT 2024",
    rank: "AIR 8",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&face",
  },
  {
    id: 4,
    name: "Cadet Priya Singh",
    exam: "NDA 2024",
    rank: "AIR 23",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&face",
  },
  {
    id: 5,
    name: "Sub Lt. Vikram Joshi",
    exam: "CDS 2024",
    rank: "AIR 31",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&face",
  },
  {
    id: 6,
    name: "Cadet Ananya Reddy",
    exam: "NDA 2025",
    rank: "AIR 56",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&face",
  },
  {
    id: 7,
    name: "Plt Off. Karan Mehta",
    exam: "AFCAT 2025",
    rank: "AIR 5",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&face",
  },
  {
    id: 8,
    name: "Cadet Ritu Verma",
    exam: "CDS 2025",
    rank: "AIR 19",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&face",
  },
];

export function SelectionsSection() {
  return (
    <section className="py-20 bg-warriors-green relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-warriors-gold/20 text-warriors-gold px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Trophy className="h-4 w-4" />
            Our Pride
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Latest <span className="text-warriors-gold">Selections</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our students consistently achieve top ranks in NDA, CDS, AFCAT and other defence examinations.
          </p>
        </div>

        {/* Marquee stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { label: "NDA Selections", count: "500+" },
            { label: "CDS Selections", count: "300+" },
            { label: "AFCAT Selections", count: "200+" },
            { label: "SSB Cleared", count: "1000+" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-5 py-3 text-center">
              <p className="text-2xl font-bold text-warriors-gold">{stat.count}</p>
              <p className="text-xs text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Selection cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {selections.map((student) => (
            <div key={student.id} className="group text-center">
              <div className="relative mx-auto w-28 h-28 md:w-32 md:h-32 mb-3">
                {/* Gold ring border */}
                <div className="absolute inset-0 rounded-full border-[3px] border-warriors-gold group-hover:border-warriors-yellow transition-colors" />
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full rounded-full object-cover p-1"
                />
                {/* Rank badge */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-warriors-maroon text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                  {student.rank}
                </div>
              </div>
              <h3 className="font-semibold text-white text-sm">{student.name}</h3>
              <p className="text-warriors-gold text-xs">{student.exam}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            size="lg"
            className="bg-warriors-gold text-warriors-green hover:bg-warriors-yellow font-bold"
          >
            <Link to="/gallery">
              View All Selections
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
