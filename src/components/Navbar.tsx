import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Modules", href: "#modules" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" }];


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="font-display text-xl font-bold text-foreground tracking-wide">MEDIA Fashion
          <span className="text-gold-gradient">MEDIA</span> Fashion
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">

              {l.label}
            </a>
          )}
          






        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen &&
      <div className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in">
          {links.map((l) =>
        <a
          key={l.href}
          href={l.href}
          onClick={() => setIsOpen(false)}
          className="block py-3 font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">

              {l.label}
            </a>
        )}
          <a
          href="tel:9844514703"
          className="mt-2 flex items-center justify-center gap-2 bg-gold-gradient text-primary-foreground px-4 py-2 rounded-sm text-sm font-semibold">

            <Phone size={14} />
            9844514703
          </a>
        </div>
      }
    </nav>);

};

export default Navbar;