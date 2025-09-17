"use client";
import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);

  // লোকাল স্টোরেজ থেকে লোড
  useEffect(() => {
    const stored = localStorage.getItem("galleryImages");
    if (stored) setImages(JSON.parse(stored));
  }, []);

  // লোকাল স্টোরেজে সেভ
  useEffect(() => {
    localStorage.setItem("galleryImages", JSON.stringify(images));
  }, [images]);

  // আপলোড হ্যান্ডলার
  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImages((prev) => [...prev, reader.result]);
    };
    reader.readAsDataURL(file);
  };

  // ডিলিট হ্যান্ডলার
  const handleDelete = (idx) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 via-white to-indigo-50 px-6 py-10 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-700">
          Your <span className="text-blue-500">Gallery</span>
        </h1>

        {/* Upload Button */}
        <label className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow cursor-pointer">
          Upload
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
        </label>
      </div>

      {/* Uploaded Images */}
      {images.length === 0 ? (
        <p className="text-gray-500 text-center mt-20">No images uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="relative group">
              <img
                src={img}
                alt={`uploaded-${idx}`}
                className="rounded-lg shadow"
              />
              <button
                onClick={() => handleDelete(idx)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
