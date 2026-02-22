
'use client';

import { useEffect, useState } from 'react';
import mediaItems from '@/content/media.json';
import { ButtonLink, Surface } from './elements';

const FALLBACK_HERO_IMAGE = {
    src: '/media/photo_2025-04-10_05-20-44.jpg',
    alt: 'Sustainability in action',
};

const HERO_IMAGES = mediaItems.filter(
    (item) => item?.type === 'image' && typeof item?.src === 'string' && item.src.length > 0,
);

function pickRandomHeroImage() {
    if (HERO_IMAGES.length === 0) return FALLBACK_HERO_IMAGE;
    const index = Math.floor(Math.random() * HERO_IMAGES.length);
    return HERO_IMAGES[index];
}

const DEFAULT_BADGE = 'Sustainable Green Future Foundation';

export default function Hero({ title, subtitle, hideCtas = false, badge }) {
    const [heroImage, setHeroImage] = useState(FALLBACK_HERO_IMAGE);

    useEffect(() => {
        const frame = window.requestAnimationFrame(() => {
            setHeroImage(pickRandomHeroImage());
        });

        return () => {
            window.cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <section className="relative overflow-hidden bg-gradient-soft pt-16 pb-24 lg:pt-28 lg:pb-32">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_45%)]" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,34rem)] lg:items-center">
                    <div className="max-w-2xl min-w-0 text-left">
                        <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                            {badge ?? DEFAULT_BADGE}
                        </p>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
                            {title}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 text-balance">
                            {subtitle}
                        </p>
                        {!hideCtas && (
                            <div className="mt-10 flex items-center gap-x-6">
                                <ButtonLink href="/get-involved" variant="primary">
                                    Get Involved
                                </ButtonLink>
                                <ButtonLink href="/about" variant="ghost" className="px-0 py-0">
                                    Learn more <span aria-hidden="true">→</span>
                                </ButtonLink>
                            </div>
                        )}
                    </div>
                    {/* Featured Image */}
                    <div className="relative w-full lg:justify-self-end">
                        <Surface
                            variant="default"
                            padding="none"
                            className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 shadow-2xl ring-1 ring-gray-900/10 sm:aspect-[3/2] lg:aspect-[4/3]"
                        >
                            <img
                                src={heroImage.src}
                                alt={heroImage.alt || FALLBACK_HERO_IMAGE.alt}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-6">
                                <p className="text-sm font-medium text-white">Climate action in communities, schools, and youth networks.</p>
                            </div>
                        </Surface>
                    </div>
                </div>
            </div>
        </section>
    );
}
