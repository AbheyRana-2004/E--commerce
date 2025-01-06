import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { cartContext } from '../contextstore/cartcontext';

const Navbar = () => {
  const { cart } = useContext(cartContext);

  
  const point = cart.reduce((total, curr) => {
    return total + curr.quantity;
  }, 0);

  return (
    <div className="flex justify-between items-center p-3 font-serif bg-teal-600 sticky top-0 z-10">
    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
      <span role="img" aria-label="shirt">🧥</span> ShopEase
    </div>
    <ul className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-blue-400 p-1 sm:p-2 md:p-3 rounded text-white"
            : "text-white"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "bg-blue-400 p-1 sm:p-2 md:p-3 rounded text-white"
            : "text-white"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "bg-blue-400 p-1 sm:p-2 md:p-3 rounded text-white"
            : "text-white"
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive
            ? "relative"
            : "relative"
        }
      >
        <span className="absolute bottom-1 sm:bottom-2 left-2 sm:left-3 w-3 sm:w-4 h-3 sm:h-4 text-xs sm:text-sm rounded-full bg-red-400 text-white flex items-center justify-center">
          {point}
        </span>
        <FaShoppingCart className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-white" />
      </NavLink>
    </ul>
  </div>
  
  );
}

export default Navbar;
