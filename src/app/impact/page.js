import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import content from '@/content/en.json';

export default function Impact() {
    const { impact } = content;

    return (
        <>
            <Hero
                title={impact.title}
                subtitle="Making a tangible difference"
            />

            <Section>
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-xl leading-9 text-gray-700">{impact.content}</p>
                </div>
            </Section>
        </>
    );
}
