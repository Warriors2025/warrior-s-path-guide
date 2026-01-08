import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 warriors-green-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 h-40 w-40 bg-warriors-gold/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 h-60 w-60 bg-warriors-gold/20 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your <span className="text-warriors-gold">Defence Career?</span>
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards serving your nation. Join our upcoming batch and get trained by the best faculty in the country.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-warriors-gold text-warriors-green hover:bg-warriors-yellow font-bold text-lg">
              <Link to="/contact">
                Enquire Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold">
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                Call: +91 98765 43210
              </a>
            </Button>
          </div>

          <p className="mt-8 text-warriors-gold font-medium">
            📍 New batch starting every month • Limited seats available
          </p>
        </div>
      </div>
    </section>
  );
}
