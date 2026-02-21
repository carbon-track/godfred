
import { ButtonLink, Surface } from './elements';

export default function Hero({ title, subtitle }) {
    return (
        <section className="relative overflow-hidden bg-gradient-soft pt-16 pb-24 lg:pt-28 lg:pb-32">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_45%)]" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2 lg:items-center">
                    <div className="max-w-2xl text-left">
                        <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                            Sustainable Green Future Foundation
                        </p>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
                            {title}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 text-balance">
                            {subtitle}
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <ButtonLink href="/get-involved" variant="primary">
                                Get Involved
                            </ButtonLink>
                            <ButtonLink href="/about" variant="ghost" className="px-0 py-0">
                                Learn more <span aria-hidden="true">→</span>
                            </ButtonLink>
                        </div>
                    </div>
                    {/* Featured Image */}
                    <div className="relative lg:ml-auto">
                        <Surface
                            variant="default"
                            padding="none"
                            className="relative aspect-[4/3] w-full max-w-lg overflow-hidden bg-gray-100 shadow-2xl ring-1 ring-gray-900/10 sm:aspect-[3/2] lg:aspect-[4/3]"
                        >
                            <img
                                src="/media/photo_2025-04-10_05-20-44.jpg"
                                alt="Sustainability in action"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-6">
                                <p className="text-sm font-medium text-white">Climate action in communities, schools, and youth networks.</p>
                            </div>
                        </Surface>
                    </div>
                </div>
            </div>
        </section>
    );
}
