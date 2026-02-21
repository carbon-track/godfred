import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { CardGrid, MetricCard } from '@/components/ui/elements';
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

                <CardGrid columns="three" className="mx-auto mt-12 max-w-5xl gap-5">
                    {impact.metrics.map((metric) => (
                        <MetricCard key={metric.label} value={metric.value} label={metric.label} />
                    ))}
                </CardGrid>

                <div className="mx-auto mt-12 max-w-4xl space-y-4">
                    {impact.stories.map((story, index) => (
                        <Card
                            key={index}
                            size="md"
                            badge="Impact Story"
                            description={story}
                            descriptionClassName="text-gray-700"
                            className="h-auto"
                        />
                    ))}
                </div>
            </Section>
        </>
    );
}
