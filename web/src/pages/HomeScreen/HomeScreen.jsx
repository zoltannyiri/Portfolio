import { useState, useEffect, useMemo } from "react"

import AnimatedBackground from "../../components/AnimatedBackground"
import teszt1 from "../../assets/teszt1.JPG"
import ScrollReveal from "../../components/ScrollReveal"
import { useLanguage } from "../../i18n/LanguageContext"


const HomeScreen = () => {
  const { t } = useLanguage()
  const [textIndex, setTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = useMemo(() => [
    t("Webfejlesztő"),
    t("Applikáció fejlesztő"),
    t("Alkalmazás fejlesztő"),
  ], [t])

  useEffect(() => {
    const currentText = texts[textIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentText.substring(
          0,
          displayedText.length + 1
        )

        setDisplayedText(nextText)

        if (nextText === currentText) {
          setTimeout(() => {
            setIsDeleting(true)
          }, 1500)
        }
      } else {
        const nextText = currentText.substring(
          0,
          displayedText.length - 1
        )

        setDisplayedText(nextText)

        if (nextText === "") {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 40 : 80)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, textIndex, texts])


  return (
    // <div className="flex min-h-screen flex-col items-center justify-center bg-[#0d141d] text-white">
      
    // </div>
    <div className="relative min-h-screen pb-12 pt-24 sm:pt-28 lg:flex lg:items-center lg:py-32">
      <AnimatedBackground />

      <div className="w-full px-4 sm:px-6">
        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-slate-400 max-w-1400px *:mx-auto">
          

          <div>
            Második oszlop
          </div>
          
          <div className="text-center justify-center *:mx-auto gap-y-5 flex flex-col text-xl font-[Sora]">
            <div>
              Üdvözöllek, a nevem
            </div>
            <div className="text-center justify-center *:mx-auto text-4xl font-bold text-teal-400">
              Nyiri Zoltán
            </div>
            <div className="min-h-[32px] text-center justify-center *:mx-auto text-2xl font-bold">
              {displayedText}
            </div>
          </div>
        </div> */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 text-slate-400 *:mx-auto lg:grid-cols-2 lg:gap-12">
          <ScrollReveal direction="up" className="lg:hidden">
            <div className="flex flex-col gap-y-3 text-center font-[Sora] text-lg sm:text-2xl">
              <div>{t("Üdvözöllek, a nevem")}</div>

              <div className="break-words text-4xl font-bold text-teal-400 sm:text-6xl">
                Nyiri Zoltán
              </div>

              <div className="min-h-[40px] text-2xl font-bold sm:min-h-[52px] sm:text-4xl">
                {displayedText}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
          <div className="relative flex items-center justify-center">
            <div className="absolute -bottom-4 -right-2 h-48 w-48 rounded-full bg-teal-400/10 blur-3xl sm:-bottom-8 sm:-right-8 sm:h-72 sm:w-72" />

            <div className="relative rounded-[28px] bg-gradient-to-br from-teal-400/70 via-cyan-400/20 to-transparent p-[1px]">
              <div className="rounded-[27px] bg-[#0d141d] p-2">
                <img
                  src={teszt1}
                  alt="Nyiri Zoltán"
                  className="aspect-[4/5] h-auto w-full max-w-[500px] rounded-2xl object-cover object-center lg:h-[560px]"
                />
              </div>
            </div>
          </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={150}>
          <div className="flex max-w-2xl flex-col justify-center gap-y-5 text-center font-[Sora]">
            <div className="hidden flex-col gap-y-4 text-lg sm:gap-y-5 sm:text-2xl lg:flex">
              <div>
                {t("Üdvözöllek, a nevem")}
              </div>

              <div className="break-words text-4xl font-bold text-teal-400 sm:text-6xl lg:text-7xl">
                Nyiri Zoltán
              </div>

              <div className="min-h-[40px] text-2xl font-bold sm:min-h-[52px] sm:text-4xl">
                {displayedText}
              </div>
            </div>

            <div className="text-base leading-relaxed *:mx-auto *:text-center sm:text-xl">
              {t("Személyre szabott, egyedi megoldások mindenki számára.")}
            </div>
            

                  
            <div className="flex flex-col items-stretch justify-center gap-3 px-2 py-2 text-base sm:flex-row sm:items-center sm:gap-5 sm:px-6 sm:py-4 sm:text-xl">
              <button onClick={() => window.location.href = '/projects'} className="cursor-pointer rounded-xl bg-teal-400 px-6 py-3 font-semibold text-[#0d141d] transition-all duration-200 hover:scale-105 hover:bg-teal-300 sm:mt-6">
                {t("Munkáim")}
              </button>
              <button onClick={() => window.location.href = '/contact'} className="cursor-pointer rounded-xl border border-gray-800 bg-[#070b14] px-6 py-3 font-semibold text-[#e9edf3] transition-all duration-200 hover:scale-105 hover:bg-gray-800 sm:mt-6">
                {t("Kapcsolatfelvétel")}
              </button>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
      {/* <div className="flex items-center justify-center px-6 py-4 gap-5">
        <button className="cursor-pointer mt-10 rounded-xl bg-teal-400 px-6 py-3 font-semibold text-[#0d141d] transition-all duration-200 hover:bg-teal-300 hover:scale-105">
          Munkáim
        </button>
        <button className="cursor-pointer mt-10 border border-gray-800 rounded-xl bg-[#070b14] px-6 py-3 font-semibold text-[#e9edf3] transition-all duration-200 hover:bg-gray-800 hover:scale-105">
          Kapcsolatfelvétel
        </button>
      </div> */}
    </div>
      
  )
}

export default HomeScreen
