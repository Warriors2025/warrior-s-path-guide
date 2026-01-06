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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-military-gold transition-colors">
              <Phone className="h-4 w-4" />
              +91 98765 43210
            </a>
            <a href="mailto:info@defenceacademy.com" className="flex items-center gap-2 hover:text-military-gold transition-colors">
              <Mail className="h-4 w-4" />
              info@defenceacademy.com
            </a>
          </div>
          <div className="text-military-gold font-semibold">
            🎖️ India's Premier Defence Coaching Institute
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">DA</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-lg text-primary leading-tight">Defence Academy</h1>
            <p className="text-xs text-muted-foreground">Shaping Future Officers</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-secondary"
              activeClassName="text-primary bg-secondary"
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Enquire Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-secondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border animate-fade-in">
          <div className="container py-4 space-y-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="block px-4 py-3 text-sm font-medium rounded-md hover:bg-secondary"
                activeClassName="bg-secondary text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <Button asChild className="w-full mt-4 bg-accent hover:bg-accent/90">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Enquire Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
