import React, { useState, useContext } from 'react';
import { amazone, cartimage, cart } from '../assets';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CategoryContext } from './CategoryContext';

const categories = ["All","HP", "Apple", "Dell", "Lenovo"];

function Header() {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { setSelectedCategory } = useContext(CategoryContext); // 👈 use context

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === "All" ? "" : category);
    setDropdownOpen(false);
  };

  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <Link to="/">
          <img className='w-30 h-[75px] ml-7' src={amazone} alt='amazone' />
        </Link>
        <div className='flex items-center gap-5 mr-10'>
          <ul className='flex items-center gap-5 relative'>
            <Link to="/">
            <li className='text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300'>
              Home
            </li>
            </Link>
            <li
              className='text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300 relative'
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Category
              {dropdownOpen && (
                <ul className='absolute top-8 left-0 bg-white shadow-md border rounded-md z-50 max-h-60 overflow-y-auto'>
                  {categories.map((category) => (
                    <li
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className='px-4 py-2 hover:bg-orange-100 cursor-pointer'
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <Link to="/aboutUs">
            <li className='text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300'>About Us</li>
            </Link>
            <Link to="/contacts">
            <li className='text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300'>Contacts</li>
            </Link>
            <li className='text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300'>Blog</li>
          </ul>
          <Link to="/cart">
            <div className='relative'>
              <img className='w-12' src={cartimage} alt='cartimage' />
              <span className='absolute w-12 top-4 text-sm text-red-700 flex items-center justify-center font-semibold'>
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img className='w-9 h-9 rounded-full' src={userInfo ? userInfo.image : cart} alt='user' />
          </Link>
          {userInfo && (
            <p className='text-base font-titleFont font-semibold underline underline-offset-2'>
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
