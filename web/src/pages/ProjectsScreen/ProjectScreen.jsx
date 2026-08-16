import AnimatedBackground from "../../components/AnimatedBackground"
import turazzvelunk_welcomepage from "../../assets/turazzvelunk_welcomepage.png"
import egrenyilo_welcomepage from "../../assets/egrenyilo_welcomepage.png"
import loophub_loops from "../../assets/loophub_loops.png"
import hecarfest_welcomepage from "../../assets/hecarfest_welcomepage.png"
import spendfox_web_subscriptions from "../../assets/spendfox_web_subscriptions.png"

const ProjectsScreen = () => {

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
      description: "Teszt szöveg",
      image: spendfox_web_subscriptions,
      link: "https://spendfox.vercel.app/",
      github: "https://github.com/zoltannyiri/SpendFox",
      technologies: ["React", "React Native", "Node.js", "Express.js", "Firebase", "Socket.io", "Tailwind CSS"],
    },

    {
      title: "Égre Nyíló",
      description: "Teszt szöveg",
      image: egrenyilo_welcomepage,
      link: "https://egrenyilo.hu/",
      github: "https://github.com/zoltannyiri/Egre_Nyilo",
      technologies: ["Angular", "Node.js", "SCSS"],
    },

    {
      title: "Loophub",
      description: "Teszt szöveg",
      image: loophub_loops,
      link: "https://loop-hub.vercel.app/",
      github: "https://github.com/zoltannyiri/LoopHub",
      technologies: ["Angular", "MongoDB", "Node.js", "Express.js", "Socket.io", "Tailwind CSS"],
    },

    {
      title: "HéCarFest",
      description: "Teszt szöveg",
      image: hecarfest_welcomepage,
      github: "https://github.com/zoltannyiri/hecarfest.hu_new",
      technologies: ["Angular", "MongoDB", "Node.js", "Express.js", "Tailwind CSS"],
    }
  ]

  return (
    <div className="relative min-h-screen pt-24 md:pt-50">
      <AnimatedBackground />
      <div className="flex flex-col items-center justify-center *:mx-auto mx-auto max-w-7xl text-center">
        <div className=" text-teal-400 text-6xl font-bold">
          Projektjeim
        </div>

        <div className="text-gray-400 text-2xl font-bold mt-6">
          Innovatív megoldásaim megrendelésre vagy egyéni használatra
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              group
              overflow-hidden
              rounded-2xl
              border border-white/10
              bg-[#0d141d]/70
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-teal-400/40
              hover:shadow-[0_15px_50px_rgba(45,212,191,0.10)]
            "
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
                  h-[260px]
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-[1.03]
                "
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-white">
                {project.title}
              </h2>

              <p className="mt-3 leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
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
              </div>

              <div className="mt-6 flex gap-4">
                {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer rounded-lg bg-teal-400 px-4 py-2 font-semibold text-[#071014] transition hover:bg-teal-300">
                  Megtekintés
                </a>
                ) : (
                  <span disabled className="cursor-not-allowed rounded-lg bg-teal-600/30 px-4 py-2 font-semibold text-gray-500">
                    Nem elérhető
                  </span>
                )}
                
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="cursor-pointer rounded-lg border border-white/10 px-4 py-2 text-gray-300 transition hover:bg-white/5">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}

export default ProjectsScreen