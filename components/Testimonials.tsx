import React from "react";
import Slider from "react-slick";
import { IoMdQuote } from "react-icons/io";
import Link from "next/link";

const Testimonials = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="container items-center justify-center mb-6">
      <h1 className="text-4xl text-center text-gold pt-10 mb-2">OPINIE</h1>
      <p className="text-lg text-center mb-6 ">
        Sprawdź co o naszych usługach sądzą klienci
      </p>
      <Slider {...settings}>
        {opinie.map((item) => (
          <div key={item.name} className="p-6 max-w-sm mx-3 h-max bg-center bg-cover custom-bg rounded-lg border border-gray-200 shadow-md">
            <h2 className="mb-4 tracking-tight text-xl text-center text-gray-900">
              {item.service}
            </h2>
            <span className="mb-2 w-10 h-10 text-gold">
              <IoMdQuote />
            </span>
            <p className="mb-3 font-normal text-gray-500 italic">
              {item.description}
            </p>
            <h5 className="text-lg text-right font-semibold tracking-tight text-gold">
              {item.name}
            </h5>
            <p className="font-normal text-sm text-gray-500 tracking-tight text-right">
              {item.date}
            </p>
            <p className="font-normal text-sm text-gray-500 tracking-tight text-right">
              usluge wykonała: {item.employee}
            </p>
          </div>
        ))}
      </Slider>
      <div className="flex justify-end mt-4">
        <h1>Wiecej opinii na: </h1>
        <Link href="https://booksy.com/pl-pl/6703_paulina-szymczyk-beauty-space_salon-kosmetyczny_6832_lublin">
          <span className="mx-3 cursor-pointer hover:text-gold">
            <img
              className="h-4"
              src="https://logos-download.com/wp-content/uploads/2021/01/Booksy_Logo.png"
            />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;

const opinie = [
  {
    name: "Marta D.",
    description:
      "Pełen profesjonalizm ze strony Pani Pauliny jak i całego salonu. Mila, fachowa i pomocna obsługa świadcząca usługi na najwyższym poziomie. To był kolejny zabieg wykonywany u Pani Pauliny i na pewno nie ostatni. ",
    service: "Makijaż permanentny brwi - metoda hybrydowa",
    employee: "Paulina",
    date: "20.02.2022",
  },
  {
    name: "Jolanta W.",
    description:
      "Pani kosmetolog dobrała odpowiedni zabieg dla mojej skory chociaż pierwotnie chciałam coś innego. Wyjaśniła mi moje wszystkie obawy i doradziła co ewentualnie powinnam sobie jeszcze zrobić. Dodatkowo zabieg był tańszy niż wcześniejszy, który miałam robić, także jest takie poczucie dobra klienta. Bardzo mila i profesjonalna osoba, chętnie wrócę!",
    service: "RMP Renaissance MesoPeel",
    employee: "Karolina",
    date: "6.08.2022",
  },
  {
    name: "Małgorzata W.",
    description:
      "Polecam. Wizyta odbyła się  w bardzo miłej atmosferze. Pani Karolina jest bardzo profesjonalna, odpowiadała tez na wszystkie pytania.",
    service: "Oczyszczanie manualne + kwas",
    employee: "Karolina",
    date: "1.10.2022",
  },
  {
    name: "Laura K.",
    description: "Rzęski pięknie wykonane. Polecam z całego serca:):):)",
    service: "Uzupełnienie rzęs 3D",
    employee: "Patrycja",
    date: "26.09.2022",
  },
  {
    name: "Angelika W.",
    description:
      "Serdecznie polecam Panią Karinę jest bardzo profesjonalna i mila. Pani bardzo mi pomogła w nagłej sytuacji gdy na jednym oku nie było rzęs na drugim wcale. Pani szybko odkleiła mi kępki rzęs, poprawiła makijaż za co jestem niesamowicie wdzięczna bo miałam dziś rozmowę o prace. :) Atmosfera w salonie jest super. ",
    service: "Architektura brwi + regulacja (wosk, pęseta)",
    employee: "Karina",
    date: "23.09.2022",
  },
  {
    name: "Wiktoria K.",
    description:
      "Jestem bardzo zadowolona z wykonanej usługi przez Panią Patrycje. Idealnie doradziła mi w dobraniu metody która wykonamy stylizacje. Obsługa i atmosfera przemiła, a praca wykonana perfekcyjnie. Salon w którym stylistki wykonują swoją prace z pasja i do którego na prawdę warto wracać.",
    service: "Przedłużenie i zagęszczenie rzęs 2D + Efekt KIM KARDASHIAN",
    employee: "Patrycja",
    date: "16.09.2022",
  },
  {
    name: "Wioletta G.",
    description: "Rewelacyjny masaż Kobido, bardzo polecam!",
    service: "Masaż KOBIDO",
    employee: "Karolina",
    date: "5.09.2022",
  },
  {
    name: "Dominika P.",
    description:
      "Jak za każdym razem, rzęsy wykonane przez Panią Asie to mistrzostwo świata. Mega dokładnie, w milej atmosferze. Polecam z całego serca <3",
    service: "Uzupełnienie rzęs 3D, Henna brwi + regulacja",
    employee: "Asia",
    date: "2.09.2022",
  },
];
