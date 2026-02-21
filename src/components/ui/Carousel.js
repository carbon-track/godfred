"use client";

import { useState, useEffect } from "react";
import Section from "./Section";
import { Surface } from "./elements";

export default function Carousel({ images = [] }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const hasImages = images.length > 0;

    useEffect(() => {
        if (!hasImages) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [hasImages, images.length]);

    return (
        <Section
            title="Community in Motion"
            subtitle="Witness the vibrant moments of our work and the people we serve."
            className="bg-white"
        >
            <Surface
                variant="default"
                padding="none"
                className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 sm:aspect-[2/1] lg:aspect-[16/7]"
            >
                {hasImages ? (
                    <>
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            </div>
                        ))}

                        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
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
                    </>
                ) : (
                    <div className="flex h-full items-center justify-center px-6 text-center text-gray-500">
                        Gallery highlights will appear here as media is added.
                    </div>
                )}
            </Surface>
        </Section>
    );
}
