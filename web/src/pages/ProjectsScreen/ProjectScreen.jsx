import { useState } from "react"

import ScrollReveal from "../../components/ScrollReveal"
import AnimatedBackground from "../../components/AnimatedBackground"
import turazzvelunk_welcomepage from "../../assets/turazzvelunk_welcomepage.png"
import egrenyilo_welcomepage from "../../assets/egrenyilo_welcomepage.png"
import loophub_loops from "../../assets/loophub_loops.png"
import hecarfest_welcomepage from "../../assets/hecarfest_welcomepage.png"
import spendfox_web_subscriptions from "../../assets/spendfox_web_subscriptions.png"
import { useLanguage } from "../../i18n/LanguageContext"

const ProjectsScreen = () => {
  const { t } = useLanguage()
  const [expandedProjects, setExpandedProjects] = useState({})

  const projects = [
    {
      title: "Túrázz velünk",
      description: "Egy túraútvonalakat bemutató weboldal, ahol a felhasználók felfedezhetik a legszebb túraútvonalakat, és megoszthatják saját tapasztalataikat.",
      image: turazzvelunk_welcomepage,
      link: "https://turazzvelunk.vercel.app/",
      github: "https://github.com/zoltannyiri/turazzvelunk",
      technologies: ["React", "MySQL", "Tailwind CSS", "Node.js", "Express.js", "Socket.io"],
    },

    {
      title: "SpendFox",
      description: "Előfizetéskezelő weboldal és mobilalkalmazás, amely segít átláthatóan követni és kezelni a rendszeres kiadásokat és aktív előfizetéseket, lehetőséget adva az egyéni vagy csoportos költségvetések kezelésére.",
      image: spendfox_web_subscriptions,
      link: "https://spendfox.vercel.app/",
      github: "https://github.com/zoltannyiri/SpendFox",
      technologies: ["React", "React Native", "Node.js", "Express.js", "Firebase", "Socket.io", "Tailwind CSS"],
    },

    {
      title: "Égre Nyíló",
      description: "Bemutatkozó weboldal, amely egy vállalkozás szolgáltatásait, munkáit és legfontosabb információit mutatja be letisztult felületen.",
      image: egrenyilo_welcomepage,
      link: "https://egrenyilo.hu/",
      github: "https://github.com/zoltannyiri/Egre_Nyilo",
      technologies: ["Angular", "Node.js", "SCSS"],
    },

    {
      title: "Loophub",
      description: "Közösségi platform zenei loopok megosztására és felfedezésére, ahol a felhasználók saját tartalmakat tölthetnek fel és kapcsolatba léphetnek más alkotókkal.",
      image: loophub_loops,
      link: "https://loop-hub.vercel.app/",
      github: "https://github.com/zoltannyiri/LoopHub",
      technologies: ["Angular", "MongoDB", "Node.js", "Express.js", "Socket.io", "Tailwind CSS"],
    },

    {
      title: "HéCarFest",
      description: "Egy hirdetési és eseménykezelő weboldal, amely lehetőséget ad a hirdetések publikálására és az események szervezésére.",
      image: hecarfest_welcomepage,
      github: "https://github.com/zoltannyiri/hecarfest.hu_new",
      technologies: ["Angular", "MongoDB", "Node.js", "Express.js", "Tailwind CSS"],
    }
  ]

  const toggleTechnologies = (title) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <div className="relative min-h-screen pb-12 pt-24 sm:pt-32 lg:pt-40">
      <AnimatedBackground />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 text-center *:mx-auto sm:px-6">
        <div className="text-4xl font-bold text-teal-400 sm:text-5xl lg:text-6xl">
          {t("Projektjeim")}
        </div>

        <div className="mt-4 text-lg font-bold leading-relaxed text-gray-400 sm:mt-6 sm:text-2xl">
          {t("Innovatív megoldásaim megrendelésre vagy egyéni használatra")}
        </div>
      </div>
      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-6 px-4 sm:mt-10 sm:px-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ScrollReveal
            key={project.title}
            direction="up"
            delay={index * 100}
            className="h-full"
          >
          <div
            key={project.title}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d141d]/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-[0_15px_50px_rgba(45,212,191,0.10)]">
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-video h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-[260px]"
              />
            </div>

            <div className="flex flex-1 flex-col p-4 sm:p-6">
              <h2 className="text-2xl font-bold text-white">
                {project.title}
              </h2>

              <p className="mt-3 leading-7 text-gray-400">
                {t(project.description)}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {(expandedProjects[project.title]
                  ? project.technologies
                  : project.technologies.slice(0, 4)
                ).map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-lg
                      border border-teal-400/20
                      bg-teal-400/10
                      px-3 py-1
                      text-sm
                      text-teal-300
                    "
                  >
                    {technology}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <button
                    onClick={() => toggleTechnologies(project.title)}
                    className="
                      cursor-pointer
                      rounded-lg
                      border border-white/10
                      bg-white/5
                      px-3 py-1
                      text-sm
                      text-gray-400
                      transition
                      hover:border-teal-400/30
                      hover:bg-teal-400/10
                      hover:text-teal-300
                    "
                  >
                    {expandedProjects[project.title]
                      ? t("Kevesebb")
                      : `+${project.technologies.length - 4} ${t("további")}`}
                  </button>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
                {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer rounded-lg bg-teal-400 px-4 py-2 font-semibold text-[#071014] transition hover:bg-teal-300">
                  {t("Megtekintés")}
                </a>
                ) : (
                  <span disabled className="cursor-not-allowed rounded-lg bg-teal-600/30 px-4 py-2 font-semibold text-gray-500">
                    {t("Nem elérhető")}
                  </span>
                )}
                
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="cursor-pointer rounded-lg border border-white/10 px-4 py-2 text-gray-300 transition hover:bg-white/5">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )

}

export default ProjectsScreen
