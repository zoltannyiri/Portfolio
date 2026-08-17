import { useState } from "react"

import AnimatedBackground from "../../components/AnimatedBackground"



const ResumeScreen = () => {
  const [activeTab, setActiveTab] = useState("vegzettsegek")

  const tabs = [
    { id: "vegzettsegek", label: "Végzettségek" },
    { id: "tanusitvanyok", label: "Tanúsítványok" },
    // { id: "eredmenyek", label: "Eredmények" },
    { id: "tapasztalat", label: "Tapasztalat" },
  ]

  const experiences = [
    {
      title: "Mérnökinformatikus BSc",
      company: "Széchenyi István Egyetem",
      period: "2022 - 2026",
      // description: "React alapú webes felületek fejlesztése, hibajavítás, új funkciók."
    },
    {
      title: "Python alapok",
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
      title: "CCNA1 - Hálózati alapok",
      company: "Cisco Networking Academy",
      period: "2020-2021",
      description: "Hálózat üzemeltetés és konfiguráció virtuális és fizikai környezetben."
    },
    {
      title: "IT Essentials - Hardver és szoftver alapok",
      company: "Cisco Networking Academy",
      period: "2024. január - 2024. május",
      description: "Hardver és szoftver alapok."
    },
    {
      title: "Python Essentials - Hardver és szoftver alapok",
      company: "Cisco Networking Academy",
      period: "2024. január - 2024. május",
      description: "Alkalmazásfejlesztés Pythonban."
    },
    {
      title: "CAD-CAM Informatikus",
      company: "GYSZSZC Jedlik Ányos Szakgimnázium",
      period: "2021 - 2022",
      // description: "React Native alapú mobil app fejlesztés."
    }
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
    <div className="mx-auto max-w-4xl px-6 py-12">
      <AnimatedBackground />
      <div className="relative z-10 mt-20 flex justify-center">
        <div className="flex flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-[#0d141d]/70 p-2 backdrop-blur-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer rounded-xl px-5 py-2 text-sm font-medium transition-all duration-200 ${
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
      <div className="relative z-10 mt-14 pl-10">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />

        <div className="space-y-10">
          {data[activeTab].map((item, index) => (
            <div
              key={index}
              className="relative grid grid-cols-[1fr_80px_1fr] items-start"
            >
              <div className={index % 2 === 0 ? "col-start-1" : "col-start-3"}>
                <div className="rounded-2xl border border-white/10 bg-[#0d141d]/70 p-6 backdrop-blur-md">
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-teal-400">
                    {item.company}
                  </p>

                  <p className="mt-2 text-sm text-gray-400">
                    {item.period}
                  </p>

                  {item.description && (
                    Array.isArray(item.description) ? (
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">
                        {item.description.map((text, index) => (
                          <li key={index}>
                            {text}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-4 text-gray-300">
                        {item.description}
                      </p>
                    )
                  )}
                </div>
              </div>

              <div className="absolute left-1/2 top-8 -translate-x-1/2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#080d15]">
                  <div className="h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_0_4px_rgba(45,212,191,0.12)]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResumeScreen