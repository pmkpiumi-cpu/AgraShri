"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import StatsBanner from "@/components/StatsBanner";
import ProgramFinder from "@/components/ProgramFinder";
import Timetable from "@/components/Timetable";
import Testimonials from "@/components/Testimonials";
import CursorSpotlight from "@/components/CursorSpotlight";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Users, HeartPulse, GraduationCap, Shield, Target, Zap, Globe, Cpu, Star, Sparkles, X } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef, Suspense, useState, useEffect } from "react";

const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.7, ease: "easeOut" as const }
} as const;

const libraryEvents = [
  {
    id: 1,
    title: "Philosophy of Fearmorhosis",
    desc: "One Day Philosophy Forum about 'Life, Society and Nation are Governed by Fear' conducted by Mr. Desh Subba.",
    tag: "Philosophy Forum",
    image: "/images/events/philosophy-fear-1.jpeg"
  },
  {
    id: 2,
    title: "Mindfulness in Daily Life",
    desc: "Integrating Mindfulness into Daily Life for Stress Management by Venerable Keppetipola Gnanawimala Thero.",
    tag: "Buddhist Psychology",
    image: "/images/events/buddhist-psych-2.jpeg"
  },
  {
    id: 3,
    title: "Empowering Students",
    desc: "Seminar Series for Ordinary Level Examination at Dedugala Central College.",
    tag: "Seminar",
    image: "/images/events/empowering-students-1.jpeg"
  }
];

const EventsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isJump, setIsJump] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof libraryEvents[0] | null>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Clone the first few items to the end for a seamless loop
  const displayEvents = [...libraryEvents, ...libraryEvents.slice(0, 3)];

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current && trackRef.current.children.length > 0) {
        setCardWidth((trackRef.current.children[0] as HTMLElement).offsetWidth + 24);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!selectedImage) {
        setActiveIndex((current) => current + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [selectedImage]);

  useEffect(() => {
    if (activeIndex === libraryEvents.length) {
      const timeout = setTimeout(() => {
        setIsJump(true);
        setActiveIndex(0);
        setTimeout(() => setIsJump(false), 50);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex]);

  return (
    <div className="max-w-7xl mx-auto px-6 relative">
      <motion.div {...fadeUp} className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#14532D]">Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 italic px-4 py-2">Forums</span></h2>
          <p className="text-gray-500 mt-4 max-w-lg font-light leading-relaxed">Explore our latest philosophy forums, psychological stress management workshops, and student empowerment seminars.</p>
        </div>
      </motion.div>

      <div className="overflow-hidden -mx-4 px-4 py-6">
        <motion.div 
          ref={trackRef}
          animate={{ x: -activeIndex * cardWidth }}
          transition={isJump ? { duration: 0 } : { duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="flex gap-6"
        >
          {displayEvents.map((ev, idx) => (
            <motion.div
              key={`${ev.id}-${idx}`}
              onClick={() => setSelectedImage(ev)}
              className="min-w-[85vw] sm:min-w-[400px] h-[500px] rounded-[2rem] overflow-hidden relative group shadow-xl border border-green-50 shrink-0 bg-black/5 cursor-pointer"
            >
              <Image 
                src={ev.image} 
                alt={`${ev.title} - AgraShri Educational Event`} 
                fill
                className="absolute inset-0 w-full h-full object-cover scale-[1.15] group-hover:scale-[1.25] transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14532D] via-[#14532D]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="bg-yellow-400 text-green-900 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full w-fit mb-4 shadow-lg shadow-yellow-400/20">
                  {ev.tag}
                </div>
                <h3 className="text-2xl font-black text-white mb-3 leading-tight">{ev.title}</h3>
                <p className="text-green-50 text-sm leading-relaxed opacity-90 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {ev.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center items-center gap-3 mt-4 mb-8">
        {libraryEvents.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              (activeIndex % libraryEvents.length) === idx ? "w-8 h-2.5 bg-yellow-400" : "w-2.5 h-2.5 bg-green-200 hover:bg-green-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative flex-1 min-h-0 bg-black/5 flex items-center justify-center overflow-hidden">
                <Image
                  src={selectedImage.image}
                  alt={`${selectedImage.title} Full View`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 md:p-8 bg-white shrink-0">
                <div className="bg-yellow-400 text-green-900 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full w-fit mb-4">
                  {selectedImage.tag}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#14532D] mb-3">{selectedImage.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-3xl">{selectedImage.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F0F9F4] via-[#F9FAF7] to-white z-0 py-20">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="w-full h-full">
        <Hero3D />
      </div>
    </div>

    {/* Slowly Drifting & Rotating Gradient Blobs */}
    <div className="absolute top-1/3 left-1/4 w-[750px] h-[750px] bg-green-400/10 blur-[120px] rounded-full pointer-events-none animate-blob-slow" />
    <div className="absolute bottom-1/4 right-1/4 w-[650px] h-[650px] bg-yellow-300/10 blur-[100px] rounded-full pointer-events-none animate-blob-medium" />

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center pointer-events-none text-center pt-32"
    >
      <div className="relative flex flex-col items-center w-full">
        
        {/* Floating Glass Widget 1: Achievers Count (Left) */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute left-4 lg:left-[-120px] top-[140px] p-4 bg-white/75 backdrop-blur-xl border border-green-100/30 rounded-3xl flex items-center gap-4 shadow-lg shadow-green-950/5 hover:shadow-xl hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default hidden md:flex max-w-[220px]"
        >
          <div className="p-3 rounded-2xl bg-green-500 text-white shadow-[0_4px_12px_rgba(34,197,94,0.3)] shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="text-[9px] text-gray-400 font-black uppercase tracking-[0.15em] mb-1">Community</p>
            <p className="text-[12px] font-black text-[#14532D] uppercase leading-tight">1,500+ Achievers</p>
          </div>
        </motion.div>

        {/* Floating Glass Widget 2: Quality Index (Right) */}
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
          className="absolute right-4 lg:right-[-120px] top-[200px] p-4 bg-white/75 backdrop-blur-xl border border-green-100/30 rounded-3xl flex items-center gap-4 shadow-lg shadow-green-950/5 hover:shadow-xl hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default hidden md:flex max-w-[220px]"
        >
          <div className="p-3 rounded-2xl bg-yellow-500 text-green-900 shadow-[0_4px_12px_rgba(250,204,21,0.3)] shrink-0">
            <Star className="w-5 h-5 fill-current" />
          </div>
          <div className="text-left">
            <p className="text-[9px] text-gray-400 font-black uppercase tracking-[0.15em] mb-1">Academy Quality</p>
            <p className="text-[12px] font-black text-[#14532D] uppercase leading-tight">98% Success Rate</p>
          </div>
        </motion.div>

        {/* Floating Glass Widget 3: Wellness (Bottom Left) */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
          className="absolute left-[-20px] lg:left-[-70px] bottom-[30px] p-3.5 bg-white/75 backdrop-blur-xl border border-green-100/30 rounded-2xl flex items-center gap-3 shadow-md hover:scale-105 transition-transform pointer-events-auto cursor-default hidden lg:flex"
        >
          <div className="p-2 rounded-lg bg-green-100 text-green-600 shrink-0">
            <HeartPulse className="w-4.5 h-4.5" />
          </div>
          <span className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em]">Counseling 2.0</span>
        </motion.div>

        {/* High-Impact Badge */}
        <motion.div className="px-6 py-2.5 rounded-full bg-green-50/80 border border-green-200/50 mb-8 flex items-center gap-3 shadow-sm hover:border-yellow-400/60 transition-all duration-500 pointer-events-auto cursor-default animate-pulse">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-black uppercase tracking-[0.3em] text-green-700 ">Next Gen Education</span>
        </motion.div>

        <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-black leading-[0.85] tracking-tight uppercase mb-10 px-4">
          <span className="block text-[#14532D] ] transition-colors duration-500">Redefining</span>
          <span className="block bg-gradient-to-r from-green-600 via-yellow-500 to-green-600 bg-clip-text text-transparent italic pb-4 pr-8 drop-shadow-[0_10px_20px_rgba(22,163,74,0.18)] (34,197,94,0.3)]">Excellence</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          AgraShri Education Institute is a modern learning and counseling platform dedicated to academic excellence,
          personal growth, career development, and student wellbeing.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 pointer-events-auto mb-12">
          <Link
            href="/enroll"
            className="group relative px-10 py-5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-black text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_8px_30px_rgba(22,163,74,0.35)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              Join AgraShri <GraduationCap className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="#expertise"
            className="group px-10 py-5 rounded-full border-2 border-green-200 bg-white font-bold text-lg hover:border-green-400 hover:bg-green-50 transition-all flex items-center gap-3 text-green-700 shadow-sm shadow-green-100/5"
          >
            Explore Programs <Globe className="w-5 h-5 group-hover:rotate-180 transition-transform duration-1000" />
          </Link>
        </div>
      </div>
    </motion.div>

    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
  </section>
);

const facilities = [
  {
    id: "library",
    title: "Learning Sanctuary",
    tag: "Library & Study Hub",
    desc: "Our library provides a dedicated quiet zone, over 10,000 reference resources, and high-speed digital research terminals for focused growth.",
    stats: [
      { num: "10k+", label: "Academic Resources" },
      { num: "24/7", label: "Digital Access Portal" }
    ],
    img: "/images/library.png",
    alt: "AgraShri Sanctuary Library Facility",
  },
  {
    id: "suite",
    title: "Tech Suite",
    tag: "Digital Innovation Zone",
    desc: "A fully equipped digital suite with high-speed laptops, live streaming equipment, and hybrid zoom lecture setups to facilitate international education standards.",
    stats: [
      { num: "30+", label: "Advanced Terminals" },
      { num: "4K", label: "Ultra-HD Zoom Systems" }
    ],
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
    alt: "AgraShri Tech and Zoom Class Suite Facility",
  },
  {
    id: "counseling",
    title: "Counseling Suite",
    tag: "Wellness & Career Zone",
    desc: "A private, safe, and soundproof room designed for stress relief counseling, mindfulness meditation guidance, and student profile progress evaluations.",
    stats: [
      { num: "1-on-1", label: "Personal Mentoring" },
      { num: "100%", label: "Strict Confidentiality" }
    ],
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070",
    alt: "AgraShri Career Counseling & Wellness Zone Facility",
  }
];

export default function Home() {
  const [activeFacility, setActiveFacility] = useState(facilities[0]);
  return (
    <div className="bg-[#F9FAF7] ] text-[#14532D] ] min-h-screen overflow-x-hidden transition-colors duration-500">
      <CursorSpotlight />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "School Titans Program",
              "description": "Subject-based classes, scholarship prep, O/L & A/L preparation for Grade 1 to A/L students.",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "AgraShri Educational Institute",
                "sameAs": "https://agrashri.lk"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Uni Pioneers Program",
              "description": "Research guidance, skill development, and presentation training for university students.",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "AgraShri Educational Institute",
                "sameAs": "https://agrashri.lk"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Adult Visionaries Program",
              "description": "Professional courses, language classes, and networking for personal growth and career development.",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "AgraShri Educational Institute",
                "sameAs": "https://agrashri.lk"
              }
            }
          ])
        }}
      />
      <Navbar />
      <HeroSection />

      <StatsBanner />

      {/* Ecosystem / Bento Grid */}
      <section id="expertise" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-black uppercase tracking-[0.4em] mb-6">Our Ecosystem</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-[#14532D] ]">
            The Bento of <br /><span className="text-green-300">Innovation</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-6 h-auto md:h-[800px]">
          <motion.div {...fadeUp} className="md:col-span-2 md:row-span-2 group relative rounded-[3rem] overflow-hidden bg-white ] border border-green-100 shadow-sm hover:shadow-xl transition-shadow p-12 flex flex-col justify-end">
            <Image 
              src="/images/academics.png" 
              alt="Elite Academics at AgraShri Educational Institute" 
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-110 transition-all duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white ] via-white/40 to-white/10 " />
            <div className="relative z-10">
              <div className="p-4 rounded-2xl bg-green-600 w-fit mb-8 shadow-[0_4px_20px_rgba(22,163,74,0.4)]">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-black mb-4 uppercase text-[#14532D] ]">Elite Academics</h3>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">Subject-based classes, exam preparation, and professional courses conducted by qualified lecturers from Grade 1 to A/L.</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="md:col-span-2 group relative rounded-[3rem] overflow-hidden bg-white ] border border-green-100 shadow-sm hover:shadow-xl transition-shadow p-10 flex items-center justify-between">
            <Image 
              src="/images/counseling.png" 
              alt="Counseling and Wellbeing services at AgraShri" 
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-50 group-hover:scale-110 transition-all duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white ] via-white/50 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4 uppercase text-[#14532D] ]">Counseling 2.0</h3>
              <p className="text-gray-500 max-w-[220px]">Professional support for stress management, academic pressure, and emotional wellbeing.</p>
            </div>
            <HeartPulse className="w-32 h-32 text-green-200 absolute -right-4 -bottom-4 group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
          </motion.div>

          <motion.div {...fadeUp} className="md:col-span-1 group relative rounded-[3rem] overflow-hidden bg-white ] border border-green-100 shadow-sm hover:shadow-xl transition-shadow p-10 flex flex-col justify-between">
            <Users className="w-10 h-10 text-green-500 " />
            <div>
              <h3 className="text-2xl font-black mb-2 uppercase text-[#14532D] ]">Community</h3>
              <p className="text-sm text-gray-500 ">Network with teachers, mentors, and professionals in our forum.</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="md:col-span-1 group relative rounded-[3rem] overflow-hidden bg-yellow-400 border border-yellow-300 shadow-sm hover:shadow-xl transition-shadow p-10 flex flex-col justify-between">
            <Star className="w-10 h-10 text-yellow-800 fill-yellow-800" />
            <div className="text-yellow-900">
              <h3 className="text-2xl font-black mb-2 uppercase">Quality First</h3>
              <p className="text-sm opacity-80">Teacher quality assurance & student monitoring.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Philosophy */}
      <section id="about" className="py-32 bg-white ] overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-100/50 blur-[120px] rounded-full" />
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-black uppercase tracking-[0.4em] mb-8">The Legacy</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-12 text-[#14532D] ]">
              Discover <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 italic px-4 py-2">Our Story</span>
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
              AgraShri Education Institute is a complete educational development platform.
              We empower every learner from childhood to adulthood with knowledge, confidence,
              and life skills to build meaningful futures.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-12">
              {[
                { label: "Academic Excellence", icon: <Shield className="w-5 h-5" /> },
                { label: "Progress Tracking", icon: <Target className="w-5 h-5" /> },
                { label: "Career Guidance", icon: <Zap className="w-5 h-5" /> },
                { label: "Mental Wellness", icon: <HeartPulse className="w-5 h-5" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-green-50 border border-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <span className="font-bold uppercase text-[10px] tracking-widest text-gray-500 ">{item.label}</span>
                </div>
              ))}
            </div>
            <Link href="/#about" className="inline-flex items-center gap-4 text-green-700 font-black tracking-widest uppercase text-xs hover:gap-6 transition-all">
              Learn More <ArrowRight className="w-4 h-4 text-yellow-500" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[800px] rounded-[4rem] overflow-hidden group shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
              alt="Students collaborating at AgraShri Educational Institute"
              fill
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent" />

            <div className="absolute top-4 right-4 md:top-12 md:right-12 p-5 md:p-8 rounded-3xl bg-green-600 shadow-2xl max-w-[180px] sm:max-w-xs z-10">
              <h3 className="text-white font-black uppercase italic text-lg md:text-xl mb-2 md:mb-3">Our Vision</h3>
              <p className="text-green-100 text-[10px] md:text-sm leading-relaxed">To empower every learner from childhood to adulthood with knowledge and life skills.</p>
            </div>

            <div className="absolute bottom-4 left-4 md:bottom-12 md:left-12 p-5 md:p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-green-100 max-w-[220px] sm:max-w-sm shadow-lg z-10">
              <Sparkles className="text-yellow-500 mb-2 md:mb-4 w-4 h-4 md:w-6 md:h-6" />
              <h3 className="text-[#14532D] ] font-black uppercase italic text-lg md:text-xl mb-2 md:mb-3">Our Mission</h3>
              <p className="text-gray-500 text-[10px] md:text-sm leading-relaxed">To provide quality education while nurturing confident, skilled, and emotionally healthy individuals.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <ProgramFinder />

      {/* Library */}
      <section id="library" className="py-32 bg-white border-y border-green-100/10 overflow-hidden relative transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-black uppercase tracking-[0.4em] mb-6">Facilities</span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-[#14532D] ] mb-8 leading-none">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 italic px-2">Campus Hubs</span>
          </h2>
          
          {/* Dynamic Switcher Tabs */}
          <div className="flex flex-wrap justify-center gap-3 p-1.5 bg-green-50/50 border border-green-100/30 rounded-full w-fit mx-auto shadow-sm">
            {facilities.map((fac) => (
              <button
                key={fac.id}
                onClick={() => setActiveFacility(fac)}
                className={`px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all cursor-pointer ${
                  activeFacility.id === fac.id
                    ? "bg-green-600 text-white shadow-md scale-105"
                    : "text-gray-500 hover:text-green-700 "
                }`}
              >
                {fac.title}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          {/* Image Showcase */}
          <div className="relative h-[400px] sm:h-[550px] rounded-[3.5rem] overflow-hidden order-2 lg:order-1 shadow-2xl border border-green-50/10 bg-green-50/20 ">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFacility.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image 
                  src={activeFacility.img} 
                  alt={activeFacility.alt} 
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03140a]/40 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content Showcase */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFacility.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500 mb-4 inline-block">
                  {activeFacility.tag}
                </span>
                <h3 className="text-3xl md:text-5xl font-black uppercase text-[#14532D] ] leading-none mb-6">
                  {activeFacility.title}
                </h3>
                <p className="text-lg text-gray-500 font-light leading-relaxed mb-10">
                  {activeFacility.desc}
                </p>
                <div className="flex items-center gap-6">
                  {activeFacility.stats.map((stat, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-green-50/60 border border-green-100/30 text-center flex-1 transition-all hover:shadow-md">
                      <p className="text-3xl font-black text-[#14532D] ] mb-2">{stat.num}</p>
                      <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dynamic Events Gallery */}
        <EventsCarousel />
      </section>

      {/* Courses */}
      <section id="courses" className="py-32 px-6 bg-[#F0F9F4] border-t border-green-100/10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-black uppercase tracking-[0.4em] mb-6">Our Programs</span>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] text-[#14532D] ]">Mastery <br />Levels</h2>
            </div>
            <p className="text-gray-500 max-w-xs font-medium uppercase text-xs tracking-widest leading-loose">
              Every program is a curated journey designed for specific milestones in life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                lvl: "01",
                title: "School Titans",
                items: ["Scholarship Prep", "O/L & A/L Classes", "Language Classes", "Career Training"],
                gradient: "from-green-500 to-green-700",
                badgeColor: "bg-green-600",
                img: "/images/level1.png",
                alt: "AgraShri School Titans Program for Grade 1 to A/L students"
              },
              {
                lvl: "02",
                title: "Uni Pioneers",
                items: ["Research Guidance", "Skill Development", "Presentation Training", "Language Classes"],
                gradient: "from-yellow-400 to-yellow-600",
                badgeColor: "bg-yellow-500",
                img: "/images/level2.png",
                alt: "AgraShri Uni Pioneers Program for University Students and Research Guidance"
              },
              {
                lvl: "03",
                title: "Adult Visionaries",
                items: ["Language Classes", "Professional Courses", "Personal Growth", "Networking Events"],
                gradient: "from-green-700 to-green-900",
                badgeColor: "bg-green-800",
                img: "/images/level3.png",
                alt: "AgraShri Adult Visionaries Program for Professional Courses and Personal Growth"
              }
            ].map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative h-[600px] rounded-[3rem] overflow-hidden border border-green-100 hover:shadow-2xl transition-all duration-500 bg-white ]"
              >
                <Image 
                  src={p.img} 
                  alt={p.alt} 
                  fill
                  className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-65 group-hover:scale-110 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white ] via-white/55 to-white/10 p-10 flex flex-col justify-end">
                  <div className={`text-6xl font-black opacity-20 mb-4 bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent group-hover:opacity-100 transition-opacity`}>{p.lvl}</div>
                  <h3 className="text-3xl font-black text-[#14532D] ] uppercase italic mb-5 group-hover:translate-x-2 transition-transform">{p.title}</h3>
                  <ul className="mb-8 space-y-3">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-600 font-bold uppercase text-[10px] tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 " />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/#about" className="inline-flex items-center gap-3 text-green-700 font-bold tracking-widest uppercase text-xs group-hover:gap-5 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 text-yellow-500" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Timetable />
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl mx-auto relative rounded-[3rem] md:rounded-[5rem] bg-gradient-to-br from-[#14532D] via-green-800 to-green-900 p-12 md:p-24 text-center overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-yellow-400/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-[80px] rounded-full" />

          <div className="relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-yellow-300 text-xs font-black uppercase tracking-[0.4em] mb-10 border border-white/10">Join Us</span>
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-10 text-white">
              The Future <br /><span className="text-yellow-400">Awaits You</span>
            </h2>
            <p className="text-xl text-green-200 mb-16 max-w-2xl mx-auto font-light">
              Don&apos;t just observe the future. Build it. Enrollment for the 2026
              Academic Year is now open for exclusive applicants.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/enroll" className="px-16 py-6 bg-yellow-400 text-green-900 rounded-full font-black text-xl hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(250,204,21,0.4)]">
                Secure Your Spot
              </Link>
              <Link href="#contact" className="px-16 py-6 rounded-full border-2 border-white/20 text-white font-black text-xl hover:bg-white/10 transition-all">
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
