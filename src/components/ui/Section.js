
export default function Section({ title, children, className = '' }) {
    return (
        <section className={`py-16 sm:py-24 ${className}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {title && (
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">{title}</h2>
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
