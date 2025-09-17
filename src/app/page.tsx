"use client";
import React, { useEffect, useState } from "react";
import Navber from "@/Components/Navber";
import { Trash2 } from "lucide-react";

const GalleryPage = () => {
  const [images, setImages] = useState<string[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("galleryImages");
    if (stored) setImages(JSON.parse(stored));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("galleryImages", JSON.stringify(images));
  }, [images]);

  // Upload image
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImages((prev) => [...prev, reader.result as string]);
    };
    reader.readAsDataURL(file);
  };

  // Delete image
  const handleDelete = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 via-white to-indigo-50">
      <Navber />
      <div className="flex-grow px-6 py-10 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-700">
            My <span className="text-blue-500">Gallery</span>
          </h1>

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

        {/* Grid of uploaded images */}
        {images.length === 0 ? (
          <p className="text-gray-500 text-lg text-center mt-20">
            No images yet. Upload some!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative group rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={img}
                  alt={`Uploaded ${idx}`}
                  className="w-full h-64 object-cover"
                />
                {/* Delete button */}
                <button
                  onClick={() => handleDelete(idx)}
                  className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
