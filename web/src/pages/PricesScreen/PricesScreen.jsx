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
    <div
      ref={ref}
      className={`
        relative
        transition-all
        duration-700
        ease-out
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

      <div className="h-full rounded-2xl border border-white/10 bg-[#0d141d]/70 p-6 backdrop-blur-md transition hover:border-teal-400/30">
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
        time: "30 perc",
        description: [
          "Az együttműködés első lépéseként részletesen átbeszéljük az elképzeléseidet, igényeidet és a céljaidat, hogy pontosan megértsük, mire van szükséged.",
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
    <div className="mx-auto max-w-4xl px-6 py-12">
      <AnimatedBackground />
      <div className="relative z-10 mt-14 pl-0">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />

        <div className="space-y-10">
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