'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import plans from '../../data/plans/allPlans.js';
import { Sets } from '../Sets';

export default function Plans() {
    const [showAll, setShowAll] = useState(false);
    
    const displayedPlans = showAll ? plans : plans.slice(0, 6);
    const hasMorePlans = plans.length > 6;

    return (
        <div>
            <div className="w-full min-h-screen bg-gray-50">

            {/* Grid de planes */}
            <div className="max-w-7xl mx-auto py-4 px-4 md:py-12">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 mt-30 md:text-6xl">Nuestros Planes</h1>
                    <p className="text-center text-gray-600 mb-10 text-xl">Descubre nuestros planes exclusivos y encuentra el perfecto para tu evento</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedPlans.map((plan, index) => (
                        <div 
                            key={index} 
                            className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="relative h-56 w-full">
                                <Image
                                    src={plan.image}
                                    alt={plan.name}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300"></div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">{plan.name}</h2>
                                <p className="text-gray-600 mb-6 line-clamp-3">{plan.description}</p>
                                <Link 
                                    href={`/plans/${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="inline-block text-center bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition-colors duration-300"
                                >
                                    Ver plan
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón Ver Más Planes */}
                {hasMorePlans && !showAll && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => setShowAll(true)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Ver Más Planes
                        </button>
                    </div>
                )}

                {/* Botón Mostrar Menos */}
                {showAll && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => setShowAll(false)}
                            className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Mostrar Menos
                        </button>
                    </div>
                )}
            </div>
        </div>
        <Sets />
        </div>

    )
}