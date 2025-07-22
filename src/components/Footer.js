import React from 'react';
import { amazone } from '../assets';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-[#949494] pt-20 pb-10 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {/* Brand Info */}
        <div className="flex flex-col gap-5">
          <img className="w-12" src={amazone} alt="Laptop Store" />
          <p className="text-white text-sm tracking-wide">
            Laptop Store – Your trusted tech partner.
          </p>
          <div className="flex gap-4 text-white mt-4">
            <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
            <FaTwitter className="hover:text-orange-500 cursor-pointer" />
            <FaInstagram className="hover:text-orange-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        {/* Locate Us */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Michael Nivah</p>
            <p>Phone: +254 745 445 459</p>
            <p>Email: nivahmichael@gmail.com</p>
            <p>Nairobi, Kenya</p>
          </div>
        </div>

        {/* Profile */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <ul className="flex flex-col gap-2 text-base">
            <li className="hover:text-white cursor-pointer">My Account</li>
            <li className="hover:text-white cursor-pointer">Orders</li>
            <li className="hover:text-white cursor-pointer">Wishlist</li>
            <li className="hover:text-white cursor-pointer">Checkout</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-base">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500 pt-10 border-t border-gray-700 mt-10">
        <p>© {new Date().getFullYear()} Laptop Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
