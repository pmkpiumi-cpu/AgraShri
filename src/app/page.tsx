"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, HeartPulse, GraduationCap, Shield, Target, Zap, Globe, Cpu, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRef, Suspense } from "react";

const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.7, ease: "easeOut" as const }
} as const;

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F0F9F4] via-[#F9FAF7] to-white z-0 py-20">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="w-full h-full">
        <Hero3D />
      </div>
    </div>

    {/* Green blob BG */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-400/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-300/15 blur-[80px] rounded-full pointer-events-none" />

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center pointer-events-none text-center pt-32"
    >
      <motion.div className="px-6 py-2 rounded-full bg-green-100 border border-green-200 mb-6 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-black uppercase tracking-[0.3em] text-green-700">Next Gen Education</span>
      </motion.div>

      <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-black leading-[0.85] tracking-tight uppercase mb-10 px-4">
        <span className="block text-[#14532D]">Redefining</span>
        <span className="block bg-gradient-to-r from-green-500 via-yellow-500 to-green-600 bg-clip-text text-transparent italic pb-4 pr-8">Excellence</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
        AgraShri Education Institute is a modern learning and counseling platform dedicated to academic excellence,
        personal growth, career development, and student wellbeing.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-6 pointer-events-auto">
        <Link
          href="#expertise"
          className="group relative px-10 py-5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-black text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_8px_30px_rgba(22,163,74,0.35)]"
        >
          <span className="relative z-10 flex items-center gap-3">
            Explore Ecosystem <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
        <Link
          href="#expertise"
          className="group px-10 py-5 rounded-full border-2 border-green-200 bg-white font-bold text-lg hover:border-green-400 hover:bg-green-50 transition-all flex items-center gap-3 text-green-700 shadow-sm"
        >
          Explore Programs <Globe className="w-5 h-5 group-hover:rotate-180 transition-transform duration-1000" />
        </Link>
      </div>
    </motion.div>

    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
  </section>
);

export default function Home() {
  return (
    <div className="bg-[#F9FAF7] text-[#14532D] min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {/* Ecosystem / Bento Grid */}
      <section id="expertise" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-black uppercase tracking-[0.4em] mb-6">Our Ecosystem</span>
          <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-[#14532D]">
            The Bento of <br /><span className="text-green-300">Innovation</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-6 h-auto md:h-[800px]">
          <motion.div {...fadeUp} className="md:col-span-2 md:row-span-2 group relative rounded-[3rem] overflow-hidden bg-white border border-green-100 shadow-sm hover:shadow-xl transition-shadow p-12 flex flex-col justify-end">
            <img src="/images/academics.png" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-110 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/10" />
            <div className="relative z-10">
              <div className="p-4 rounded-2xl bg-green-600 w-fit mb-8 shadow-[0_4px_20px_rgba(22,163,74,0.4)]">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-4xl font-black mb-4 uppercase text-[#14532D]">Elite Academics</h4>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">Subject-based classes, exam preparation, and professional courses conducted by qualified lecturers from Grade 1 to A/L.</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="md:col-span-2 group relative rounded-[3rem] overflow-hidden bg-white border border-green-100 shadow-sm hover:shadow-xl transition-shadow p-10 flex items-center justify-between">
            <img src="/images/counseling.png" className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-50 group-hover:scale-110 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
            <div className="relative z-10">
              <h4 className="text-3xl font-black mb-4 uppercase text-[#14532D]">Counseling 2.0</h4>
              <p className="text-gray-500 max-w-[220px]">Professional support for stress management, academic pressure, and emotional wellbeing.</p>
            </div>
            <HeartPulse className="w-32 h-32 text-green-200 absolute -right-4 -bottom-4 group-hover:scale-125 transition-transform duration-700" />
          </motion.div>

          <motion.div {...fadeUp} className="md:col-span-1 group relative rounded-[3rem] overflow-hidden bg-white border border-green-100 shadow-sm hover:shadow-xl transition-shadow p-10 flex flex-col justify-between">
            <Users className="w-10 h-10 text-green-500" />
            <div>
              <h4 className="text-2xl font-black mb-2 uppercase text-[#14532D]">Community</h4>
              <p className="text-sm text-gray-500">Network with teachers, mentors, and professionals in our forum.</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="md:col-span-1 group relative rounded-[3rem] overflow-hidden bg-yellow-400 border border-yellow-300 shadow-sm hover:shadow-xl transition-shadow p-10 flex flex-col justify-between">
            <Star className="w-10 h-10 text-yellow-800 fill-yellow-800" />
            <div className="text-yellow-900">
              <h4 className="text-2xl font-black mb-2 uppercase">Quality First</h4>
              <p className="text-sm opacity-80">Teacher quality assurance & student monitoring.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Philosophy */}
      <section id="about" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-100/50 blur-[120px] rounded-full" />
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-black uppercase tracking-[0.4em] mb-8">The Legacy</span>
            <h3 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-12 text-[#14532D]">
              Discover <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 italic pr-8">Our Story</span>
            </h3>
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
                  <span className="font-bold uppercase text-[10px] tracking-widest text-gray-500">{item.label}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-flex items-center gap-4 text-green-700 font-black tracking-widest uppercase text-xs hover:gap-6 transition-all">
              Learn More <ArrowRight className="w-4 h-4 text-yellow-500" />
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
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent" />

            <div className="absolute top-4 right-4 md:top-12 md:right-12 p-5 md:p-8 rounded-3xl bg-green-600 shadow-2xl max-w-[180px] sm:max-w-xs z-10">
              <p className="text-white font-black uppercase italic text-lg md:text-xl mb-2 md:mb-3">Our Vision</p>
              <p className="text-green-100 text-[10px] md:text-sm leading-relaxed">To empower every learner from childhood to adulthood with knowledge and life skills.</p>
            </div>

            <div className="absolute bottom-4 left-4 md:bottom-12 md:left-12 p-5 md:p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-green-100 max-w-[220px] sm:max-w-sm shadow-lg z-10">
              <Sparkles className="text-yellow-500 mb-2 md:mb-4 w-4 h-4 md:w-6 md:h-6" />
              <p className="text-[#14532D] font-black uppercase italic text-lg md:text-xl mb-2 md:mb-3">Our Mission</p>
              <p className="text-gray-500 text-[10px] md:text-sm leading-relaxed">To provide quality education while nurturing confident, skilled, and emotionally healthy individuals.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-32 bg-[#F0F9F4] border-y border-green-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-300/10 blur-[100px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeUp}>
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-black uppercase tracking-[0.4em] mb-8">The Advantage</span>
            <h3 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-12 text-[#14532D]">
              Why Choose <br /><span className="text-green-300 italic">AgraShri?</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { title: "Beyond Tuition", desc: "More than just a center, we are a growth platform." },
                { title: "Expert Support", desc: "Professional counseling and career guidance." },
                { title: "Quality Control", desc: "Teacher quality assurance & progress tracking." },
                { title: "Modern Hub", desc: "Safe environment with elite learning resources." }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="w-8 h-1 bg-yellow-400 rounded-full mb-3 group-hover:w-12 transition-all" />
                  <h4 className="text-[#14532D] font-black uppercase mb-2 group-hover:text-green-600 transition-colors">{item.title}</h4>
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
            <div className="rounded-[3rem] overflow-hidden border border-green-100 relative group shadow-lg">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="rounded-[3rem] overflow-hidden border border-green-100 relative group mt-12 shadow-lg">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Library */}
      <section id="library" className="py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-[400px] sm:h-[600px] rounded-[4rem] overflow-hidden order-2 lg:order-1 shadow-2xl"
          >
            <img src="/images/library.png" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-l from-white/40 to-transparent" />
          </motion.div>

          <motion.div {...fadeUp} className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-black uppercase tracking-[0.4em] mb-8">The Hub</span>
            <h3 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-12 text-[#14532D]">
              Learning <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 italic pr-8">Sanctuary</span>
            </h3>
            <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
              Our library facilities provide a dedicated learning space, extensive reading resources, and quiet study areas for independent research and focused growth.
            </p>
            <div className="flex items-center gap-6">
              <div className="p-8 rounded-3xl bg-green-50 border border-green-100 text-center flex-1">
                <p className="text-3xl font-black text-[#14532D] mb-2">10k+</p>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Resources</p>
              </div>
              <div className="p-8 rounded-3xl bg-yellow-50 border border-yellow-100 text-center flex-1">
                <p className="text-3xl font-black text-[#14532D] mb-2">24/7</p>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Digital Access</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="text-center relative p-10 md:p-20 rounded-[3rem] md:rounded-[5rem] overflow-hidden bg-white border border-green-100 shadow-sm">
          <img src="/images/community.png" className="absolute inset-0 w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/80" />
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-black uppercase tracking-[0.4em] mb-8">The Collective</span>
            <h3 className="text-4xl sm:text-5xl md:text-[9rem] font-black uppercase tracking-tighter leading-none mb-12 text-[#14532D]">
              Build Your <span className="text-green-200">Future</span>
            </h3>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed mb-16">
              At AgraShri, students network with teachers, mentors, professionals, and peers through our exclusive community platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Educational Forums", "Networking Events", "Volunteer Activities", "Youth Leadership", "Alumni Connections"].map((tag) => (
                <div key={tag} className="px-8 py-4 rounded-2xl bg-green-50 border border-green-200 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-green-600 hover:border-green-600 hover:text-white transition-all cursor-default text-green-700">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-32 px-6 bg-[#F0F9F4]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-black uppercase tracking-[0.4em] mb-6">Our Programs</span>
              <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] text-[#14532D]">Mastery <br />Levels</h3>
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
                img: "/images/level1.png"
              },
              {
                lvl: "02",
                title: "Uni Pioneers",
                items: ["Research Guidance", "Skill Development", "Presentation Training", "Language Classes"],
                gradient: "from-yellow-400 to-yellow-600",
                badgeColor: "bg-yellow-500",
                img: "/images/level2.png"
              },
              {
                lvl: "03",
                title: "Adult Visionaries",
                items: ["Language Classes", "Professional Courses", "Personal Growth", "Networking Events"],
                gradient: "from-green-700 to-green-900",
                badgeColor: "bg-green-800",
                img: "/images/level3.png"
              }
            ].map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative h-[600px] rounded-[3rem] overflow-hidden border border-green-100 hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <img src={p.img} className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-65 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/55 to-white/10 p-10 flex flex-col justify-end">
                  <div className={`text-6xl font-black opacity-20 mb-4 bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent group-hover:opacity-100 transition-opacity`}>{p.lvl}</div>
                  <h4 className="text-3xl font-black text-[#14532D] uppercase italic mb-5 group-hover:translate-x-2 transition-transform">{p.title}</h4>
                  <ul className="mb-8 space-y-3">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-600 font-bold uppercase text-[10px] tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="#about" className="inline-flex items-center gap-3 text-green-700 font-bold tracking-widest uppercase text-xs group-hover:gap-5 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 text-yellow-500" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-yellow-300 text-xs font-black uppercase tracking-[0.4em] mb-10 border border-white/10">About Us</span>
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-10 text-white">
              The Future <br /><span className="text-yellow-400">Awaits You</span>
            </h2>
            <p className="text-xl text-green-200 mb-16 max-w-2xl mx-auto font-light">
              Don&apos;t just observe the future. Build it. Explore our philosophy and get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="#about" className="px-16 py-6 bg-yellow-400 text-green-900 rounded-full font-black text-xl hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(250,204,21,0.4)]">
                Our Philosophy
              </Link>
              <Link href="/contact" className="px-16 py-6 rounded-full border-2 border-white/20 text-white font-black text-xl hover:bg-white/10 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
