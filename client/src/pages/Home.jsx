import React from 'react';
import { Link } from 'react-router-dom';
import video from '../assets/travelling.mp4'; 

function Home() {
  return (
    <main className="animate-fadeIn  min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
          Less stress when<br />
          splitting <span className="text-teal-400">group expenses</span>.
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Track shared expenses and balances for trips, roommates, and group activities — all in one place.
        </p>
        <Link
          to="/signup"
          className="mt-6 inline-block bg-teal-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition"
        >
          Sign up
        </Link>
        <p className="mt-3 text-gray-500 text-sm">Free for iPhone, Android, and web.</p>
      </div>

      {/* Right Section */}
     {/* Right Section */}
    <div className="lg:w-1/2 flex justify-center">
      <video
        src={video}
        className="w-3/4 max-w-sm"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>

    </main>
  );
}

export default Home;
  