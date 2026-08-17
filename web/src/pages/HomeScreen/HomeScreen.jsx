import { useState, useEffect } from "react"

import AnimatedBackground from "../../components/AnimatedBackground"
import teszt1 from "../../assets/teszt1.JPG"


const HomeScreen = () => {
  const [textIndex, setTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    "Webfejlesztő",
    "Applikáció fejlesztő",
    "Magántanár",
    "Alkalmazás fejlesztő",
  ]

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
  }, [displayedText, isDeleting, textIndex])


  return (
    // <div className="flex min-h-screen flex-col items-center justify-center bg-[#0d141d] text-white">
      
    // </div>
    <div className="relative min-h-screen pt-24 md:pt-50">
      <AnimatedBackground />

      <div className="px-6">
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
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 text-slate-400 max-w-7xl mx-auto *:mx-auto">
          <div className="relative flex items-center justify-center">
            <div className="absolute -bottom-8 -right-8 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />

            <div className="relative rounded-[28px] bg-gradient-to-br from-teal-400/70 via-cyan-400/20 to-transparent p-[1px]">
              <div className="rounded-[27px] bg-[#0d141d] p-2">
                <img
                  src={teszt1}
                  alt="Nyiri Zoltán"
                  className="h-[560px] w-[500px] rounded-2xl object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-y-5 text-center font-[Sora]">
            <div className="text-2xl gap-y-5 flex flex-col">
              <div>
                Üdvözöllek, a nevem
              </div>

              <div className="text-7xl font-bold text-teal-400">
                Nyiri Zoltán
              </div>

              <div className="min-h-[52px] text-4xl font-bold">
                {displayedText}
              </div>

              <div className="*:mx-auto *:text-center text-xl">
                Személyre szabott, egyedi megoldások mindenki számára.
              </div>
            </div>
            

                  
            <div className="flex items-center justify-center px-6 py-4 gap-5 text-xl">
              <button onClick={() => window.location.href = '/projects'} className="cursor-pointer mt-10 rounded-xl bg-teal-400 px-6 py-3 font-semibold text-[#0d141d] transition-all duration-200 hover:bg-teal-300 hover:scale-105">
                Munkáim
              </button>
              <button onClick={() => window.location.href = '/contact'} className="cursor-pointer mt-10 border border-gray-800 rounded-xl bg-[#070b14] px-6 py-3 font-semibold text-[#e9edf3] transition-all duration-200 hover:bg-gray-800 hover:scale-105">
                Kapcsolatfelvétel
              </button>
            </div>
          </div>
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