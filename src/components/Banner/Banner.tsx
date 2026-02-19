"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Banner() {
  // Animaciones para el banner y sus elementos
  const containerVariants = {
    hidden: { opacity: 0 }, // El contenedor comienza invisible
    visible: { // El contenedor se vuelve visible y sus hijos se animan con un retraso
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Animaciones para cada elemento del banner (heading, subheading, botón)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Cada elemento comienza invisible y ligeramente desplazado hacia abajo
    visible: { // Cada elemento se vuelve visible y se mueve a su posición original
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat pt-20" style={{ backgroundImage: "url('/assets/retrato.avif')" }}>
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido centrado */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
          Tu momento, tu imagen, <span className="text-red-500">tu estudio</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-white text-center mb-8 max-w-2xl">
          Reserva tu sesión profesional en menos de un minuto
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link href="/bookings">
            <button className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-base md:text-lg">
              📷 Reservar Ahora
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll (opcional) */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
}