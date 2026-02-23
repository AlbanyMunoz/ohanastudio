import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brands from "../../data/brands";

export function Brands(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    return(
        <div className="relative w-full py-15">
            <div className="py-5">
                <h2 className="text-center mx-5 py-3 font-bold text-gray-800 text-4xl">Marcas que Confiamos</h2>
                <p className="text-center mx-5 pb-10 text-gray-500 text-xl">Trabajamos con las mejores marcas para ofrecerte productos de alta calidad.</p>
            </div>
            <div id="ContainerBrands" className="w-full md:w-[50%] mx-auto">
                <Slider {...settings}>
                    {brands.map((brand, index) => (
                    <div key={index} className="w-full h-50 bg-gray-200 mb-4 overflow-hidden flex items-center justify-center">
                        <img src={brand.image} alt={brand.name} className="w-full h-full object-contain" />
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    )
}