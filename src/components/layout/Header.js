"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import content from '@/content/en.json';

const NAV_LINKS = [
    { href: '/', key: 'home' },
    { href: '/about', key: 'about' },
    { href: '/programs', key: 'programs' },
    { href: '/gallery', key: 'gallery' },
    { href: '/impact', key: 'impact' },
    { href: '/learnings', key: 'learnings' },
    { href: '/get-involved', key: 'getInvolved' },
];

export default function Header() {
    const { nav } = content;
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const isActive = (href) => {
        if (href === '/') return pathname === '/';
        return pathname === href || pathname?.startsWith(href + '/');
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 hover:text-primary transition-colors flex items-center gap-2" title="Sustainable Green Future Foundation">
                        SGFF
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8 text-sm font-medium">
                        {NAV_LINKS.map(({ href, key }) => (
                            <li key={key}>
                                <Link
                                    href={href}
                                    className={`transition-colors ${isActive(href)
                                        ? 'font-bold text-gray-900'
                                        : 'text-gray-600 hover:text-primary'
                                        }`}
                                >
                                    {nav[key]}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/contact"
                                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${isActive('/contact')
                                    ? 'bg-primary-hover text-white ring-2 ring-primary ring-offset-2'
                                    : 'bg-primary text-white hover:bg-primary-hover'
                                    }`}
                            >
                                {nav.contact}
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mounted && createPortal(
                <div
                    className={`relative z-[100] md:hidden transition-[visibility] duration-0 ${mobileMenuOpen ? 'visible delay-0' : 'invisible delay-300'}`}
                    role="dialog"
                    aria-modal="true"
                    aria-hidden={!mobileMenuOpen}
                >
                    {/* Backdrop */}
                    <div
                        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Panel */}
                    <div
                        className={`fixed inset-y-0 right-0 z-[100] w-5/6 max-w-xs overflow-y-auto bg-white px-6 py-6 shadow-2xl ring-1 ring-gray-900/10 border-l border-gray-100 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold tracking-tight text-gray-900 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)} title="Sustainable Green Future Foundation">
                                SGFF
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-100">
                                <div className="space-y-2 py-6">
                                    {NAV_LINKS.map(({ href, key }) => (
                                        <Link
                                            key={key}
                                            href={href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`-mx-3 block rounded-lg px-3 py-2 text-base leading-7 transition-colors hover:bg-gray-50 hover:text-primary ${isActive(href) ? 'font-bold text-primary' : 'font-semibold text-gray-900'}`}
                                        >
                                            {nav[key]}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        href="/contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 transition-colors hover:bg-gray-50 ${isActive('/contact') ? 'font-bold text-primary' : 'font-semibold text-gray-900'}`}
                                    >
                                        {nav.contact}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </header>
    );
}
