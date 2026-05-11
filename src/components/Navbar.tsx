"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Ecosystem", href: "/" },
  { name: "Philosophy", href: "/#about" },
  { name: "Blueprints", href: "/#courses" },
  { name: "Library", href: "/#library" },
  { name: "Community", href: "/#community" },
  { name: "Enrollment", href: "/enroll" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-[100] transition-all duration-500 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`
          flex items-center justify-between h-20 px-8 rounded-full transition-all duration-500
          ${scrolled ? "bg-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]" : "bg-transparent"}
        `}>
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter text-white">AgraShri</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
            
            <Link 
              href="/login" 
              className="px-8 py-3 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-xl active:scale-95"
            >
              Student Portal
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-32 left-6 right-6 p-8 rounded-[3rem] bg-black/90 backdrop-blur-3xl border border-white/10 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-black uppercase tracking-tighter text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/enroll" 
                className="mt-4 w-full py-5 bg-blue-600 rounded-2xl text-center font-black uppercase tracking-widest text-white shadow-2xl shadow-blue-500/20"
                onClick={() => setIsOpen(false)}
              >
                Portal Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

