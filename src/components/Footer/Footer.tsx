import Link from "next/link";
import { MdEmail, MdPhone, MdOutlineAccessTime } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaTiktok, FaLocationArrow } from "react-icons/fa6";



export function Footer(){
    return(
        <div className="relative w-full bg-black py-15">
            <footer className="w-full flex flex-col items-center justify-center py-5">
                <div className="w-full flex flex-col items-center justify-center py-5 px-3">
                    <h1 className="text-center text-white text-2xl font-bold md:text-4xl">Listo para comenzar tu experiencia en Ohana Studio?</h1>
                    <p className="text-center text-white text-xl mt-2 font-light py-3">¡Reserva tu sesión hoy y comienza tu transformación!</p>
                    <Link href="/bookings" className="bg-red-500 text-xl hover:bg-red-700 text-white font-bold py-3 px-10 rounded mt-5">Reserva Ahora</Link>
                </div>
                <div className="w-full grid grid-cols-1 px-5 pt-15 md:grid-cols-4 gap-8 md:w-[80%] md:mx-auto">
                    <div className="flex flex-col items-center">
                        <h3 className="text-white text-2xl font-bold mb-2">Contactos:</h3>
                        <p className="text-gray-400 text-md">
                            <MdEmail className="inline mb-1 text-xl" /> <label className="font-bold">Email:</label> info@ohanastudio.com
                        </p>
                        <p className="text-gray-400 text-md">
                            <MdPhone className="inline mb-1 text-xl" /> <label className="font-bold">Teléfono:</label> +1 234 567 890
                        </p>
                        <p className="text-gray-400 text-md">
                            <MdOutlineAccessTime className="inline mb-1 text-xl" /> <label className="font-bold">Horario:</label> Lunes a Viernes, 9am - 6pm
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-white text-2xl font-bold mb-2">Síguenos:</h3>
                        <p className="text-gray-400 text-md"><FaInstagram className="inline mb-1 text-xl" /> <label className="font-bold">Instagram:</label> @ohanastudio</p>
                        <p className="text-gray-400 text-md"><FaFacebookF className="inline mb-1 text-xl" /> <label className="font-bold">Facebook:</label> Ohana Studio</p>
                        <p className="text-gray-400 text-md"><FaTiktok className="inline mb-1 text-xl" /> <label className="font-bold">TikTok:</label> @ohanastudio</p>

                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-white text-2xl font-bold mb-2">Ubicación:</h3>
                        <p className="text-gray-400 text-md"><FaLocationArrow className="inline mb-1 text-xl" /> 123 Calle Principal, Ciudad, País</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-white text-2xl font-bold mb-2">Suscríbete a nuestro boletín:</h3>
                        <p className="text-gray-400 text-md mb-4">Recibe las últimas noticias y ofertas directamente en tu correo.</p>
                        <div className="flex w-full">
                            <input type="email" placeholder="Tu correo electrónico" className="w-full px-4 py-2 rounded-l bg-gray-800 text-white focus:outline-none" />
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r">Suscribirse</button>
                        </div>
                    </div>
                </div>
                <div className="w-full px-5 md:w-[80%] md:mx-auto border-t border-secondary-foreground/20 mt-6">
                    <div className="flex items-center justify-end py-5">
                        <p className="text-gray-500 text-sm md:text-xl">&copy; 2026 Ohana Studio. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}