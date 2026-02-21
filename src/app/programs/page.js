import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { ActionCard, CardGrid } from '@/components/ui/elements';
import content from '@/content/en.json';

export default function Programs() {
    const { programs } = content;

    return (
        <>
            <Hero
                title={programs.title}
                subtitle="Empowering through action and education"
                hideCtas
            />

            <Section subtitle="Each program is designed to build practical skills, local ownership, and long-term sustainability.">
                <CardGrid columns="three" className="gap-8">
                    {programs.items.map((item) => (
                        <Card
                            key={item.title}
                            size="sm"
                            title={item.title}
                            description={item.description}
                            footer={
                                <><span className="font-semibold text-gray-900">Outcome: </span>{item.outcome}</>
                            }
                        />
                    ))}
                </CardGrid>

                <ActionCard
                    className="mt-14"
                    variant="default"
                    title="Partner With SGFF"
                    description={programs.cta}
                    actionHref="/contact"
                    actionLabel="Start a Conversation"
                />
            </Section>
        </>
    );
}
