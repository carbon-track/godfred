
export default function Hero({ title, subtitle }) {
    return (
        <section className="relative overflow-hidden bg-gradient-soft pt-16 pb-24 lg:pt-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2 lg:items-center">
                    <div className="max-w-2xl text-left">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
                            {title}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 text-balance">
                            {subtitle}
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a href="/get-involved" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors">
                                Get Involved
                            </a>
                            <a href="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors flex items-center gap-1">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    {/* Featured Image */}
                    <div className="relative lg:ml-auto">
                        <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl bg-gray-100 shadow-xl ring-1 ring-gray-900/10 sm:aspect-[3/2] lg:aspect-[4/3]">
                            {/* Using a representative image from the list, assuming it exists. If not, next/image would be better but keeping it simple with img for now as per project style (Vanilla CSS/img tags were used before, but Next.js usually employs <Image>. Existing code used <img> in Gallery, let's stick to <img> or <div with bg> for simplicity unless user enforced <Image>). 
                                Actually, sticking to <img> is safer if I don't want to configure domains. 
                                I will pick one from the list: `photo_2025-04-10_05-20-44.jpg` 
                             */}
                            <img
                                src="/media/photo_2025-04-10_05-20-44.jpg"
                                alt="Sustainability in action"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                        {/* Decorative blob or element if needed, keeping it clean for now */}
                    </div>
                </div>
            </div>
        </section>
    );
}
