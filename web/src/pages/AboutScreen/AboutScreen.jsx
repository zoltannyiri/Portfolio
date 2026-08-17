import AnimatedBackground from "../../components/AnimatedBackground"
import { LuGraduationCap } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoOpenOutline } from "react-icons/io5";
import mernokinfo_szakdolgozat from "../../assets/mernokinfo_szakdolgozat.pdf"



const AboutScreen = () => {
  return (
    <div className="relative min-h-screen pt-24 md:pt-50">
      <AnimatedBackground />
       <div>
          <div className="mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center justify-center max-w-7xl">
            <div className="grid-cols-1">
              <div className="text-white text-base space-y-5 tracking-widest leading-loose">
                Üdvözöllek! Nyiri Zoltán vagyok, webfejlesztő és mobil alkalmazás fejlesztő. Szenvedélyem a technológia és az innováció, 
                és mindig arra törekszem, hogy a legjobb megoldásokat nyújtsam ügyfeleimnek. <b></b>
                Tanulmányaim többek között a győri Jedlik Ányos Szakgimnáziumban töltöttem, ahol CAD-CAM programozó szakképesítést szereztem, 
                majd a győri Széchenyi István Egyetemen folytattam tanulmányaimat, ahol mérnökinformatikus diplomát szereztem. Tanulmányaim során 
                mélyreható ismereteket szereztem többek között a szoftverfejlesztés, az adatbázis-kezelés és a webes technológiák terén, ugyanakkor a 
                gyakorlati tapasztalatok megszerzése érdekében számos projektben vettem részt, amelyek során lehetőségem nyílt a valós problémák megoldására 
                és az ügyfélközpontú megközelítésre. 
              </div>

            </div>
            <div className="grid-cols-2">
              {/* <div className="text-white text-xl">
                Üdvözöllek!
              </div> */}

              <div className="border rounded-2xl border-teal-400/20 p-4 min-w-full py-7">
                <div className="flex  gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-400/10">
                    <LuGraduationCap className="text-2xl text-teal-400" />
                  </div>

                  <div className="flex flex-col text-lg">
                    <span className="font-semibold text-white">
                      Mérnökinformatikus
                    </span>

                    <span className=" text-teal-400">
                      Széchenyi István Egyetem
                    </span>

                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <CiCalendar className="mr-2" />
                        2022. szeptember - 2026. január
                      </div>

                      <div className="flex items-center">
                        <CiLocationOn className="mr-2" />
                        Győr, Magyarország
                      </div>
                    </div>
                    <button className="cursor-pointer self-start mt-4 rounded-lg bg-teal-400 px-4 py-2 text-base text-black hover:bg-teal-500">
                      <a href={mernokinfo_szakdolgozat} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <IoOpenOutline />
                        Önéletrajz letöltése
                      </a>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
       </div>
    </div>
  )
}

export default AboutScreen;