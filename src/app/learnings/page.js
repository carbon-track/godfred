import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
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
                        <li key={index}>
                            <Card
                                size="md"
                                badge="Challenge"
                                description={item}
                                descriptionClassName="text-gray-700"
                                className="h-auto"
                            />
                        </li>
                    ))}
                </ul>
            </Section>

            <Section title={learnings.keyLearnings.title}>
                <ul className="mx-auto max-w-3xl space-y-4 text-left">
                    {learnings.keyLearnings.items.map((item, index) => (
                        <li key={index}>
                            <Card
                                size="md"
                                badge="Key Learning"
                                description={item}
                                descriptionClassName="font-medium text-gray-900"
                                className="h-auto"
                            />
                        </li>
                    ))}
                </ul>
            </Section>

            <Section title="What We Are Improving Next" className="bg-gray-50">
                <ul className="mx-auto max-w-3xl space-y-4 text-left">
                    {learnings.nextSteps.map((item, index) => (
                        <li key={index}>
                            <Card
                                size="md"
                                badge="Next Step"
                                description={item}
                                descriptionClassName="text-gray-700"
                                className="h-auto"
                            />
                        </li>
                    ))}
                </ul>
            </Section>
        </>
    );
}
