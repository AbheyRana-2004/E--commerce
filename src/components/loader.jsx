import React from 'react';

const Card = () => {
  return (
    <div className="bg-gray-100 py-12">
     
      <div className="font-serif text-center text-3xl text-gray-800 mb-8">Services</div>

      
      <div className="grid gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://www.pixcrafter.com/wp-content/uploads/2023/05/vector-delivery-boy-illustration.jpg"
            alt="Free Delivery"
            className="w-full max-w-xs h-64 object-cover rounded-md mb-4"
          />
          <button className="border border-gray-400 rounded-lg bg-gray-400 hover:bg-gray-300 text-gray-700 font-serif text-xl px-6 py-2">
            Free Delivery
          </button>
        </div>

        
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://www.shutterstock.com/image-illustration/mobile-banking-simplified-upi-payments-260nw-2493991295.jpg"
            alt="Online Payment"
            className="w-full max-w-xs h-64 object-cover rounded-md mb-4"
          />
          <button className="border border-gray-400 rounded-lg bg-gray-400 hover:bg-gray-300 text-gray-700 font-serif text-xl px-6 py-2">
            Online Payment
          </button>
        </div>

        
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://cdn.pixabay.com/photo/2018/03/09/22/06/card-3212764_640.png"
            alt="Credit/Debit Card"
            className="w-full max-w-xs h-64 object-cover rounded-md mb-4"
          />
          <button className="border border-gray-400 rounded-lg bg-gray-400 hover:bg-gray-300 text-gray-700 font-serif text-xl px-6 py-2">
            Credit/Debit Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
