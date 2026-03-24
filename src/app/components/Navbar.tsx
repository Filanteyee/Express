import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "О КОМПАНИИ", href: "#about" },
    { label: "УСЛУГИ", href: "#services" },
    { label: "КЛИЕНТАМ", href: "#clients" },
    { label: "КОНТАКТЫ", href: "#contacts" },
    { label: "РАССЧИТАТЬ ПЕРЕВОЗКУ", href: "#calculator" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-[#25354e]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <div className="flex flex-col items-start leading-none">
                <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 800 }} className="text-white text-xs tracking-widest">EXPRESS</span>
                <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 800 }} className="text-white text-xs tracking-widest">TRANS SERVICE</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ fontFamily: "'Open Sans', sans-serif" }}
                className="text-white text-xs tracking-wider hover:text-[#89C946] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone + Lang */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 text-white">
              <Phone size={14} />
              <span style={{ fontFamily: "'Open Sans', sans-serif" }} className="text-sm">+7 (717) 298-00-50</span>
            </div>
            <span style={{ fontFamily: "'Open Sans', sans-serif" }} className="text-white text-sm">РУС</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#25354e] border-t border-white/10 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ fontFamily: "'Open Sans', sans-serif" }}
                className="block px-4 py-2 text-white text-sm hover:text-[#89C946] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-3 border-t border-white/10 mt-2 flex items-center gap-2 text-white">
              <Phone size={14} />
              <span style={{ fontFamily: "'Open Sans', sans-serif" }} className="text-sm">+7 (717) 298-00-50</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
