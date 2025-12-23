import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
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
                <div className="mx-auto max-w-3xl rounded-2xl bg-gray-50 p-8 sm:p-12">
                    <p className="text-lg leading-8 text-gray-700">{about.mission.content}</p>
                </div>
            </Section>

            <Section title={about.vision.title} className="bg-gray-900 !text-white">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xl font-medium leading-9 text-gray-50">{about.vision.content}</p>
                </div>
            </Section>

            <Section title={about.story.title}>
                <div className="mx-auto max-w-3xl prose prose-lg prose-gray text-gray-600">
                    <p className="leading-8">{about.story.content}</p>
                </div>
            </Section>
        </>
    );
}
