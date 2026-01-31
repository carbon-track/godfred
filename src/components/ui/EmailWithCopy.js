'use client';

import { useState, useCallback } from 'react';

export default function EmailWithCopy({ email, label = 'Email' }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // fallback: open mailto
            window.location.href = `mailto:${email}`;
        }
    }, [email]);

    return (
        <div className="flex flex-col items-center rounded-2xl bg-gray-50 p-10 text-center hover:bg-gray-100 transition-colors">
            <h3 className="mb-4 text-lg font-semibold text-black">{label}</h3>
            <div className="flex flex-col items-center gap-3 w-full min-w-0">
                <span className="min-w-0 overflow-x-auto overflow-y-hidden text-center [scrollbar-width:thin]">
                    <a
                        href={`mailto:${email}`}
                        className="text-sm text-primary hover:text-primary-hover transition-colors font-medium whitespace-nowrap"
                    >
                        {email}
                    </a>
                </span>
                <button
                    type="button"
                    onClick={handleCopy}
                    aria-label="Copy email"
                    className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium bg-primary text-white hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                    {copied ? (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Copied!
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
