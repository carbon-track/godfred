import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import content from '@/content/en.json';

export default function Home() {
  const { home } = content;

  return (
    <>
      <Hero
        title={home.hero.title}
        subtitle={home.hero.subtitle}
      />

      <Section title={home.intro.title}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-8 text-gray-600">{home.intro.text}</p>
        </div>
      </Section>

      <Section title="Highlights" className="bg-gray-50/50">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {home.highlights.map((item, index) => (
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
