import type React from "react";

interface ProjectImageGridProps {
  images: Array<{
    src: string;
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
      {images.map((image, index) => (
        <div
          key={index}
          className="rounded-2xl overflow-hidden w-full relative"
          style={{ paddingBottom: "75%" }} // Esto mantiene un aspect ratio 4:3
        >
          <img
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectImageGrid;
