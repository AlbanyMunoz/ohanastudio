import Link from "next/link";
import Image from "next/image";
import plans from "../../data/plans/plans.js";

export function BannerPlans() {
    return (
        <section className="w-full py-12 mt-10 px-4 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Planes</h1>
                    <p className="text-lg text-gray-600">Descubre nuestros planes exclusivos y encuentra el perfecto para tu evento</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div key={index} className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={plan.image}
                                    alt={plan.name}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h2>
                                <p className="text-gray-600 mb-4">{plan.description}</p>
                                <Link 
                                    href={`/plans/${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                                >
                                    Ver planes
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}