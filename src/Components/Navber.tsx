"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icon package (lucide-react)

const Navber = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          href={"/"}
          className="text-white text-3xl font-extrabold tracking-wide hover:text-blue-200 transition"
        >
          Image<span className="text-yellow-300">Gallery</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <Link
            href={"/"}
            className="text-white hover:text-yellow-300 transition"
          >
            Home
          </Link>
          <Link
            href={"/gallery"}
            className="text-white hover:text-yellow-300 transition"
          >
            Gallery
          </Link>
          <Link
            href={"/about"}
            className="text-white hover:text-yellow-300 transition"
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className="text-white hover:text-yellow-300 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-indigo-800 px-6 py-4 flex flex-col gap-4 text-lg font-medium">
          <Link
            href={"/"}
            className="text-white hover:text-yellow-300 transition"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href={"/gallery"}
            className="text-white hover:text-yellow-300 transition"
            onClick={() => setOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href={"/about"}
            className="text-white hover:text-yellow-300 transition"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className="text-white hover:text-yellow-300 transition"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navber;

const navItem = [
  {
    label: "Photo",
    url: "/?category=photo",
  },
  {
    label: "Vector",
    url: "/?category=vector",
  },
];
