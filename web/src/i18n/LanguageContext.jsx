/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useState } from "react"

const englishTranslations = {
  "Főoldal": "Home",
  "Rólam": "About",
  "Munkáim": "Projects",
  "Önéletrajz": "Resume",
  "Együttműködés": "Collaboration",
  "Kapcsolat": "Contact",
  "Menü bezárása": "Close menu",
  "Menü megnyitása": "Open menu",
  "Váltás angol nyelvre": "Switch to English",
  "Váltás magyar nyelvre": "Switch to Hungarian",
  "Önéletrajz megnyitása": "Open resume",
  "GitHub profil megnyitása": "Open GitHub profile",
  "Email küldése": "Send email",

  "Üdvözöllek, a nevem": "Welcome, my name is",
  "Webfejlesztő": "Web Developer",
  "Applikáció fejlesztő": "App Developer",
  "Alkalmazás fejlesztő": "Application Developer",
  "Személyre szabott, egyedi megoldások mindenki számára.": "Personalized, custom solutions for everyone.",
  "Kapcsolatfelvétel": "Get in touch",

  "Üdvözöllek! Nyiri Zoltán vagyok, webfejlesztő és mobil alkalmazás fejlesztő. Szenvedélyem a technológia és az innováció, és mindig arra törekszem, hogy a legjobb megoldásokat nyújtsam ügyfeleimnek. Tanulmányaim többek között a győri Jedlik Ányos Szakgimnáziumban töltöttem, ahol CAD-CAM programozó szakképesítést szereztem, majd a győri Széchenyi István Egyetemen folytattam tanulmányaimat, ahol mérnökinformatikus diplomát szereztem. Tanulmányaim során mélyreható ismereteket szereztem többek között a szoftverfejlesztés, az adatbázis-kezelés és a webes technológiák terén, ugyanakkor a gyakorlati tapasztalatok megszerzése érdekében számos projektben vettem részt, amelyek során lehetőségem nyílt a valós problémák megoldására és az ügyfélközpontú megközelítésre.": "Welcome! I'm Zoltán Nyiri, a web and mobile application developer. I am passionate about technology and innovation, and I always strive to provide my clients with the best possible solutions. I studied at the Jedlik Ányos Vocational Secondary School in Győr, where I earned a CAD-CAM programming qualification, and later continued my studies at Széchenyi István University in Győr, where I earned a degree in Computer Science Engineering. During my studies, I gained in-depth knowledge of software development, database management, and web technologies. I also participated in numerous projects that gave me practical experience in solving real-world problems with a client-centered approach.",
  "Mérnökinformatikus": "Computer Science Engineer",
  "2022. szeptember - 2026. január": "September 2022 - January 2026",
  "Győr, Magyarország": "Győr, Hungary",
  "Szakdolgozat letöltése": "Download thesis",

  "Projektjeim": "My Projects",
  "Innovatív megoldásaim megrendelésre vagy egyéni használatra": "Innovative solutions built for clients or personal use",
  "Egy túraútvonalakat bemutató weboldal, ahol a felhasználók felfedezhetik a legszebb túraútvonalakat, és megoszthatják saját tapasztalataikat.": "A hiking website where users can discover beautiful trails and share their own experiences.",
  "Előfizetéskezelő weboldal és mobilalkalmazás, amely segít átláthatóan követni és kezelni a rendszeres kiadásokat és aktív előfizetéseket, lehetőséget adva az egyéni vagy csoportos költségvetések kezelésére.": "A subscription management website and mobile app for tracking recurring expenses and active subscriptions, with support for personal and shared budgets.",
  "Bemutatkozó weboldal, amely egy vállalkozás szolgáltatásait, munkáit és legfontosabb információit mutatja be letisztult felületen.": "A clean business website showcasing services, completed work, and essential company information.",
  "Közösségi platform zenei loopok megosztására és felfedezésére, ahol a felhasználók saját tartalmakat tölthetnek fel és kapcsolatba léphetnek más alkotókkal.": "A community platform for sharing and discovering music loops, where users can upload content and connect with other creators.",
  "Egy hirdetési és eseménykezelő weboldal, amely lehetőséget ad a hirdetések publikálására és az események szervezésére.": "An advertising and event management website for publishing listings and organizing events.",
  "Kevesebb": "Show less",
  "további": "more",
  "Megtekintés": "View project",
  "Nem elérhető": "Unavailable",

  "Vedd fel velem a kapcsolatot!": "Get in touch!",
  "Ötleteid vannak, melyeket megvalósítanál?": "Have an idea you would like to bring to life?",
  "Vagy szeretnél együtt dolgozni velem? Ne habozz, írj nekem!": "Or would you like to work together? Feel free to send me a message!",
  "Dolgozzunk együtt!": "Let's work together!",
  "Nyitott vagyok új lehetőségekre": "I'm open to new opportunities",
  "Teljes állású vagy projekt alapú együttműködés": "Full-time or project-based collaboration",
  "Név": "Name",
  "Teljes neved": "Your full name",
  "Tárgy": "Subject",
  "Üzenet": "Message",
  "Email sikeresen elküldve!": "Email sent successfully!",
  "email@pelda.com": "email@example.com",
  "Hiba történt az email küldése közben.": "An error occurred while sending the email.",
  "Túl sok üzenetet küldtél. Kérlek, próbáld újra később.": "Too many messages were sent. Please try again later.",
  "Kérlek, add meg a neved.": "Please enter your name.",
  "A név legalább 2, legfeljebb 100 karakter lehet.": "The name must be between 2 and 100 characters.",
  "Kérlek, adj meg egy érvényes email címet.": "Please enter a valid email address.",
  "Kérlek, add meg a tárgyat.": "Please enter a subject.",
  "A tárgy legalább 3, legfeljebb 150 karakter lehet.": "The subject must be between 3 and 150 characters.",
  "Kérlek, írj legalább 10 karakteres üzenetet.": "Please write a message of at least 10 characters.",
  "Az üzenet legfeljebb 5000 karakter lehet.": "The message can contain at most 5,000 characters.",
  "Kérlek, fogadd el az adatkezelési feltételeket.": "Please accept the data processing terms.",
  "kötelező": "required",
  "karakter": "characters",
  "Az űrlap elküldésével hozzájárulok, hogy a megadott adataimat a kapcsolatfelvétel megválaszolásához kezeljék.": "By submitting the form, I consent to the processing of the provided data in order to respond to my inquiry.",
  "Adatkezelési tájékoztató": "Privacy notice",
  "Az adatkezelő Nyiri Zoltán. A nevet, email címet, tárgyat és üzenetet kizárólag a megkeresés megválaszolására használom. Az adatkezelés jogalapja a hozzájárulásod; azt bármikor visszavonhatod emailben. Az adatokat nem értékesítem és nem használom marketingre, törlésüket pedig bármikor kérheted a megadott email címen.": "The data controller is Zoltán Nyiri. I use your name, email address, subject, and message solely to respond to your inquiry. Processing is based on your consent, which you may withdraw at any time by email. Your data will not be sold or used for marketing, and you may request its deletion at any time using the email address provided.",

  "Végzettségek": "Education",
  "Tanúsítványok": "Certificates",
  "Tapasztalat": "Experience",
  "Mérnökinformatikus BSc": "BSc in Computer Science Engineering",
  "CAD-CAM Informatikus": "CAD-CAM IT Specialist",
  "Python programozás": "Python Programming",
  "Játék és AI programozás Pythonban.": "Game and AI programming in Python.",
  "2024. január - 2024. május": "January 2024 - May 2024",
  "Backendfejlesztés és alkalmazásfejlesztés .NET Core-ban.": "Backend and application development with .NET Core.",
  "Webfejlesztés Angular keretrendszerrel.": "Web development with Angular.",
  "IT Essentials - Hardver és szoftver alapok": "IT Essentials - Hardware and Software Fundamentals",
  "Python Essentials - Hardver és szoftver alapok": "Python Essentials - Hardware and Software Fundamentals",
  "Hardver és szoftver alapok.": "Hardware and software fundamentals.",
  "Alkalmazásfejlesztés Pythonban.": "Application development in Python.",
  "CCNA1 - Hálózati alapok": "CCNA1 - Networking Fundamentals",
  "Hálózat üzemeltetés és konfiguráció virtuális és fizikai környezetben.": "Network operation and configuration in virtual and physical environments.",
  "Frontend fejlesztő": "Frontend Developer",
  "2025. szeptember - 2026. július": "September 2025 - July 2026",
  "Webes felületek és vállalatirányítási rendszerek fejlesztése React keretrendszerrel.": "Development of web interfaces and enterprise management systems with React.",
  "Mobil alkalmazások fejlesztése React Native keretrendszerrel.": "Mobile application development with React Native.",
  "Automatikus tesztelés és tesztfolyamat kidolgozása Playwright keretrendszerrel.": "Automated testing and test process development with Playwright.",
  "Freelance - Fejlesztő": "Freelance Developer",
  "Webes felületek frontend és backend fejlesztése React és Angular keretrendszerekkel.": "Frontend and backend development of web applications with React and Angular.",

  "Lehetőség van": "You can choose between",
  "óradíj": "hourly",
  "alapú, vagy": "or",
  "projekt szintű": "project-based",
  "együttműködésre.": "collaboration.",
  "Óradíj": "Hourly rate",
  "6 990 Ft / óra": "HUF 6,990 / hour",
  "Az óradíjas együttműködés megkezdésekor a várható feladat alapján meghatározok egy becsült munkaidőt. A munka indulásához egy előre egyeztetett, például 5 vagy 10 órás kezdő keret előlegként fizetendő. A további munka az elvégzett órák alapján kerül elszámolásra.": "At the start of an hourly engagement, I estimate the required working time based on the task. An agreed initial block, such as 5 or 10 hours, is paid in advance. Further work is billed according to the hours completed.",
  "Projektdíj": "Project fee",
  "Egyedi árajánlat": "Custom quote",
  "Amennyiben a projektdíj alapú együttműködést választod, a projekt összetettségétől és specifikációitől függően adok egy árajánlatot, melynek 20%-a a tervezési fázisban előlegként fizetendő.": "If you choose project-based collaboration, I provide a quote based on the project's complexity and specifications. Twenty percent is payable in advance during the planning phase.",
  "Konzultáció": "Consultation",
  "Ingyenes": "Free",
  "30 perc - 60 perc": "30-60 minutes",
  "Az együttműködés első lépéseként részletesen átbeszéljük az elképzeléseidet, igényeidet és a céljaidat, hogy pontosan megértsem, mire van szükséged.": "As the first step, we discuss your ideas, requirements, and goals in detail so I can understand exactly what you need.",
  "Felállítok egy ütemtervet a projekt megvalósításához, és meghatározom a mérföldköveket, hogy nyomon követhesd a haladást.": "I create a project schedule and define milestones so you can follow the progress.",
  "Tervezés": "Planning",
  "A projekt árának 20%-a": "20% of the project fee",
  "Projekt összetettségétől függően 1 nap - 1 hét": "1 day to 1 week, depending on complexity",
  "A projekt részletes tervezése, beleértve a funkciók, a felhasználói élmény és a vizuális megjelenés meghatározását.": "Detailed project planning, including features, user experience, and visual direction.",
  "A tervezési fázis során készítek drótvázakat és prototípusokat, hogy vizualizáljam az elképzeléseidet.": "During planning, I create wireframes and prototypes to visualize your ideas.",
  "Fejlesztés": "Development",
  "A projekt árának 50%-a": "50% of the project fee",
  "Projekt összetettségétől függően 1 nap - több hónap": "1 day to several months, depending on complexity",
  "A projekt fejlesztése, beleértve a funkciók implementálását, a felhasználói élmény optimalizálását és a vizuális megjelenés megvalósítását.": "Project development, including feature implementation, user experience optimization, and delivery of the visual design.",
  "A fejlesztési fázis során biztosítom, hogy a projekt megfelelően működjön, funkcióit tekintve teljes mértékben megegyezzen az elképzeléseiddel és jól nézzen ki minden eszközön.": "During development, I ensure the project works correctly, matches your expectations, and looks great on every device.",
  "A fejlesztésem folyamatát és a részeredményeket könnyedén nyomon követheted": "You can easily follow the development process and interim results.",
  "Folyamatosan kommunikálok veled a projekt előrehaladásáról, hogy biztosítsam a teljes átláthatóságot és a hatékony együttműködést.": "I keep you updated throughout the project to ensure transparency and effective collaboration.",
  "Tesztelés és hibajavítás": "Testing and Bug Fixing",
  "A projekt részletes tesztelése, beleértve a funkcionális, a felhasználói élmény és a vizuális megjelenés ellenőrzését.": "Thorough project testing, including functionality, user experience, and visual quality.",
  "A tesztelési fázis során keresem a hibákat és javítom azokat, hogy biztosítsam a projekt minőségét és stabilitását.": "During testing, I identify and fix issues to ensure quality and stability.",
  "Átadás": "Handover",
  "A projekt árának hátralévő része": "Remaining project fee",
  "1 nap": "1 day",
  "A projekt átadása, dokumentációval és a működéshez szükséges belépési adatokkal.": "Project handover with documentation and the credentials required for operation.",
  "Támogatás és karbantartás": "Support and Maintenance",
  "[OPCIONÁLIS] A projekt árának 10%-a / hónap VAGY a projekt árának 90%-a / év": "[OPTIONAL] 10% of the project fee / month OR 90% / year",
  "Folyamatos": "Ongoing",
  "A projekt támogatása és karbantartása, beleértve a hibajavításokat és a további kiegészítő fejlesztéseket.": "Project support and maintenance, including bug fixes and additional improvements.",
  "A támogatási és karbantartási szolgáltatásaim biztosítják, hogy a projekt hosszú távon is stabilan működjön és megfeleljen az igényeidnek.": "My support and maintenance services keep the project stable and aligned with your needs over the long term.",
  "A támogatási és karbantartási szolgáltatásaim rugalmasak, így a projekt igényeihez igazodva választhatod ki a számodra legmegfelelőbb csomagot.": "Support and maintenance are flexible, allowing you to choose the package that best fits the project's needs.",
}

const LanguageContext = createContext(null)

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem("portfolio-language") || "hu")

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem("portfolio-language", language)
  }, [language])

  const t = useCallback(
    (text) => language === "en" ? englishTranslations[text] ?? text : text,
    [language],
  )

  const toggleLanguage = () => setLanguage((current) => current === "hu" ? "en" : "hu")

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }

  return context
}
