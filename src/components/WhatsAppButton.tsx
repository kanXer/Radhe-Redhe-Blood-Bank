"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919140990376";
  const message = "Hi! I need blood donation assistance from Radhey Radhey Charitable Blood Bank.";

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-[60]">
      {isOpen && (
        <div className="mb-3 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-6 w-[calc(100vw-2rem)] sm:w-80 max-w-80 border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-start mb-3 sm:mb-4">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">Need Blood?</h4>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Chat with us on WhatsApp
              </p>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              Hi! We are available 24/7 for emergency blood requirements. How can
              we help you?
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
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110"
        aria-label={isOpen ? "Close chat" : "Chat on WhatsApp"}
      >
        <div className={`transition-all duration-300 ${isOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"} absolute`}>
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <div className={`transition-all duration-300 ${isOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"} absolute`}>
          <X className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
      </button>
    </div>
  );
}
