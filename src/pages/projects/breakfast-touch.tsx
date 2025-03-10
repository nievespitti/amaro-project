import type React from "react"
import ProjectLayout from "./ProjectLayout"
import ProjectImage from "../../components/ProjectImage"
import ProjectImageGrid from "../../components/ProjectImageGrid"
import "../../index.css"

// Importa las imágenes principales con versiones mobile/desktop
import mainImageDesktop from "../../assets/images/projects/breakfast-touch/01_Breakfast_Touch_App.jpg"
import mainImageMobile from "../../assets/images/projects/breakfast-touch/mobile/01_Breakfast_Touch_App_Mobile.jpg"
// Importa las imágenes (reemplaza con las rutas correctas)
import image1 from "../../assets/images/projects/breakfast-touch/01_Spotify.jpg"
import image2 from "../../assets/images/projects/breakfast-touch/02_Discos.jpg"
import image3 from "../../assets/images/projects/breakfast-touch/03_Vinilo.jpg"
import image4 from "../../assets/images/projects/breakfast-touch/04_Grupo.jpg"
import image5 from "../../assets/images/projects/breakfast-touch/05_Poster-min.jpg"
import image6 from "../../assets/images/projects/breakfast-touch/06_Pegatinas.jpg"
import image7 from "../../assets/images/projects/breakfast-touch/07_Rollo poster(doble izquierda).jpg"
import image8 from "../../assets/images/projects/breakfast-touch/08_Camiseta(doble derecha).jpg"

const BreakfastTouchProject: React.FC = () => {
  return (
    <ProjectLayout
      title="Breakfast Touch / Identidad visual"
      description="La surf band madrileña, Breakfast Touch, lanza nuevo EP llamado Quattro Stagioni. Los cuatro temas que componen el disco están inspirados en la primavera, el verano, el otoño y el invierno. Trabajando desde este eje y, usando la ilustración como motor del proyecto, creamos 4 personajes femeninos y un sistema gráfico que identificara las sensaciones y ritmos de cada una de las canciones. De esta forma nacieron 4 maneras de divertirnos con la música de Quattro Stagioni: 4 portadas de disco distintas y mucho merchandising con cuatro diseños a elegir."
      credits={[]}
      mainImage={{
        desktop: mainImageDesktop,
        mobile: mainImageMobile,
      }}
      previousProject={{
        title: "Zara",
        path: "/proyectos/zara",
      }}
      nextProject={{
        title: "Héctor León",
        path: "/proyectos/hector-leon",
      }}
    >
      {/* Spotify */}
      <ProjectImage src={image1} alt="Breakfast Touch en Spotify" aspectRatio="16/9" />

      {/* Discos */}
      <ProjectImage src={image2} alt="Discos de Breakfast Touch" aspectRatio="16/9" />

      {/* Vinilo */}
      <ProjectImage src={image3} alt="Vinilo de Breakfast Touch" aspectRatio="16/9" />

      {/* Grupo */}
      <ProjectImage src={image4} alt="Grupo Breakfast Touch" aspectRatio="16/9" />

      {/* Poster */}
      <ProjectImage src={image5} alt="Poster de Breakfast Touch" aspectRatio="16/9" />

      {/* Pegatinas */}
      <ProjectImage src={image6} alt="Pegatinas de Breakfast Touch" aspectRatio="16/9" />

      {/* Rollo poster y Camiseta */}
      <ProjectImageGrid
        images={[
          {
            src: image7,
            alt: "Rollo de poster Breakfast Touch",
            aspectRatio: "4/3",
          },
          {
            src: image8,
            alt: "Camiseta de Breakfast Touch",
            aspectRatio: "4/3",
          },
        ]}
      />
    </ProjectLayout>
  )
}

export default BreakfastTouchProject

