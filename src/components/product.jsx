import React, { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { productstore } from "../contextstore/producscontext";
import { IoArrowBackOutline } from "react-icons/io5";
import { cartContext } from "../contextstore/cartcontext";

const Product = () => {
  const productid = useParams();
  let data = useContext(productstore);
  data = data.filter((item) => {
    return item.id == productid.id;
  });

  const { cart, setCart } = useContext(cartContext);
  function addtocart(id) {
    let matched = cart.filter((item) => item.id == id);
    let unmatch = cart.filter((item) => item.id != id);
    if (matched.length > 0) {
      let obj = matched[0];
      obj = { ...obj, quantity: obj.quantity + 1 };
      setCart([...unmatch, obj]);
      localStorage.setItem("Cart", JSON.stringify([...unmatch, obj]));
    } else {
      localStorage.setItem("Cart", JSON.stringify([...unmatch, { ...data[0], quantity: 1 }]));
      setCart([...unmatch, { ...data[0], quantity: 1 }]);
    }
  }

  return (
    <div className="py-4 px-4">
      <NavLink to="/">
        <IoArrowBackOutline className="text-5xl font-medium mt-2" />
      </NavLink>
      <div className="flex flex-col md:flex-row p-4 justify-center gap-6 flex-wrap">
        {data.map((item) => (
          <div className="p-4 flex flex-col items-center w-full sm:w-80 md:w-96" key={item.id}>
            <img src={item.image} className="w-full h-[300px] object-contain pb-10" alt="" />
            <h1 className="whitespace-nowrap overflow-hidden text-ellipsis text-2xl md:text-3xl text-center">{item.title}</h1>
            <h3 className="text-blue-700 text-center">{`Price: $${item.price}`}</h3>
            <h2 className="font-normal text-center mt-2">{`Description: ${item.description}`}</h2>
            <button
              onClick={() => addtocart(item.id)}
              className="rounded-md border border-black p-2 mt-5 bg-blue-300 hover:bg-yellow-200 w-full md:w-[50%] mx-auto"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
