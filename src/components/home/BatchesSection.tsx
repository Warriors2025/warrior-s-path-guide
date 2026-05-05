import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const batches = [
  {
    id: 1,
    name: "SAKSHI",
    rank: "AIR 04",
    title: "CDS II 2026",
    mode: "OFFLINE | ONLINE",
    tagline: "COMPLETE GUIDANCE",
    date: "04 May 2026",
    locations: ["Lucknow", "Dehradun"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop",
  },
  {
    id: 2,
    name: "KARANVEER KAUR",
    rank: "AIR 06",
    title: "AFCAT-II 2026",
    mode: "OFFLINE | ONLINE",
    tagline: "WRITTEN + FREE SSB INTERVIEW",
    date: "04 May 2026",
    locations: ["Lucknow", "Dehradun"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop",
  },
  {
    id: 3,
    name: "AYUSHI PATEL",
    rank: "AIR 17",
    title: "NDA 9th FOUNDATION",
    mode: "OFFLINE",
    tagline: "WRITTEN + FREE SSB INTERVIEW",
    date: "04 May 2026",
    locations: ["Lucknow"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop",
  },
  {
    id: 4,
    name: "BHUMIKA ADHIKARI",
    rank: "AIR 07",
    title: "NDA 11th FOUNDATION",
    mode: "OFFLINE | ONLINE",
    tagline: "WRITTEN + FREE SSB INTERVIEW",
    date: "04 May 2026",
    locations: ["Lucknow", "Dehradun"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop",
  },
];

export function BatchesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-warriors-green mb-3">
              Our Upcoming Batches
            </h2>
            <p className="text-muted-foreground">
              Warriors Defence Academy provides online and offline coaching for NDA, CDS, AFCAT, MNS, and SSB with expert teachers, study material, and regular tests. It also offers NDA Foundation courses in Lucknow and Dehradun for early preparation.
            </p>
          </div>
          <Button asChild variant="outline" className="border-warriors-green text-warriors-green hover:bg-warriors-green hover:text-white rounded-full self-start">
            <Link to="/courses">Batches</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {batches.map((batch) => (
            <div key={batch.id} className="border border-border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow">
              {/* Poster */}
              <div className="relative aspect-[3/4] bg-warriors-green overflow-hidden">
                {/* decorative pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }} />

                {/* AIR badge */}
                <div className="absolute top-3 left-3 z-10 w-12 h-12 rounded-full bg-warriors-gold border-2 border-white flex flex-col items-center justify-center text-warriors-green font-bold leading-tight shadow-md">
                  <span className="text-[8px]">AIR</span>
                  <span className="text-sm">{batch.rank.replace("AIR ", "")}</span>
                </div>

                {/* Enroll Now ribbon */}
                <div className="absolute top-3 right-3 z-10 bg-warriors-yellow text-warriors-green text-[9px] font-extrabold px-2 py-1 rounded shadow-md">
                  ENROLL<br />NOW
                </div>

                {/* Student image */}
                <img
                  src={batch.image}
                  alt={batch.name}
                  className="absolute inset-x-0 top-6 mx-auto h-[60%] w-auto object-cover object-top"
                />

                {/* Name banner */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[58%] bg-warriors-gold text-warriors-green text-[11px] font-bold px-4 py-1 rounded shadow whitespace-nowrap">
                  {batch.name}
                </div>

                {/* Bottom info */}
                <div className="absolute inset-x-0 bottom-0 p-3 text-center text-white">
                  <h3 className="text-base md:text-lg font-extrabold leading-tight">{batch.title}</h3>
                  <div className="inline-block bg-warriors-gold text-warriors-green text-[9px] font-bold px-2 py-0.5 rounded mt-1">
                    BATCH MODE
                  </div>
                  <div className="text-[9px] font-semibold mt-1 tracking-wide">{batch.mode}</div>
                  <div className="text-warriors-gold text-[10px] font-bold italic mt-1">"{batch.tagline}"</div>
                  <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
                    {batch.locations.map((loc) => (
                      <span key={loc} className="bg-white/90 text-warriors-green text-[8px] font-semibold px-1.5 py-0.5 rounded inline-flex items-center gap-0.5">
                        <MapPin className="h-2 w-2" /> {loc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom gold line */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-warriors-gold" />
              </div>

              {/* Footer */}
              <div className="p-4 text-center">
                <p className="text-warriors-green font-semibold mb-3">{batch.date}</p>
                <Button asChild size="sm" className="bg-warriors-green hover:bg-warriors-dark-green text-white rounded-full px-5">
                  <Link to="/contact">Confirm Your Seat</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
