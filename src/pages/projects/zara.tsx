import type React from "react"
import ProjectLayout from "./ProjectLayout"
import ProjectImage from "../../components/ProjectImage"
import ProjectImageGrid from "../../components/ProjectImageGrid"
import "../../index.css"

// Importa las imágenes principales con versiones mobile/desktop
import mainImageDesktop from "../../assets/images/projects/zara/01_ZARA_App.jpg"
import mainImageMobile from "../../assets/images/projects/zara/mobile/01_ZARA_App_Mobile.jpg"
// Importa el resto de imágenes
import image1 from "../../assets/images/projects/zara/01_Descubre-tu-tienda.jpg"
import image2 from "../../assets/images/projects/zara/02_Construccion-ICONO.gif"
import image3 from "../../assets/images/projects/zara/03_Figma.jpg"
import image4 from "../../assets/images/projects/zara/04_Plano_movil.jpg"
import image5 from "../../assets/images/projects/zara/05_Iphone-min.jpg"

// Definimos un aspect ratio consistente para todas las imágenes
// Usamos 3/2 para que coincida con el aspecto de las imágenes en Home
const CONSISTENT_ASPECT_RATIO = "3/2"

const ZaraProject: React.FC = () => {
  return (
    <ProjectLayout
      title="ZARA / Diseño gráfico"
      description="En 2019, el equipo de Zara (Inditex) comenzó a desarrollar nuevas funcionalidades en su app para mejorar la experiencia de compra física. La 'Localización de artículos en tienda' fue una de las novedades implementadas. A través de mapas digitales, se señalizaban las diferentes zonas de ubicación de accesorios y prendas, agilizando así la experiencia del cliente. Desde Estudio Amaro, nos encargamos de organizar y diseñar casi mil mapas de todo el mundo, digitalizando las zonas de ubicación y señalizando iconos de puntos de recogida, probadores y salidas, entre otros."
      credits={[]}
      mainImage={{
        desktop: mainImageDesktop,
        mobile: mainImageMobile,
      }}
      previousProject={{
        title: "Premium Technology",
        path: "/proyectos/premium-technology",
      }}
      nextProject={{
        title: "Breakfast Touch",
        path: "/proyectos/breakfast-touch",
      }}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Primera cuadrícula de imágenes */}
        <ProjectImageGrid
          aspectRatio={CONSISTENT_ASPECT_RATIO}
          images={[
            {
              src: image1,
              alt: "Descubre tu tienda",
            },
            {
              src: image2,
              alt: "Construcción de iconos",
            },
          ]}
        />

        {/* Segunda cuadrícula de imágenes */}
        <ProjectImageGrid
          aspectRatio={CONSISTENT_ASPECT_RATIO}
          images={[
            {
              src: image4,
              alt: "Plano y móvil",
            },
            {
              src: image5,
              alt: "Iphone-min",
            },
          ]}
        />

        {/* Imagen individual */}
        <ProjectImage
          src={image3}
          alt="Figma"
          aspectRatio={CONSISTENT_ASPECT_RATIO}
          className="mb-16"
        />
      </div>
    </ProjectLayout>
  );
}

export default ZaraProject

