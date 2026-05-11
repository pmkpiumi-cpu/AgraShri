"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, Users, HeartPulse, Rocket, Shield, Target, Zap, Globe, Cpu, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRef, useState, useEffect, Suspense } from "react";

const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

const fadeInUpVariants = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black z-0 py-20">
      {/* 3D Mascot - Immediate Client Activation */}
      <div className="absolute inset-0 z-0 bg-black flex items-center justify-center pointer-events-none">
        <div className="w-full h-full transform translate-y-[-10%] md:translate-y-[-15%] scale-[1.5] md:scale-125">
          <Hero3D />
        </div>
      </div>

      <motion.div 
        initial="initial"
        animate="whileInView"
        variants={fadeInUpVariants}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center pointer-events-none text-center pt-32"
      >
        <motion.div
          className="px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-xl mb-6 flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]" />
          <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">Next Gen Education</span>
        </motion.div>

        <h1 className="text-5xl sm:text-7xl md:text-[8.5rem] font-black leading-[0.85] tracking-tight uppercase mb-10 px-4">
          <span className="block text-white/95">Redefining</span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent italic pb-4 pr-8">Excellence</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed tracking-wide">
          AgraShri Education Institute is a modern learning and counseling platform dedicated to academic excellence, 
          personal growth, career development, and student wellbeing.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-8 pointer-events-auto">
          <Link 
            href="/enroll" 
            className="group relative px-10 py-5 bg-white text-black rounded-full font-black text-lg overflow-hidden transition-all hover:scale-105 shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-3">
              Join the Elite <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </Link>
          <Link 
            href="#expertise" 
            className="group px-10 py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3 text-white"
          >
            Explore Ecosystem <Globe className="w-5 h-5 group-hover:rotate-180 transition-transform duration-1000" />
          </Link>
        </div>
      </motion.div>

      {/* Atmospheric Depth Gradients */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-blue-500/50 overflow-x-hidden">
      <Navbar />
      
      <HeroSection />

      <section id="expertise" className="py-32 px-6 max-w-7xl mx-auto bg-black">
        <motion.div 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.5em] mb-8">Our Ecosystem</h2>
          <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            The Bento of <br /> <span className="text-gray-600">Innovation</span>
          </h3>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-6 h-auto md:h-[800px]"
        >
          <motion.div 
            variants={fadeInUpVariants}
            className="md:col-span-2 md:row-span-2 group relative rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/5 p-12 flex flex-col justify-end"
          >
            <img src="/images/academics.png" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="relative z-10">
              <div className="p-4 rounded-2xl bg-blue-600 w-fit mb-8 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-4xl font-black mb-6 uppercase italic">Elite Academics</h4>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">Subject-based classes, exam preparation, and professional courses conducted by qualified lecturers from Grade 1 to A/L.</p>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUpVariants}
            className="md:col-span-2 group relative rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/5 p-10 flex items-center justify-between"
          >
            <img src="/images/counseling.png" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            <div className="relative z-10">
              <h4 className="text-3xl font-black mb-4 uppercase">Counseling 2.0</h4>
              <p className="text-gray-300 max-w-[200px]">Professional support for stress management, academic pressure, and emotional wellbeing.</p>
            </div>
            <HeartPulse className="w-32 h-32 text-purple-500/20 absolute -right-4 -bottom-4 group-hover:scale-125 transition-transform duration-700" />
          </motion.div>

          <motion.div 
            variants={fadeInUpVariants}
            className="md:col-span-1 group relative rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/5 p-10 flex flex-col justify-between"
          >
            <Users className="w-10 h-10 text-indigo-400" />
            <div>
              <h4 className="text-2xl font-black mb-2 uppercase">Community</h4>
              <p className="text-sm text-gray-500">Network with teachers, mentors, and professionals in our forum.</p>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUpVariants}
            className="md:col-span-1 group relative rounded-[3rem] overflow-hidden bg-blue-600 border border-blue-400/20 p-10 flex flex-col justify-between"
          >
            <Star className="w-10 h-10 text-white fill-white" />
            <div className="text-white">
              <h4 className="text-2xl font-black mb-2 uppercase tracking-tighter">Quality First</h4>
              <p className="text-sm opacity-80">Teacher quality assurance & student monitoring.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="py-32 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="relative"
          >
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full" />
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.5em] mb-8">The Legacy</h2>
            <h3 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-12">
              Discover <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 italic pr-8">Our Story</span>
            </h3>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
              AgraShri Education Institute is a complete educational development platform. 
              We empower every learner from childhood to adulthood with knowledge, confidence, 
              and life skills to build meaningful futures.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              {[
                { label: "Academic Excellence", icon: <Shield className="w-5 h-5" /> },
                { label: "Progress Tracking", icon: <Target className="w-5 h-5" /> },
                { label: "Career Guidance", icon: <Zap className="w-5 h-5" /> },
                { label: "Mental Wellness", icon: <HeartPulse className="w-5 h-5" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <span className="font-bold uppercase text-[10px] tracking-widest text-gray-300">{item.label}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-flex items-center gap-4 text-white font-black tracking-widest uppercase text-xs hover:gap-6 transition-all">
              Initialize Blueprint <ArrowRight className="w-4 h-4 text-blue-500" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[800px] rounded-[4rem] overflow-hidden group shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            
            <div className="absolute top-12 right-12 p-10 rounded-3xl bg-blue-600 shadow-2xl max-w-xs">
              <p className="text-white font-black uppercase italic text-2xl mb-4">Our Vision</p>
              <p className="text-blue-100 text-sm leading-relaxed font-medium">To empower every learner from childhood to adulthood with knowledge and life skills.</p>
            </div>

            <div className="absolute bottom-12 left-12 p-10 rounded-3xl bg-black/40 backdrop-blur-3xl border border-white/10 max-w-sm">
              <Sparkles className="text-blue-500 mb-4" />
              <p className="text-white font-black uppercase italic text-2xl mb-4">Our Mission</p>
              <p className="text-gray-400 text-sm leading-relaxed">To provide quality education while nurturing confident, skilled, and emotionally healthy individuals.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.5em] mb-8">The Advantage</h2>
            <h3 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-12">
              Why Choose <br /> <span className="text-gray-600 italic">AgraShri?</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { title: "Beyond Tuition", desc: "More than just a center, we are a growth platform." },
                { title: "Expert Support", desc: "Professional counseling and career guidance." },
                { title: "Quality Control", desc: "Teacher quality assurance & progress tracking." },
                { title: "Modern Hub", desc: "Safe environment with elite learning resources." }
              ].map((item, i) => (
                <div key={i} className="group">
                  <h4 className="text-white font-black uppercase italic mb-2 group-hover:text-blue-500 transition-colors">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-2 gap-4 h-[300px] sm:h-[500px]"
          >
            <div className="rounded-[3rem] overflow-hidden border border-white/5 relative group">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="rounded-[3rem] overflow-hidden border border-white/5 relative group mt-12">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="library" className="py-32 bg-zinc-950 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-[400px] sm:h-[600px] rounded-[4rem] overflow-hidden order-2 lg:order-1 shadow-2xl"
          >
            <img src="/images/library.png" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent" />
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="order-1 lg:order-2"
          >
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.5em] mb-8">The Hub</h2>
            <h3 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-12">
              Learning <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 italic pr-8">Sanctuary</span>
            </h3>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
              Our library facilities provide a dedicated learning space, extensive reading resources, and quiet study areas for independent research and focused growth.
            </p>
            <div className="flex items-center gap-8">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center flex-1">
                <p className="text-3xl font-black text-white mb-2">10k+</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Resources</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center flex-1">
                <p className="text-3xl font-black text-white mb-2">24/7</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Digital Access</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="community" className="py-32 px-6 max-w-7xl mx-auto bg-black">
        <motion.div 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="text-center mb-24 relative p-10 md:p-20 rounded-[3rem] md:rounded-[5rem] overflow-hidden bg-zinc-900/50 border border-white/5"
        >
          <img src="/images/community.png" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="relative z-10">
            <h2 className="text-sm font-bold text-purple-500 uppercase tracking-[0.5em] mb-8">The Collective</h2>
          <h3 className="text-4xl sm:text-5xl md:text-[10rem] font-black uppercase tracking-tighter leading-none mb-12">
            Build Your <span className="text-gray-600">Future</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-16">
            At AgraShri, students network with teachers, mentors, professionals, and peers through our exclusive community platform.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {["Educational Forums", "Networking Events", "Volunteer Activities", "Youth Leadership", "Alumni Connections"].map((tag) => (
              <div key={tag} className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md font-black uppercase text-[10px] tracking-[0.3em] hover:bg-blue-600 hover:border-blue-500 transition-all cursor-default text-white">
                {tag}
              </div>
            ))}
          </div>
          </div>
        </motion.div>
      </section>

      <section id="courses" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8"
          >
            <div>
              <h2 className="text-sm font-bold text-pink-500 uppercase tracking-[0.5em] mb-6">Our Blueprints</h2>
              <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">Mastery <br /> Levels</h3>
            </div>
            <p className="text-gray-500 max-w-xs font-medium uppercase text-xs tracking-widest leading-loose">
              Every program is a curated journey designed for specific milestones in life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                lvl: "01", 
                title: "School Titans", 
                items: ["Scholarship Prep", "O/L & A/L Classes", "Language Classes", "Career Training"],
                gradient: "from-blue-600 to-cyan-500",
                img: "/images/level1.png"
              },
              { 
                lvl: "02", 
                title: "Uni Pioneers", 
                items: ["Research Guidance", "Skill Development", "Presentation Training", "Language Classes"],
                gradient: "from-purple-600 to-pink-500",
                img: "/images/level2.png"
              },
              { 
                lvl: "03", 
                title: "Adult Visionaries", 
                items: ["Language Classes", "Professional Courses", "Personal Growth", "Networking Events"],
                gradient: "from-orange-600 to-yellow-500",
                img: "/images/level3.png"
              }
            ].map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative h-[600px] rounded-[4rem] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500"
              >
                <img src={p.img} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
                  <div className={`text-6xl font-black opacity-20 mb-4 bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent group-hover:opacity-100 transition-opacity`}>{p.lvl}</div>
                  <h4 className="text-4xl font-black text-white uppercase italic mb-6 group-hover:translate-x-2 transition-transform">{p.title}</h4>
                  <ul className="mb-10 space-y-4">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-200 font-bold uppercase text-[10px] tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/enroll" className="inline-flex items-center gap-4 text-white font-bold tracking-widest uppercase text-xs group-hover:gap-6 transition-all">
                    Initialize Journey <ArrowRight className="w-5 h-5 text-blue-500" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-black">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl mx-auto relative rounded-[3rem] md:rounded-[5rem] bg-zinc-950 border border-white/10 p-12 md:p-24 text-center overflow-hidden"
        >
          <img src="/images/future.png" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-[3000ms]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-12">
              The Future <br /> <span className="text-gray-600">Awaits You</span>
            </h2>
            <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-light">
              Don't just observe the future. Build it. Enrollment for the 2026 
              Academic Year is now open for exclusive applicants.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
              <Link href="/enroll" className="px-16 py-8 bg-blue-600 rounded-full font-black text-2xl hover:bg-blue-500 hover:scale-110 active:scale-95 transition-all shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                Secure Spot
              </Link>
              <Link href="/contact" className="px-16 py-8 rounded-full border border-white/10 backdrop-blur-md font-black text-2xl hover:bg-white/5 transition-all">
                Talk to Advisor
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
