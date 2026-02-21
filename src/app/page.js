import Link from 'next/link';
import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Carousel from '@/components/ui/Carousel';
import { ActionCard, CardGrid, MetricCard } from '@/components/ui/elements';
import content from '@/content/en.json';
import mediaItems from '@/content/media.json';

export default function Home() {
  const { home } = content;
  const workCardTitles = ['Educate', 'Mobilize', 'Lead'];

  // Filter only images and pick the first 5 for deterministic rendering
  const highlightImages = mediaItems
    .filter(item => item.type === 'image')
    .slice(0, 5)
    .map(item => item.src);

  return (
    <>
      <Hero
        title={home.hero.title}
        subtitle={home.hero.subtitle}
        badge="Nonprofit Founded 2023"
      />

      {/* Intro Section - Clean White */}
      <Section title={home.intro.title} className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-8 text-gray-600">{home.intro.text}</p>
        </div>
      </Section>

      {/* Stats: replaced unverified numbers with verifiable facts. Backup: Community Sessions 40+, Youth Participants 1,200+, Partner Institutions 18, Cities Reached 12 */}
      <Section className="pt-0">
        <CardGrid columns="four" className="gap-4">
          {home.stats.map((item) => (
            <MetricCard key={item.label} value={item.value} label={item.label} />
          ))}
        </CardGrid>
      </Section>

      {/* Hero Carousel - Dynamic Visuals */}
      <Carousel images={highlightImages} />

      {/* Highlights - Soft Green Background */}
      <Section title="Highlights" subtitle="Our core pillars of climate and community impact." className="bg-gradient-soft">
        <CardGrid columns="three" className="gap-8">
          {home.highlights.map((item) => (
            <Card
              key={item.title}
              size="sm"
              title={item.title}
              description={item.description}
            />
          ))}
        </CardGrid>
      </Section>

      <Section title="How We Work" className="bg-white">
        <CardGrid columns="three">
          {home.focus.map((point, index) => (
            <Card
              key={point}
              size="md"
              title={workCardTitles[index] || `Approach ${index + 1}`}
              description={point}
              descriptionClassName="text-gray-700"
            />
          ))}
        </CardGrid>
      </Section>

      <Section title={home.featured.title} className="bg-gray-50">
        <CardGrid columns="one" className="mx-auto max-w-4xl">
          {home.featured.items.map((item) => (
            <Card
              key={item}
              size="md"
              badge="Current"
              description={item}
              descriptionClassName="text-gray-700"
              className="h-auto"
            />
          ))}
        </CardGrid>
      </Section>

      <Section className="bg-white">
        <ActionCard
          variant="contrast"
          title="Join Our Mission"
          description="Get involved in our programs, volunteer, or partner with us to build a sustainable green future."
          actionHref="/get-involved"
          actionLabel="Get Involved"
        />
        <div className="mt-6 text-center">
          <Link
            href="/contact"
            className="text-base font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Or contact us directly →
          </Link>
        </div>
      </Section>
    </>
  );
}
