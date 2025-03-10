import type React from "react"
import ProjectLayout from "./ProjectLayout"
import ProjectImage from "../../components/ProjectImage"
import ProjectImageGrid from "../../components/ProjectImageGrid"
import "../../index.css"

// Importa las imágenes principales con versiones mobile/desktop
import mainImageDesktop from "../../assets/images/projects/danone/01_Danone_App.jpg"
import mainImageMobile from "../../assets/images/projects/danone/mobile/01_Danone_App_Mobile.jpg"
// Importa el resto de imágenes
import image1 from "../../assets/images/projects/danone/01_Bolsa.jpg"
import image2 from "../../assets/images/projects/danone/02_Pegatinas.jpg"
import image3 from "../../assets/images/projects/danone/03_Post-2(doble izquierda).jpg"
import image4 from "../../assets/images/projects/danone/04_Post-1(doble derecha).jpg"
import image5 from "../../assets/images/projects/danone/05_Movil.jpg"
import image6 from "../../assets/images/projects/danone/06_Ilustraciones_2.jpg"
import image7 from "../../assets/images/projects/danone/07_Ilustraciones.jpg"
import image8 from "../../assets/images/projects/danone/08_FB.jpg"
import image9 from "../../assets/images/projects/danone/09_Posters.jpg"

const DanoneProject: React.FC = () => {
  return (
    <ProjectLayout
      title="Danone / Identidad visual"
      description="El equipo de Chocolate Comunicación recibió la llamada de Danone España para intentar acercar su marca a las personas sin la necesidad de enseñar el producto. Querían destacar y potenciar uno de sus grandes valores: mejorar el sistema alimentario desde el inicio de la cadena de producción. Para ello, desde el diseño, impulsamos el discurso con una renovada paleta de color y aplicando la ilustración como apoyo principal a los nuevos mensajes y fotografías. De esta forma, amabilizamos las imágenes y generamos diversos grupos de dibujos para dar respuesta a todas las áreas que trabaja el grupo."
      credits={[
        { name: "Chocolate Comunicación", url: "https://chocolatecomunicacionsocial.es/" },
        { name: "Bruna Zanella Studio", url: "https://www.brunazanella.com/" },
      ]}
      mainImage={{
        desktop: mainImageDesktop,
        mobile: mainImageMobile,
      }}
      previousProject={{
        title: "La Bohème Studio",
        path: "/proyectos/la-boheme-studio",
      }}
      nextProject={{
        title: "Cocemfe",
        path: "/proyectos/cocemfe",
      }}
    >
      {/* Bolsa */}
      <ProjectImage src={image1} alt="Bolsa Danone" aspectRatio="16/9" />

      {/* Pegatinas */}
      <ProjectImage src={image2} alt="Pegatinas Danone" aspectRatio="4/3" />

      {/* Par de imágenes */}
      <ProjectImageGrid
        images={[
          {
            src: image3,
            alt: "Post Danone 1",
            aspectRatio: "4/3",
          },
          {
            src: image4,
            alt: "Post Danone 2",
            aspectRatio: "4/3",
          },
        ]}
      />

      {/* Diseño móvil */}
      <ProjectImage src={image5} alt="Diseño móvil Danone" aspectRatio="16/9" />

      {/* Ilustraciones 1 */}
      <ProjectImage src={image6} alt="Ilustraciones Danone 1" aspectRatio="16/9" />

      {/* Ilustraciones 2 */}
      <ProjectImage src={image7} alt="Ilustraciones Danone 2" aspectRatio="16/9" />

      {/* Facebook */}
      <ProjectImage src={image8} alt="Publicación Facebook Danone" aspectRatio="16/9" />

      {/* Posters */}
      <ProjectImage src={image9} alt="Posters Danone" aspectRatio="16/9" />
    </ProjectLayout>
  )
}

export default DanoneProject

