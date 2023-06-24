import React from "react";
import Image from "next/image";
import Link from "next/link";
import paulina from "../assets/ps.png";
import sign from "../assets/3.png";

const About = () => {
  return (
    <div className="z-0 grid md:grid-cols-2 md:px-16 md:my-14 ">
      <div className="z-0">
        <Image src={paulina} alt="paulina szymczyk" />
      </div>
      <div className="px-4 flex flex-col md:max-w-md md:ml-12 md:mt-8">
        <h1 className="justify-center md:text-left pb-3 custom-title text-4xl md:mt-14">
          Witaj w <br/>Beauty Space
        </h1>
        <p className="text-gray-500 text-base">
          Salon Beauty Space powstał w 2018r z pasji do piękna. Od samego
          początku ja i mój zespoł skupiamy się na świadczeniu najwyższej
          jakości usług na rynku branży beauty. Dbamy o komfort i wyśmienite
          samopoczucie każdej klientki, która w przestrzeni mojego salonu może
          zrelaksować się pod opieką wykwalifikowanych specjalistów. Czekamy na
          Ciebie w samym centrum Lublina gdzie kompleksowo zadbamy o Twoje
          piękno.
        </p>
        <div className="pl-48">
          <Image src={sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default About;
