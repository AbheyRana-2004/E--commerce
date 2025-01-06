import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-12 font-serif">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 text-lg">
            Welcome to <span className="font-semibold">ShopEase</span>, your one-stop destination for quality products at unbeatable prices.
            Our mission is to provide a seamless shopping experience, offering a wide range of products tailored to meet your needs.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:space-x-6 md:space-x-12 lg:space-x-16 justify-center gap-8">
          <div className="max-w-xs p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To revolutionize online shopping by making it more accessible and convenient for everyone, everywhere.
            </p>
          </div>
          <div className="max-w-xs p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Values</h3>
            <p className="text-gray-600">
              Integrity, customer satisfaction, and innovation drive us to deliver the best shopping experience possible.
            </p>
          </div>
          <div className="max-w-xs p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Promise</h3>
            <p className="text-gray-600">
              We promise high-quality products, secure payments, and fast delivery at the best prices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
