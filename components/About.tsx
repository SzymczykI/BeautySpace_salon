import React from "react";
import Image from "next/image";
import Link from "next/link";
import paulina from "../assets/paula.png";

const About = () => {
  return (
    <div className="z-0 grid md:grid-cols-2 md:px-12 md:my-14 bg-center bg-cover custom-bg">
      <div className="z-0 px-3">
        <Image src={paulina} alt="paulina szymczyk"/>
      </div>
      <div className="px-4 mt-2 flex flex-col justify-center md:max-w-xl md:px-0 md:mr-8 md:mt-8">
        <h1 className="font-light text-center md:text-left pb-3 text-4xl md:mt-14 text-gold">Witaj w BEAUTY SPACE</h1>
        <p className="text-gray-500 text-justify text-xl">
          Salon Beauty Space powstał w 2018r z pasji do piękna. Od samego
          początku skupiamy się na świadczeniu najwyższej jakości usług na rynku
          branży beauty. Dbamy o komfort i wyśmienite samopoczucie każdej
          klientki, która w przestrzeni naszego salonu może zrelaksować się pod
          opieką wykwalifikowanych specjalistów. Czekamy na Ciebie w samym
          centrum Lublina gdzie kompleksowo zadbamy o Twoje piękno.
        </p>
        <Link href="/salon">
          <button
            type="button"
            className="items-center my-4 px-14 py-3 text-sm font-medium text-white bg-gold shadow-sm hover:bg-black "
          >
           NASZA OFERTA
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
