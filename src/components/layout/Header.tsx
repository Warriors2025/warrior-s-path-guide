import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Faculty", href: "/faculty" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Dark Green */}
      <div className="warriors-green-gradient text-white py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            {/* Logo and Title */}
            <Link to="/" className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-warriors-gold flex items-center justify-center border-4 border-warriors-gold shadow-lg">
                <span className="text-warriors-green font-bold text-2xl">DA</span>
              </div>
              <div className="text-center md:text-left">
                <h1 className="font-bold text-2xl md:text-3xl text-white tracking-wide">
                  WARRIORS' DEFENCE ACADEMY
                </h1>
              </div>
            </Link>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center gap-6 text-sm">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-warriors-gold transition-colors">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </a>
              <a href="mailto:info@defenceacademy.com" className="flex items-center gap-2 hover:text-warriors-gold transition-colors">
                <Mail className="h-4 w-4" />
                info@defenceacademy.com
              </a>
            </div>
          </div>

          {/* Hindi Tagline Banner */}
          <div className="mt-3 bg-warriors-maroon/90 rounded-lg px-6 py-2 text-center">
            <p className="text-white">
              रक्षा क्षेत्र में सर्वाधिक <span className="text-warriors-gold font-bold">Selection</span> देने वाला एक मात्र <span className="text-warriors-gold font-bold italic">Defence</span> संस्थान
            </p>
          </div>

          {/* English Tagline */}
          <p className="text-warriors-gold text-center mt-2 text-sm font-medium tracking-wider">
            YOUR EFFORTS + OUR DIRECTION = DEFENCE OFFICER
          </p>
        </div>
      </div>

      {/* Main Navigation - White background */}
      <nav className="bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-3">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="px-5 py-2 text-sm font-semibold text-warriors-green hover:text-warriors-maroon transition-colors uppercase tracking-wide"
                activeClassName="text-warriors-maroon border-b-2 border-warriors-maroon"
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild className="bg-warriors-maroon hover:bg-warriors-maroon/90 text-white font-semibold">
              <Link to="/contact">Enquire Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border animate-fade-in bg-white">
            <div className="container py-4 space-y-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-3 text-sm font-medium rounded-md hover:bg-secondary text-warriors-green"
                  activeClassName="bg-secondary text-warriors-maroon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button asChild className="w-full mt-4 bg-warriors-maroon hover:bg-warriors-maroon/90">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Enquire Now</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
