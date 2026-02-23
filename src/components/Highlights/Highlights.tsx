"use client";

import { MdAccessTimeFilled, MdStars, MdEditDocument, MdPhotoCamera } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Highlights(){
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Detecta cuando el componente está al menos un 20% visible en la pantalla y solo anima una vez

  const containerVariants = {
    hidden: { opacity: 0 }, // Estado inicial: completamente transparente
    visible: { // Estado visible: completamente opaco
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Estado inicial: completamente transparente y ligeramente desplazado hacia abajo
    visible: { // Estado visible: completamente opaco y en su posición original
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const highlights = [
    {
      icon: MdStars,
      title: "Calidad de Imagen",
      description: "Ofrecemos servicios de edición de fotos para mejorar la calidad de tus imágenes, ajustando el brillo, contraste y nitidez.",
    },
    {
      icon: MdEditDocument,
      title: "Edición Profesional",
      description: "Nuestro equipo de editores profesionales garantiza una edición de alta calidad para resaltar los detalles más importantes de tus fotos.",
    },
    {
      icon: MdPhotoCamera,
      title: "Sets Profesionales",
      description: "Creamos sets profesionales de fotos para eventos, productos y servicios, asegurando una presentación visualmente atractiva.",
    },
    {
      icon: MdAccessTimeFilled,
      title: "Entrega Rápida",
      description: "Procesamos tus ediciones de forma rápida y eficiente, sin comprometer la calidad del trabajo final.",
    },
  ];
  
  return(
    <div ref={ref} className="relative w-full bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-10">¿Por qué elegir Ohana Studio?</h2>
        <motion.div
          className="mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="text-gray-500 text-6xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}