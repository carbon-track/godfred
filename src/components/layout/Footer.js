import content from '@/content/en.json';

export default function Footer() {
    const { footer } = content;
    return (
        <footer className="border-t border-gray-200 bg-gray-50 py-12">
            <div className="mx-auto max-w-7xl px-6 text-center text-sm text-gray-600">
                <p className="font-medium text-gray-800">{footer.tagline}</p>
                <p className="mt-3">{footer.rights}</p>
            </div>
        </footer>
    );
}
