import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import GalleryGrid from '@/components/ui/GalleryGrid';
import mediaItems from '@/content/media.json';

export default function Gallery() {
    return (
        <>
            <Hero
                title="Our Gallery"
                subtitle="Moments from our journey towards a sustainable future."
                hideCtas
            />

            <Section subtitle="Photos and videos documenting workshops, outreach, and field activities.">
                <GalleryGrid items={mediaItems} />
            </Section>
        </>
    );
}
