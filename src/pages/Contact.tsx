import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

const Contact: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado", { name, email, message })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-8 text-[#090F4C]"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[32px] mb-8">Contacto</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-[20px] mb-6">¿Trabajamos juntos?</h2>
            <div className="space-y-4">
              <p>Puedes escribir a paula@estudioamaro.com</p>
              <p>o llamarnos al +34 672 048 172.</p>
              <p>Si lo prefieres, podemos reunirnos en:</p>
              <p>C/ Silva 2 4º 2 28013 Madrid</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-[#090F4C] rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-[#090F4C] rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-[#090F4C] rounded h-32"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#090F4C] text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>

        <div className="mb-16">
          <h2 className="text-[20px] mb-6">Síguenos en redes sociales</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-[#090F4C] hover:underline">
              Instagram
            </a>
            <a href="#" className="text-[#090F4C] hover:underline">
              LinkedIn
            </a>
            <a href="#" className="text-[#090F4C] hover:underline">
              Behance
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact



