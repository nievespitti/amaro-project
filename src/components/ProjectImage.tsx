// ProjectImage.tsx
import type React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

interface ImportedImage {
  src: string;
  [key: string]: any;
}

interface ProjectImageProps {
  src: string | ImportedImage;
  alt: string;
  aspectRatio?: string;
  className?: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  aspectRatio,
  className = "",
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Convertir src a string si es un módulo importado
  const imgSrc = typeof src === "string" ? src : src.src;

  // Usar los aspect ratios estándar si no se proporciona uno personalizado
  const finalAspectRatio = aspectRatio || (isMobile ? "3/4" : "16/9");

  return (
    <div className={`mb-6 w-full ${className}`}>
      <div className="rounded-2xl overflow-hidden">
        <img
          src={imgSrc || "/placeholder.svg"}
          alt={alt}
          className={`w-full aspect-[${finalAspectRatio}] object-cover`}
        />
      </div>
    </div>
  );
};

export default ProjectImage;
