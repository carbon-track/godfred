import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Carousel from '@/components/ui/Carousel';
import content from '@/content/en.json';
import mediaItems from '@/content/media.json';

export default function Home() {
  const { home } = content;

  // Filter only images and shuffle them to get 5 random ones
  const randomImages = mediaItems
    .filter(item => item.type === 'image')
    .sort(() => 0.5 - Math.random())
    .slice(0, 5)
    .map(item => item.src);

  return (
    <>
      <Hero
        title={home.hero.title}
        subtitle={home.hero.subtitle}
      />

      {/* Intro Section - Clean White */}
      <Section title={home.intro.title} className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-8 text-gray-600">{home.intro.text}</p>
        </div>
      </Section>

      {/* Hero Carousel - Dynamic Visuals */}
      <Carousel images={randomImages} />

      {/* Highlights - Soft Green Background */}
      <Section title="Highlights" className="bg-gradient-soft">
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
