import type React from "react"
import ProjectLayout from "./ProjectLayout"
import ProjectImage from "../../components/ProjectImage"
import ProjectImageGrid from "../../components/ProjectImageGrid"
import "../../index.css"

// Importa las imágenes principales con versiones mobile/desktop
import mainImageDesktop from "../../assets/images/projects/cocemfe/01_Cocemfe_App.jpg"
import mainImageMobile from "../../assets/images/projects/cocemfe/mobile/01_Cocemfe_App_Mobile.jpg"
// Importa las imágenes (reemplaza con las rutas correctas)
import image1 from "../../assets/images/projects/cocemfe/01_Portatil.jpg"
import image2 from "../../assets/images/projects/cocemfe/02_Foto(doble izquierda).jpg"
import image3 from "../../assets/images/projects/cocemfe/03_Foto(doble derecha).jpg"
import image4 from "../../assets/images/projects/cocemfe/04_Cartel_01(doble-izquierda).jpg"
import image5 from "../../assets/images/projects/cocemfe/05_Bolsa(doble derecha).jpg"
import image6 from "../../assets/images/projects/cocemfe/06_Cartel Calle 01.jpg"
import image7 from "../../assets/images/projects/cocemfe/07_Cartel Calle 02.jpg"
import image8 from "../../assets/images/projects/cocemfe/08_IG 01.jpg"
import image9 from "../../assets/images/projects/cocemfe/09_IG 02.jpg"

const CocemfeProject: React.FC = () => {
  return (
    <ProjectLayout
      title="Cocemfe / Identidad visual"
      description="De la mano del equipo de Chocolate Comunicación dimos forma a la campaña 'Propósito Inclusión' para la Confederación Española de Personas con Discapacidad Física y Orgánica (COCEMFE), que, en esta ocasión, anima a las empresas a incluir en sus plantillas a personas con discapacidad. Usando la fotografía de nuestros cuatro protagonistas con discapacidad en sus puestos de trabajo como eje principal, trazamos un sistema geométrico y versátil que nos permitiera adaptar el contenido a piezas físicas y digitales. Los códigos planteados, así como los mensajes que sujetan la campaña, humanizan la situación del colectivo y proyectan, a su vez, una comunicación agradable y cercana."
      credits={[
        { name: "Chocolate Comunicación", url: "https://chocolatecomunicacionsocial.es/" },
        { name: "Carlos Alba Studio", url: "https://www.carlosalba.com/" },
      ]}
      mainImage={{
        desktop: mainImageDesktop,
        mobile: mainImageMobile,
      }}
      previousProject={{
        title: "Danone",
        path: "/proyectos/danone",
      }}
      nextProject={{
        title: "Gabi Lucas",
        path: "/proyectos/gabilucas",
      }}
    >
      {/* Imagen principal */}
      <ProjectImage src={image1} alt="Cocemfe identidad visual overview" aspectRatio="16/9" />

      {/* Primer par de imágenes */}
      <ProjectImageGrid
        images={[
          {
            src: image2,
            alt: "Cocemfe collateral",
            aspectRatio: "4/3",
          },
          {
            src: image3,
            alt: "Cocemfe brand in use",
            aspectRatio: "4/3",
          },
        ]}
      />

      {/* Segundo par de imágenes */}
      <ProjectImageGrid
        images={[
          {
            src: image4,
            alt: "Cocemfe cartel",
            aspectRatio: "4/3",
          },
          {
            src: image5,
            alt: "Cocemfe bolsa",
            aspectRatio: "4/3",
          },
        ]}
      />

      {/* Imágenes individuales */}
      <ProjectImage src={image6} alt="Cocemfe identidad visual 1" aspectRatio="16/9" />

      <ProjectImage src={image7} alt="Cocemfe identidad visual 2" aspectRatio="16/9" />

      <ProjectImage src={image8} alt="Cocemfe identidad visual 3" aspectRatio="16/9" />

      <ProjectImage src={image9} alt="Cocemfe identidad visual 4" aspectRatio="16/9" />
    </ProjectLayout>
  )
}

export default CocemfeProject

