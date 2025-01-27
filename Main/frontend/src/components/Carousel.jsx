import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Carousel = ({ slides, autoplay = false, interval = 3000 }) => {
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
    setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    }, interval);

    return () => clearInterval(timer);
}, [autoplay, interval, slides.length]);

const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
};

const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
};

return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
    {/* Carousel Content */}
    <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
        {slides.map((slide, index) => (
        <div
            key={index}
            className="flex-shrink-0 w-full h-64 md:h-96 bg-gray-200 relative"
        >
            <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-center items-center p-4">
            <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
            <p className="text-sm md:text-lg mb-4">{slide.description}</p>
            {/* Button */}
            <Link to={slide.link}>
                <button className="px-4 py-2 bg-slate-100 text-slate-900 rounded hover:bg-blue-600">
                {slide.buttonText}
                </button>
            </Link>
            </div>
        </div>
        ))}
    </div>

    {/* Navigation Buttons */}
    <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
    >
        ❮
    </button>
    <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
    >
        ❯
    </button>

    {/* Dots Navigation */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
        <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
            currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
        ></button>
        ))}
    </div>
    </div>
);
};

export default Carousel;
