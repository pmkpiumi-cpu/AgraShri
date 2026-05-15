"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-md"
        >
          <div className="bg-white/80 backdrop-blur-xl border border-green-100 rounded-[2rem] p-6 shadow-2xl shadow-green-900/10 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl" />
            
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center shrink-0">
                <Cookie className="w-6 h-6 text-green-600" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-black text-[#14532D] uppercase tracking-tight mb-1">
                  Cookie <span className="text-green-500 italic">Policy</span>
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  We use cookies to enhance your learning experience and analyze our traffic. 
                  By clicking "Accept", you consent to our use of cookies.
                </p>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-green-700 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" /> Accept
                  </button>
                  <button
                    onClick={handleDecline}
                    className="px-6 py-3 bg-gray-100 text-gray-500 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-all"
                  >
                    Decline
                  </button>
                </div>
              </div>

              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
