import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import content from '@/content/en.json';

export default function Learnings() {
    const { learnings } = content;

    return (
        <>
            <Hero
                title={learnings.title}
                subtitle="Reflecting on our journey"
            />

            <Section title={learnings.challenges.title} className="bg-gray-50">
                <ul className="mx-auto max-w-3xl space-y-4 text-left">
                    {learnings.challenges.items.map((item, index) => (
                        <li key={index} className="flex gap-x-3 rounded-lg bg-white p-6 shadow-sm border border-gray-100">
                            <span className="text-blue-600 font-bold">•</span>
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
            </Section>

            <Section title={learnings.keyLearnings.title}>
                <ul className="mx-auto max-w-3xl space-y-4 text-left">
                    {learnings.keyLearnings.items.map((item, index) => (
                        <li key={index} className="flex gap-x-3 rounded-lg bg-blue-50/50 p-6 shadow-sm border border-blue-100">
                            <span className="text-blue-600 font-bold">✓</span>
                            <span className="text-gray-900 font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
            </Section>
        </>
    );
}
