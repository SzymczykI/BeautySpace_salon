import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className='flex items-center justify-center h-[70vh] mb-8 bg-center bg-cover custom-img bg-opacity-50'>
      <Link href="/salon">
        <button
          type="button"
          className="inline-flex items-center  px-16 py-3 text-sm font-medium text-gold bg-white shadow-sm hover:bg-black"
        >
          SALON
        </button>
      </Link>
      <Link href="/akademia">
        <button
          type="button"
          className="inline-flex items-center mx-2 px-14 py-3 text-sm font-medium text-white bg-gold shadow-sm hover:bg-black"
        >
          AKADEMIA
        </button>
      </Link>
    </header>
  );
};

export default Header;
