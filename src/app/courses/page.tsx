"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Clock, 
  Tag, 
  Monitor, 
  Palette, 
  Megaphone, 
  Video, 
  Globe 
} from 'lucide-react';
import Link from 'next/link';

const courses = [
  {
    id: "office",
    title: "Microsoft Office (Basic & Advanced)",
    desc: "Comprehensive training on MS Word, Excel, PowerPoint, Access, and Outlook. Essential for any administrative or corporate job.",
    icon: <Monitor className="text-white" size={32} />,
    duration: "3 & 6 Months",
    price: "4,000 - 7,000 BDT",
    features: ["Word Processing", "Spreadsheet Management", "Presentations", "Database Basics", "Email Communication"]
  },
  {
    id: "graphics",
    title: "Graphics Design (Basic & Advanced)",
    desc: "Master industry-standard tools like Adobe Photoshop and Illustrator. Learn visual branding, typography, and layout design.",
    icon: <Palette className="text-white" size={32} />,
    duration: "3 & 6 Months",
    price: "8,000 - 15,000 BDT",
    features: ["Photo Manipulation", "Vector Illustration", "Logo Design", "Print Media Design", "Portfolio Building"]
  },
  {
    id: "marketing",
    title: "Digital Marketing (Basic & Advanced)",
    desc: "Learn to grow brands online. Covers Social Media Marketing, SEO, Content Marketing, and Google Ads.",
    icon: <Megaphone className="text-white" size={32} />,
    duration: "3 & 6 Months",
    price: "6,000 - 12,000 BDT",
    features: ["Social Media Management", "Search Engine Optimization", "Content Strategy", "Email Marketing", "Ad Campaigns"]
  },
  {
    id: "video",
    title: "Video Editing",
    desc: "Create professional video content for YouTube, Social Media, and Professional Projects using Premiere Pro and After Effects.",
    icon: <Video className="text-white" size={32} />,
    duration: "3 & 6 Months",
    price: "8,000 - 15,000 BDT",
    features: ["Cutting & Transitions", "Color Correction", "Audio Syncing", "Motion Graphics", "Exporting Formats"]
  },
  {
    id: "web",
    title: "Web Design",
    desc: "Build modern, responsive websites. Learn HTML5, CSS3, JavaScript, and popular frameworks.",
    icon: <Globe className="text-white" size={32} />,
    duration: "3 & 6 Months",
    price: "10,000 - 20,000 BDT",
    features: ["Responsive Design", "Modern UI/UX", "HTML/CSS/JS", "Bootstrap/Tailwind", "Project Deployment"]
  }
];

const CoursesPage = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-brand-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Professional Courses</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            All courses include government-recognized certificates and hands-on practical training.
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {courses.map((course, idx) => (
            <motion.div 
              key={course.id}
              id={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center bg-white p-8 rounded-3xl shadow-xl border border-gray-100 scroll-mt-24`}
            >
              <div className="flex-1">
                <div className="bg-brand-orange w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
                  {course.icon}
                </div>
                <h2 className="text-3xl font-bold text-brand-blue mb-4">{course.title}</h2>
                <p className="text-gray-600 text-lg mb-8">{course.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <CheckCircle2 className="text-brand-orange mr-2" size={20} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-6 items-center mb-8">
                  <div className="flex items-center text-brand-blue font-bold">
                    <Clock className="mr-2" size={20} />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center text-brand-orange font-bold text-xl">
                    <Tag className="mr-2" size={20} />
                    <span>{course.price}</span>
                  </div>
                </div>

                <Link 
                  href="/contact" 
                  className="inline-block bg-brand-blue text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all transform hover:scale-105"
                >
                  Enroll Now
                </Link>
              </div>
              <div className="flex-1 w-full">
                <img 
                  src={`https://via.placeholder.com/600x400?text=${course.id.toUpperCase()}+Course`} 
                  alt={course.title} 
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white p-12 rounded-3xl shadow-inner border border-dashed border-brand-orange">
          <h2 className="text-3xl font-bold text-brand-blue mb-4 text-brand-orange">Admission Special Offer!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get 20% discount on any 6-month course if you enroll this week. 
            Bring a friend and get an additional 500 BDT off!
          </p>
          <div className="text-sm font-medium text-gray-500 italic">
            * Terms and conditions apply. Contact us for details.
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
