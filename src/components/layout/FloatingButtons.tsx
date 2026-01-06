import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20defence%20coaching%20courses"
        target="_blank"
        rel="noopener noreferrer"
        className="group h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute right-16 bg-foreground text-background px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919876543210"
        className="group h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Call Us"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-16 bg-foreground text-background px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Now
        </span>
      </a>
    </div>
  );
}
