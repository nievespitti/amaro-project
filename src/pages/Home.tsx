"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from "../hooks/useMediaQuery"
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import Footer from "../components/Footer"


import gifHorizontal from "../assets/images/GIF-Home-Horizontal.gif";
import gifVertical from "../assets/images/GIF-Home-Vertical.gif";

// Importa las imágenes versión desktop
import premiumTechnology from "../assets/images/projects/premium-technology/01_Premium_Technology_App.jpg"
import zara from "../assets/images/projects/zara/01_ZARA_App.jpg"
import breakfastTouch from "../assets/images/projects/breakfast-touch/01_Breakfast_Touch_App.jpg"
import hectorLeon from "../assets/images/projects/hector-leon/01_Hector Leon_App.jpg"
import laBohemeStudio from "../assets/images/projects/la-boheme-studio/01_La Boheme_App.jpg"
import danoneEspana from "../assets/images/projects/danone/01_Danone_App.jpg"
import cocemfe from "../assets/images/projects/cocemfe/01_Cocemfe_App.jpg"
import gabilucas from "../assets/images/projects/gabilucas/01_Gabi Lucas_App.jpg"
import hidrovolt from "../assets/images/projects/hidrovolt/01_Hidrovolt_App.jpg"

// Importa las imágenes versión mobile
import premiumTechnologyMobile from "../assets/images/projects/premium-technology/mobile/01_PremiumTechnology_App_Movile.jpg"
import zaraMobile from "../assets/images/projects/zara/mobile/01_ZARA_App_Mobile.jpg"
import breakfastTouchMobile from "../assets/images/projects/breakfast-touch/mobile/01_Breakfast_Touch_App_Mobile.jpg"
import hectorLeonMobile from "../assets/images/projects/hector-leon/mobile/01_Hector Leon_App_Mobile.jpg"
import laBohemeStudioMobile from "../assets/images/projects/la-boheme-studio/mobile/01_La Boheme_App_Mobile.jpg"
import danoneEspanaMobile from "../assets/images/projects/danone/mobile/01_Danone_App_Mobile.jpg"
import cocemfeMobile from "../assets/images/projects/cocemfe/mobile/01_Cocemfe_App_Mobile.jpg"
import gabilucasMobile from "../assets/images/projects/gabilucas/mobile/01_Gabi Lucas_App_Mobile.jpg"
import hidrovoltMobile from "../assets/images/projects/hidrovolt/mobile/01_Hidrovolt_App_Mobile.jpg"

// Importa las imágenes logos redes sociales
import InstagramIcon from "../assets/images/icons/InstagramIcon.png"
import LinkedInIcon from "../assets/images/icons/LinkedinIcon.png"
import SpotifyIcon from "../assets/images/icons/SpotifyIcon.png"

const projects = [
  {
    id: 1,
    title: "Premium Technology",
    image: premiumTechnology,
    imageMobile: premiumTechnologyMobile,
    path: "/proyectos/premium-technology",
  },
  {
    id: 2,
    title: "Zara",
    image: zara,
    imageMobile: zaraMobile,
    path: "/proyectos/zara",
  },
  {
    id: 3,
    title: "Breakfast Touch",
    image: breakfastTouch,
    imageMobile: breakfastTouchMobile,
    path: "/proyectos/breakfast-touch",
  },
  {
    id: 4,
    title: "Héctor León",
    image: hectorLeon,
    imageMobile: hectorLeonMobile,
    path: "/proyectos/hector-leon",
  },
  {
    id: 5,
    title: "La Bohème Studio",
    image: laBohemeStudio,
    imageMobile: laBohemeStudioMobile,
    path: "/proyectos/la-boheme-studio",
  },
  {
    id: 6,
    title: "Danone España",
    image: danoneEspana,
    imageMobile: danoneEspanaMobile,
    path: "/proyectos/danone",
  },
  {
    id: 7,
    title: "Cocemfe",
    image: cocemfe,
    imageMobile: cocemfeMobile,
    path: "/proyectos/cocemfe",
  },
  {
    id: 8,
    title: "Gabi Lucas",
    image: gabilucas,
    imageMobile: gabilucasMobile,
    path: "/proyectos/gabilucas",
  },
  {
    id: 9,
    title: "Hidrovolt",
    image: hidrovolt,
    imageMobile: hidrovoltMobile,
    path: "/proyectos/hidrovolt",
  },
]

const Home: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="flex flex-col min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[#090F4C] custom-font flex-grow"
      >
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-0">
          {/* Banner Section */}
          <div className="mb-16">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={isMobile ? gifVertical : gifHorizontal}
                alt="Estudio Amaro Banner"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Texto introductorio */}
          <div id="SobreNosotros" className="mt-0 mb-8 w-[70%] space-y-2">
            <p className="sm:text-small md:text-medium lg:text-[38px] leading-tight text-[#090F4C]">
              ¡Hola! Somos Estudio Amaro y hacemos branding y diseño. Nos
              dedicamos a acompañar e impulsar marcas desde la sencillez y la
              honestidad.
            </p>
          </div>
          <div className="mt-0 mb-16 w-[70%]">
            <p className="sm:text-small md:text-medium lg:text-[38px] leading-tight text-[#090F4C]">
              Nos gusta cuidar cada detalle. Trabajamos mano a mano con nuestros
              clientes adaptándonos a sus necesidades para, así, llegar lejos.
            </p>
          </div>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {projects.map((project) => (
              <Link key={project.id} to={project.path}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden"
                >
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet={project.image}
                      type="image/jpeg"
                    />
                    <source
                      media="(max-width: 767px)"
                      srcSet={project.imageMobile}
                      type="image/jpeg"
                    />
                    <LazyLoadImage
                      src={isMobile ? project.imageMobile : project.image}
                      alt={project.title}
                      effect="blur"
                      className={`w-full ${
                        isMobile ? "aspect-[3/4]" : "aspect-[3/2]"
                      } object-cover rounded-xl block`}
                      wrapperClassName="block"
                    />
                  </picture>
                  <p className="text-[18px] md:text-[28px] lg:text-[28px] mt-0">
                    {project.title}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Sección de contacto */}
          <section
            id="Contacto"
            className="mt-16 mb-16 w-[85%]"
            style={{ scrollMarginTop: "100px" }}
          >
            <div className="space-y-8">
              <p className="sm:text-[28px] md:text-[38px] lg:text-[38px] leading-tight custom-font text-[#090F4C]">
                ¿Trabajamos juntos?
              </p>
              <div className="space-y-8">
                <p className="sm:text-[28px] md:text-[38px] lg:text-[38px] leading-tight custom-font text-[#090F4C]">
                  Puedes escribir a paula@estudioamaro.com <br />o llamarnos al
                  +34 672 048 172.
                </p>
              </div>
              <div className="space-y-8">
                <p className="sm:text-[28px] md:text-[38px] lg:text-[38px] leading-tight custom-font text-[#090F4C]">
                  Si lo prefieres, podemos reunirnos en: C/ Silva, 2 4º 28013
                  Madrid
                </p>
              </div>
            </div>

            {/* Iconos de redes sociales */}
            <div className="flex gap-6 mt-8">
              <a
                href="https://www.instagram.com/paulaamaro_/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram"
                className="text-[#090F4C] hover:opacity-70 transition-opacity"
              >
                <img
                  src={InstagramIcon || "/placeholder.svg"}
                  alt="Instagram"
                  width="48"
                  height="48"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/paula-amaro-7157b7158/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en LinkedIn"
                className="text-[#090F4C] hover:opacity-70 transition-opacity"
              >
                <img
                  src={LinkedInIcon || "/placeholder.svg"}
                  alt="LinkedIn"
                  width="48"
                  height="48"
                />
              </a>
              <a
                href="https://open.spotify.com/playlist/1ZxKFrYGA4kl89syA3zsHe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escúchanos en Spotify"
                className="text-[#090F4C] hover:opacity-70 transition-opacity"
              >
                <img
                  src={SpotifyIcon || "/placeholder.svg"}
                  alt="Spotify"
                  width="48"
                  height="48"
                />
              </a>
            </div>
          </section>
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home

