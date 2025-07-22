import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          Welcome to Laptop Store – Your one-stop destination for top-quality laptops and accessories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Our Mission */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              At Laptop Store, our mission is to make technology accessible to everyone.
              We provide reliable and affordable laptops, backed by excellent customer service and a passion for innovation.
            </p>
          </div>

          {/* What We Offer */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Latest laptops from top brands</li>
              <li>Affordable refurbished options</li>
              <li>Accessories and add-ons</li>
              <li>Fast and secure delivery</li>
              <li>After-sale technical support</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us</h3>
            <p className="text-gray-600 leading-relaxed">
              With a focus on customer satisfaction and product quality, we aim to deliver the best online laptop shopping experience.
              Our knowledgeable team is always ready to help you find the perfect laptop to match your needs and budget.
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
            <p className="text-gray-600">
              📍 Location: Nairobi, Kenya<br />
              📞 Phone: +254 712 345 678<br />
              📧 Email: info@laptopstore.co.ke
            </p>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Laptop Store. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
