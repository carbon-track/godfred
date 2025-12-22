import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import content from '@/content/en.json';

export default function GetInvolved() {
    const { getInvolved } = content;

    return (
        <>
            <Hero
                title={getInvolved.title}
                subtitle="Join our mission"
            />

            <Section>
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xl leading-9 text-gray-700 mb-12">{getInvolved.content}</p>
                    <div className="rounded-3xl bg-black p-8 sm:p-12 text-white shadow-xl">
                        <p className="text-2xl font-bold">{getInvolved.cta}</p>
                        <div className="mt-8 flex justify-center">
                            <a href="/contact" className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
