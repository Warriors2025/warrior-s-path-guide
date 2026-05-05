import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const selections = [
  { id: 1, name: "RUDRA SINGH", rank: "65", roll: "1150159", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" },
  { id: 2, name: "GAURAV GUNJAN KALITA", rank: "64", roll: "0941928", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop" },
  { id: 3, name: "KHUSHBOO CHAUDHARY", rank: "64", roll: "1445379", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop" },
  { id: 4, name: "STUTI SINGH", rank: "63", roll: "2642112", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop" },
  { id: 5, name: "SHUBHRANT SHARMA", rank: "51", roll: "1945143", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop" },
];

export function SelectionsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="mb-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-warriors-green mb-3">
            Latest Selections
          </h2>
          <p className="text-muted-foreground">
            At Warriors Defence Academy, we celebrate students who clear NDA, CDS, AFCAT, and MNS. Their success shows hard work and the right guidance, and inspires us to keep helping others become confident officers ready to serve the nation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {selections.map((s) => (
            <div key={s.id} className="relative aspect-square rounded-lg overflow-hidden bg-warriors-green shadow-md hover:shadow-xl transition-shadow group">
              {/* decorative dots */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }} />

              {/* Top header */}
              <div className="absolute top-0 inset-x-0 px-2 pt-2 text-center text-white z-10">
                <div className="text-[8px] font-semibold tracking-wide opacity-90">★ WARRIORS DEFENCE ACADEMY ★</div>
                <div className="text-[11px] md:text-xs font-extrabold leading-tight mt-1">6 WARRIORS IN TOP 10</div>
                <div className="inline-block bg-warriors-maroon text-white text-[8px] font-bold px-2 py-0.5 rounded mt-1">
                  NDA 156 MERIT DOMINANCE
                </div>
              </div>

              {/* Hearty Congratulations vertical text */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-white/80 text-[9px] italic font-semibold whitespace-nowrap">
                Hearty Congratulations
              </div>

              {/* Big AIR rank */}
              <div className="absolute left-1/2 -translate-x-[70%] top-[45%] -translate-y-1/2 text-center pointer-events-none">
                <div className="text-warriors-red text-xs font-extrabold leading-none">AIR</div>
                <div className="text-warriors-gold text-5xl md:text-6xl font-black leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  style={{ textShadow: "1px 1px 0 #b8860b, 2px 2px 0 #8b6508" }}>
                  {s.rank}
                </div>
              </div>

              {/* Student image */}
              <img
                src={s.image}
                alt={s.name}
                className="absolute right-0 bottom-8 h-[70%] w-1/2 object-cover object-top"
              />

              {/* Name plate */}
              <div className="absolute bottom-2 right-2 bg-warriors-maroon text-white text-center px-2 py-1 rounded shadow-md max-w-[55%]">
                <div className="text-[9px] font-extrabold leading-tight">{s.name}</div>
                <div className="text-[7px] font-semibold opacity-90">UPSC Roll No - {s.roll}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-warriors-green hover:bg-warriors-dark-green text-white rounded-full">
            <Link to="/gallery">View All Selections</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
