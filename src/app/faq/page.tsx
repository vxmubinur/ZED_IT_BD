"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What are the admission requirements?",
    answer: "There are no specific academic requirements for our basic courses. For advanced courses, basic computer knowledge is recommended. Anyone from students to professionals can join."
  },
  {
    question: "Do you provide certificates after course completion?",
    answer: "Yes, we provide government-recognized certificates to all students who successfully complete their course and pass the final assessment."
  },
  {
    question: "What is the duration of the courses?",
    answer: "Most of our courses have two versions: a 3-month basic course and a 6-month advanced professional course."
  },
  {
    question: "Are the classes held online or offline?",
    answer: "Currently, we specialize in offline, in-person training at our Gazipur campus to ensure practical, hands-on learning with direct instructor supervision."
  },
  {
    question: "Is there any job placement assistance?",
    answer: "Yes, we provide career counseling, portfolio building support, and job placement assistance to our top-performing students."
  },
  {
    question: "Can I pay the course fee in installments?",
    answer: "Yes, for our 6-month professional courses, we offer flexible installment payment options. Please contact our office for the specific payment schedule."
  }
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-gray-50 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our admission process, courses, and certificates.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <HelpCircle className="text-brand-orange mr-3" size={24} />
                  <span className="text-lg font-bold text-brand-blue">{faq.question}</span>
                </div>
                {openIndex === idx ? (
                  <ChevronUp className="text-brand-orange" size={24} />
                ) : (
                  <ChevronDown className="text-brand-orange" size={24} />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-20 text-center bg-brand-blue rounded-3xl p-10 text-white">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-blue-100 mb-8">
            If you couldn't find the answer you're looking for, please contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+8801831156906" 
              className="bg-brand-orange text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors"
            >
              Call Us Now
            </a>
            <a 
              href="https://wa.me/8801831156906" 
              className="bg-white text-brand-blue px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
