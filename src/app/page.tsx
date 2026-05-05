"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  Award, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Monitor,
  Palette,
  Megaphone,
  Video,
  Globe
} from 'lucide-react';

const courses = [
  {
    title: "Microsoft Office",
    desc: "Basic & Advanced computer skills for office productivity.",
    icon: <Monitor className="text-brand-orange" size={40} />,
    duration: "3 & 6 Months",
    link: "/courses#office"
  },
  {
    title: "Graphics Design",
    desc: "Master visual communication and professional design tools.",
    icon: <Palette className="text-brand-orange" size={40} />,
    duration: "3 & 6 Months",
    link: "/courses#graphics"
  },
  {
    title: "Digital Marketing",
    desc: "Learn modern strategies to grow businesses online.",
    icon: <Megaphone className="text-brand-orange" size={40} />,
    duration: "3 & 6 Months",
    link: "/courses#marketing"
  },
  {
    title: "Video Editing",
    desc: "Create professional videos for any platform.",
    icon: <Video className="text-brand-orange" size={40} />,
    duration: "3 & 6 Months",
    link: "/courses#video"
  },
  {
    title: "Web Design",
    desc: "Build modern, responsive websites from scratch.",
    icon: <Globe className="text-brand-orange" size={40} />,
    duration: "3 & 6 Months",
    link: "/courses#web"
  }
];

const stats = [
  { label: "Total Students", value: "1500+", icon: <Users size={24} /> },
  { label: "Courses Offered", value: "5+", icon: <BookOpen size={24} /> },
  { label: "Years Experience", value: "8+", icon: <Calendar size={24} /> },
  { label: "Certificates Given", value: "1200+", icon: <Award size={24} /> },
];

const whyChooseUs = [
  { title: "Expert Teachers", desc: "Learn from industry professionals with years of experience." },
  { title: "Practical Classes", desc: "Hands-on projects and real-world training scenarios." },
  { title: "Government Certificate", desc: "Receive recognized certification upon course completion." },
  { title: "Affordable Fee", desc: "High-quality education at prices you can afford." },
];

const testimonials = [
  {
    name: "Ariful Islam",
    role: "Graphics Designer",
    comment: "The training at ZED IT was exceptional. I learned professional graphics design and now I'm working as a freelancer.",
  },
  {
    name: "Sadia Rahman",
    role: "Digital Marketer",
    comment: "Excellent environment and very helpful teachers. The practical classes helped me understand the industry better.",
  },
  {
    name: "Tanvir Ahmed",
    role: "Office Admin",
    comment: "Completed the Microsoft Office advanced course. It significantly improved my office productivity and skills.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-blue text-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Shape Your Future with <span className="text-brand-orange">ZED IT Bangladesh</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              IT Firm & Digital Skill Training Center. Providing quality education and professional services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/courses" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105">
                Explore Courses
              </Link>
              <Link href="/contact" className="bg-white hover:bg-gray-100 text-brand-blue px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105">
                Admission Open
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-8 border-brand-orange rounded-full"></div>
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-orange rounded-full"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50 border-b-4 border-brand-orange"
              >
                <div className="flex justify-center text-brand-blue mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-brand-blue mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Why Choose Us?</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <CheckCircle2 className="text-brand-orange mb-4" size={32} />
                <h3 className="text-xl font-bold text-brand-blue mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Our Popular Courses</h2>
              <div className="w-20 h-1 bg-brand-orange"></div>
            </div>
            <Link href="/courses" className="hidden md:flex items-center text-brand-orange font-bold hover:underline">
              View All Courses <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                <div className="p-8">
                  <div className="mb-6">{course.icon}</div>
                  <h3 className="text-2xl font-bold text-brand-blue mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.desc}</p>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    <span className="text-sm font-semibold text-gray-500">{course.duration}</span>
                    <Link href={course.link} className="text-brand-orange font-bold flex items-center group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link href="/courses" className="inline-flex items-center bg-brand-blue text-white px-6 py-3 rounded-lg font-bold">
              View All Courses <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10"
              >
                <div className="text-brand-orange mb-4 italic text-4xl">"</div>
                <p className="text-gray-200 mb-6 italic leading-relaxed">{t.comment}</p>
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-brand-orange text-sm font-medium">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges / Brands Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 font-semibold mb-8 uppercase tracking-widest text-sm">Government Recognized Certificate Provider</p>
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
            {/* Placeholders for trust badges */}
            <div className="text-2xl font-bold text-gray-400">BTEB</div>
            <div className="text-2xl font-bold text-gray-400">ICT Division</div>
            <div className="text-2xl font-bold text-gray-400">ZED IT Firm</div>
            <div className="text-2xl font-bold text-gray-400">ISO 9001</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-orange">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your IT Career?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Enroll today in our professional courses and get certified. Limited seats available for the upcoming session!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-brand-blue text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-blue-900 transition-all">
              Join Now
            </Link>
            <a href="https://wa.me/8801831156906" className="bg-white text-brand-orange px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-all">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
