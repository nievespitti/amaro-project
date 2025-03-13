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


// Definimos un aspect ratio consistente para todas las imágenes
// Usamos 3/2 para que coincida con el aspecto de las imágenes en Home
const CONSISTENT_ASPECT_RATIO = "3/2"


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
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Logo GIF */}
        <ProjectImage
          src={image1}
          alt="Hidrovolt logo animado"
          aspectRatio={CONSISTENT_ASPECT_RATIO}
        />

        {/* Stickers */}
        <ProjectImage
          src={image2}
          alt="Hidrovolt stickers"
          aspectRatio={CONSISTENT_ASPECT_RATIO}
        />

        {/* iPhone y Web */}
        <ProjectImageGrid
          aspectRatio={CONSISTENT_ASPECT_RATIO}
          images={[
            {
              src: image3,
              alt: "Hidrovolt aplicación en iPhone",
            },
            {
              src: image4,
              alt: "Hidrovolt diseño web",
            },
          ]}
        />

        {/* Camiseta */}
        <ProjectImage
          src={image5}
          alt="Hidrovolt camiseta"
          aspectRatio={CONSISTENT_ASPECT_RATIO}
        />

        {/* Tarjetas */}
        <ProjectImage
          src={image6}
          alt="Hidrovolt tarjetas de presentación"
          aspectRatio={CONSISTENT_ASPECT_RATIO}
        />

        {/* Posters */}
        <ProjectImage
          src={image7}
          alt="Hidrovolt posters"
          aspectRatio={CONSISTENT_ASPECT_RATIO}
        />

        {/* Camión */}
        <ProjectImage
          src={image8}
          alt="Hidrovolt camión"
          aspectRatio={CONSISTENT_ASPECT_RATIO}
        />
      </div>
    </ProjectLayout>
  );
}

export default HidrovoltProject

