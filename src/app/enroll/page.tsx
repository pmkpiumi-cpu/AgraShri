"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnrollmentForm from "@/components/EnrollmentForm";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Zap } from "lucide-react";

export default function EnrollPage() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-blue-500/50">
      <Navbar />
      
      <main className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">Enrollment Open 2026</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter italic">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 pr-8">Ecosystem</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Step into a new era of learning. Complete the secure application below to begin your transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-zinc-900/50 border border-white/5 rounded-[3rem] p-10 md:p-16 backdrop-blur-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <ShieldCheck className="w-8 h-8 text-blue-500/20" />
              </div>
              <EnrollmentForm />
            </motion.div>

            {/* Info Side */}
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="p-10 rounded-[3rem] bg-gradient-to-br from-blue-600/20 to-indigo-900/20 border border-white/5 backdrop-blur-xl"
              >
                <Zap className="text-blue-400 mb-6 w-8 h-8" />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Fast Track</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">Our advisors review applications within 24 hours of submission.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Priority Review
                  </div>
                  <div className="flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Interview Slot
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="p-10 rounded-[3rem] bg-zinc-900 border border-white/5"
              >
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-8">Direct Access</h3>
                <div className="space-y-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-blue-500 font-black mb-2">Global Support</p>
                    <p className="text-xl font-black text-white italic">076 828 5067</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-blue-500 font-black mb-2">Email Desk</p>
                    <p className="text-lg font-black text-white">agrashri.info@gmail.com</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

