import React from "react";

const Academy = () => {
  return (
    <div>
      <section className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img2">
        <div className='grid place-items-center'>
          <h1 className="px-5 pb-5 text-5xl text-center text-white">
            BEAUTY ACADEMY
          </h1>
          <p className="px-5 text-lg text-center text-white">
            W naszej Akademii możesz podnieść swoje kwalifikacje pod okiem
            doświadczonych instruktorów.
          </p>
          <p className="px-5 pt-3 text-center text-lg text-white">
            Sprawdź aktualną ofertę szkoleniową
          </p>
          <button
            type="button"
            className="my-4 px-14 py-3 text-sm font-medium text-white bg-gold shadow-sm hover:bg-black "
          >
            SZKOLENIA
          </button>
        </div>
      </section>
    </div>
  );
};

export default Academy;
