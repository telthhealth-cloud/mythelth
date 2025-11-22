import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Contact, Contact2Icon, ContactIcon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import telthLogo from "@/assets/telth-logo.svg";

const tabs = [
  { id: "community", label: "Community", path: "/" },
  { id: "carehome", label: "Care@Home", path: "/care-home" },
  { id: "personalized", label: "Personalized", path: "/personalized" },
  { id: "carepay", label: "Care Pay", path: "/care-pay" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const getCurrentTab = () => {
    const tab = tabs.find(t => t.path === location.pathname);
    return tab?.id || "community";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeTab = getCurrentTab();

  return (
    <header className={`sticky top-0 z-50 w-full glass-strong overflow-hidden transition-all duration-300 ${scrolled ? 'shadow-elegant' : ''} border-b border-white/20`}>
      <nav className="container flex h-20 items-center justify-between">
        <div className="flex items-center w-full justify-between gap-12">
          <NavLink to="/" className="transition-opacity hover:opacity-80">
            <img src={telthLogo} alt="Telth" className="h-8 w-auto" />
          </NavLink>
          
          <div className="hidden lg:flex items-center justify-center -gap-3">
              <ContactIcon/>
            <Button variant="ghost" asChild className="text-base">
              <NavLink to="/contact" activeClassName="text-primary font-semibold">Contact</NavLink>
            </Button>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Tab Navigation */}
      <div className="border-t border-white/10">
        <div className="container">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <NavLink
                key={tab.id}
                to={tab.path}
                className={cn(
                  "px-8 py-4 text-base font-semibold transition-all duration-300 whitespace-nowrap relative block",
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent-red to-gold rounded-t-full" />
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 glass">
          <div className="container flex flex-col gap-2 py-4">
            <Button variant="ghost" asChild className="justify-start text-base">
              <NavLink to="/about">About Telth</NavLink>
            </Button>
            <Button variant="ghost" asChild className="justify-start text-base">
              <NavLink to="/global-presence">Global Presence</NavLink>
            </Button>
            <Button variant="ghost" asChild className="justify-start text-base">
              <NavLink to="/partner">Partner With Us</NavLink>
            </Button>
            <Button variant="ghost" asChild className="justify-start text-base">
              <NavLink to="/careers">Careers</NavLink>
            </Button>
            <Button variant="ghost" asChild className="justify-start text-base">
              <NavLink to="/contact">Contact</NavLink>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
