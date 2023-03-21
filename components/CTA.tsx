import Link from "next/link";
import React from "react";
import Image from "next/image";
import mapa from "../assets/mapa.png";

const CTA = () => {
  return (
    <section className="grid md:grid-cols-2 h-[32rem] md:h-screen">
      <div className="mt-20 md:mt-52 md:ml-56">
        <h1 className="text-2xl pl-6 custom-title text-gold md:text-5xl">Kontakt</h1>
        <h5 className="pl-6 md:text-lg">Wygodna rezerwacja on-line</h5>
        <Link href="https://booksy.com/pl-pl/6703_paulina-szymczyk-beauty-space_salon-kosmetyczny_6832_lublin">
          <button
            type="button"
            className="ml-6 mt-4 mb-8 px-14 py-3 text-sm font-medium text-white bg-gold shadow-lg hover:bg-black "
          >
            REZERWUJ
          </button>
        </Link>
        <h5 className="pl-6 md:text-lg">Rezerwacja telefoniczna</h5>
        <h5 className="text-3xl text-gold mt-1 pl-6">
          <a href="tel:+48501451401">+48 501 451 401</a>
        </h5>

        <h5 className="pl-6 mt-4 font-bold md:text-lg">GODZINY OTWARCIA:</h5>
        <p className="pl-6 md:text-lg">pn - pt 9:00-20:00</p>
        <p className="pl-6 md:text-lg">sobota 9:00-15:00</p>
        <p className="pl-6 md:text-lg">niedziela zamknięte</p>
      </div>
      <div className="pt-24 pr-8">
      <Image className="shadow-lg" src={mapa} alt="map" />
      </div>
    </section>
  );
};

export default CTA;
