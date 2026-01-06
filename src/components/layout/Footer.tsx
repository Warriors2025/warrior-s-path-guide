import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Courses", href: "/courses" },
  { name: "Faculty", href: "/faculty" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

const courses = [
  { name: "NDA Coaching", href: "/courses" },
  { name: "CDS Preparation", href: "/courses" },
  { name: "AFCAT Training", href: "/courses" },
  { name: "Navy SSR/AA", href: "/courses" },
  { name: "Air Force X & Y Group", href: "/courses" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Academy Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-military-gold flex items-center justify-center">
                <span className="text-primary font-bold text-xl">DA</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Defence Academy</h3>
                <p className="text-sm text-primary-foreground/70">Shaping Future Officers</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              India's premier defence coaching institute with a proven track record of producing top-ranking officers for the Indian Armed Forces.
            </p>
            <div className="flex gap-3">
              <a href="#" className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-military-gold hover:text-primary flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-military-gold hover:text-primary flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-military-gold hover:text-primary flex items-center justify-center transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-military-gold hover:text-primary flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-military-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/80 hover:text-military-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-military-gold">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link to={course.href} className="text-sm text-primary-foreground/80 hover:text-military-gold transition-colors">
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-military-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-military-gold shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  123 Defence Colony, Near Cantonment Area, Lucknow - 226001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-military-gold shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-primary-foreground/80 hover:text-military-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-military-gold shrink-0" />
                <a href="mailto:info@defenceacademy.com" className="text-sm text-primary-foreground/80 hover:text-military-gold transition-colors">
                  info@defenceacademy.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-military-gold shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Mon - Sat: 7:00 AM - 8:00 PM<br />
                  Sunday: 8:00 AM - 2:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2024 Defence Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-military-gold transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-military-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
