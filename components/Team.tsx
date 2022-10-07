import paulina from "../assets/Paulina2.jpg";
import Image from "next/image";

const Team = () => {
  return (
    <div>
      <section>
        <h1 className="text-xl p-4">Poznaj nasz zespół:</h1>
      </section>
      <div className="px-2 ">
        <ul
          className="flex flex-wrap list-none -mb-px text-lg text-center border-b-0 pl-0 mr-4"
          id="tabs-list"
          role="tablist"
        >
          {pracownice.map((item) => {
            return (
              <li
                className="nav-item flex-grow text-center"
                role="presentation"
              >
                <a
                  href={item.href}
                  className="inline-block p-2 rounded-t-lg border-b-2 hover:text-gold hover:border-gold focus:border-gold focus:text-gold"
                  id={item.id_tab}
                  data-bs-toggle="pill"
                  data-bs-target={item.data_target}
                  role="tab"
                  aria-controls={item.aria_controls}
                  aria-selected="false"
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="tab-content" id="tabs">
          {pracownice.map((item) => {
            return (
              <div
                className="tab-pane fade p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                id={item.id_content}
                role="tabpanel"
                aria-labelledby={item.id_tab}
              ><Image src={paulina} layout="fill" />
                {item.description}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;

const options = {
  defaultTabId: "settings",
  activeClasses:
    "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500",
  inactiveClasses:
    "text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
  onShow: () => {
    console.log("tab is shown");
  },
};

const pracownice = [
  {
    name: "Paulina",
    position: "właścicielka, kosmetolog, lingeristka",
    description: "",
    mainImage: "",
    images: "",
    id_tab: "tabs-paulina-tabVertical",
    id_content: "tabs-paulina",
    href: "#tabs-paulina",
    data_target: "#tabs-paulina",
    aria_controls: "tabs-paulina",
  },
  {
    name: "Asia",
    position: "kosmetolog, stylistka rzęs i brwi",
    description:
      "Ukończyłam studia na UM w Lublinie i od 2014 pracuję w zawodzie kosmetologa. Na codzień zajmuję się stylizacją rzęs oraz kosmetologią pielęgnacyjną. Moimi ulubionymi metodami przedłużania rzęs to lekkie objętości 2-3D. Poza pracą jestem wielka fanką fantastyki, włoskiej kuchni i weekendowych wycieczek.",
    mainImage: "paulina",
    images: "",
    id_tab: "tabs-asia-tabVertical",
    id_content: "tabs-asia",
    href: "#tabs-asia",
    data_target: "#tabs-asia",
    aria_controls: "tabs-asia",
  },
  {
    name: "Karolina",
    position: "kosmetolog",
    description:
      "Mam na imię Karolina i jestem kosmetologiem, który nieustannie podnosi kwalifikacje i rozwija swoje umiejętności. Aktualnie kształcę się w Akademii Nauk Stosowanych im. Wincentego Pola w Lublinie na studiach magisterskich. Specjalizuje się w zabiegach na twarz, które dobieram indywidualnie do potrzeb skóry oraz oczekiwań klienta. Zajmuje się również pielęgnacją ciała oraz masażami relaksacyjnymi. Zawsze staram sie aby klient czuł się dopieszczony i zaopiekowany. Prywatnie każdą wolną chwilę wykorzystuję na odpoczynek z dobrą książka i swoim ukochanym buldogiem francuskim pod ręką.",
    mainImage: "",
    images: "",
    id_tab: "tabs-karolina-tabVertical",
    id_content: "tabs-karolina",
    href: "#tabs-karolina",
    data_target: "#tabs-karolina",
    aria_controls: "tabs-karolina",
  },
  {
    name: "Alicja",
    position: "stylistka rzęs i brwi",
    description:
      "Mam na imię Alicja i jestem certyfikowaną stylistką brwi oraz rzęs. Nieustannie dążę do ulepszania swojego warsztatu, dlatego aktualnie kształcę się na kierunku technik usług kosmetycznych w Szkole Policealnej Pracowników Służb Społecznych im.A.Bączkowskiego w Lublinie. Stylizacje zawsze dobieram do potrzeb moich klientek, ponieważ każda z nas jest wyjątkowa.  Staram się również, żeby czas spędzony podczas naszego spotkania był jednocześnie odpoczynkiem dla moich Pań. W wolnym czasie lubię gotować oraz spędzić czas z dobrą książką.",
    mainImage: "",
    images: "",
    id_tab: "tabs-alicja-tabVertical",
    id_content: "tabs-alicja",
    href: "#tabs-alicja",
    data_target: "#tabs-alicja",
    aria_controls: "tabs-alicja",
  },
  {
    name: "Karina",
    position: "kosmetolog, stylistka brwi",
    description:
      "Cześć, nazywam się Karina i pracuje już ponad 5 lat w branży beauty. Studiowałam kosmetologię ale zakochałam się przede wszystkim w stylizacji brwi. Obecnie wykonuję stylizacje brwi, rzęs, a także chętnie wyczaruje makijaż permanentny brwi i ust. Jestem zwolenniczką naturalnego efektu i lubię precyzję. Czasami mogę was chwileczkę zatrzymać dopóki nie będzie idealnie, czasami możecie troszkę u mnie popłakać w trakcie regulacji ale zawsze możecie liczyć na chusteczkę. Staram się żeby było mniej bólu i więcej uśmiechu. Oczywiście zawsze was pytam jaki efekt końcowy chcecie osiągnąć. Niektóre klientki lubią mocniej podkreślone brwi, inne natomiast naturalne, ledwo widoczne. Najważniejsze dla mnie jest aby każda z was czuła się dobrze. Dziękuje moim klientkom, że mi ufacie i wracacie, a także, że zostawiacie opinie i piszecie dużo miłych słów. To dodaje mi skrzydeł!",
    mainImage: "",
    images: "",
    id_tab: "tabs-karina-tabVertical",
    id_content: "tabs-karina",
    href: "#tabs-karina",
    data_target: "#tabs-karina",
    aria_controls: "tabs-karina",
  },
  {
    name: "Patrycja",
    position: "kosmetolog, stylistka rzęs",
    description:
      "Jestem kosmetologiem który z duża dokładnością i starannością lubi zadbać o każdy szczegół. Cechuje mnie pracowitość, łatwość nawiązywania kontaktów, staranność oraz indywidualne podejście do klientek. Łącze pracę z pasja, w każdy zabieg wkładam całą siebie, serce i wiedzę.",
    mainImage: "",
    images: "",
    id_tab: "tabs-patrycja-tabVertical",
    id_content: "tabs-patrycja",
    href: "#tabs-patrycja",
    data_target: "#tabs-patrycja",
    aria_controls: "tabs-patrycja",
  },
  {
    name: "Bohdana",
    position: "podolog, stylistka paznokci",
    description:
      "Nazywam się Bohdana i w salonie pełnię obowiązki stylistki paznokcie oraz podologa.  Z wykształcenia jestem magistrem socjologii , ale losy potoczyły się inaczej .Głównym  moim rodzynkiem są zdobnictwa .Prywatnie posiadam 16 rodzai storczyków oraz jestem kocią mamą Franciszki",
    mainImage: "bogusia",
    images: "",
    id_tab: "tabs-bogusia-tabVertical",
    id_content: "tabs-bogusia",
    href: "#tabs-bogusia",
    data_target: "#tabs-bogusia",
    aria_controls: "tabs-bogusia",
  },
  {
    name: "Edyta",
    position: "",
    description: "",
    mainImage: "",
    images: "",
    id_tab: "tabs-edyta-tabVertical",
    id_content: "tabs-edyta",
    href: "#tabs-edyta",
    data_target: "#tabs-edyta",
    aria_controls: "tabs-edyta",
  },
];
