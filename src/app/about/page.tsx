"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, History, Users } from 'lucide-react';

const AboutPage = () => {
  const team = [
    { name: "MD. Zahid Hasan", role: "Founder & CEO", image: "https://via.placeholder.com/300x300?text=CEO" },
    { name: "Expert Instructor", role: "Graphics Design", image: "https://via.placeholder.com/300x300?text=Instructor" },
    { name: "Senior Developer", role: "Web Development", image: "https://via.placeholder.com/300x300?text=Developer" },
  ];

  return (
    <div className="pt-10 pb-20">
      {/* Header */}
      <section className="bg-gray-50 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our journey, mission, and the team behind ZED IT Bangladesh.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-brand-orange"
          >
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="text-brand-orange" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-brand-blue mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower individuals in Bangladesh with professional IT skills through high-quality, 
              practical training. We strive to bridge the digital divide and create a workforce that is ready for 
              the global IT industry.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-brand-blue"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye className="text-brand-blue" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-brand-blue mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              We envision ZED IT Bangladesh as a leading hub for digital excellence, where every student transforms 
              into a skilled professional. We aim to be the most trusted name in IT training and services in the country.
            </p>
          </motion.div>
        </div>

        {/* Our Story */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://via.placeholder.com/600x400?text=ZED+IT+Classroom" 
                  alt="ZED IT Classroom" 
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white p-8 rounded-2xl hidden md:block">
                  <span className="text-4xl font-bold">8+</span>
                  <p className="font-medium">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
            <div>
              <div className="flex items-center mb-4">
                <History className="text-brand-orange mr-2" size={24} />
                <span className="text-brand-orange font-bold uppercase tracking-wider">Our Journey</span>
              </div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">How We Started</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ZED IT Bangladesh started with a simple vision: to make quality IT education accessible to everyone. 
                What began as a small training center in Tongi has now grown into a comprehensive IT firm serving 
                thousands of students and businesses.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over the years, we have continuously updated our curriculum to match industry standards, 
                invested in modern lab facilities, and brought in expert instructors who are passionate 
                about teaching. Today, we are proud to have helped over 1500 students kickstart their IT careers.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-4">
              <Users className="text-brand-orange mr-2" size={24} />
              <span className="text-brand-orange font-bold uppercase tracking-wider">Meet Our Team</span>
            </div>
            <h2 className="text-3xl font-bold text-brand-blue mb-4">The Experts Behind Your Success</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md text-center"
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-blue mb-1">{member.name}</h3>
                  <p className="text-brand-orange font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
