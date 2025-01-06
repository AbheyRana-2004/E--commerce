import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="py-4">
      <h2 className="font-bold text-2xl text-center font-serif mb-6">Home</h2>
      
      
      <div className="flex flex-wrap justify-center gap-4 m-4">
        
        
        <NavLink
          to="/products/all"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-600 rounded-lg p-2 text-white"
              : "bg-gray-200 rounded-lg p-2"
          }
        >
          <button>All Products</button>
        </NavLink>

        
        <NavLink
          to="electronics"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-600 rounded-lg p-2 text-white"
              : "bg-gray-200 rounded-lg p-2"
          }
        >
          <button>Electronics</button>
        </NavLink>

        
        <NavLink
          to="jewelery"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-600 rounded-lg p-2 text-white"
              : "bg-gray-200 rounded-lg p-2"
          }
        >
          <button>Jewellery</button>
        </NavLink>

       
        <NavLink
          to="men's clothing"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-600 rounded-lg p-2 text-white"
              : "bg-gray-200 rounded-lg p-2"
          }
        >
          <button>Men's Clothing</button>
        </NavLink>

       
        <NavLink
          to="women's clothing"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-600 rounded-lg p-2 text-white"
              : "bg-gray-200 rounded-lg p-2"
          }
        >
          <button>Women's Clothing</button>
        </NavLink>

      </div>

      <Outlet />
    </div>
  );
};

export default Home;
