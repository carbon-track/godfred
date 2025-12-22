"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import content from '@/content/en.json';

export default function Header() {
    const { nav } = content;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold tracking-tight text-black flex items-center gap-2">
                        SGFF
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8 text-sm font-medium">
                        <li><Link href="/" className="text-gray-600 hover:text-black transition-colors">{nav.home}</Link></li>
                        <li><Link href="/about" className="text-gray-600 hover:text-black transition-colors">{nav.about}</Link></li>
                        <li><Link href="/programs" className="text-gray-600 hover:text-black transition-colors">{nav.programs}</Link></li>
                        <li><Link href="/gallery" className="text-gray-600 hover:text-black transition-colors">{nav.gallery}</Link></li>
                        <li><Link href="/impact" className="text-gray-600 hover:text-black transition-colors">{nav.impact}</Link></li>
                        <li><Link href="/learnings" className="text-gray-600 hover:text-black transition-colors">{nav.learnings}</Link></li>
                        <li><Link href="/get-involved" className="text-gray-600 hover:text-black transition-colors">{nav.getInvolved}</Link></li>
                        <li>
                            <Link href="/contact" className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
                                {nav.contact}
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
                            <Link href="/" className="-m-1.5 p-1.5 text-xl font-bold tracking-tight text-black" onClick={() => setMobileMenuOpen(false)}>
                                SGFF
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors">{nav.home}</Link>
                                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors">{nav.about}</Link>
                                    <Link href="/programs" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors">{nav.programs}</Link>
                                    <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors">{nav.gallery}</Link>
                                    <Link href="/impact" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors">{nav.impact}</Link>
                                    <Link href="/learnings" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors">{nav.learnings}</Link>
                                    <Link href="/get-involved" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors">{nav.getInvolved}</Link>
                                </div>
                                <div className="py-6">
                                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors">{nav.contact}</Link>
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
