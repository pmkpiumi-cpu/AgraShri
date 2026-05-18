"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, User, MapPin, Video, Info, Calendar } from "lucide-react";

interface ScheduleItem {
  subject: string;
  day: string;
  time: string;
  lecturer: {
    name: string;
    title: string;
    avatarInitials: string;
  };
  mode: "physical" | "online" | "hybrid";
  location: string;
}

const schedules: Record<string, ScheduleItem[]> = {
  school: [
    {
      subject: "General English Mastery (Grade 10 & O/L)",
      day: "Every Saturday",
      time: "08:30 AM – 11:30 AM",
      lecturer: {
        name: "Mr. K. Perera",
        title: "Senior English Lecturer",
        avatarInitials: "KP",
      },
      mode: "hybrid",
      location: "Gampaha Center & Zoom Live",
    },
    {
      subject: "Grade 11 Mathematics & Exam Prep",
      day: "Every Saturday",
      time: "01:00 PM – 04:00 PM",
      lecturer: {
        name: "Mrs. S. Dias",
        title: "Mathematics Faculty Lead",
        avatarInitials: "SD",
      },
      mode: "physical",
      location: "Main Lecture Hall A",
    },
    {
      subject: "A/L General English & Communication Skills",
      day: "Every Sunday",
      time: "09:00 AM – 12:00 PM",
      lecturer: {
        name: "Mr. K. Perera",
        title: "Senior English Lecturer",
        avatarInitials: "KP",
      },
      mode: "hybrid",
      location: "Gampaha Center & Zoom Live",
    },
  ],
  university: [
    {
      subject: "Scientific Research Methodology & Thesis Writing",
      day: "Every Monday",
      time: "05:00 PM – 07:00 PM",
      lecturer: {
        name: "Dr. A. Jayasekara",
        title: "Academic Research Mentor",
        avatarInitials: "AJ",
      },
      mode: "hybrid",
      location: "Research Room B & Online Portal",
    },
    {
      subject: "Presentation Masterclass & Speaking Confidence",
      day: "Every Wednesday",
      time: "06:00 PM – 08:00 PM",
      lecturer: {
        name: "Mrs. S. Dias",
        title: "Communications Coach",
        avatarInitials: "SD",
      },
      mode: "online",
      location: "AgraShri Digital Portal (Zoom)",
    },
  ],
  adults: [
    {
      subject: "Spoken English for Career & Professional Success",
      day: "Every Tuesday",
      time: "05:30 PM – 07:30 PM",
      lecturer: {
        name: "Mr. K. Perera",
        title: "Senior Language Coach",
        avatarInitials: "KP",
      },
      mode: "hybrid",
      location: "Conference Room & Live Streams",
    },
    {
      subject: "Business Communication & Corporate Relations",
      day: "Every Thursday",
      time: "06:00 PM – 08:00 PM",
      lecturer: {
        name: "Dr. A. Jayasekara",
        title: "Corporate Relations Lead",
        avatarInitials: "AJ",
      },
      mode: "online",
      location: "AgraShri Digital Portal (Zoom)",
    },
  ],
};

const MODE_BADGES = {
  physical: {
    label: "Physical Class",
    style: "bg-green-100 text-green-800 border-green-200",
    icon: <MapPin className="w-3.5 h-3.5" />,
  },
  online: {
    label: "Online Zoom",
    style: "bg-blue-100 text-blue-800 border-blue-200",
    icon: <Video className="w-3.5 h-3.5" />,
  },
  hybrid: {
    label: "Hybrid Session",
    style: "bg-yellow-100 text-yellow-800 border-yellow-200",
    icon: <Info className="w-3.5 h-3.5" />,
  },
};

export default function Timetable() {
  const [activeTab, setActiveTab] = useState<string>("school");

  const tabs = [
    { id: "school", label: "School Titans" },
    { id: "university", label: "Uni Pioneers" },
    { id: "adults", label: "Adult Visionaries" },
  ];

  return (
    <section className="py-32 px-6 bg-[#F9FAF7] ] border-t border-green-100/10 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-black uppercase tracking-[0.4em] mb-4">Timetable</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#14532D] ]">
              Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 italic px-2">Schedules</span>
            </h2>
          </div>
          <p className="text-gray-500 font-light text-sm max-w-sm leading-relaxed">
            Choose your learning mode. We provide physical sessions in Gampaha and live digital streams for online learners.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mb-10 border-b border-green-100/50 pb-6 z-10 relative">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all relative cursor-pointer ${
                activeTab === tab.id
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-white ] border border-green-50 text-[#14532D] ] hover:border-green-300 hover:shadow-sm"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {schedules[activeTab].map((item, index) => (
                <div
                  key={index}
                  className="bg-white ] border border-green-50/50 p-6 md:p-8 rounded-[2.5rem] shadow-sm hover:shadow-md hover:border-green-100 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  
                  {/* Class Info */}
                  <div className="flex-1">
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest mb-4 ${MODE_BADGES[item.mode].style}`}>
                      {MODE_BADGES[item.mode].icon}
                      {MODE_BADGES[item.mode].label}
                    </div>
                    {/* Subject */}
                    <h3 className="text-xl md:text-2xl font-black text-[#14532D] ] tracking-tight mb-3">
                      {item.subject}
                    </h3>
                    
                    {/* Time details */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-yellow-500" />
                        {item.day}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-green-500" />
                        {item.time}
                      </span>
                    </div>
                  </div>

                  {/* Divider line for desktop */}
                  <div className="hidden md:block w-px h-16 bg-green-50 shrink-0" />

                  {/* Lecturer profile card */}
                  <div className="flex items-center gap-4 shrink-0 md:min-w-[240px]">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 text-green-700 flex items-center justify-center font-black text-sm shadow-inner shrink-0">
                      {item.lecturer.avatarInitials}
                    </div>
                    <div>
                      <p className="font-extrabold text-sm text-[#14532D] ]">
                        {item.lecturer.name}
                      </p>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 ">
                        {item.lecturer.title}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
