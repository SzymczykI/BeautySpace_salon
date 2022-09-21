import Link from "next/link";
import React, { useState } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <>
      <Popover className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <img
                  className="w-40 object-contain cursor-pointer"
                  src="https://i.ibb.co/zm8Fyt8/znak-wodny-2.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none"
                      )}
                    >
                      <span>Oferta</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-4 py-6 sm:gap-8 sm:p-8">
                            {oferta.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-4 flex items-start rounded-lg p-2 hover:bg-gray-50"
                              >
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link href="/cennik">
                <h3 className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Cennik
                </h3>
              </Link>
              <Link href="/salon">
                <h3 className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Salon
                </h3>
              </Link>
              <Link href="/academy">
                <h3 className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Beauty Academy
                </h3>
              </Link>
              <Link href="/galeria">
                <h3 className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Galeria
                </h3>
              </Link>
              <Link href="/sklep">
                <h3 className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Sklep
                </h3>
              </Link>
              <Link href="/kontakt">
                <h3 className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Kontakt
                </h3>
              </Link>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-40 w-auto"
                      src="https://i.ibb.co/zm8Fyt8/znak-wodny-2.png"
                      alt="logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-6">
                    <div
                      onClick={() => setOpen(!open)}
                      className="-m-4 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Oferta
                      </span>
                    </div>
                    {open && (
                      <div className="space-y-6 py-6 px-5">
                        <div className="grid gap-y-4 gap-x-8">
                          {oferta.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="text-base font-medium text-gray-900 hover:text-gray-700"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    {menu.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-4 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default NavBar;

const oferta = [
  {
    name: "Makijaż Permanentny",
    href: "/oferta/makijaz_pernamentny",
    icon: ChartBarIcon,
  },
  {
    name: "Zabiegi Pielęgnacyjne Twarzy",
    href: "/oferta/pielegnacja_twarz",
  },
  {
    name: "Stylizacja Rzęs",
    href: "/oferta/stylizacja_rzesy",
  },
  {
    name: "Stylizacja Brwi",
    href: "/oferta",
  },
  {
    name: "Wybielanie Zębów",
    href: "#",
  },
  {
    name: "Makijaż Okolicznościowy",
    href: "#",
  },
  {
    name: "Podologia",
    href: "#",
  },
  {
    name: "Zabiegi Laserowe",
    href: "#",
  },
  {
    name: " NOWOŚĆ! Depilacja - Laser Diodowy",
    href: "#",
  },
  {
    name: "Zabiegi Na Ciało",
    href: "#",
  },
  {
    name: "Masaż",
    href: "#",
  },
  {
    name: "Opalanie Natryskowe",
    href: "#",
  },
];

const menu = [
  {
    name: "Cennik",
    href: "/cennik",
  },
  {
    name: "Salon",
    href: "/salon",
  },
  {
    name: "Beauty Academy",
    href: "/academy",
  },
  {
    name: "Galeria",
    href: "/galeria",
  },
  {
    name: "Kontakt",
    href: "/kontakt",
  },
];

function classNames(...classes:any) {
  return classes.filter(Boolean).join(" ");
}
