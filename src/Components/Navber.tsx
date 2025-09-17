"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navber = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          Image<span className="text-yellow-300">Gallery</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-white hover:text-yellow-300">Home</Link>
          <Link href="/gallery" className="text-white hover:text-yellow-300">Gallery</Link>
          <Link href="/about" className="text-white hover:text-yellow-300">About</Link>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-indigo-800 px-6 py-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setOpen(false)} className="text-white hover:text-yellow-300">Home</Link>
          <Link href="/gallery" onClick={() => setOpen(false)} className="text-white hover:text-yellow-300">Gallery</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-white hover:text-yellow-300">About</Link>
        </div>
      )}
    </div>
  );
};

export default Navber;
