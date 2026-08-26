import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-red-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-red-500/30">
                <span className="text-white font-extrabold text-sm sm:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>RR</span>
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>Radhey Radhey</h3>
                <p className="text-[10px] sm:text-xs text-white/60">
                  Charitable Blood &amp; Component Centre
                </p>
              </div>
            </div>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
              A charitable blood bank committed to saving lives through safe,
              reliable blood bank services in Gorakhpur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "#services", label: "Services" },
                { href: "#donate", label: "Donate Blood" },
                { href: "#testimonials", label: "Testimonials" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 hover:text-primary transition-colors text-xs sm:text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2.5 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-white/70 text-xs sm:text-sm">
                  Sikariganj, Jaddupatti, Sikariganj,
                  <br />
                  Imlidih Bujurg, UP 273213
                </span>
              </li>
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                <span className="text-white/70 text-xs sm:text-sm">+91 91409 90376</span>
              </li>
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                <span className="text-white/70 text-xs sm:text-sm break-all">radheyradheybloodcentre@gmail.com</span>
              </li>
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                <span className="text-white/70 text-xs sm:text-sm">Open 24/7, All Days</span>
              </li>
            </ul>
          </div>

          {/* Why Donate */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Why Donate Blood?</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-1" />
                Save up to 3 lives with one donation
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-1" />
                Safe and hygienic process
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-1" />
                Health checkup after donation
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-1" />
                Professional medical staff
              </li>
            </ul>
            <a
              href="#donate"
              className="inline-block mt-5 sm:mt-6 bg-primary text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-primary-dark transition-colors min-h-[44px] leading-[44px]"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-white/50 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Radhey Radhey Charitable Blood &amp;
            Component Centre. All rights reserved.
          </p>
          <p className="text-white/50 text-xs sm:text-sm">
            Powered by{" "}
            <a
              href="https://thenexusdigital.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors font-semibold"
            >
              Nexus Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
