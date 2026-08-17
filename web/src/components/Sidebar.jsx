import { FiFileText, FiGithub, FiLinkedin, FiMail } from "react-icons/fi"

import Önéletrajz_fs from "../assets/Önéletrajz_fs.pdf"

const SideBar = () => {
  return (
    <div className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex">
      
      <a
        href={Önéletrajz_fs}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0c121a]/80 text-gray-300 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-teal-400/30 hover:text-teal-400"
      >
        <FiFileText className="text-xl" />
      </a>

      <a
        href="https://github.com/zoltannyiri"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0c121a]/80 text-gray-300 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-teal-400/30 hover:text-teal-400"
      >
        <FiGithub className="text-xl" />
      </a>

      {/* <a
        href="https://linkedin.com/in/..."
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0c121a]/80 text-gray-300 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-teal-400/30 hover:text-teal-400"
      >
        <FiLinkedin className="text-xl" />
      </a> */}

      <a
        href="mailto:zoltan.nyiri02@gmail.com"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0c121a]/80 text-gray-300 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-teal-400/30 hover:text-teal-400"
      >
        <FiMail className="text-xl" />
      </a>

      {/* <div className="mt-1 h-24 w-px bg-gradient-to-b from-gray-700 to-transparent" /> */}
    </div>
  )
}

export default SideBar