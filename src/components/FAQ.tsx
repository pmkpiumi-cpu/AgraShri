"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What age groups do you cater to?",
    answer: "We provide educational and counseling services for students from Grade 1 all the way to Advanced Level (A/L) and even university-level guidance."
  },
  {
    question: "How can I enroll in a class?",
    answer: "You can enroll by clicking the 'Secure Your Spot' or 'Join AgraShri' buttons across our website, which will take you to our digital enrollment form."
  },
  {
    question: "Do you offer online classes?",
    answer: "Yes, we offer a hybrid learning model including both physical classes at our center and live online sessions for selected subjects."
  },
  {
    question: "Is personal counseling separate from academic classes?",
    answer: "While we integrate student wellbeing into our classes, we also offer dedicated one-on-one professional counseling sessions for stress management and career guidance."
  },
  {
    question: "What makes AgraShri different from other tuition centers?",
    answer: "We focus on 'Counseling 2.0' and elite academics, ensuring that students aren't just memorizing facts but are also developing emotionally and professionally for their future careers."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-black uppercase tracking-[0.4em] mb-6">Clarification</span>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#14532D] ]">
          Frequently Asked <br /><span className="text-green-400 italic">Questions</span>
        </h2>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-green-100 rounded-[2rem] bg-white ] overflow-hidden transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-8 flex items-center justify-between text-left hover:bg-green-50/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${openIndex === index ? 'bg-green-600 text-white' : 'bg-green-50 text-green-600 '} transition-colors`}>
                  <HelpCircle className="w-5 h-5" />
                </div>
                <span className="font-bold text-[#14532D] ] text-lg">{faq.question}</span>
              </div>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-yellow-500" />
              ) : (
                <Plus className="w-5 h-5 text-green-300 " />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-8 pb-8 pt-0 ml-16">
                    <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
