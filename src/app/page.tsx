"use client";
import React, { useEffect, useState } from "react";
import Navber from "@/Components/Navber";

const GalleryPage = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("galleryImages");
    if (stored) setImages(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("galleryImages", JSON.stringify(images));
  }, [images]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImages((prev) => [...prev, reader.result as string]);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 via-white to-indigo-50">
      <Navber />
      <div className="flex-grow px-6 py-10 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-700">
            Image <span className="text-blue-500">Gallery</span>
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Default images */}
          <img
            src="https://source.unsplash.com/random/400x300?nature"
            className="rounded-lg shadow"
          />
          <img
            src="https://source.unsplash.com/random/400x300?forest"
            className="rounded-lg shadow"
          />
          <img
            src="https://source.unsplash.com/random/400x300?river"
            className="rounded-lg shadow"
          />

          {/* Uploaded */}
          {images.map((img, idx) => (
            <img key={idx} src={img} className="rounded-lg shadow" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
