"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Image as ImageIcon, Camera } from 'lucide-react';

const GalleryPage = () => {
  const [images, setImages] = useState([
    { id: 1, src: "https://via.placeholder.com/800x600?text=Classroom+1", title: "Office Class" },
    { id: 2, src: "https://via.placeholder.com/800x600?text=Classroom+2", title: "Graphics Lab" },
    { id: 3, src: "https://via.placeholder.com/800x600?text=Certificate+Ceremony", title: "Certification" },
    { id: 4, src: "https://via.placeholder.com/800x600?text=Student+Work+1", title: "Student Project" },
    { id: 5, src: "https://via.placeholder.com/800x600?text=Classroom+3", title: "Evening Batch" },
    { id: 6, src: "https://via.placeholder.com/800x600?text=Lab+Facility", title: "Computer Lab" },
  ]);

  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploading(true);
      // Mock upload process
      setTimeout(() => {
        const newImage = {
          id: Date.now(),
          src: URL.createObjectURL(file),
          title: "Uploaded Image"
        };
        setImages([newImage, ...images]);
        setUploading(false);
      }, 1500);
    }
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-gray-50 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our training facilities, classrooms, and student success moments.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upload Section */}
        <div className="mb-12 flex flex-col items-center">
          <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-dashed border-gray-300 w-full max-w-xl text-center">
            <input 
              type="file" 
              id="file-upload" 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileUpload}
            />
            <label 
              htmlFor="file-upload" 
              className="cursor-pointer flex flex-col items-center group"
            >
              <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                {uploading ? (
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-current"></div>
                ) : (
                  <Upload size={32} />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {uploading ? "Uploading..." : "Share your classroom moment"}
              </h3>
              <p className="text-gray-500">Click to upload an image from your device</p>
            </label>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {images.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center">
                    <Camera className="mx-auto mb-2" size={32} />
                    <span className="font-bold text-lg">{img.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-orange"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage} 
              alt="Preview" 
              className="max-w-full max-h-full rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
