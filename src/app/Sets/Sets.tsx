import Link from "next/link";

export function Sets() {
    return (
        <div className="w-full mt-6 mb-10 flex flex-col items-center justify-center md:mt-10 md:mb-10">
            <h1 className="text-4xl font-bold text-gray-800 md:text-6xl">Nuestro Sets</h1>
            <p className="text-gray-600 ml-2 text-lg py-5 text-xl">Descubre nuestros sets exclusivos</p>
            <div className="w-full grid grid-cols-1 mx-50 px-5 md:grid-cols-3 gap-8 mx-auto md:w-[50%]">
                <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-50 bg-gray-200 mb-4 overflow-hidden">
                        <img src="" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full px-5 pb-5 flex flex-col items-start">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Alquiler - Grabacion Podcast</h3>
                        <p className="text-gray-600 mb-2">2,000 por hora</p>
                        <p className="text-red-500 font-bold text-xl mb-3">RD$ 2,000/hora</p>
                        <Link href="/reservar" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Reservar</Link>
                    </div>
                </div>
                <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-50 bg-gray-200 mb-4 overflow-hidden">
                        <img src="" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full px-5 pb-5 flex flex-col items-start">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Alquiler - Grabacion Reels</h3>
                        <p className="text-gray-600 mb-2">2,000 por hora</p>
                        <p className="text-red-500 font-bold text-xl mb-3">RD$ 2,000/hora</p>
                        <Link href="/reservar" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Reservar</Link>
                    </div>
                </div>
                <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-50 bg-gray-200 mb-4 overflow-hidden">
                        <img src="" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full px-5 pb-5 flex flex-col items-start">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Alquiler - Estudio de Foto</h3>
                        <p className="text-gray-600 mb-2">2,000 por hora</p>
                        <p className="text-red-500 font-bold text-xl mb-3">RD$ 2,000/hora</p>
                        <Link href="/reservar" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Reservar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}