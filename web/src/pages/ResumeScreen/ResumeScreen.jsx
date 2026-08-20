import { useState, useRef, useEffect } from "react"

import AnimatedBackground from "../../components/AnimatedBackground"
import { useLanguage } from "../../i18n/LanguageContext"

const TimelineItem = ({ item, index }) => {
  const { t } = useLanguage()
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
      {
        threshold: 0.2,
      }
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
        grid
        grid-cols-[24px_minmax(0,1fr)]
        md:grid-cols-[1fr_80px_1fr]
        items-start
        transition-all
        duration-700
        ease-out
        ${
          isVisible
            ? "translate-x-0 opacity-100"
            : index % 2 === 0
              ? "translate-y-8 opacity-0 md:translate-y-0 md:-translate-x-10"
              : "translate-y-8 opacity-0 md:translate-y-0 md:translate-x-10"
        }
      `}
    >
      <div className={`col-start-2 min-w-0 ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-3"}`}>
        <div className="rounded-2xl border border-white/10 bg-[#0d141d]/70 p-4 backdrop-blur-md sm:p-6">
          <h3 className="text-xl font-bold text-white">
            {t(item.title)}
          </h3>

          <p className="mt-1 text-teal-400">
            {t(item.company)}
          </p>

          <p className="mt-2 text-sm text-gray-400">
            {t(item.period)}
          </p>

          {item.description && (
            Array.isArray(item.description) ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">
                {item.description.map((text, i) => (
                  <li key={i}>{t(text)}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-300">
                {t(item.description)}
              </p>
            )
          )}
        </div>
      </div>

      <div className={` absolute left-3 top-8 -translate-x-1/2 transition-all duration-700 md:left-1/2
          ${
            isVisible
              ? "scale-100 opacity-100"
              : "scale-50 opacity-0"
          }
        `}
      >
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#080d15]">
          <div className="h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_0_4px_rgba(45,212,191,0.12)]" />
        </div>
      </div>
    </div>
  )
}

const ResumeScreen = () => {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("vegzettsegek")

  const tabs = [
    { id: "vegzettsegek", label: t("Végzettségek") },
    { id: "tanusitvanyok", label: t("Tanúsítványok") },
    // { id: "eredmenyek", label: "Eredmények" },
    { id: "tapasztalat", label: t("Tapasztalat") },
  ]

  const data = {
    vegzettsegek: [
      {
        title: "Mérnökinformatikus BSc",
        company: "Széchenyi István Egyetem",
        period: "2022 - 2026",
      },
      {
        title: "CAD-CAM Informatikus",
        company: "GYSZSZC Jedlik Ányos Szakgimnázium",
        period: "2021 - 2022",
      },
    ],

    tanusitvanyok: [
      {
        title: "Python programozás",
        company: "Udemy",
        period: "2025",
        description: "Játék és AI programozás Pythonban."
      },
      {
        title: "ASP.NET",
        company: "Attrecto Zrt.",
        period: "2024. január - 2024. május",
        description: "Backendfejlesztés és alkalmazásfejlesztés .NET Core-ban."
      },
      {
        title: "Angular",
        company: "Attrecto Zrt.",
        period: "2024. január - 2024. május",
        description: "Webfejlesztés Angular keretrendszerrel."
      },
      {
        title: "IT Essentials - Hardver és szoftver alapok",
        company: "Cisco Networking Academy",
        period: "2023",
        description: "Hardver és szoftver alapok."
      },
      {
        title: "Python Essentials - Hardver és szoftver alapok",
        company: "Cisco Networking Academy",
        period: "2023",
        description: "Alkalmazásfejlesztés Pythonban."
      },
      {
        title: "CAD-CAM Informatikus",
        company: "GYSZSZC Jedlik Ányos Szakgimnázium",
        period: "2021 - 2022",
        // description: "React Native alapú mobil app fejlesztés."
      },
      {
        title: "CCNA1 - Hálózati alapok",
        company: "Cisco Networking Academy",
        period: "2020-2021",
        description: "Hálózat üzemeltetés és konfiguráció virtuális és fizikai környezetben."
      },
    ],

    eredmenyek: [
      {
        title: "Példa eredmény",
        company: "Valamilyen verseny / projekt",
        period: "2025",
        description: "Ide jöhet valamilyen díj, elismerés vagy eredmény.",
      },
    ],

    tapasztalat: [
      {
        title: "Frontend fejlesztő",
        company: "Trackie.io",
        period: "2025. szeptember - 2026. július",
        description: [
          "Webes felületek és vállalatirányítási rendszerek fejlesztése React keretrendszerrel.",
          "Mobil alkalmazások fejlesztése React Native keretrendszerrel.",
          "Automatikus tesztelés és tesztfolyamat kidolgozása Playwright keretrendszerrel.",
        ],
      },
      {
        title: "Freelance - Fejlesztő",
        // company: "Trackie.io",
        period: "2023 - 2026",
        description: [
          "Webes felületek frontend és backend fejlesztése React és Angular keretrendszerekkel.",
          "Mobil alkalmazások fejlesztése React Native keretrendszerrel.",
          "Automatikus tesztelés és tesztfolyamat kidolgozása Playwright keretrendszerrel.",
        ],
      },
    ],
  }

  return (
    <div className="mx-auto max-w-4xl px-4 pb-12 pt-24 sm:px-6 sm:pt-28">
      <AnimatedBackground />
      <div className="relative z-10 flex justify-center sm:mt-4">
        <div className="grid w-full grid-cols-1 gap-2 rounded-2xl border border-white/10 bg-[#0d141d]/70 p-2 backdrop-blur-md min-[430px]:grid-cols-3 sm:w-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 sm:px-5 ${
                activeTab === tab.id
                  ? "bg-teal-400/10 text-teal-400"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="relative z-10 mt-8 pl-0 sm:mt-14">
        <div className="absolute left-3 top-0 h-full w-px -translate-x-1/2 bg-white/10 md:left-1/2" />

        <div className="space-y-10">
          {data[activeTab].map((item, index) => (
            <TimelineItem
              key={`${activeTab}-${index}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResumeScreen
