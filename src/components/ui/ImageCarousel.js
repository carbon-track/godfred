"use client";

import { useState, useEffect } from 'react';

const images = [
    '/media/photo_2025-04-10_05-20-44.jpg',
    '/media/photo_2025-04-10_01-49-21.jpg',
    '/media/photo_2025-04-10_03-24-14.jpg',
    '/media/photo_2025-04-10_04-47-53.jpg',
    '/media/photo_2025-03-30_19-44-46.jpg'
];

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[600px] overflow-hidden bg-gray-900">
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                    <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className={`h-full w-full object-cover transition-transform duration-[4000ms] ease-linear ${
                            index === currentIndex ? 'scale-110' : 'scale-100'
                        }`}
                    />
                    <div className="absolute inset-0 bg-black/20" /> {/* Slight overlay for contrast if needed */}
                </div>
            ))}
            
            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                                ? 'w-8 bg-white' 
                                : 'w-2.5 bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
