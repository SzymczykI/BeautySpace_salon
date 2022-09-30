import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center h-screen mb-8 bg-fixed bg-center bg-cover custom-img">
      <button
        type="button"
        className="inline-flex items-center bg-trans border-2 border-white px-16 py-3 text-sm font-medium text-white shadow-sm hover:bg-black "
      >
        SALON
      </button>
      <button
        type="button"
        className="inline-flex items-center mx-2 px-14 py-3 text-sm font-medium text-white bg-gold shadow-sm hover:bg-black "
      >
        AKADEMIA
      </button>
    </header>
  );
};

export default Header;
