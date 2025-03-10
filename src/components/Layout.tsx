"use client"

import type React from "react"
import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./Navbar"
import { motion } from "framer-motion"

const Layout: React.FC = () => {
  const location = useLocation()

  // Efecto para asegurar que las páginas se muestren desde arriba
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-0" // Espacio para el navbar
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  )
}

export default Layout


