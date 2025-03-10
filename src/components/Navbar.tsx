"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import logoSymbol from "../assets/images/logo-symbol.svg"
import { useMediaQuery } from "../hooks/useMediaQuery"

const Navbar: React.FC = () => {
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const location = useLocation()
  const isLargeScreen = useMediaQuery("(min-width: 1024px)")

  // Lista de proyectos para el menú desplegable
  const projects = [
    { title: "Premium Technology", path: "/proyectos/premium-technology" },
    { title: "Zara", path: "/proyectos/zara" },
    { title: "Breakfast Touch", path: "/proyectos/breakfast-touch" },
    { title: "Héctor León", path: "/proyectos/hector-leon" },
    { title: "La Bohème Studio", path: "/proyectos/la-boheme-studio" },
    { title: "Danone España", path: "/proyectos/danone" },
    { title: "Cocemfe", path: "/proyectos/cocemfe" },
    { title: "Gabi Lucas", path: "/proyectos/gabilucas" },
    { title: "Hidrovolt", path: "/proyectos/hidrovolt" },
  ]

  // Función para manejar el scroll a secciones
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // Navegar a la página principal y luego hacer scroll
      window.history.pushState({ scrollTo: sectionId }, "", "/")
      window.location.reload() // Forzar recarga para aplicar el estado
    } else {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  // Efecto para manejar el scroll cuando se navega a la página principal
  useEffect(() => {
    if (location.pathname === "/" && location.state && location.state.scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo)
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [location])

  // Efecto para controlar la visibilidad del navbar al hacer scroll
   // Cerrar menús al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest(".projects-menu-container")) {
        setIsProjectsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])



  return (
    <nav
      className={`right-0 bg-white z-50 py-6 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoSymbol || "/placeholder.svg"}
              alt="Estudio Amaro"
              className={`${isLargeScreen ? "h-12" : "h-8"} w-auto transition-all duration-300`}
            />
          </Link>

          {/* Navegación - Mismo diseño para móvil y desktop */}
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Menú desplegable de Proyectos */}
            <div className="relative projects-menu-container">
              <button
                className="flex items-center gap-1 text-[#090F4C] hover:opacity-70 transition-opacity text-sm sm:text-base"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsProjectsMenuOpen(!isProjectsMenuOpen)
                }}
              >
                Proyectos{" "}
                <ChevronDown
                  size={16}
                  className={isProjectsMenuOpen ? "transform rotate-180 transition-transform" : "transition-transform"}
                />
              </button>

              {isProjectsMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50">
                  <div className="py-2">
                    {projects.map((project, index) => (
                      <Link
                        key={index}
                        to={project.path}
                        className="block px-4 py-2 text-[#090F4C] hover:bg-[#090F4C]/5 transition-colors"
                        onClick={() => {
                          setIsProjectsMenuOpen(false)
                          window.scrollTo(0, 0)
                        }}
                      >
                        {project.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("SobreNosotros")}
              className="text-[#090F4C] hover:opacity-70 transition-opacity text-sm sm:text-base"
            >
              Sobre Nosotros
            </button>

            <button
              onClick={() => scrollToSection("Contacto")}
              className="text-[#090F4C] hover:opacity-70 transition-opacity text-sm sm:text-base"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

