import AnimatedBackground from "../../components/AnimatedBackground"
import { LuGraduationCap } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoOpenOutline } from "react-icons/io5";
import mernokinfo_szakdolgozat from "../../assets/mernokinfo_szakdolgozat.pdf"

import ScrollReveal from "../../components/ScrollReveal"
import { useLanguage } from "../../i18n/LanguageContext"

const AboutScreen = () => {
  const { t } = useLanguage()

  return (
    <div className="relative min-h-screen px-4 pb-12 pt-24 sm:px-6 sm:pt-32 lg:pt-40">
      <AnimatedBackground />
       <div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center justify-center gap-10 lg:grid-cols-2">
            <div className="grid-cols-1">
              <ScrollReveal direction="left">
              <div className="space-y-5 text-sm leading-7 tracking-wide text-white sm:text-base sm:leading-loose sm:tracking-widest">
                {t("Üdvözöllek! Nyiri Zoltán vagyok, webfejlesztő és mobil alkalmazás fejlesztő. Szenvedélyem a technológia és az innováció, és mindig arra törekszem, hogy a legjobb megoldásokat nyújtsam. Tanulmányaim többek között a győri Jedlik Ányos Szakgimnáziumban töltöttem, ahol CAD-CAM programozó szakképesítést szereztem, majd a győri Széchenyi István Egyetemen folytattam, ahol mérnökinformatikus diplomát szereztem. Egyetemi éveim alatt mélyreható ismereteket szereztem többek között a szoftverfejlesztés, az adatbázis-kezelés és a webes technológiák terén, ugyanakkor a gyakorlati tapasztalatok megszerzése érdekében számos projektben vettem részt, amelyek során lehetőségem nyílt a valós problémák megoldására és az ügyfélközpontú megközelítésre.")}
              </div>
              </ScrollReveal>
            </div>
            <div className="grid-cols-2">
              {/* <div className="text-white text-xl">
                Üdvözöllek!
              </div> */}
              <ScrollReveal direction="right">
              <div className="min-w-0 rounded-2xl border border-teal-400/20 p-4 py-6 sm:py-7">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-400/10">
                    <LuGraduationCap className="text-2xl text-teal-400" />
                  </div>

                  <div className="flex flex-col text-lg">
                    <span className="font-semibold text-white">
                      {t("Mérnökinformatikus")}
                    </span>

                    <span className=" text-teal-400">
                      Széchenyi István Egyetem
                    </span>

                    <div className="mt-2 flex flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:flex-wrap sm:gap-4">
                      <div className="flex items-center">
                        <CiCalendar className="mr-2" />
                        {t("2022. szeptember - 2026. január")}
                      </div>

                      <div className="flex items-center">
                        <CiLocationOn className="mr-2" />
                        {t("Győr, Magyarország")}
                      </div>
                    </div>
                    <button className="cursor-pointer self-start mt-4 rounded-lg bg-teal-400 px-4 py-2 text-base text-black hover:bg-teal-500">
                      <a href={mernokinfo_szakdolgozat} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <IoOpenOutline />
                        {t("Önéletrajz letöltése")}
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              </ScrollReveal>

            </div>
          </div>
       </div>
    </div>
  )
}

export default AboutScreen;
