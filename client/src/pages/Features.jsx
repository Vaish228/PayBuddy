// App.jsx or Dashboard.jsx
import React from 'react';

export default function Dashboard() {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r flex flex-col">
        <div className="px-6 py-4 border-b">
          <h1 className="text-2xl font-bold text-green-600">PayBuddy</h1>
        </div>
        <nav className="flex-1 px-6 py-4 space-y-4">
          <a href="#" className="block text-gray-800 hover:text-green-600 font-medium">
            📋 Dashboard
          </a>
          <a href="#" className="block text-gray-800 hover:text-green-600">
            📊 Recent activity
          </a>
          <a href="#" className="block text-gray-800 hover:text-green-600">
            📁 All expenses
          </a>

          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-600">GROUPS +add</p>
            <p className="text-xs text-gray-500">You do not have any groups yet.</p>
          </div>

          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-600">FRIENDS +add</p>
            <p className="text-xs text-gray-500">You have not added any friends yet.</p>
          </div>

          <div className="mt-6">
            <input
              type="email"
              placeholder="Enter an email address"
              className="w-full border rounded px-3 py-2 mb-2 text-sm"
            />
            <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
              Send invite
            </button>
          </div>

          <div className="mt-4 flex space-x-2">
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Share</button>
            <button className="bg-blue-400 text-white px-3 py-1 rounded text-sm">Tweet</button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <div className="space-x-3">
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Add an expense
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Settle up
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <img
            src="/character.png" // Replace with actual path
            alt="Character"
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Welcome to PayBuddy!</h3>
          <p className="text-gray-600 max-w-md mb-4">
            PayBuddy helps you split bills with friends. Click "Add an expense" above to get started, or invite some friends first!
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            + Add friends on PayBuddy
          </button>
        </div>
      </div>
    </div>
  );
}
