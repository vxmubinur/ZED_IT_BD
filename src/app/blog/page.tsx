"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: "How to Start a Career in Graphics Design in 2024",
    excerpt: "Graphics design is one of the most in-demand skills in the digital age. Learn the essential tools and steps to become a professional designer.",
    date: "Oct 15, 2023",
    author: "MD. Zahid Hasan",
    category: "Design",
    image: "https://via.placeholder.com/600x400?text=Graphics+Design+Blog"
  },
  {
    id: 2,
    title: "Why Every Business Needs Digital Marketing",
    excerpt: "In today's competitive market, digital marketing is no longer an option but a necessity for business growth and brand awareness.",
    date: "Nov 02, 2023",
    author: "ZED IT Expert",
    category: "Marketing",
    image: "https://via.placeholder.com/600x400?text=Digital+Marketing+Blog"
  },
  {
    id: 3,
    title: "The Importance of MS Office Skills in Professional Life",
    excerpt: "Whether you are a student or a professional, mastering Microsoft Office can significantly boost your productivity and career prospects.",
    date: "Dec 10, 2023",
    author: "Training Lead",
    category: "Office",
    image: "https://via.placeholder.com/600x400?text=MS+Office+Blog"
  }
];

const BlogPage = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-brand-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest Articles & News</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends in IT, tips for students, and career advice from our experts.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col"
            >
              <div className="relative h-56 w-full">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-bold">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-brand-blue mb-4 hover:text-brand-orange transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.id}`} 
                  className="inline-flex items-center text-brand-blue font-bold hover:gap-2 transition-all"
                >
                  Read More <ArrowRight size={18} className="ml-2 text-brand-orange" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-24 bg-gray-50 rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 border border-gray-200">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <BookOpen className="text-brand-orange mr-2" size={24} />
              <span className="text-brand-orange font-bold uppercase tracking-widest">Newsletter</span>
            </div>
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Subscribe to Our Blog</h2>
            <p className="text-gray-600 text-lg">
              Get the latest IT tips and course updates directly in your inbox. No spam, only quality content.
            </p>
          </div>
          <div className="flex-1 w-full max-w-md">
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="flex-grow px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none"
                required
              />
              <button className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-900 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
