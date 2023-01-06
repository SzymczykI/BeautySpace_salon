import React from "react";
import Image from "next/image";
import Link from "next/link";
import salon from "../assets/salon2.jpg";

const About = () => {
  return (
    <div className="z-0 grid md:grid-cols-3 md:px-12 md:my-24 ">
      <div className="z-0 w-96 h-max px-3 md:w-11/12 md:col-span-2">
        <Image src={salon} alt="salon" />
      </div>
      <div className="px-4 mt-2 md:max-w-xl md:px-0 md:mr-8">
        <h1 className="font-light pb-3 text-2xl md:mt-14">KIM JESTEŚMY?</h1>
        <p className="text-gray-500 md:mr-8">
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
            className="inline-flex items-center my-4 px-14 py-3 text-sm font-medium text-white bg-gold shadow-sm hover:bg-black "
          >
            POZNAJ TEAM
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
