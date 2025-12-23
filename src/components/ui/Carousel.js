"use client";

import { useState, useEffect } from "react";

export default function Carousel({ images = [] }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative overflow-hidden bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Community in Motion
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Witness the vibrant moments of our work and the people we serve.
                    </p>
                </div>

                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-2xl ring-1 ring-gray-900/10 sm:aspect-[2/1] lg:aspect-[16/7]">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className={`h-full w-full object-cover transition-transform duration-[10000ms] ease-linear ${index === currentIndex ? "scale-105" : "scale-100"
                                    }`}
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        </div>
                    ))}

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 space-x-2 z-10">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
