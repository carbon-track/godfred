import Link from 'next/link';
import content from '@/content/en.json';

const FOOTER_LINKS = [
    { href: '/about', key: 'about' },
    { href: '/programs', key: 'programs' },
    { href: '/get-involved', key: 'getInvolved' },
    { href: '/contact', key: 'contact' },
];

export default function Footer() {
    const { footer, nav } = content;
    return (
        <footer className="border-t border-gray-200 bg-gray-50 py-12">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6">
                    {FOOTER_LINKS.map(({ href, key }) => (
                        <Link
                            key={key}
                            href={href}
                            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                        >
                            {nav[key]}
                        </Link>
                    ))}
                </div>
                <div className="text-center text-sm text-gray-600">
                    <p className="font-medium text-gray-800">{footer.tagline}</p>
                    <p className="mt-3">
                        {footer.rights} · Website by{' '}
                        <a
                            href="https://carbontrackapp.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-hover transition-colors"
                        >
                            CarbonTrack
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
