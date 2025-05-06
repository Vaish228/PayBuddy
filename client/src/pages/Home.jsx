import React from 'react';
import { Link } from 'react-router-dom';
import video from '../assets/travelling.mp4';

// Import your custom icons/images
import askImg from '../assets/charge.png';
import pizzaImg from '../assets/pizza.png';
import trackImg from '../assets/bag.png';
import tripImg from '../assets/chart.png';

function Home() { 
  return (
    <>
      {/* Hero Section */}
      <main className="animate-fadeIn min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-tight">
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
        </div>

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

      {/* Why Splitkaro Section */}
      <section className="bg-teal-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">Why choose PayBuddy?</h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <img src={askImg} alt="Ask Friend" className="h-50 mb-4 w-50" />
              <h3 className="text-xl font-semibold mb-2">Asking a friend to return your money can be awkward 😬</h3>
              <p className="text-gray-600">Receive your money on time with priority settlements.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src={pizzaImg} alt="Pizza Split" className="h-50 mb-4 w-50" />
              <h3 className="text-xl font-semibold mb-2">Worried about your share when you eat with your friends? 🥲</h3>
              <p className="text-gray-600">Now split bills item-wise for any order you make, online or offline.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src={trackImg} alt="Expense Tracking" className="h-50 mb-4 w-50" />
              <h3 className="text-xl font-semibold mb-2">Can't keep track of expenses 😵</h3>
              <p className="text-gray-600">All your transactions organized and tracked with clarity.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src={tripImg} alt="Trip Planning" className="h-50 mb-4 w-70" />
              <h3 className="text-xl font-semibold mb-2">Planning a trip? 🌴</h3>
              <p className="text-gray-600">Easily split group travel expenses and keep everything fair.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
