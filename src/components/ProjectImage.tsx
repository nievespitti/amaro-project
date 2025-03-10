import type React from "react"

interface ProjectImageProps {
  src: string
  alt: string
  aspectRatio?: string
  className?: string
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, aspectRatio = "16/9", className = "" }) => {
  return (
    <div className={`mb-6 w-full ${className}`}>
      <div className="rounded-2xl overflow-hidden">
        <img src={src || "/placeholder.svg"} alt={alt} className={`w-full aspect-[${aspectRatio}] object-cover`} />
      </div>
    </div>
  )
}

export default ProjectImage

