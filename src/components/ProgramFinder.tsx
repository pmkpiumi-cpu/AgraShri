"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Users, GraduationCap, ChevronRight, RefreshCw, CheckCircle2, Target } from "lucide-react";
import Link from "next/link";

interface Option {
  id: string;
  label: string;
  desc: string;
  icon?: React.ReactNode;
}

export default function ProgramFinder() {
  const [step, setStep] = useState(1);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const groups: Option[] = [
    {
      id: "school",
      label: "School Student",
      desc: "Grade 1 to Advanced Level (A/L) student",
      icon: <BookOpen className="w-6 h-6 text-green-600" />,
    },
    {
      id: "university",
      label: "University Student",
      desc: "Undergraduates, researchers, and pioneers",
      icon: <GraduationCap className="w-6 h-6 text-yellow-600" />,
    },
    {
      id: "adults",
      label: "Adult / Professional",
      desc: "Individuals seeking language classes and career skills",
      icon: <Users className="w-6 h-6 text-green-600" />,
    },
  ];

  const goalsByGroup: Record<string, Option[]> = {
    school: [
      {
        id: "school_exams",
        label: "Exams & Academics",
        desc: "Prepare for school term tests, Scholarship, O/L or A/L exams.",
      },
      {
        id: "school_languages",
        label: "Confidence & Languages",
        desc: "Build personality development, spoken English, and communication.",
      },
    ],
    university: [
      {
        id: "uni_research",
        label: "Research Guidance",
        desc: "Get expert assistance for undergraduate research, theses, or projects.",
      },
      {
        id: "uni_skills",
        label: "Presentation & Skills",
        desc: "Empower soft skills, public speaking, and presentation confidence.",
      },
    ],
    adults: [
      {
        id: "adult_languages",
        label: "Language Classes",
        desc: "Learn spoken English, grammar, and international communications.",
      },
      {
        id: "adult_growth",
        label: "Personal Development",
        desc: "Focus on networking, career training, and public speaking.",
      },
    ],
  };

  const getResult = () => {
    if (selectedGroup === "school") {
      return {
        level: "01",
        title: "School Titans",
        badge: "School Program",
        desc: "A powerful curriculum designed to master school syllabi, achieve top grades in key examinations, and cultivate essential confidence for young achievers.",
        features: ["Scholarship Prep", "Subject-based O/L & A/L Classes", "English & Spoken Training", "Confidence Building"],
        color: "from-green-600 to-green-800",
        btnColor: "bg-green-600 hover:bg-green-700 shadow-green-600/30",
        programId: "school",
      };
    } else if (selectedGroup === "university") {
      return {
        level: "02",
        title: "Uni Pioneers",
        badge: "University Program",
        desc: "Tailored specifically for undergraduates who want to excel in scientific research, academic project writing, and high-impact presenting.",
        features: ["Research & Proposal Guidance", "Research Writing & Statistics", "Public Speaking Confidence", "Interactive Presentation Masterclass"],
        color: "from-yellow-500 to-yellow-600",
        btnColor: "bg-yellow-400 hover:bg-yellow-500 text-green-950 shadow-yellow-400/35",
        programId: "university",
      };
    } else {
      return {
        level: "03",
        title: "Adult Visionaries",
        badge: "Professional Program",
        desc: "A highly customized environment for career workers and lifelong learners to expand their spoken language skills and professional networks.",
        features: ["Spoken English & Communication", "Professional Writing Skills", "Career Networking Events", "Personal Growth Workshops"],
        color: "from-green-800 to-green-950",
        btnColor: "bg-green-700 hover:bg-green-800 shadow-green-700/30",
        programId: "adults",
      };
    }
  };

  const handleGroupSelect = (groupId: string) => {
    setSelectedGroup(groupId);
    setSelectedGoal(null);
    setStep(2);
  };

  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId);
    setStep(3);
  };

  const handleReset = () => {
    setSelectedGroup(null);
    setSelectedGoal(null);
    setStep(1);
  };

  const result = getResult();

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto relative">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-black uppercase tracking-[0.4em] mb-4">Quiz Tool</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#14532D] ] transition-colors duration-500">
          Find Your Perfect <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 italic px-2">AgraShri Level</span>
        </h2>
      </div>

      <div className="bg-white/80 backdrop-blur-2xl border border-green-100 rounded-[3rem] p-8 md:p-14 shadow-2xl relative overflow-hidden min-h-[420px] flex flex-col justify-between transition-colors duration-500">
        {/* Background glow accent */}
        <div className="absolute top-0 right-0 p-8 text-green-100 ">
          <Target className="w-20 h-20 rotate-12" />
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-green-50 z-10 relative">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all duration-300 ${
                  step === s ? "w-8 bg-yellow-400" : s < step ? "w-4 bg-green-600" : "w-2 bg-green-100 "
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-green-600 ">
            Step {step} of 3
          </span>
        </div>

        {/* Steps contents */}
        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-black uppercase tracking-tight text-[#14532D] ] mb-6">
                  Who is embarking on this learning journey?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {groups.map((group) => (
                    <button
                      key={group.id}
                      onClick={() => handleGroupSelect(group.id)}
                      className={`text-left p-6 rounded-2xl border transition-all flex flex-col justify-between hover:scale-[1.03] cursor-pointer ${
                        selectedGroup === group.id
                          ? "bg-green-50/50 border-green-500 shadow-lg text-white"
                          : "bg-white border-green-100 hover:border-green-400 hover:shadow-md text-[#14532D] ]"
                      }`}
                    >
                      <div className="p-3 bg-green-50 rounded-xl w-fit mb-4">
                        {group.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#14532D] text-lg mb-1">{group.label}</h4>
                        <p className="text-xs text-gray-400 font-medium leading-relaxed">{group.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && selectedGroup && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-black uppercase tracking-tight text-[#14532D] ]">
                    What is your primary educational goal?
                  </h3>
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs font-bold text-green-600 hover:underline uppercase tracking-wider cursor-pointer"
                  >
                    ← Back
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {goalsByGroup[selectedGroup].map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => handleGoalSelect(goal.id)}
                      className={`text-left p-6 rounded-2xl border transition-all flex flex-col justify-between hover:scale-[1.02] cursor-pointer ${
                        selectedGoal === goal.id
                          ? "bg-green-50/50 border-green-500 shadow-lg"
                          : "bg-white border-green-100 hover:border-green-400 hover:shadow-md"
                      }`}
                    >
                      <div>
                        <h4 className="font-bold text-[#14532D] text-lg mb-2">{goal.label}</h4>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">{goal.desc}</p>
                      </div>
                      <div className="flex justify-end mt-4">
                        <div className="p-2 bg-green-50 text-green-700 rounded-full">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && result && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
              >
                {/* Visual Level Badge */}
                <div className={`col-span-1 p-8 rounded-[2rem] bg-gradient-to-br ${result.color} text-white flex flex-col justify-between h-full min-h-[220px] shadow-xl relative`}>
                  <div className="text-6xl font-black opacity-30">{result.level}</div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                      {result.badge}
                    </span>
                    <h4 className="text-2xl font-black uppercase italic mt-4">{result.title}</h4>
                  </div>
                </div>

                {/* Level Details */}
                <div className="col-span-2 flex flex-col justify-between h-full">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-green-600 mb-2">We Found Your Match!</h4>
                    <h3 className="text-2xl font-black text-[#14532D] ] uppercase italic mb-3">AgraShri {result.title}</h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
                      {result.desc}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {result.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#14532D] ">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link
                      href={`/enroll?program=${result.programId}`}
                      className={`w-full sm:w-auto px-8 py-4 ${result.btnColor} text-white rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2 shadow-lg`}
                    >
                      Instant Enroll Now <ChevronRight className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-8 py-4 border border-green-100 hover:border-green-400 hover:bg-green-50/50 text-[#14532D] ] rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> Retake Quiz
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
