// ProjectImageGrid.tsx
import type React from "react";

// Define un tipo personalizado para imágenes importadas
interface ImportedImage {
  src: string
  [key: string]: any // Para cualquier otra propiedad que pueda tener
}

interface ProjectImageGridProps {
  images: Array<{
    src: string | ImportedImage; // Modificado para aceptar ambos tipos
    alt: string;
    aspectRatio?: string;
  }>;
  columns?: number;
  className?: string;
}

const ProjectImageGrid: React.FC<ProjectImageGridProps> = ({
  images,
  columns = 2,
  className = "",
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-${columns} gap-6 mb-6 ${className}`}
    >
      {images.map((image, index) => {
        // Convertir src a string si es un módulo importado
        const imgSrc =
          typeof image.src === "string" ? image.src : image.src.src;

        return (
          <div
            key={index}
            className="rounded-2xl overflow-hidden w-full relative"
            style={{ paddingBottom: "75%" }}
          >
            <img
              src={imgSrc || "/placeholder.svg"}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectImageGrid;
