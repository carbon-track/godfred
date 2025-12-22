
export default function Hero({ title, subtitle, image }) {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-white px-6 py-24 text-center sm:py-32 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl text-balance">
                    {title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-balance max-w-2xl mx-auto">
                    {subtitle}
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="/get-involved" className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors">
                        Get Involved
                    </a>
                    <a href="/about" className="text-sm font-semibold leading-6 text-black hover:text-gray-600 transition-colors">
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.gray.100),white)] opacity-20" />
        </section>
    );
}
