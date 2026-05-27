import Link from "next/link";
import { navigationLinks } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-subtle bg-parchment/50">
      <div className="container-editorial py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="heading-cinematic text-lg tracking-[0.1em] text-charcoal mb-2">
              Dr. Ram Shankar
            </div>
            <div className="heading-cinematic text-sm tracking-[0.1em] text-bronze mb-6">
              Upadhayaya
            </div>
            <p className="text-sm text-slate leading-relaxed font-manrope max-w-xs">
              A lifetime devoted to science, innovation, wellness, and the service of humanity.
            </p>
          </div>

          {/* Explore */}
          <div>
            <div className="text-label mb-6">Explore</div>
            <div className="space-y-3">
              {navigationLinks.slice(0, 5).map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-slate hover:text-walnut transition-colors font-manrope">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* More */}
          <div>
            <div className="text-label mb-6">More</div>
            <div className="space-y-3">
              {navigationLinks.slice(5, 10).map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-slate hover:text-walnut transition-colors font-manrope">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="text-label mb-6">Connect</div>
            <div className="space-y-3 text-sm text-slate font-manrope">
              <p>Genome Valley, Hyderabad</p>
              <p>Telangana, India</p>
              <Link href="/contact" className="block text-walnut hover:text-espresso transition-colors mt-4">
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-ash font-manrope tracking-wide">
            © {currentYear} Dr. Ram Shankar Upadhayaya. All rights reserved.
          </div>
          <div className="text-xs text-ash font-manrope tracking-wide italic">
            &ldquo;Science in service of humanity&rdquo;
          </div>
        </div>
      </div>
    </footer>
  );
}
