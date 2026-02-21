import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { ActionCard, CardGrid } from '@/components/ui/elements';
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

                    <CardGrid columns="three" className="mb-10 text-left">
                        {getInvolved.ways.map((item) => (
                            <Card
                                key={item.title}
                                size="sm"
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </CardGrid>

                    <ActionCard
                        variant="default"
                        title={getInvolved.cta}
                        actionHref="/contact"
                        actionLabel="Contact Us"
                    />
                </div>
            </Section>
        </>
    );
}
