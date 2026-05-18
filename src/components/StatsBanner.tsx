"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, GraduationCap, Award, Calendar } from "lucide-react";

function CountUp({ end, duration = 1.5 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Ease out quad formula
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      setCount(Math.floor(easedProgress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    colorClass: "text-green-600 bg-green-50 group-hover:bg-green-600 ",
    number: 1500,
    suffix: "+",
    label: "Active Students",
    desc: "Enrolled in current academy programs",
    delay: 0.1,
  },
  {
    icon: <Award className="w-8 h-8" />,
    colorClass: "text-yellow-600 bg-yellow-50 group-hover:bg-yellow-500 ",
    number: 98,
    suffix: "%",
    label: "Exam Pass Rate",
    desc: "Average O/L & A/L performance score",
    delay: 0.2,
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    colorClass: "text-green-600 bg-green-50 group-hover:bg-green-600 ",
    number: 30,
    suffix: "+",
    label: "Expert Mentors",
    desc: "Qualified lecturers & student counselors",
    delay: 0.3,
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    colorClass: "text-yellow-600 bg-yellow-50 group-hover:bg-yellow-500 ",
    number: 12,
    suffix: "+",
    label: "Years of Legacy",
    desc: "Empowering education in Western Province",
    delay: 0.4,
  },
];

export default function StatsBanner() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F9FAF7] ] ] relative overflow-hidden transition-colors duration-500">
      {/* Background shapes */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-green-100/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-yellow-200/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay, ease: "easeOut" }}
              className="bg-white/60 backdrop-blur-xl border border-green-50 rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl hover:border-green-100 transition-all group flex flex-col items-center text-center"
            >
              {/* Icon container */}
              <div className={`p-4 rounded-2xl mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-300 shadow-sm ${stat.colorClass}`}>
                {stat.icon}
              </div>

              {/* Number */}
              <div className="text-4xl sm:text-5xl font-black text-[#14532D] ] tracking-tight mb-2">
                <CountUp end={stat.number} />
                <span className="text-yellow-500 font-bold ml-0.5">{stat.suffix}</span>
              </div>

              {/* Label */}
              <h3 className="font-extrabold text-sm uppercase tracking-widest text-[#14532D] mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-400 font-medium">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
