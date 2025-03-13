import type React from "react"
import ProjectLayout from "./ProjectLayout"
import ProjectImage from "../../components/ProjectImage"
import ProjectImageGrid from "../../components/ProjectImageGrid"
import "../../index.css"

// Importa las imágenes principales con versiones mobile/desktop
import mainImageDesktop from "../../assets/images/projects/la-boheme-studio/01_La Boheme_App.jpg"
import mainImageMobile from "../../assets/images/projects/la-boheme-studio/mobile/01_La Boheme_App_Mobile.jpg"
// Importa el resto de imágenes
import image1 from "../../assets/images/projects/la-boheme-studio/01_Tarjeta.jpg"
import image2 from "../../assets/images/projects/la-boheme-studio/02_Simbolo-E(doble izquierda).jpg"
import image3 from "../../assets/images/projects/la-boheme-studio/03_Vinilo(doble-derecha).jpg"
import image4 from "../../assets/images/projects/la-boheme-studio/04_Ilustraciones.jpg"
import image5 from "../../assets/images/projects/la-boheme-studio/05_Reloj.jpg"
import image6 from "../../assets/images/projects/la-boheme-studio/06_Poster-Studio.jpg"
import image7 from "../../assets/images/projects/la-boheme-studio/07_Posters.jpg"
import image8 from "../../assets/images/projects/la-boheme-studio/08_Iphone-IG(doble izquierda).jpg"
import image9 from "../../assets/images/projects/la-boheme-studio/09_Asientos(doble derecha).jpg"



// Definimos un aspect ratio consistente para todas las imágenes
// Usamos 3/2 para que coincida con el aspecto de las imágenes en Home
const CONSISTENT_ASPECT_RATIO = "3/2"

const LaBohemeStudioProject: React.FC = () => {
  return (
    <ProjectLayout
      title="La Bohème Studio / Branding"
      description="El colectivo de diseño especializado en ilustración y muralismo Espinosa Studio, decide crear hace unos años una extensión de su proyecto donde derivasen todos aquellos trabajos relacionados con el mundo del branding gastronómico. Así nace La Bohème, una marca con estilo y voz propia que pone el foco en su servicio personalizado. El diseño construido, elegante y optimista, pivota sobre una sucesión de ilustraciones que determinan las dinámicas de trabajo y servicios especializados."
      credits={[
        { name: "Espinosa Studio", url: "https://espinosa.studio/" },
        { name: "Bruna Zanella Studio", url: "https://www.brunazanella.com/" },
      ]}
      mainImage={{
        desktop: mainImageDesktop,
        mobile: mainImageMobile,
      }}
      previousProject={{
        title: "Héctor León",
        path: "/proyectos/hector-leon",
      }}
      nextProject={{
        title: "Danone",
        path: "/proyectos/danone",
      }}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Tarjeta */}
        <ProjectImage
          src={image1}
          alt="La Bohème Studio tarjeta de presentación"
          aspectRatio={CONSISTENT_ASPECT_RATIO}
        />

        {/* Par de imágenes */}
        <ProjectImageGrid
          aspectRatio={CONSISTENT_ASPECT_RATIO}
          images={[
            {
              src: image2,
              alt: "La Bohème Studio símbolo E",
            },
            {
              src: image3,
              alt: "La Bohème Studio vinilo",
            },
          ]}
        />

        {/* Ilustraciones */}
        <ProjectImage
          src={image4}
          alt="La Bohème Studio ilustraciones"
          aspectRatio={CONSISTENT_ASPECT_RATIO}
        />

        {/* Reloj */}
        <ProjectImage
          src={image5}
          alt="La Bohème Studio reloj"
          aspectRatio={CONSISTENT_ASPECT_RATIO}
        />

        {/* Par de imágenes */}
        <ProjectImageGrid
          aspectRatio={CONSISTENT_ASPECT_RATIO}
          images={[
            {
              src: image6,
              alt: "La Bohème Studio poster",
            },
            {
              src: image7,
              alt: "La Bohème Studio posters",
            },
          ]}
        />

        {/* Par de imágenes */}
        <ProjectImageGrid
          aspectRatio={CONSISTENT_ASPECT_RATIO}
          images={[
            {
              src: image8,
              alt: "La Bohème Studio Instagram en iPhone",
            },
            {
              src: image9,
              alt: "La Bohème Studio asientos",
            },
          ]}
        />
      </div>
    </ProjectLayout>
  );
}

export default LaBohemeStudioProject

