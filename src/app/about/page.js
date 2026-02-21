import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { CardGrid } from '@/components/ui/elements';
import content from '@/content/en.json';

export default function About() {
    const { about } = content;

    return (
        <>
            <Hero
                title={about.title}
                subtitle="Our Journey, Mission, and Vision"
            />

            <Section title={about.mission.title}>
                <Card
                    size="md"
                    className="mx-auto max-w-3xl h-auto"
                    description={about.mission.content}
                    descriptionClassName="text-gray-700"
                />
            </Section>

            <Section title={about.vision.title}>
                <Card
                    size="md"
                    className="mx-auto max-w-3xl h-auto"
                    align="center"
                    description={about.vision.content}
                    descriptionClassName="font-medium text-gray-700"
                />
            </Section>

            <Section title="Our Values" subtitle="The principles that guide every partnership and program.">
                <CardGrid columns="three">
                    {about.values.map((value) => (
                        <Card
                            key={value.title}
                            size="sm"
                            title={value.title}
                            description={value.description}
                        />
                    ))}
                </CardGrid>
            </Section>

            <Section title={about.story.title}>
                <Card
                    size="md"
                    className="mx-auto max-w-3xl h-auto"
                    description={about.story.content}
                    descriptionClassName="text-gray-600"
                />
            </Section>
        </>
    );
}
