
export default function Section({ title, subtitle, children, className = '' }) {
    return (
        <section className={`py-16 sm:py-24 ${className}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {title && (
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-inherit sm:text-4xl">{title}</h2>
                        {subtitle && (
                            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">{subtitle}</p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
