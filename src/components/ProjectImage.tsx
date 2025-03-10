// ProjectImage.tsx
import type React from "react";

// Define un tipo personalizado para imágenes importadas
interface ImportedImage {
  src: string
  [key: string]: any // Para cualquier otra propiedad que pueda tener
}

interface ProjectImageProps {
  src: string | ImportedImage; // Modificado para aceptar ambos tipos
  alt: string;
  aspectRatio?: string;
  className?: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  aspectRatio = "16/9",
  className = "",
}) => {
  // Convertir src a string si es un módulo importado
  const imgSrc = typeof src === "string" ? src : src.src;

  return (
    <div className={`mb-6 w-full ${className}`}>
      <div className="rounded-2xl overflow-hidden">
        <img
          src={imgSrc || "/placeholder.svg"}
          alt={alt}
          className={`w-full aspect-[${aspectRatio}] object-cover`}
        />
      </div>
    </div>
  );
};

export default ProjectImage;
