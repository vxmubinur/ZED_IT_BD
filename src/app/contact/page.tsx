"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    }, 2000);
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-brand-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us via any of the channels below.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center border-t-4 border-brand-orange"
          >
            <div className="w-16 h-16 bg-orange-100 text-brand-orange rounded-full flex items-center justify-center mb-4">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-blue mb-2">Call Us</h3>
            <p className="text-gray-600">+880 18 3115 6906</p>
            <p className="text-gray-600">+880 19 1338 0902</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center border-t-4 border-brand-blue"
          >
            <div className="w-16 h-16 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center mb-4">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-blue mb-2">Email Us</h3>
            <p className="text-gray-600">info@zeditbd.com</p>
            <p className="text-gray-600">support@zeditbd.com</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center border-t-4 border-green-500"
          >
            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
              <MessageCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-blue mb-2">WhatsApp</h3>
            <p className="text-gray-600">+880 18 3115 6906</p>
            <a 
              href="https://wa.me/8801831156906" 
              className="mt-2 text-green-600 font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat Now
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Send Us a Message</h2>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p>Thank you for contacting us. We will get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-green-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none" 
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none" 
                      placeholder="017XX XXXXXX"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none" 
                    placeholder="example@mail.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Select Course</label>
                  <select 
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                    required
                  >
                    <option value="">Choose a course</option>
                    <option value="office">Microsoft Office</option>
                    <option value="graphics">Graphics Design</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="video">Video Editing</option>
                    <option value="web">Web Design</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none" 
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Location & Hours */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-brand-blue mb-6">Our Location</h2>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-brand-orange flex-shrink-0" size={24} />
                <div>
                  <p className="font-bold text-gray-800">Address</p>
                  <p className="text-gray-600">
                    Shop no: 11, 43-44 (2nd Floor),<br />
                    Pilot School Super Market, College Gate,<br />
                    Tongi, Gazipur, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-8">
                <Clock className="text-brand-orange flex-shrink-0" size={24} />
                <div>
                  <p className="font-bold text-gray-800">Business Hours</p>
                  <p className="text-gray-600">Monday – Saturday: 9AM – 9PM</p>
                  <p className="text-red-500 font-medium">Friday: Closed</p>
                </div>
              </div>
              {/* Map Placeholder */}
              <div className="aspect-video w-full bg-gray-200 rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500 font-bold group-hover:bg-gray-400 transition-colors">
                  <MapPin size={40} className="mr-2" />
                  <span>Interactive Map Placeholder</span>
                </div>
                {/* Real embed would go here */}
                {/* <iframe src="..." width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
