"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  initials: string;
  badge: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Oshada Mendis",
    role: "School Titans Student",
    text: "AgraShri helped me balance exam stress with my study schedule. The O/L Mathematics seminar series was extremely helpful, and I managed to secure 9 'A' passes. The personal counseling and constant encouragement from lecturers made a massive difference!",
    rating: 5,
    initials: "OM",
    badge: "9 'A' Passes Achiever",
  },
  {
    name: "Methmi Wijesekera",
    role: "Uni Pioneers Undergraduate",
    text: "As an undergraduate student, final-year thesis research was extremely overwhelming. Dr. Jayasekara's research methodology workshops and presentation training structured my ideas beautifully. I obtained an 'A' grade for my final project and presented it with high confidence!",
    rating: 5,
    initials: "MW",
    badge: "BSc Hons Undergraduate",
  },
  {
    name: "Nipuna Silva",
    role: "Adult Visionaries Professional",
    text: "I joined the spoken English and career communication courses to prepare for job interviews. Within just three months of interactive mock panels and public speaking classes, my confidence skyrocketed, and I successfully landed a corporate position.",
    rating: 5,
    initials: "NS",
    badge: "Corporate Executive",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const current = testimonials[activeIndex];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#F9FAF7] to-white ] ] relative overflow-hidden transition-colors duration-500">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-100/25 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-black uppercase tracking-[0.4em] mb-4">Reviews</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#14532D] ]">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 italic px-2">Testimonials</span>
          </h2>
        </div>

        {/* Carousel Card Container */}
        <div className="relative min-h-[380px] bg-white ] border border-green-50/50 rounded-[3rem] p-8 md:p-16 shadow-xl flex flex-col justify-between overflow-hidden transition-colors duration-500">
          
          {/* Decorative Quote Icon */}
          <div className="absolute top-8 right-8 text-green-50 pointer-events-none">
            <Quote className="w-24 h-24 rotate-180" />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-6"
              >
                {/* Rating stars */}
                <div className="flex gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-[0_2px_4px_rgba(250,204,21,0.2)]" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-lg md:text-xl text-[#14532D] ] font-light leading-relaxed italic relative z-10">
                  &ldquo;{current.text}&rdquo;
                </p>

                {/* Achiever Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-[9px] font-black uppercase tracking-widest text-green-700 ">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified: {current.badge}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Controls & Author details */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-green-50 pt-8 mt-8">
            {/* Author Profile */}
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 text-green-700 flex items-center justify-center font-black text-sm shrink-0">
                {current.initials}
              </div>
              <div>
                <p className="font-extrabold text-sm text-[#14532D] ]">
                  {current.name}
                </p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 ">
                  {current.role}
                </p>
              </div>
            </div>

            {/* Slider arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 border border-green-100 hover:border-green-400 hover:bg-green-50/50 text-[#14532D] ] rounded-2xl transition-all cursor-pointer"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 border border-green-100 hover:border-green-400 hover:bg-green-50/50 text-[#14532D] ] rounded-2xl transition-all cursor-pointer"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
