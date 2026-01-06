import { Layout } from "@/components/layout/Layout";
import { CheckCircle, Users, Award, Target, BookOpen, Dumbbell } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Focused Training",
    description: "Every aspect of our training is designed to prepare you for success in defence examinations and SSB interviews.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from retired defence officers and subject matter experts who bring real-world experience to the classroom.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Our study material covers every aspect of the syllabus with regular updates based on exam patterns.",
  },
  {
    icon: Dumbbell,
    title: "Physical Fitness",
    description: "Dedicated physical training sessions to build stamina, strength, and the fitness required for defence services.",
  },
];

const milestones = [
  { year: "2009", event: "Academy Founded", description: "Started with 20 students and a vision to create defence leaders." },
  { year: "2012", event: "First 100 Selections", description: "Achieved milestone of 100 successful selections in various defence forces." },
  { year: "2015", event: "New Campus", description: "Moved to larger facility with hostel and advanced training infrastructure." },
  { year: "2018", event: "SSB Coaching Wing", description: "Launched dedicated SSB interview preparation with mock SSB facility." },
  { year: "2021", event: "5000+ Alumni", description: "Crossed 5000 successful officers serving in Armed Forces." },
  { year: "2024", event: "Digital Learning", description: "Introduced online courses reaching students across India." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 military-gradient">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-military-gold font-semibold mb-4 uppercase tracking-wider text-sm">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Shaping India's Future <span className="text-military-gold">Defence Leaders</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              For over 15 years, Defence Academy has been the launching pad for thousands of officers now serving in the Indian Army, Navy, and Air Force.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Defence Academy was established in 2009 by a group of retired defence officers who shared a common vision - to create a world-class coaching institute that would prepare young Indians for careers in the Armed Forces.
                </p>
                <p>
                  What started as a small coaching center with just 20 students has now grown into one of India's most trusted defence preparation institutes. Our founders believed that success in defence examinations requires more than just academic knowledge - it demands physical fitness, mental resilience, and the right attitude.
                </p>
                <p>
                  This holistic approach to training has been our cornerstone. We don't just prepare students for exams; we transform them into confident, disciplined individuals ready to serve the nation with pride.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop"
                  alt="Academy Campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold text-military-gold">Since 2009</p>
                <p className="text-sm">Excellence in Defence Training</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our unique approach combines rigorous academic preparation with physical training and personality development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming India's leading defence coaching institute.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-lg text-foreground">{milestone.event}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Facilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Smart Classrooms", desc: "AC classrooms with audio-visual equipment" },
              { title: "Physical Training Ground", desc: "Full-fledged ground with obstacle course" },
              { title: "Library", desc: "Extensive collection of books and study material" },
              { title: "Hostel Facility", desc: "Separate hostels for boys and girls" },
              { title: "Computer Lab", desc: "Online test practice with real exam interface" },
              { title: "Mess & Cafeteria", desc: "Hygienic food with balanced nutrition" },
            ].map((facility) => (
              <div key={facility.title} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">{facility.title}</h4>
                  <p className="text-sm text-muted-foreground">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
