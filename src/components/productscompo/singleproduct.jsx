import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TbJoinStraight } from "react-icons/tb";

const singleproduct = ({ value }) => {
  
  return (
    <>
        <NavLink to={`/product/${value.id}`}>
        <div
  className="p-4 w-[180px] sm:w-[300px] md:w-[500px] lg:w-[700px] xl:w-[900px] border border-black rounded-xl"
  key={value.id}
>
  <img
    src={value.image}
    className="w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-[350px] xl:h-[400px] object-contain"
    alt=""
  />
  <h2 className="whitespace-nowrap overflow-hidden text-ellipsis text-sm sm:text-base md:text-lg lg:text-xl">
    {value.title}
  </h2>
  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl">
    Price : ${value.price}
  </h3>
</div>

          </NavLink>
    </>
  );
};

export default singleproduct;
