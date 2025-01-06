import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    showFooter && (
      <div className="p-3 bg-teal-700 font-semibold font-serif flex justify-center items-center text-white text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl fixed bottom-0 w-full">
        Copyright © 2024 MY Store Archives. All Rights Reserved.
      </div>
    )
  );
};

export default Footer;
