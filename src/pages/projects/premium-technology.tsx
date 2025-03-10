import type React from "react"
import ProjectLayout from "./ProjectLayout"
import ProjectImage from "../../components/ProjectImage"
import ProjectImageGrid from "../../components/ProjectImageGrid"
import "../../index.css"

// Importa las imágenes principales con versiones mobile/desktop
import mainImageDesktop from "../../assets/images/projects/premium-technology/01_Premium_Technology_App.jpg"
import mainImageMobile from "../../assets/images/projects/premium-technology/mobile/01_PremiumTechnology_App_Movile.jpg"
// Importa el resto de imágenes
import image1 from "../../assets/images/projects/premium-technology/01_LogoPT.jpg"
import image2 from "../../assets/images/projects/premium-technology/02_Polo-Frontal(doble izquierda).jpg"
import image3 from "../../assets/images/projects/premium-technology/03_Polo-Back(doble derecha).jpg"
import image4 from "../../assets/images/projects/premium-technology/04_CartelPT.jpg"
import image5 from "../../assets/images/projects/premium-technology/05_CartelPT_2.jpg"
import image6 from "../../assets/images/projects/premium-technology/06_VallaObra.jpg"
import image7 from "../../assets/images/projects/premium-technology/07_Caja-Envio(doble izquierda).jpg"
import image8 from "../../assets/images/projects/premium-technology/08_Web(doble derecha).jpg"

const PremiumTechnologyProject: React.FC = () => {
  return (
    <ProjectLayout
      title="Premium Technology / Branding"
      description="Premium Technology es una empresa con 
      sede en España y Chile con más de 20 años de experiencia 
      en el sector de la automatización. Necesitaban una nueva
       marca y posicionarse de una forma fresca e identificable. 
       Tratamos de humanizar el ejercicio, buscando alejarnos de 
       la fría película que envuelve el mundo de la industria alimenticia 
       y la automatización. Pusimos el foco en las personas, en los empleados, 
       que son los que proporcionan soluciones personalizadas a cada reto que 
       se ponga por delante. Acompañamos la imagen con colores propios del sector 
       y un sistema visual y una tipografía sencillas que aportan versatilidad y 
       organicidad al nuevo mundo de Premium Technology."
      credits={[]}
      mainImage={{
        desktop: mainImageDesktop,
        mobile: mainImageMobile,
      }}
      previousProject={{
        title: "hidrovolt",
        path: "/proyectos/hidrovolt",
      }}
      nextProject={{
        title: "Zara",
        path: "/proyectos/zara",
      }}
    >
      {/* Logo */}
      <ProjectImage src={image1} alt="Logo de Premium Technology" aspectRatio="16/9" />

      {/* Par de imágenes - Polos */}
      <ProjectImageGrid
        images={[
          {
            src: image2,
            alt: "Polo frontal Premium Technology",
            aspectRatio: "4/3",
          },
          {
            src: image3,
            alt: "Polo trasero Premium Technology",
            aspectRatio: "4/3",
          },
        ]}
      />

      {/* Cartel 1 */}
      <ProjectImage src={image4} alt="Cartel Premium Technology" aspectRatio="16/9" />

      {/* Cartel 2 */}
      <ProjectImage src={image5} alt="Segundo cartel Premium Technology" aspectRatio="16/9" />

      {/* Valla Obra */}
      <ProjectImage src={image6} alt="Valla de obra Premium Technology" aspectRatio="16/9" />

      {/* Par de imágenes - Caja y Web */}
      <ProjectImageGrid
        images={[
          {
            src: image7,
            alt: "Caja de envío Premium Technology",
            aspectRatio: "4/3",
          },
          {
            src: image8,
            alt: "Diseño web Premium Technology",
            aspectRatio: "4/3",
          },
        ]}
      />
    </ProjectLayout>
  )
}

export default PremiumTechnologyProject

