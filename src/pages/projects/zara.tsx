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
      {/* Primera cuadrícula de imágenes */}
      <ProjectImageGrid
        images={[
          {
            src: image1,
            alt: "Construcción de iconos",
            aspectRatio: "4/3",
          },
          {
            src: image2,
            alt: "Plano y móvil",
            aspectRatio: "4/3",
          },
        ]}
      />

      {/* Segunda cuadrícula de imágenes */}
      <ProjectImageGrid
        images={[
          {
            src: image4,
            alt: "Construcción de iconos",
            aspectRatio: "4/3",
          },
          {
            src: image5,
            alt: "Plano y móvil",
            aspectRatio: "4/3",
          },
        ]}
      />

      {/* Imagen individual */}
      <ProjectImage src={image3} alt="Vista detallada en iPhone" aspectRatio="16/9" className="mb-16" />
    </ProjectLayout>
  )
}

export default ZaraProject

