"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [waOpen, setWaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phoneNumber = "917860810516";
  const message = "Hi! I need blood donation assistance from Radhey Radhey Charitable Blood Bank.";

  return (
    <>
      {/* WhatsApp button - always bottom-4, animate up when back to top shows */}
      <div
        className={`fixed right-4 sm:right-6 z-[60] transition-all duration-700 ease-in-out ${
          showTop ? "bottom-[88px] sm:bottom-[104px]" : "bottom-4 sm:bottom-6"
        }`}
      >
        {waOpen && (
          <div className="absolute bottom-full mb-2 right-0 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-4 sm:p-6 w-[calc(100vw-2rem)] sm:w-80 max-w-80 border border-gray-100 dark:border-zinc-700/50">
            <div className="mb-3 sm:mb-4">
              <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">Need Blood?</h4>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Chat with us on WhatsApp
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                Hi! We are available 24/7 for emergency blood requirements. How can we help you?
              </p>
            </div>
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] text-white text-center py-3 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors min-h-[44px] text-sm sm:text-base"
            >
              Open WhatsApp
            </a>
          </div>
        )}
        <button
          onClick={() => setWaOpen(!waOpen)}
          className="w-16 h-16 sm:w-20 sm:h-20 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 overflow-hidden"
          aria-label={waOpen ? "Close chat" : "Chat on WhatsApp"}
        >
          <MessageCircle className={`w-7 h-7 sm:w-8 sm:h-8 text-white transition-all duration-300 ${waOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`} />
          <X className={`w-7 h-7 sm:w-8 sm:h-8 text-white transition-all duration-300 absolute ${waOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`} />
        </button>
      </div>

      {/* Back to Top - fixed bottom-4, sirf jab dikhana ho */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[60] w-16 h-16 sm:w-20 sm:h-20 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 flex items-center justify-center animate-fade-in-up"
          aria-label="Back to top"
        >
          <ArrowUp className="w-7 h-7 sm:w-8 sm:h-8" />
        </button>
      )}
    </>
  );
}
