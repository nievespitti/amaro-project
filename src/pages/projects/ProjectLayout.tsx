"use client";

import type React from "react";
import { useEffect } from "react"; // Eliminado useRef ya que no lo necesitamos
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import "../../index.css";

interface ProjectLayoutProps {
  title: string;
  description: string;
  credits: Array<{ name: string; url: string }> | string;
  mainImage:
    | {
        desktop: string;
        mobile: string;
      }
    | string;
  previousProject?: {
    title: string;
    path: string;
  };
  nextProject?: {
    title: string;
    path: string;
  };
  children?: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  title,
  description,
  credits = [],
  mainImage = { desktop: "/placeholder.svg", mobile: "/placeholder.svg" },
  previousProject,
  nextProject,
  children,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isLargeScreen = useMediaQuery("(min-width: 1600px)");
  const navigate = useNavigate();
  const location = useLocation();

  // Normalizar los créditos para manejar tanto string como array
  const normalizedCredits = typeof credits === "string" ? [] : credits;

  // Normalizar la imagen principal para manejar tanto string como objeto
  const normalizedMainImage =
    typeof mainImage === "string"
      ? { desktop: mainImage, mobile: mainImage }
      : mainImage;

  // Este efecto se ejecuta cuando cambia la ruta
  useEffect(() => {
    // Scroll al inicio cuando cambia la ruta
    window.scrollTo({
      top: 0,
      behavior: "instant", // Usamos "instant" para un scroll inmediato
    });
  }, [location.pathname]);

  function navigateToProject(path: string): void {
    // Simplemente navegamos a la ruta
    navigate(path);
  }

  return (
    <div className="project-layout flex flex-col min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex-grow"
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 md:px-5 lg:px-8 py-0">
          {/* Imagen principal con versión móvil/desktop */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={normalizedMainImage.desktop}
                  type="image/jpeg"
                />
                <source
                  media="(max-width: 767px)"
                  srcSet={normalizedMainImage.mobile}
                  type="image/jpeg"
                />
                <img
                  src={
                    isMobile
                      ? normalizedMainImage.mobile
                      : normalizedMainImage.desktop
                  }
                  alt={title}
                  className={`w-full ${
                    isMobile ? "aspect-[3/4]" : "aspect-[16/9]"
                  } object-cover`}
                  style={{ maxHeight: isLargeScreen ? "80vh" : "none" }}
                />
              </picture>
            </div>
          </div>

          {/* Contenido del proyecto */}
          <div
            className="mt-16 md:mt-16 mb-16 w-full md:w-[90%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] space-y-6 md:space-y-8"
            style={{ maxWidth: isLargeScreen ? "1600px" : "none" }}
          >
            <h1 className="sm:text-[28px] md:text-[32px] lg:text-[38px] leading-tight custom-font text-[#090F4C] mb-4">
              {title}
            </h1>
            <div className="flex flex-col">
              <p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] leading-tight custom-font text-[#090F4C]">
                {description}
              </p>

              {normalizedCredits.length > 0 && (
                <span className="mt-4 inline-flex flex-wrap items-center text-[#090F4C] text-[16px] gap-2">
                  <span>Créditos:</span>
                  {normalizedCredits.map((credit, index) => (
                    <span key={index} className="inline-flex items-center">
                      {index > 0 && <span className="mx-2">•</span>}
                      <a
                        href={credit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#090F4C] underline hover:opacity-70 transition-opacity"
                      >
                        {credit.name}
                      </a>
                    </span>
                  ))}
                </span>
              )}
            </div>
          </div>

          {/* Contenido hijo */}
          <div
            className="w-full md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] mx-auto"
            style={{ maxWidth: isLargeScreen ? "1600px" : "none" }}
          >
            {children}
          </div>

          {/* Navegación entre proyectos */}
          {(previousProject || nextProject) && (
            <div className="flex justify-between items-center py-8 mt-16 ">
              {previousProject ? (
                <Link
                  to={previousProject.path}
                  onClick={() => navigateToProject(previousProject.path)}
                  className="flex items-center gap-2 text-[14px] hover:text-opacity-70 transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span>Proyecto anterior</span>
                </Link>
              ) : (
                <div></div> // Espacio vacío para mantener el justify-between
              )}
              {nextProject && (
                <Link
                  to={nextProject.path}
                  onClick={() => navigateToProject(nextProject.path)}
                  className="flex items-center gap-2 text-[14px] hover:text-opacity-70 transition-colors"
                >
                  <span>Proyecto siguiente</span>
                  <ArrowRight size={20} />
                </Link>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="w-full bg-white mt-auto">
        <div className="max-w-[1600px] w-full mx-auto px-4 md:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="text-sm text-[#090F4C]">©2025 Estudio Amaro</div>
            <div className="text-sm text-[#090F4C]">paula@estudioamaro.com</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectLayout;
