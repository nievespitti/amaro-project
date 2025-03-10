import type React from "react"
import ProjectLayout from "./ProjectLayout"
import ProjectImage from "../../components/ProjectImage"
import ProjectImageGrid from "../../components/ProjectImageGrid"
import "../../index.css"

// Importa las imágenes principales con versiones mobile/desktop
import mainImageDesktop from "../../assets/images/projects/hidrovolt/01_Hidrovolt_App.jpg"
import mainImageMobile from "../../assets/images/projects/hidrovolt/mobile/01_Hidrovolt_App_Mobile.jpg"
// Importa el resto de imágenes
import image1 from "../../assets/images/projects/hidrovolt/01_Logo.gif"
import image2 from "../../assets/images/projects/hidrovolt/02_Stickers.jpg"
import image3 from "../../assets/images/projects/hidrovolt/03_Iphone(doble izquierda).jpg"
import image4 from "../../assets/images/projects/hidrovolt/04_Web2(doble derecha).jpg"
import image5 from "../../assets/images/projects/hidrovolt/05_Camiseta.jpg"
import image6 from "../../assets/images/projects/hidrovolt/06_Tarjetas.jpg"
import image7 from "../../assets/images/projects/hidrovolt/07_Posters.jpg"
import image8 from "../../assets/images/projects/hidrovolt/08_Camion.jpg"

const HidrovoltProject: React.FC = () => {
  return (
    <ProjectLayout
      title="Hidrovolt / Branding"
      description="En el mundo en el que vivimos son cada vez más necesarios proyectos como el que Hidrovolt acaba de impulsar. Esta empresa española trabaja por todo el mundo para producir hidrógeno a partir de fuentes renovables. Buscando la fusión entre naturaleza y tecnología, construimos una línea atemporal y limpia que acompañamos de ilustraciones sencillas que representan las fuentes renovables con las que trabajan. Sujetamos la gráfica con una literatura directa y honesta que respalda la filosofía de la marca."
      credits={[]}
      mainImage={{
        desktop: mainImageDesktop,
        mobile: mainImageMobile,
      }}
      previousProject={{
        title: "Gabi Lucas",
        path: "/proyectos/gabilucas",
      }}
      nextProject={{
        title: "Premium Technology",
        path: "/proyectos/premium-technology",
      }}
    >
      {/* Logo GIF */}
      <ProjectImage src={image1} alt="Hidrovolt logo animado" aspectRatio="16/9" />

      {/* Stickers */}
      <ProjectImage src={image2} alt="Hidrovolt stickers" aspectRatio="16/9" />

      {/* iPhone y Web */}
      <ProjectImageGrid
        images={[
          {
            src: image3,
            alt: "Hidrovolt aplicación en iPhone",
            aspectRatio: "4/3",
          },
          {
            src: image4,
            alt: "Hidrovolt diseño web",
            aspectRatio: "4/3",
          },
        ]}
      />

      {/* Camiseta */}
      <ProjectImage src={image5} alt="Hidrovolt camiseta" aspectRatio="16/9" />

      {/* Tarjetas */}
      <ProjectImage src={image6} alt="Hidrovolt tarjetas de presentación" aspectRatio="16/9" />

      {/* Posters */}
      <ProjectImage src={image7} alt="Hidrovolt posters" aspectRatio="16/9" />

      {/* Camión */}
      <ProjectImage src={image8} alt="Hidrovolt camión" aspectRatio="16/9" />
    </ProjectLayout>
  )
}

export default HidrovoltProject

