"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


export function BannerCategory(){
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Detecta cuando el componente está al menos un 20% visible en la pantalla y solo anima una vez

    const categories = [
        { title: "Fotografías", image: "/assets/fotografo.jpg" },
        { title: "Videos", image: "/assets/filmmaker.jpg" },
        { title: "Podcast", image: "/assets/minimalista.jpg" },
    ];

    const containerVariants = { // Variantes para la animación del contenedor
        hidden: { opacity: 0, y: 20 }, // Estado inicial: completamente transparente y ligeramente desplazado hacia abajo
        visible: { // Estado visible: completamente opaco y en su posición original
            opacity: 1,
            y: 0,
            transition: { // Transición para el contenedor
                staggerChildren: 0.2, // Retraso entre la animación de cada hijo
                delayChildren: 0.3, // Retraso antes de que comiencen las animaciones de los hijos
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { // Transición para cada item
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return(
        <div className="relative w-full" ref={ref}>
            <h2 className="text-center py-20 font-bold text-gray-800 text-4xl">Explora Nuestras Categorías</h2>
            <motion.div 
                className="mx-auto flex flex-wrap justify-center gap-8 px-4 pb-5"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                >
                {categories.map((category, index) => (
                    <motion.div 
                    className="w-full sm:w-72 md:w-96 lg:w-[600px] h-60 sm:h-72 md:h-96 lg:h-[900px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group relative"
                    key={index}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={itemVariants}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link href={`/categorias/${category.title.toLowerCase()}`}>
                            {/* Imagen de fondo con hover */}
                            <div 
                                className="absolute inset-0 group-hover:scale-110 transition-transform duration-500 ease-out"
                                style={{ backgroundImage: `url('${category.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            ></div>
                            
                            {/* Capa opacada */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-300"></div>
                            
                            {/* Texto resaltado */}
                            <h3 className="relative z-10 h-full flex flex-col items-center justify-center text-white text-2xl sm:text-3xl font-bold px-4 md:px-0">
                                {category.title}
                            </h3>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}