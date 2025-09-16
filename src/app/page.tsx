import Navber from "@/Components/Navber";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 via-white to-indigo-50">
      {/* Navbar */}
      <Navber />

      {/* Hero Section */}
      <div className="flex-grow flex justify-center items-center">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow-md">
            Welcome to the <span className="text-blue-500">Image Gallery</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover, explore and enjoy a wide collection of beautiful images
            curated just for you.
          </p>

          {/* Button Group */}
          <div className="flex justify-center gap-6">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-700 transition cursor-pointer">
              Explore Gallery
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-50 transition cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-600 py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} Image Gallery | All Rights Reserved
      </footer>
    </div>
  );
};

export default page;
