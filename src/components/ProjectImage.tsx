import type React from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  className = "",
}) => {
  return (
    <div className={`w-full my-8 md:my-12 lg:my-16 ${className}`}>
      <div className="aspect-[3/2] relative w-full overflow-hidden rounded-xl">
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ProjectImage;
