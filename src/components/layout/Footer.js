import content from '@/content/en.json';

export default function Footer() {
    const { footer } = content;
    return (
        <footer className="border-t border-gray-200 bg-white py-12">
            <div className="mx-auto max-w-7xl px-6 text-center text-sm text-gray-500">
                <p>{footer.rights}</p>
            </div>
        </footer>
    );
}
