"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Philosophy", href: "/#about" },
  { name: "Courses", href: "/#courses" },
  { name: "Library", href: "/#library" },
  { name: "Community", href: "/#community" },
  { name: "Contact", href: "#contact" },
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
    <nav className="fixed top-0 w-full z-[100] transition-all duration-500 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`
          flex items-center justify-between h-20 px-8 rounded-full transition-all duration-500
          ${scrolled 
            ? "bg-white/90 backdrop-blur-2xl border border-green-100 shadow-[0_8px_40px_rgba(22,163,74,0.12)]" 
            : "bg-white/70 backdrop-blur-md border border-green-50 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"}
        `}>
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-16 h-16 overflow-hidden rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/logo.png" 
                  alt="AgraShri Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter text-[#14532D]">AgraShri</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-green-700 transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            <Link
              href="/enroll"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white text-xs font-black uppercase tracking-widest hover:shadow-[0_4px_20px_rgba(22,163,74,0.4)] hover:scale-105 transition-all"
            >
              Enroll Now
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-2xl bg-green-50 border border-green-100 text-green-700"
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[200] flex flex-col p-12 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                <div className="relative w-16 h-16 overflow-hidden rounded-xl">
                  <Image 
                    src="/logo.png" 
                    alt="AgraShri Logo" 
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-black uppercase tracking-tighter text-[#14532D]">AgraShri</span>
              </Link>
              <button onClick={() => setIsOpen(false)} className="p-4 rounded-2xl bg-green-50 border border-green-100 text-green-700">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-black uppercase tracking-tighter text-[#14532D] hover:text-green-600 transition-colors border-b border-green-50 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/enroll"
                className="mt-4 w-full py-5 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl text-center font-black uppercase tracking-widest text-white shadow-[0_8px_30px_rgba(22,163,74,0.3)]"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
