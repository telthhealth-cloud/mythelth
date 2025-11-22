import { Link, NavLink } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
         <div className="hidden lg:flex items-center justify-center gap-1">
          
            <Button variant="ghost" asChild className="text-base">
              <NavLink to="/about" activeClassName="text-primary font-semibold">About Telth</NavLink>
            </Button>
            <Button variant="ghost" asChild className="text-base">
              <NavLink to="/global-presence" activeClassName="text-primary font-semibold">Global Presence</NavLink>
            </Button>
            <Button variant="ghost" asChild className="text-base">
              <NavLink to="/partner" activeClassName="text-primary font-semibold">Partner With Us</NavLink>
            </Button>
            <Button variant="ghost" asChild className="text-base">
              <NavLink to="/careers" activeClassName="text-primary font-semibold">Careers</NavLink>
            </Button>
           
          </div>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Telth</h3>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">Mission</Link>
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">Team</Link>
              <Link to="/careers" className="text-white/80 hover:text-white transition-colors">Careers</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Solutions</h3>
            <div className="flex flex-col gap-3">
              <Link to="/?tab=community" className="text-white/80 hover:text-white transition-colors">Community</Link>
              <Link to="/?tab=carehome" className="text-white/80 hover:text-white transition-colors">Care@Home</Link>
              <Link to="/?tab=personalized" className="text-white/80 hover:text-white transition-colors">Personalized</Link>
              <Link to="/?tab=carepay" className="text-white/80 hover:text-white transition-colors">Care Pay</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Partners</h3>
            <div className="flex flex-col gap-3">
              <Link to="/partner" className="text-white/80 hover:text-white transition-colors">Become Care Manager</Link>
              <Link to="/partner" className="text-white/80 hover:text-white transition-colors">Franchise</Link>
              <Link to="/partner" className="text-white/80 hover:text-white transition-colors">Provider</Link>
              <Link to="/partner" className="text-white/80 hover:text-white transition-colors">Government</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <div className="flex flex-col gap-3">
              <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
              <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Help Center</Link>
              <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Resources</Link>
              <Link to="/contact" className="text-white/80 hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/70 text-sm">© {new Date().getFullYear()} Telth Holdings Inc. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover-lift">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover-lift">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover-lift">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover-lift">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <select className="bg-white/10 text-white border border-white/20 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>
      </div>
    </footer>
  );
};
