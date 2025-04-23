import React, { useState } from "react";
import Navbar from "./Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add email sending logic or API call here

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <Navbar />
    <div className="bg-white py-16 px-4 md:px-8 lg:px-16 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-zinc-800 mb-8">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
