import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost/laptopstore/react/client/message.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.text();
      console.log(result);

      if (response.ok) {
        toast.success('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '', subject: '' });
        setStatus('');
      } else {
        toast.error('❌ Failed to send message. Please try again.');
        setStatus('');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('❌ An error occurred. Please try again later.');
      setStatus('');
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <ToastContainer position="top-center" autoClose={3000} />

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Have questions, suggestions, or need help? Reach out to us anytime!
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="space-y-6 bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-gray-700 font-semibold mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter subject"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <div className="text-gray-700 space-y-3">
            <p><strong>Store Name:</strong> Laptop Store</p>
            <p><strong>Location:</strong> Nairobi, Kenya</p>
            <p><strong>Email:</strong> support@laptopstore.co.ke</p>
            <p><strong>Phone:</strong> +254 745 445 459</p>
            <p><strong>Working Hours:</strong> Mon - Sat | 9:00 AM - 6:00 PM</p>
          </div>

          <div className="pt-4">
            <h3 className="text-lg font-medium mb-2">Follow Us</h3>
            <div className="flex gap-4 text-orange-600 text-xl">
              <a href="#" aria-label="Facebook" className="hover:text-orange-800 transition">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-orange-800 transition">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-orange-800 transition">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-orange-800 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
