import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">ZED IT Bangladesh</h3>
            <p className="text-gray-300 mb-4">
              আইটি ফার্ম এবং ডিজিটাল স্কিল ট্রেনিং সেন্টার। Empowering the next generation of IT professionals in Bangladesh.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-orange transition-colors text-2xl">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="hover:text-brand-orange transition-colors text-2xl">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className="hover:text-brand-orange transition-colors text-2xl">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Quick Links (দ্রুত লিঙ্ক)</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="text-gray-300 hover:text-white transition-colors">Our Courses</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Courses (কোর্সসমূহ)</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Microsoft Office</li>
              <li className="text-gray-300">Graphics Design</li>
              <li className="text-gray-300">Digital Marketing</li>
              <li className="text-gray-300">Video Editing</li>
              <li className="text-gray-300">Web Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Contact Us (যোগাযোগ)</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-brand-orange flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">
                  Shop no: 11, 43-44 (2nd Floor), Pilot School Super Market, College Gate, Tongi, Gazipur
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-brand-orange" size={18} />
                <span className="text-gray-300 text-sm">+880 18 3115 6906</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-brand-orange" size={18} />
                <span className="text-gray-300 text-sm">info@zeditbd.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} ZED IT Bangladesh. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Developed by ZED IT Bangladesh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
