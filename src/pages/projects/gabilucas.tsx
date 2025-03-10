import type React from "react"
import ProjectLayout from "./ProjectLayout"
import ProjectImage from "../../components/ProjectImage"
import ProjectImageGrid from "../../components/ProjectImageGrid"
import "../../index.css"

// Importa las imágenes principales con versiones mobile/desktop
import mainImageDesktop from "../../assets/images/projects/gabilucas/01_Gabi Lucas_App.jpg"
import mainImageMobile from "../../assets/images/projects/gabilucas/mobile/01_Gabi Lucas_App_Mobile.jpg"
// Importa el resto de imágenes
import image1 from "../../assets/images/projects/gabilucas/01_Ilustracion 01.jpg"
import image2 from "../../assets/images/projects/gabilucas/02_Ilustracion 02 (doble izquierda).jpg"
import image3 from "../../assets/images/projects/gabilucas/03_Ilustracion 03 (doble derecha).jpg"
import image4 from "../../assets/images/projects/gabilucas/04_Ilustracion 04.jpg"
import image5 from "../../assets/images/projects/gabilucas/05_Ilustracion 05 (doble izquierda).jpg"
import image6 from "../../assets/images/projects/gabilucas/06_Ilustracion 06 (doble derecha).jpg"
import image7 from "../../assets/images/projects/gabilucas/07_Ilustracion 07.jpg"

const GabilucasProject: React.FC = () => {
  return (
    <ProjectLayout
      title="Gabi Lucas / Branding"
      description="Tras su paso como diseñador por Cabify y Wizink Bank, Gabi Lucas se embarca en un nuevo proyecto donde teoriza y reflexiona sobre cuestiones que afectan al universo de la creatividad y a los trabajadores del sector.
      De forma semanal, desde la plataforma Substack, comparte gratuitamente artículos que cuestionan los procesos en el mundo de las marcas y las agencias, las tendencias, la competencia o la fórmula de la creatividad. Desde Estudio Amaro, acompañamos de manera permanente estos artículos a través de la ilustración. Jugamos con conceptos y técnicas diversas para ofrecer variedad y riqueza visual a los pensamientos del articulista."
      credits={[]}
      mainImage={{
        desktop: mainImageDesktop,
        mobile: mainImageMobile,
      }}
      previousProject={{
        title: "Cocemfe",
        path: "/proyectos/cocemfe",
      }}
      nextProject={{
        title: "Hidrovolt",
        path: "/proyectos/hidrovolt",
      }}
    >
      {/* Ilustración 1 */}
      <ProjectImage src={image1} alt="Gabi Lucas ilustración 01" aspectRatio="16/9" />

      {/* Par de ilustraciones */}
      <ProjectImageGrid
        images={[
          {
            src: image2,
            alt: "Gabi Lucas ilustración 02",
            aspectRatio: "4/3",
          },
          {
            src: image3,
            alt: "Gabi Lucas ilustración 03",
            aspectRatio: "4/3",
          },
        ]}
      />

      {/* Ilustración 4 */}
      <ProjectImage src={image4} alt="Gabi Lucas ilustración 04" aspectRatio="16/9" />

      {/* Par de ilustraciones */}
      <ProjectImageGrid
        images={[
          {
            src: image5,
            alt: "Gabi Lucas ilustración 05",
            aspectRatio: "4/3",
          },
          {
            src: image6,
            alt: "Gabi Lucas ilustración 06",
            aspectRatio: "4/3",
          },
        ]}
      />

      {/* Ilustración 7 */}
      <ProjectImage src={image7} alt="Gabi Lucas ilustración 07" aspectRatio="16/9" />
    </ProjectLayout>
  )
}

export default GabilucasProject

