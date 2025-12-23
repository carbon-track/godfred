export default function ImageGrid() {
    // Selection of images for the grid
    const images = [
        '/media/photo_2025-04-10_05-20-44.jpg',
        '/media/photo_2025-04-10_01-49-21.jpg',
        '/media/photo_2025-04-10_03-24-14.jpg',
    ];

    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Rooted in Community</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        See how small actions grow into big impacts.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {images.map((src, index) => (
                        <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-lg hover:shadow-xl transition-shadow ring-1 ring-gray-900/5 group">
                            <img
                                src={src}
                                alt={`Community Impact ${index + 1}`}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Optional Overlay/Caption logic could go here */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-medium">View Project</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
