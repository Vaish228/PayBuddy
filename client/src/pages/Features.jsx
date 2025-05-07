import React from 'react';
import  share  from '../assets/share.png'

export default function Features() {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-teal-400">PayBuddy</h1>
        </div>

        <nav className="space-y-4">
          <div className="text-teal-500 font-semibold">📊 Dashboard</div>
          <div className="text-gray-600">🏁 Recent activity</div>
          <div className="text-gray-600">📋 All expenses</div>
        </nav>

        <div className="mt-6">
          <div className="text-xs text-gray-500 mb-1">GROUPS <span className="text-gray-400 ml-1">+add</span></div>
          <p className="text-sm text-gray-400">You do not have any groups yet.</p>
        </div>

        <div className="mt-4">
          <div className="text-xs text-gray-500 mb-1">FRIENDS <span className="text-gray-400 ml-1">+add</span></div>
          <p className="text-sm text-gray-400">You have not added any friends yet.</p>
        </div>

        <div className="mt-6">
          <h3 className="bg-green-400 text-white px-2 py-1 rounded-t">Invite friends</h3>
          <input
            type="email"
            placeholder="Enter an email address"
            className="w-full border border-gray-300 p-2 mb-2"
          />
          <button className="w-full bg-gray-200 text-black py-1 mb-3 rounded">Send invite</button>
          <div className="flex gap-2">
            <button className="bg-blue-700 text-white px-4 py-1 rounded">Share</button>
            <button className="bg-blue-400 text-white px-4 py-1 rounded">Tweet</button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 py-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <div className="flex gap-3">
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Add an expense
            </button>
            <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-green-500">
              Settle up
            </button>
          </div>
        </div>

        <div className="bg-gray-100 border border-gray-300 rounded p-6 text-center">
          <div className="flex justify-center mb-4">
            {/* Simple character illustration placeholder */}
            <img
              src={share}
              alt="Character"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Welcome to PayBuddy!</h3>
          <p className="text-gray-600 mb-4">
            Splitwise helps you split bills with friends.
            <br />
            Click “Add an expense” above to get started,
            or invite some friends first!
          </p>
          <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600">
            ➕ Add friends on Splitwise
          </button>
        </div>
      </main>
    </div>
  )
}
