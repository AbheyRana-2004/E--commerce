import React, { useContext } from 'react';
import Cartmes from './message\'s/cart-message';
import { NavLink } from 'react-router-dom';
import { cartContext } from '../contextstore/cartcontext';
import { FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa';
import { IoReturnUpBack } from 'react-icons/io5';
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {
  const { cart, setCart } = useContext(cartContext);

  const deletee = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
  };

  const minus = (id) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          if (item.quantity === 1) return null;
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter(Boolean);
    setCart(updatedCart);
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
  };

  const Plus = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) return { ...item, quantity: item.quantity + 1 };
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="p-4">
      <NavLink to="/">
        <IoReturnUpBack className="text-4xl mb-6 cursor-pointer text-gray-700" />
      </NavLink>

      {cart.length === 0 ? (
        <div className="text-5xl font-serif font-medium w-full h-screen flex justify-center items-center">
          <Cartmes />
        </div>
      ) : (
        <div className="flex flex-wrap justify-between space-y-4 font-serif sm:space-y-0">
        
          <div className="w-full sm:w-[65%] space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center p-4 bg-white shadow-2xl rounded-lg space-x-4">
                <NavLink to={`/product/${item.id}`} className="w-[120px]">
                  <img
                    src={item.image}
                    className="w-full h-[120px] object-contain rounded-lg hover:scale-110 transition-transform duration-200"
                    alt={item.title}
                  />
                </NavLink>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold truncate">{item.title}</h2>
                  <h3 className="text-gray-600">Price: ${item.price}</h3>
                  <div className="flex items-center mt-3 gap-3">
                    <FaRegMinusSquare
                      className="cursor-pointer text-xl text-gray-700 hover:text-gray-500"
                      onClick={() => minus(item.id)}
                    />
                    <span>{item.quantity}</span>
                    <FaRegPlusSquare
                      className="cursor-pointer text-xl text-gray-700 hover:text-gray-500"
                      onClick={() => Plus(item.id)}
                    />
                  </div>
                  <button
                    onClick={() => deletee(item.id)}
                    className="text-red-600 text-2xl mt-2 hover:text-red-400"
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>

          
          <div className="w-full sm:w-[30%] bg-gray-100 p-6 rounded-lg shadow-md mt-6 sm:mt-0 font-serif">
            <h3 className="text-lg font-semibold text-gray-700">Order Summary</h3>
            <hr className="my-4" />
            <div className="text-gray-600">
              <p className="flex justify-between">
                Items: <span>{cart.length}</span>
              </p>
              <p className="flex justify-between">
                Total:{" "}
                <span className="font-semibold">
                  ${Math.round(cart.reduce((acc, item) => acc + item.price * item.quantity, 0))}
                </span>
              </p>
              <p className="flex justify-between">
                Discount: <span>$0</span>
              </p>
              <p className="flex justify-between">
                Delivery Cost: <span>$0</span>
              </p>
            </div>
            <hr className="my-4" />
            <h3 className="flex justify-between text-lg font-semibold text-gray-700">
              Grand Total:
              <span>
                ${Math.round(cart.reduce((acc, item) => acc + item.price * item.quantity, 0))}
              </span>
            </h3>
            <button className="mt-4 w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
