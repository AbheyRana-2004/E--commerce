import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TbJoinStraight } from "react-icons/tb";

const singleproduct = ({ value }) => {
  
  return (
    <>
        <NavLink to={`/product/${value.id}`}>
      <div className="p-4 w-[180px] border border-black rounded-xl " key={value.id}>
        <img
          src={value.image}
          className="w-full h-[180px] object-contain"
          alt=""
        />
        <h2 className="whitespace-nowrap overflow-hidden text-ellipsis">
          {value.title}
        </h2>
        <h3>Price : ${value.price}</h3>
         
       
      </div>
          </NavLink>
    </>
  );
};

export default singleproduct;
