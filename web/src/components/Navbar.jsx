import { NavLink } from "react-router-dom"

const Navbar = () => {

  const navClass = ({ isActive }) =>
    `rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:bg-[#3fb8a4]/10 hover:text-teal-400 hover:scale-110 ${
      isActive
        ? "bg-white/5 text-teal-400"
        : "text-gray-400"
    }`
    
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[60%] -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d141d]/60 px-5 py-3 shadow-lg backdrop-blur-md">

        <NavLink to="/home" className="cursor-pointer text-xl font-bold tracking-wide text-teal-400">
          Nyiri Zoltán
        </NavLink>

        <div className="flex items-center gap-2">
          <NavLink to="/home" className={navClass}>
            Főoldal
          </NavLink>

          <NavLink to="/projects" className={navClass}>
            Munkáim
          </NavLink>

          <NavLink to="/experience" className={navClass}>
            Tapasztalat
          </NavLink>

          <NavLink to="/pricing" className={navClass}>
            Árak
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Kapcsolat
          </NavLink>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/20 text-gray-300 transition hover:scale-115 hover:bg-black/30 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-1"
          aria-label="Toggle theme"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </button>

      </nav>
    </header>
  )
}

export default Navbar