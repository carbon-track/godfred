import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import content from '@/content/en.json';

export default function Programs() {
    const { programs } = content;

    return (
        <>
            <Hero
                title={programs.title}
                subtitle="Empowering through action and education"
            />

            <Section>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {programs.items.map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </Section>
        </>
    );
}
