import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="p-4 bg-gold bg-opacity-40 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <div>
      <p className="mr-4 text-center text-sm md:mr-4 md:ml-8 ">
        Paulina Szymczyk Beauty Space <br /> Krótka 4, 20-077 Lublin
      </p>
      <div className="flex flex-row justify-center space-x-3 mt-2 mb-4 md:mb-0">
        <Link href="https://www.instagram.com/ps.beautyspace/">
          <span className="cursor-pointer hover:text-gold">
            <BsInstagram />
          </span>
        </Link>
        <Link href="https://www.facebook.com/psbeautyspace/">
          <span className="cursor-pointer hover:text-gold">
            <BsFacebook />
          </span>
        </Link>
      </div>
      </div>
      <ul className="flex flex-wrap items-center justify-center my-2 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="/regulamin" className="mr-4 hover:text-white md:mr-6 ">
            REGULAMIN
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:text-white md:mr-6">
            AKADEMIA
          </a>
        </li>
        <li>
          <a href="/praca" className="mr-4 hover:text-white md:mr-6">
            PRACA
          </a>
        </li>
        <li>
          <a href="/kontakt" className="hover:text-white">
            KONTAKT
          </a>
        </li>
      </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 Copywright Paulina Szymczyk Beauty Space.{" "}
        <a href="https://izabelaszymczyk.com/" className="hover:text-white">
          Design by - SzymczykI
        </a>
      </span>
    </footer>
  );
};

export default Footer;
