const SURFACE_VARIANTS = {
    default: 'border-gray-200 bg-white text-gray-900 shadow-sm',
    tinted: 'border-emerald-100 bg-emerald-50/40 text-gray-900',
    muted: 'border-gray-200 bg-gray-50 text-gray-900',
    contrast: 'border-gray-900 bg-gray-900 text-white shadow-xl',
};

const SURFACE_PADDING = {
    none: '',
    sm: 'p-5',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10',
};

const GRID_COLUMNS = {
    one: 'grid-cols-1',
    two: 'grid-cols-1 sm:grid-cols-2',
    three: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    four: 'grid-cols-2 sm:grid-cols-4',
};

const BUTTON_VARIANTS = {
    primary:
        'bg-primary text-white shadow-sm hover:-translate-y-0.5 hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    ghost: 'text-gray-900 hover:text-primary',
    light:
        'bg-white text-gray-900 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
};

const PILL_VARIANTS = {
    active: 'bg-gray-900 text-white shadow-md',
    default: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
};

export function cx(...classes) {
    return classes.filter(Boolean).join(' ');
}

export function Surface({
    as: Component = 'div',
    variant = 'default',
    padding = 'md',
    interactive = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Component
            className={cx(
                'rounded-3xl border',
                SURFACE_VARIANTS[variant] || SURFACE_VARIANTS.default,
                SURFACE_PADDING[padding] || SURFACE_PADDING.md,
                interactive &&
                    'transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl',
                className,
            )}
            {...props}
        >
            {children}
        </Component>
    );
}

export function CardGrid({ columns = 'three', className = '', children }) {
    return (
        <div className={cx('grid gap-6', GRID_COLUMNS[columns] || GRID_COLUMNS.three, className)}>
            {children}
        </div>
    );
}

export function MetricCard({ value, label, className = '' }) {
    return (
        <Surface variant="default" padding="sm" className={cx('text-center', className)}>
            <p className="text-3xl font-bold text-primary">{value}</p>
            <p className="mt-2 text-sm text-gray-600">{label}</p>
        </Surface>
    );
}

export function ListRowCard({
    icon,
    children,
    variant = 'default',
    iconClassName = '',
    className = '',
}) {
    const contrast = variant === 'contrast';

    return (
        <Surface variant={variant} padding="sm" className={cx('flex items-start gap-3', className)}>
            {icon ? (
                <span
                    className={cx(
                        'mt-1 font-bold',
                        contrast ? 'text-white' : 'text-primary',
                        iconClassName,
                    )}
                >
                    {icon}
                </span>
            ) : null}
            <div className={cx('leading-7', contrast ? 'text-gray-100' : 'text-gray-700')}>
                {children}
            </div>
        </Surface>
    );
}

export function ActionCard({
    title,
    description,
    actionLabel,
    actionHref,
    variant = 'contrast',
    className = '',
}) {
    const contrast = variant === 'contrast';

    return (
        <Surface
            variant={variant}
            padding="lg"
            className={cx('mx-auto max-w-3xl text-center', className)}
        >
            {title ? (
                <h3 className={cx('text-2xl font-bold', contrast ? 'text-white' : 'text-gray-900')}>
                    {title}
                </h3>
            ) : null}
            {description ? (
                <p
                    className={cx(
                        title ? 'mt-4' : '',
                        'text-base leading-8',
                        contrast ? 'text-gray-100' : 'text-gray-700',
                    )}
                >
                    {description}
                </p>
            ) : null}
            {actionHref && actionLabel ? (
                <div className="mt-8">
                    <ButtonLink href={actionHref} variant={contrast ? 'light' : 'primary'}>
                        {actionLabel}
                    </ButtonLink>
                </div>
            ) : null}
        </Surface>
    );
}

export function ButtonLink({ href, variant = 'primary', className = '', children }) {
    return (
        <a
            href={href}
            className={cx(
                'inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-all',
                BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.primary,
                className,
            )}
        >
            {children}
        </a>
    );
}

export function Button({
    type = 'button',
    variant = 'primary',
    className = '',
    children,
    ...props
}) {
    return (
        <button
            type={type}
            className={cx(
                'inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-all',
                BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.primary,
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}

export function PillButton({ active = false, className = '', children, ...props }) {
    return (
        <button
            type="button"
            className={cx(
                'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                active ? PILL_VARIANTS.active : PILL_VARIANTS.default,
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}
