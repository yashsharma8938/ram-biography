"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-xl py-3 shadow-[0_1px_0_rgba(92,64,51,0.08)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-editorial flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-walnut/20 flex items-center justify-center bg-walnut/5 group-hover:bg-walnut/10 transition-all duration-500">
              <span className="heading-cinematic text-[11px] text-walnut font-semibold tracking-wider">RS</span>
            </div>
            <div className="hidden sm:block">
              <div className="heading-cinematic text-[11px] tracking-[0.18em] text-charcoal">DR. RAM SHANKAR</div>
              <div className="text-[9px] tracking-[0.22em] text-bronze/70 font-manrope uppercase">Scientist · Innovator · Visionary</div>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0">
          {navigationLinks.slice(0, 7).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-manrope font-medium transition-all duration-300 hover:text-walnut ${
                pathname === link.href ? "text-walnut" : "text-slate"
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* More */}
          <div className="relative group">
            <button className="px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-manrope font-medium text-slate hover:text-walnut transition-all flex items-center gap-1">
              More
              <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute top-full right-0 mt-2 w-52 bg-warm-white/95 backdrop-blur-xl border border-border-subtle rounded-sm p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg shadow-black/5">
              {navigationLinks.slice(7).map((link) => (
                <Link key={link.href} href={link.href} className={`block px-4 py-2.5 text-[10px] uppercase tracking-[0.12em] font-manrope rounded-sm transition-all hover:bg-walnut/5 hover:text-walnut ${pathname === link.href ? "text-walnut bg-walnut/5" : "text-slate"}`}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-9 h-9 flex items-center justify-center text-charcoal" aria-label="Menu">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-ivory/98 backdrop-blur-xl transition-all duration-500 overflow-hidden ${mobileOpen ? "max-h-[80vh] border-b border-border-subtle" : "max-h-0"}`}>
        <div className="container-editorial py-6 space-y-1">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`block px-4 py-3 text-xs uppercase tracking-[0.14em] font-manrope transition-all hover:bg-walnut/5 rounded-sm ${pathname === link.href ? "text-walnut bg-walnut/5 font-medium" : "text-slate"}`}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
