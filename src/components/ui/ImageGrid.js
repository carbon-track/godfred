import Section from './Section';
import { CardGrid, Surface } from './elements';

export default function ImageGrid() {
    // Selection of images for the grid
    const images = [
        '/media/photo_2025-04-10_05-20-44.jpg',
        '/media/photo_2025-04-10_01-49-21.jpg',
        '/media/photo_2025-04-10_03-24-14.jpg',
    ];

    return (
        <Section
            title="Rooted in Community"
            subtitle="See how small actions grow into big impacts."
            className="bg-white"
        >
            <CardGrid columns="three" className="gap-8">
                {images.map((src, index) => (
                    <Surface
                        key={index}
                        variant="muted"
                        padding="none"
                        className="group relative aspect-[4/3] overflow-hidden ring-1 ring-gray-900/5"
                    >
                        <img
                            src={src}
                            alt={`Community Impact ${index + 1}`}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="font-medium text-white">View Project</span>
                        </div>
                    </Surface>
                ))}
            </CardGrid>
        </Section>
    );
}
