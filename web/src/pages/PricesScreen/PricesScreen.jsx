import { useEffect, useRef, useState } from "react"

import AnimatedBackground from "../../components/AnimatedBackground"

const ProcessItem = ({ item, index }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}
      className={` relative transition-all duration-700 ease-out
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }
      `}
    >

      <div className="mb-4 flex items-center gap-3">
        <span className="text-xl font-bold text-teal-400">
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="text-xl font-bold text-white">
          {item.title}
        </h3>
      </div>

      <div className="relative mb-6 h-px bg-white/10">
        <div className="absolute -top-[5px] left-0 h-3 w-3 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.55)]" />
      </div>

      <div className="h-full rounded-2xl border border-white/10 bg-[#0d141d]/70 p-4 backdrop-blur-md transition hover:border-teal-400/30 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-lg bg-teal-400/10 px-3 py-1 text-sm font-medium text-teal-300">
            {item.price}
          </span>

          <span className="text-sm text-gray-500">
            {item.time}
          </span>
        </div>

        <div className="my-5 h-px bg-white/10" />

        <ul className="space-y-3 text-sm leading-6 text-gray-300">
          {item.description.map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const PricesScreen = () => {
  const data = {
    munkafolyamat: [
      {
        title: "Konzultáció",
        price: "Ingyenes",
        time: "30 perc - 60 perc",
        description: [
          "Az együttműködés első lépéseként részletesen átbeszéljük az elképzeléseidet, igényeidet és a céljaidat, hogy pontosan megértsem, mire van szükséged.",
          "Felállítok egy ütemtervet a projekt megvalósításához, és meghatározom a mérföldköveket, hogy nyomon követhesd a haladást."
        ]
      },
      {
        title: "Tervezés",
        price: "A projekt árának 20%-a",
        time: "Projekt összetettségétől függően 1 nap - 1 hét",
        description: [
          "A projekt részletes tervezése, beleértve a funkciók, a felhasználói élmény és a vizuális megjelenés meghatározását.",
          "A tervezési fázis során készítek drótvázakat és prototípusokat, hogy vizualizáljam az elképzeléseidet."
        ]
      },
      {
        title: "Fejlesztés",
        price: "A projekt árának 50%-a",
        time: "Projekt összetettségétől függően 1 nap - több hónap",
        description: [
          "A projekt fejlesztése, beleértve a funkciók implementálását, a felhasználói élmény optimalizálását és a vizuális megjelenés megvalósítását.",
          "A fejlesztési fázis során biztosítom, hogy a projekt megfelelően működjön, funkcióit tekintve teljes mértékben megegyezzen az elképzeléseiddel és jól nézzen ki minden eszközön.",
          "A fejlesztésem folyamatát és a részeredményeket könnyedén nyomon követheted", 
          "Folyamatosan kommunikálok veled a projekt előrehaladásáról, hogy biztosítsam a teljes átláthatóságot és a hatékony együttműködést."
        ]
      },
      {
        title: "Tesztelés és hibajavítás",
        price: "A projekt árának 20%-a",
        time: "Projekt összetettségétől függően 1 nap - 1 hét",
        description: [
          "A projekt részletes tesztelése, beleértve a funkcionális, a felhasználói élmény és a vizuális megjelenés ellenőrzését.",
          "A tesztelési fázis során keresem a hibákat és javítom azokat, hogy biztosítsam a projekt minőségét és stabilitását."
        ]
      },
      {
        title: "Átadás",
        price: "A projekt árának hátralévő része",
        time: "1 nap",
        description: [
          "A projekt átadása, dokumentációval és a működéshez szükséges belépési adatokkal."
        ]
      },
      {
        title: "Támogatás és karbantartás",
        price: "[OPCIONÁLIS] A projekt árának 10%-a / hónap VAGY a projekt árának 90%-a / év",
        time: "Folyamatos",
        description: [
          "A projekt támogatása és karbantartása, beleértve a hibajavításokat és a további kiegészítő fejlesztéseket.",
          "A támogatási és karbantartási szolgáltatásaim biztosítják, hogy a projekt hosszú távon is stabilan működjön és megfeleljen az igényeidnek.",
          "A támogatási és karbantartási szolgáltatásaim rugalmasak, így a projekt igényeihez igazodva választhatod ki a számodra legmegfelelőbb csomagot."
        ]
      },
    ]
  }

  return (
    <div className="mx-auto max-w-4xl px-4 pb-12 pt-24 sm:px-6 sm:pt-28">
      <AnimatedBackground />
      <div className="relative z-10 pl-0">
        <div className="flex flex-col items-center justify-center text-center sm:mt-4">
          <div className="text-3xl font-bold text-teal-400 sm:text-4xl">
            Együttműködés
          </div>
          <div className="mt-5 space-y-5 text-base leading-7 text-gray-400 sm:mt-8 sm:text-xl sm:leading-8">
            <div>
              Lehetőség van <strong className="text-teal-400">óradíj</strong> alapú, vagy <strong className="text-teal-400">projekt szintű</strong> együttműködésre. 
            </div>

            {/* <div className="mt-7">
              A projekt szintű együttműködés esetén az ár a projekt specifikációja és összetettsége alapján kerül meghatározásra.
            </div> */}
          </div>
        </div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-[#0d141d]/70 backdrop-blur-md sm:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr]">

            <div className="p-4 text-center sm:p-6">
              <div className="text-sm text-gray-500 items-center">
                Óradíj
              </div>

              <div className="mt-2 break-words text-xl font-bold text-teal-400 sm:text-2xl">
                6 990 Ft / óra
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Az óradíjas együttműködés megkezdésekor a várható feladat alapján meghatározok egy becsült munkaidőt.
                A munka indulásához egy előre egyeztetett, például 5 vagy 10 órás kezdő keret előlegként fizetendő.
                A további munka az elvégzett órák alapján kerül elszámolásra.
              </p>
            </div>

            <div className="hidden bg-white/10 md:block" />

            <div className="border-t border-white/10 p-4 text-center sm:p-6 md:border-t-0">
              <div className="text-sm text-gray-500">
                Projektdíj
              </div>

              <div className="mt-2 text-2xl font-bold text-white">
                Egyedi árajánlat
              </div>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Amennyiben a projektdíj alapú együttműködést választod,
                a projekt összetettségétől és specifikációitől függően adok egy árajánlatot, melynek 20%-a a tervezési fázisban előlegként fizetendő.
                Amennyiben a fejlesztési folyamat alatt egyéb, előre nem egyeztetett funkciókat szeretnél a projektedbe, többletköltséggel járhat.
              </p>
            </div>
          </div>

          {/* <div className="rounded-2xl border border-white/10 bg-[#0d141d]/70 p-5 backdrop-blur-md">
            <div className="text-sm text-gray-500">
              Fizetés
            </div>

            <div className="mt-2 text-2xl font-bold text-white">
              Mérföldkövek szerint
            </div>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              A fizetés a projekt előrehaladásához igazodik, így nem szükséges
              a teljes összeget előre kifizetni.
            </p>
          </div> */}
        </div>
        <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
          {data.munkafolyamat.map((item, index) => (
            <ProcessItem
              key={`${index}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricesScreen
