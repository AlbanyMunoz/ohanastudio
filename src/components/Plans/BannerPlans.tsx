import Link from "next/link";
import plans from "../../data/plans.js";

export function BannerPlans(){

    return(
         <div className="relative w-full py-15 mt-10 bg-gray-100">
                <div className="py-5">
                    <h2 className="text-center mx-5 py-3 font-bold text-gray-800 text-4xl">Nuestros Planes Para ti</h2>
                    <p className="text-center mx-5 pb-10 text-gray-500 text-xl">Elige el plan que mejor se adapte a tus necesidades y comienza a disfrutar de nuestros servicios hoy mismo.</p>
                </div>
                <div id="ContainerPlans" className="w-full grid grid-cols-1 mx-50 px-5 md:grid-cols-3 gap-8 mx-auto md:w-[60%]">
                    {plans.map((plan) => (
                        <Link key={plan.name} href={`/plans/${plan.name}`} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-full h-50 bg-gray-200 mb-4 overflow-hidden">
                                <img src={plan.image} alt={plan.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full px-5 pb-5 flex flex-col items-start">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
                                <p className="text-gray-600 mb-4">{plan.description}</p>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Ver Plan</button>
                            </div>
                        </Link>
                    ))}
                </div>
         </div>
    )
}