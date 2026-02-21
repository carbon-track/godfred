
/**
 * Unified card component.
 *
 * Props:
 *   title       - heading text
 *   description - body text
 *   icon        - optional leading icon node
 *   badge       - optional small label shown above the title
 *   footer      - optional content rendered in a tinted footer strip
 *   children    - optional custom content rendered below description
 *   align       - 'left' | 'center'
 *   variant     - 'default' | 'tinted' | 'muted' | 'contrast'
 *   size        - 'sm' | 'md' | 'lg'
 */
import { Surface, cx } from './elements';

const SIZE_STYLES = {
    sm: {
        body: 'p-6',
        title: 'text-base',
        description: 'text-sm leading-6',
        footer: 'px-6 py-3 text-sm',
    },
    md: {
        body: 'p-8',
        title: 'text-lg',
        description: 'text-base leading-7',
        footer: 'px-8 py-4 text-sm',
    },
    lg: {
        body: 'p-8 sm:p-10',
        title: 'text-xl',
        description: 'text-lg leading-8',
        footer: 'px-8 py-5 text-base',
    },
};

export default function Card({
    title,
    description,
    icon,
    footer,
    badge,
    children,
    align = 'left',
    variant = 'default',
    size = 'md',
    className = '',
    bodyClassName = '',
    titleClassName = '',
    descriptionClassName = '',
    footerClassName = '',
}) {
    const contrast = variant === 'contrast';
    const centered = align === 'center';
    const sizeStyles = SIZE_STYLES[size] || SIZE_STYLES.md;

    return (
        <Surface
            variant={variant}
            padding="none"
            interactive={variant === 'default'}
            className={cx('group relative flex h-full flex-col overflow-hidden', className)}
        >
            {/* Main body */}
            <div
                className={cx(
                    'flex flex-1 flex-col',
                    sizeStyles.body,
                    centered && 'items-center text-center',
                    bodyClassName,
                )}
            >
                {badge && (
                    <span
                        className={cx(
                            'mb-4 inline-flex w-fit rounded-full border px-3 py-1 text-xs font-semibold',
                            contrast
                                ? 'border-white/20 bg-white/10 text-white'
                                : 'border-emerald-100 bg-white text-emerald-700',
                        )}
                    >
                        {badge}
                    </span>
                )}
                {icon && (
                    <div className={cx('mb-4', contrast ? 'text-white' : 'text-gray-900')}>{icon}</div>
                )}
                {title ? (
                    <h3
                        className={cx(
                            'mb-3 font-semibold leading-6 transition-colors',
                            contrast ? 'text-white' : 'text-gray-900',
                            sizeStyles.title,
                            variant === 'default' && 'group-hover:text-primary',
                            titleClassName,
                        )}
                    >
                        {title}
                    </h3>
                ) : null}
                {description ? (
                    <p
                        className={cx(
                            sizeStyles.description,
                            contrast ? 'text-gray-100' : 'text-gray-600',
                            descriptionClassName,
                        )}
                    >
                        {description}
                    </p>
                ) : null}
                {children ? <div className={cx(description ? 'mt-5' : '')}>{children}</div> : null}
            </div>

            {/* Optional footer strip */}
            {footer && (
                <div
                    className={cx(
                        'border-t',
                        sizeStyles.footer,
                        contrast
                            ? 'border-white/20 bg-white/10 text-gray-100'
                            : 'border-emerald-100 bg-emerald-50/40 text-gray-700',
                        footerClassName,
                    )}
                >
                    {footer}
                </div>
            )}
        </Surface>
    );
}
