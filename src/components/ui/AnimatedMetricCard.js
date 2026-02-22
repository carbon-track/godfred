'use client';

import { useRef, useEffect, useState } from 'react';
import { Surface, cx } from './elements';

const DIGIT_HEIGHT = 2.5; // rem
const SPINS = 3; // full 0-9 rotations before landing

function SlotReelDigit({ digit, delay, isActive }) {
    const stripIndex = SPINS * 10 + parseInt(digit, 10);
    const endTranslate = -stripIndex * DIGIT_HEIGHT;

    return (
        <span
            className="inline-block overflow-hidden align-middle"
            style={{ height: `${DIGIT_HEIGHT}rem`, lineHeight: `${DIGIT_HEIGHT}rem` }}
        >
            <span
                className={cx(
                    'block text-3xl font-bold text-primary',
                    isActive && 'slot-reel-strip'
                )}
                style={{
                    '--slot-end': `${endTranslate}rem`,
                    animationDelay: isActive ? `${delay}ms` : '0ms',
                }}
            >
                {Array.from({ length: (SPINS + 1) * 10 }, (_, i) => i % 10).map((d, i) => (
                        <span
                            key={i}
                            className="block text-center"
                            style={{ height: `${DIGIT_HEIGHT}rem`, lineHeight: `${DIGIT_HEIGHT}rem` }}
                        >
                            {d}
                        </span>
                ))}
            </span>
        </span>
    );
}

function SlotReelText({ text, delay, isActive }) {
    return (
        <span
            className={cx(
                'inline-block text-3xl font-bold text-primary transition-all duration-1000 ease-out motion-reduce:transition-none',
                isActive ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            )}
            style={{ transitionDelay: isActive ? `${delay}ms` : '0ms' }}
        >
            {text}
        </span>
    );
}

export function AnimatedMetricCard({ value, label, className = '', delay = 0 }) {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setIsInView(true);
            setHasAnimated(true);
            return;
        }

        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsInView(true);
                    setHasAnimated(true);
                }
            },
            { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [hasAnimated]);

    const chars = String(value).split('');
    const allDigits = chars.every((c) => /^[0-9]$/.test(c));

    return (
        <div ref={ref}>
            <Surface
                variant="default"
                padding="sm"
                className={cx('text-center overflow-hidden', className)}
            >
                <div
                    className="relative flex items-center justify-center overflow-hidden gap-0.5"
                    style={{ minHeight: '2.5rem' }}
                >
                    {allDigits ? (
                        chars.map((char, i) => (
                            <SlotReelDigit
                                key={i}
                                digit={char}
                                delay={delay + i * 100}
                                isActive={isInView}
                            />
                        ))
                    ) : (
                        <SlotReelText text={value} delay={delay} isActive={isInView} />
                    )}
                </div>
                <p className="mt-2 text-sm text-gray-600">{label}</p>
            </Surface>
        </div>
    );
}
