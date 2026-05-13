"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnrollmentForm from "@/components/EnrollmentForm";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Zap, Phone, Mail } from "lucide-react";

export default function EnrollPage() {
  return (
    <div className="bg-[#F9FAF7] text-[#14532D] min-h-screen">
      <Navbar />

      <main className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-200/30 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-20 right-0 w-64 h-64 bg-yellow-300/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 border border-green-200 mb-8">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-green-700">Enrollment Open 2026</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter text-[#14532D]">
              Join the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 italic pr-4">Ecosystem</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Step into a new era of learning. Complete the application below to begin your journey with AgraShri.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-white border border-green-100 rounded-[3rem] p-10 md:p-14 shadow-[0_8px_40px_rgba(22,163,74,0.08)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <ShieldCheck className="w-8 h-8 text-green-200" />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#14532D] mb-8">Application Form</h2>
              <EnrollmentForm />
            </motion.div>

            {/* Info Side */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="p-8 rounded-[2rem] bg-gradient-to-br from-green-600 to-green-800 text-white shadow-[0_8px_30px_rgba(22,163,74,0.3)]"
              >
                <Zap className="text-yellow-400 mb-5 w-8 h-8" />
                <h3 className="text-xl font-black mb-3 uppercase">Fast Track</h3>
                <p className="text-green-200 text-sm leading-relaxed mb-6">Our advisors review applications within 24 hours of submission.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Priority Review
                  </div>
                  <div className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Interview Slot
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="p-8 rounded-[2rem] bg-white border border-green-100 shadow-sm"
              >
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-green-600 font-black mb-1">Phone</p>
                      <p className="text-lg font-black text-[#14532D]">076 828 5067</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-yellow-600 font-black mb-1">Email</p>
                      <p className="text-sm font-black text-[#14532D] break-all">agrashri.info@gmail.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="p-8 rounded-[2rem] bg-yellow-400 shadow-sm"
              >
                <p className="text-yellow-900 font-black uppercase text-sm tracking-widest mb-2">Office Hours</p>
                <p className="text-yellow-800 font-bold text-lg">09:00 am – 04:00 pm</p>
                <p className="text-yellow-700 text-xs mt-1">Monday – Saturday</p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
