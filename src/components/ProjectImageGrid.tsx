import type React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

// Asegúrate de que esta interfaz incluya la propiedad aspectRatio
interface ProjectImageGridProps {
  images: ImageProps[];
  aspectRatio?: string; // Definimos explícitamente la propiedad
  className?: string;
}

const ProjectImageGrid: React.FC<ProjectImageGridProps> = ({
  images = [],
  aspectRatio = "3/2",
  className = "",
}) => {
  const safeImages = Array.isArray(images) ? images : [];

  if (safeImages.length === 0) return null;

  // Convertimos el aspect ratio a un formato que Tailwind pueda usar
  const getAspectRatioClass = () => {
    // Si es uno de los valores predefinidos de Tailwind, usamos la clase correspondiente
    if (aspectRatio === "1/1") return "aspect-square";
    if (aspectRatio === "16/9") return "aspect-video";
    // Si no, usamos la sintaxis aspect-[width/height]
    return `aspect-[${aspectRatio}]`;
  };

  return (
    <div className={`w-full my-8 md:my-12 lg:my-16 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {safeImages.map((image, index) => (
          <div
            key={index}
            className={`relative w-full overflow-hidden rounded-xl ${getAspectRatioClass()}`}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectImageGrid;
