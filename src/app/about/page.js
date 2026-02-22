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
                    descriptionClassName="text-gray-600"
                >
                    <p className="text-base leading-7 text-gray-600">
                        Founded in early 2023 by{' '}
                        <a
                            href="https://projectgreenchallenge.com/people/godfred-owusu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-primary hover:text-primary-hover underline underline-offset-2"
                        >
                            Mr. Godfred Owusu
                        </a>
                        , with support from Mr. Francis Amoako, Mr. Felix Owusu, and Mr. Jeff Addo Donkor. Initially starting as the &apos;Youth Planner and Environment Association–KNUST&apos;, the organization collaborated with Dr. Stephen Takyi under the Ghana Association of Student Planners (GASP). It transitioned to the &apos;Sustainable Green Future Club&apos; before officially registering in mid-2025 as a national non-profit: Sustainable Green Future Foundation (SGFF).
                    </p>
                </Card>
            </Section>
        </>
    );
}
