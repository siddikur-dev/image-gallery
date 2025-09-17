"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          Image<span className="text-yellow-300">Gallery</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-white hover:text-yellow-300">
            Home
          </Link>
          <Link href="/gallery" className="text-white hover:text-yellow-300">
            Gallery
          </Link>
          <Link href="/about" className="text-white hover:text-yellow-300">
            About
          </Link>

          {/* Upload Button (Desktop) */}
          <button
            onClick={() => router.push("/gallery")}
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Upload
          </button>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-indigo-800 px-6 py-4 flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-white hover:text-yellow-300"
          >
            Home
          </Link>
          <Link
            href="/gallery"
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Upload
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-white hover:text-yellow-300"
          >
            About
          </Link>

          {/* Upload Button (Mobile) */}
          <button
            onClick={() => {
              setOpen(false);
              router.push("/gallery");
            }}
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Upload
          </button>
        </div>
      )}
    </div>
  );
};

export default Navber;
