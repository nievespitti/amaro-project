import type React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-[1600px] w-full mx-auto px-4 md:px-8 py-8">
        <div className="flex justify-between items-center">
          <div className="text-sm text-[#090F4C]">©2025 Estudio Amaro</div>
          <div className="text-sm text-[#090F4C]">paula@estudioamaro.com</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

