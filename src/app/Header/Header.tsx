"use client";

import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openMobileMenu ? "hidden" : ""; // Evita el scroll del fondo cuando el menú móvil está abierto
    return () => {
      document.body.style.overflow = ""; // Asegura que el scroll se restaure si el componente se desmonta mientras el menú está abierto
    };
  }, [openMobileMenu]);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/Plans", label: "Planes" },
    { href: "/galery", label: "Galería" }
  ];

  return (
    <header className="bg-[#0F0F0F] fixed w-full z-30">

        {/* Menu Desktop Static */}
        <div className="container mx-auto py-4 px-5 md:px-0">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <h1 className="text-white font-bold text-xl">Ohana Studios</h1>
                </Link>

                <nav className="hidden md:flex gap-6 my-9">
                    {links.map((l) => (
                        <Link key={l.href} href={l.href}>
                            <label className="text-white hover:text-gray-300 text-xl px-4 py-3 hover:border-b-2 transition-colors cursor-pointer">{l.label}</label>
                        </Link>
                    ))}
                    <Link href="/bookings">
                        <label className="text-white rounded-md bg-red-500 hover:bg-red-700 text-xl px-4 py-3 rounded hover:bg-gray-700 transition-colors cursor-pointer">Reserva Ahora</label>
                    </Link>
                </nav>

                <div className="md:hidden rounded-md bg-red-600 p-2">
                    <CiMenuFries
                        className="text-white text-2xl cursor-pointer"
                        onClick={() => setOpenMobileMenu(true)}
                        aria-label="Abrir menú"
                    />
                </div>
            </div>
        </div>

        {/* Mobile menu (panel deslizable desde la derecha) */}
        <div
            className={`fixed inset-0 z-50 md:hidden pointer-events-none`}
            aria-hidden={!openMobileMenu}
        >
            {/* Overlay */}
            <div
                className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${openMobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0"
                    }`}
                onClick={() => setOpenMobileMenu(false)}
            />

            {/* Panel */}
            <aside
                className={`absolute right-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-xl transform transition-transform duration-200 ${openMobileMenu ? "translate-x-0 pointer-events-auto" : "translate-x-full"
                    }`}
                role="dialog"
                aria-modal="true"
            >
                <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <Link href="/">
                            <label
                                className="font-bold text-lg"
                                onClick={() => setOpenMobileMenu(false)}
                            >
                                Ohana Studios
                            </label>
                        </Link>
                        <AiOutlineClose
                            className="text-3xl cursor-pointer border-2 border-red-500 rounded p-1"
                            onClick={() => setOpenMobileMenu(false)}
                            aria-label="Cerrar menú"
                        />
                    </div>

                    <nav className="flex flex-col gap-4">
                        {links.map((l) => (
                            <Link key={l.href} href={l.href}>
                                <label
                                    className="py-2 text-gray-700 hover:text-gray-900 border-b font-bold"
                                    onClick={() => setOpenMobileMenu(false)}
                                >
                                    {l.label}
                                </label>
                            </Link>
                        ))}
                        <Link href="/bookings" className="mt-2">
                            <label className="mt-6 text-gray-700 rounded-md bg-red-500 text-white px-4 py-2 hover:bg-red-700">Reserva Ahora</label>
                        </Link>
                    </nav>

                    <div className="mt-auto text-sm text-gray-500">
                        © {new Date().getFullYear()} Ohana Studios
                    </div>
                </div>
            </aside>
        </div>
    </header>
  );
}