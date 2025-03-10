"use client";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import ZaraProject from "./pages/projects/zara";
import PremiumTechnologyProject from "./pages/projects/premium-technology";
import HidrovoltProject from "./pages/projects/hidrovolt";
import HectorLeonProject from "./pages/projects/hector-leon";
import LaBohemeStudioProject from "./pages/projects/la-boheme-studio";
import DanoneProject from "./pages/projects/danone";
import CocemfeProject from "./pages/projects/cocemfe";
import GabilucasProject from "./pages/projects/gabilucas";
import BreakfastTouchProject from "./pages/projects/breakfast-touch";
import Layout from "./components/Layout";

// Añade esto para depuración
console.log("App.tsx está cargando...");

function ScrollToTop() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state && state.scrollToContact) {
      // Si estamos en la página de inicio y necesitamos desplazarnos a Contacto
      if (pathname === "/") {
        setTimeout(() => {
          const contactSection = document.getElementById("Contacto");
          if (contactSection) {
            contactSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      } else {
        // Si no estamos en la página de inicio, navega a la página de inicio y luego desplázate
        navigate("/", { state: { scrollToContact: true }, replace: true });
      }
    } else {
      // Para otras navegaciones, desplázate al principio de la página
      window.scrollTo({
        top: 0,
        behavior: "instant", // Cambiado de "auto" a "instant" para un scroll inmediato
      });
    }
  }, [pathname, state, navigate]);

  return null;
}

function App() {
  console.log("App.tsx está cargando...");

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="proyectos/zara" element={<ZaraProject />} />
          <Route
            path="proyectos/premium-technology"
            element={<PremiumTechnologyProject />}
          />
          <Route path="proyectos/hidrovolt" element={<HidrovoltProject />} />
          <Route path="proyectos/hector-leon" element={<HectorLeonProject />} />
          <Route
            path="proyectos/la-boheme-studio"
            element={<LaBohemeStudioProject />}
          />
          <Route path="proyectos/danone" element={<DanoneProject />} />
          <Route path="proyectos/cocemfe" element={<CocemfeProject />} />
          <Route path="proyectos/gabilucas" element={<GabilucasProject />} />
          <Route
            path="proyectos/breakfast-touch"
            element={<BreakfastTouchProject />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
