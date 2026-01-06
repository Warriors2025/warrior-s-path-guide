import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", "NDA", "CDS", "AFCAT", "Navy", "Campus Life"];

const galleryItems = [
  { id: 1, category: "NDA", title: "NDA 150 Batch Selections", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop", selections: 15 },
  { id: 2, category: "Campus Life", title: "Physical Training Session", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop" },
  { id: 3, category: "CDS", title: "CDS II 2023 Toppers", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop", selections: 12 },
  { id: 4, category: "Campus Life", title: "Independence Day Celebration", image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop" },
  { id: 5, category: "AFCAT", title: "AFCAT 2024 Selections", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&h=400&fit=crop", selections: 8 },
  { id: 6, category: "Campus Life", title: "SSB Mock Interview", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop" },
  { id: 7, category: "Navy", title: "Navy SSR Selections", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&h=400&fit=crop", selections: 20 },
  { id: 8, category: "NDA", title: "NDA 149 Achievers", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop", selections: 18 },
  { id: 9, category: "Campus Life", title: "Group Discussion Practice", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" },
  { id: 10, category: "CDS", title: "CDS I 2024 Winners", image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&h=400&fit=crop", selections: 14 },
  { id: 11, category: "Campus Life", title: "Outdoor Training", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop" },
  { id: 12, category: "AFCAT", title: "Flying Branch Selections", image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=600&h=400&fit=crop", selections: 5 },
];

const successStories = [
  { name: "Lt. Arjun Patel", exam: "NDA 148", branch: "Indian Army", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&face" },
  { name: "Fg Offr. Sneha Reddy", exam: "AFCAT 2023", branch: "Indian Air Force", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&face" },
  { name: "Sub Lt. Karan Malhotra", exam: "CDS II 2023", branch: "Indian Navy", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&face" },
  { name: "Lt. Anjali Sharma", exam: "CDS I 2024", branch: "Indian Army (OTA)", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&face" },
  { name: "Fg Offr. Rohit Verma", exam: "AFCAT 2024", branch: "Indian Air Force", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&face" },
  { name: "Lt. Priya Nair", exam: "NDA 150", branch: "Indian Army", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&face" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrev = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex].id);
  };

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 military-gradient">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-military-gold font-semibold mb-4 uppercase tracking-wider text-sm">Gallery</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our <span className="text-military-gold">Success Stories</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Celebrating the achievements of our students who are now proudly serving in the Indian Armed Forces.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Achievers */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-8">Recent Achievers</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {successStories.map((story) => (
              <div key={story.name} className="text-center group">
                <div className="relative h-24 w-24 mx-auto mb-3 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-military-gold transition-all">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold text-sm">{story.name}</h4>
                <p className="text-xs text-muted-foreground">{story.exam}</p>
                <Badge variant="outline" className="mt-1 text-xs">{story.branch}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer rounded-xl overflow-hidden aspect-[4/3]"
                onClick={() => setSelectedImage(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <Badge className="mb-2 bg-military-gold text-primary">{item.category}</Badge>
                  <h3 className="text-primary-foreground font-semibold">{item.title}</h3>
                  {item.selections && (
                    <p className="text-sm text-primary-foreground/80">{item.selections} Selections</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <DialogTitle className="sr-only">{selectedItem?.title || "Gallery Image"}</DialogTitle>
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-military-gold"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {selectedItem && (
              <div className="rounded-xl overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="bg-card p-4">
                  <Badge className="mb-2">{selectedItem.category}</Badge>
                  <h3 className="font-bold text-lg">{selectedItem.title}</h3>
                  {selectedItem.selections && (
                    <p className="text-muted-foreground">{selectedItem.selections} Selections in this batch</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Gallery;
