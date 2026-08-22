"use client";

import { useState } from "react";
import { Menu, X, Heart, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { scrollToSection } from "./SmoothScroll";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#donate", label: "Donate" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const handleNav = (href: string) => {
    setIsOpen(false);
    scrollToSection(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-zinc-900 shadow-md dark:shadow-zinc-900/50 transition-colors">
      {/* Top bar */}
      <div className="bg-primary text-white text-xs sm:text-sm py-1.5 sm:py-2">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <span className="flex items-center gap-1 shrink-0">
              <Phone className="w-3 h-3" />
              24/7 Emergency
            </span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline truncate">Sikariganj, Gorakhpur, UP - 273213</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <Heart className="w-3 h-3 animate-pulse" />
            <span>Charitable Blood Bank</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Logo + Name - always visible */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30">
              <span className="text-white font-extrabold text-lg sm:text-xl" style={{ fontFamily: "'Poppins', sans-serif" }}>RR</span>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-sm sm:text-base md:text-lg text-secondary dark:text-white leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Radhey Radhey
              </h1>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-muted dark:text-gray-400 leading-tight">
                Charitable Blood &amp; Component Centre
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Theme Toggle + Mobile Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <button
              onClick={() => handleNav("#contact")}
              className="hidden sm:inline-flex bg-primary text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-red-500/30"
            >
              Request Blood
            </button>

            {/* Dark/Light Toggle */}
            <button
              onClick={toggle}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden mt-3 pb-4 border-t dark:border-gray-700">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary-light dark:hover:bg-gray-800 hover:text-primary rounded-lg transition-colors text-left min-h-[44px] flex items-center"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#contact")}
                className="mx-4 mt-3 bg-primary text-white px-5 py-3 rounded-full text-sm font-semibold text-center hover:bg-primary-dark transition-colors min-h-[44px]"
              >
                Request Blood Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
