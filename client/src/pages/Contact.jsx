import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    // handle API call or email submission here
  };

  return (
    <motion.div
      className="min-h-screen bg-white flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="max-w-5xl w-full grid md:grid-cols-2 gap-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Section */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Contact us</h2>
          <p className="text-lg text-gray-600 mb-6">
            Need to get in touch with us? Either fill out the form with your inquiry or
            find the <a href="#" className="text-teal-400 underline">department email</a> you'd like to contact below.
          </p>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          className="bg-white shadow-lg p-8 rounded-xl border border-green-200"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 text-lg">
            <div className="flex gap-4">
              <motion.div className="flex-1" whileFocus={{ scale: 1.02 }}>
                <label className="block text-base font-semibold text-teal-400">First name*</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-teal-500 focus:border-green-500 text-base p-1.5"
                />
              </motion.div>

              <motion.div className="flex-1" whileFocus={{ scale: 1.02 }}>
                <label className="block text-base font-semibold text-teal-400">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 text-base p-1.5"
                />
              </motion.div>
            </div>

            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="block text-base font-semibold text-teal-400">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 text-base p-1.5"
              />
            </motion.div>

            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="block text-base font-semibold text-teal-400">What can we help you with?</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 text-base "
              />
            </motion.div>

            <motion.button
              type="submit"
              className="bg-teal-400 hover:bg-teal-500 text-white font-semibold text-lg py-3 px-8 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
