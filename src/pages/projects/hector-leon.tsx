import type React from "react"
import ProjectLayout from "./ProjectLayout"
import ProjectImage from "../../components/ProjectImage"
import ProjectImageGrid from "../../components/ProjectImageGrid"
import "../../index.css"

// Importa las imágenes principales con versiones mobile/desktop
import mainImageDesktop from "../../assets/images/projects/hector-leon/01_Hector Leon_App.jpg"
import mainImageMobile from "../../assets/images/projects/hector-leon/mobile/01_Hector Leon_App_Mobile.jpg"
// Importa las imágenes (reemplaza con las rutas correctas)
import image1 from "../../assets/images/projects/hector-leon/01_Tarjetas.jpg"
import image2 from "../../assets/images/projects/hector-leon/02_Tela (doble izquierda).jpg"
import image3 from "../../assets/images/projects/hector-leon/03_Wall Mockup(doble derecha).jpg"
import image4 from "../../assets/images/projects/hector-leon/04_Stickers.jpg"
import image5 from "../../assets/images/projects/hector-leon/05_Camiseta.jpg"
import image6 from "../../assets/images/projects/hector-leon/06_Ipad.jpg"
import image7 from "../../assets/images/projects/hector-leon/07_Posters.jpg"
import image8 from "../../assets/images/projects/hector-leon/08_Window Sign PSD Mockup.jpg"

const HectorLeonProject: React.FC = () => {
  return (
    <ProjectLayout
      title="Héctor León / Branding"
      description="Héctor León es un diseñador vanguardista que desarrolla piezas de alta costura y vestuario para espectáculos. En contra del fast fashion, apuesta por materiales y procesos sostenibles locales y artesanales que aumentan, si cabe, el valor de su obra. Partiendo de una flor -símbolo que siempre ha representado su marca y quería mantener- construimos una imagen a mano; orgánica, llena de combinaciones y posibilidades. 'Moda libre, personas libres' es la frase que pone el broche a una marca accesible que entiende esta disciplina como un juego de infinitas posibilidades para todos. La flor cambia, se transforma y se adapta a soportes digitales y offline jugando con fotografías, letras y colores."
      credits={[]}
      mainImage={{
        desktop: mainImageDesktop,
        mobile: mainImageMobile,
      }}
      previousProject={{
        title: "Breakfast Touch",
        path: "/proyectos/breakfast-touch",
      }}
      nextProject={{
        title: "La Bohème Studio",
        path: "/proyectos/la-boheme-studio",
      }}
    >
      {/* Tarjetas */}
      <ProjectImage src={image1} alt="Héctor León tarjetas de presentación" aspectRatio="16/9" />

      {/* Tela y Wall Mockup */}
      <ProjectImageGrid
        images={[
          {
            src: image2,
            alt: "Héctor León tela",
            aspectRatio: "4/3",
          },
          {
            src: image3,
            alt: "Héctor León wall mockup",
            aspectRatio: "4/3",
          },
        ]}
      />

      {/* Stickers */}
      <ProjectImage src={image4} alt="Héctor León stickers" aspectRatio="16/9" />

      {/* Camiseta */}
      <ProjectImage src={image5} alt="Héctor León camiseta" aspectRatio="16/9" />

      {/* iPad */}
      <ProjectImage src={image6} alt="Héctor León diseño en iPad" aspectRatio="16/9" />

      {/* Posters */}
      <ProjectImage src={image7} alt="Héctor León posters" aspectRatio="16/9" />

      {/* Window Sign */}
      <ProjectImage src={image8} alt="Héctor León window sign mockup" aspectRatio="16/9" />
    </ProjectLayout>
  )
}

export default HectorLeonProject

