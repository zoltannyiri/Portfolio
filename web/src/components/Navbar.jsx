import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FiMenu, FiX } from "react-icons/fi"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { to: "/", label: "Főoldal" },
    { to: "/about", label: "Rólam" },
    { to: "/projects", label: "Munkáim" },
    { to: "/resume", label: "Önéletrajz" },
    { to: "/prices", label: "Együttműködés" },
    { to: "/contact", label: "Kapcsolat" },
  ]

  const navClass = ({ isActive }) =>
    `rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-[#3fb8a4]/10 hover:text-teal-400 ${
      isActive ? "bg-white/5 text-teal-400" : "text-gray-400"
    }`

  return (
    <header className="fixed inset-x-3 top-3 z-50 max-w-6xl sm:left-1/2 sm:right-auto sm:top-4 sm:w-[calc(100%-2rem)] sm:-translate-x-1/2">
      <nav className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d141d]/90 px-4 py-3 shadow-lg backdrop-blur-md sm:px-5">
        <NavLink to="/" className="cursor-pointer text-lg font-bold tracking-wide text-teal-400 sm:text-xl">
          Nyiri Zoltán
        </NavLink>

        <div className="hidden items-center gap-1 xl:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/20 text-gray-200 transition hover:bg-black/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 xl:hidden"
          aria-label={isMenuOpen ? "Menü bezárása" : "Menü megnyitása"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] grid gap-1 rounded-2xl border border-white/10 bg-[#0d141d]/95 p-2 shadow-2xl backdrop-blur-xl xl:hidden">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  isActive
                    ? "bg-teal-400/10 text-teal-400"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
