// ProjectImageGrid.tsx
import type React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

interface ImportedImage {
  src: string;
  [key: string]: any;
}

interface ProjectImageGridProps {
  images: Array<{
    src: string | ImportedImage;
    alt: string;
    aspectRatio?: string;
  }>;
  className?: string;
}

const ProjectImageGrid: React.FC<ProjectImageGridProps> = ({
  images,
  className = "",
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isLargeScreen = useMediaQuery("(min-width: 1600px)");

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ${className}`}
      style={{ maxWidth: isLargeScreen ? "1600px" : "none" }}
    >
      {images.map((image, index) => {
        const imgSrc =
          typeof image.src === "string" ? image.src : image.src.src;

        // Usar los aspect ratios estándar si no se proporciona uno personalizado
        const aspectRatio = image.aspectRatio || (isMobile ? "3/4" : "16/9");

        return (
          <div key={index} className="rounded-2xl overflow-hidden w-full">
            <img
              src={imgSrc || "/placeholder.svg"}
              alt={image.alt}
              className={`w-full aspect-[${aspectRatio}] object-cover`}
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectImageGrid;
