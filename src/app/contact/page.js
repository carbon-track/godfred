import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import EmailWithCopy from '@/components/ui/EmailWithCopy';
import Card from '@/components/ui/Card';
import { CardGrid } from '@/components/ui/elements';
import content from '@/content/en.json';

export default function Contact() {
    const { contact } = content;

    return (
        <>
            <Hero
                title={contact.title}
                subtitle="We'd love to hear from you"
                hideCtas
            />

            <Section>
                <CardGrid columns="three" className="mx-auto max-w-5xl gap-8">
                    <EmailWithCopy email={contact.email} label="Email" />

                    <Card size="sm" title="Phone" align="center">
                        <div className="space-y-1">
                            {contact.phone.map((num, idx) => (
                                <p key={idx} className="text-base text-gray-600">{num}</p>
                            ))}
                        </div>
                    </Card>

                    <Card size="sm" title="Address">
                        <address className="not-italic text-base text-gray-600 space-y-2">
                            <div>
                                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">Digital Address</span>
                                <p className="mt-0.5 font-medium text-gray-800 tracking-wide">{contact.address.digitalAddress}</p>
                            </div>
                            <p className="text-gray-600">{contact.address.street}</p>
                            <p className="text-gray-600">{contact.address.area}</p>
                            <p className="font-medium text-gray-800">{contact.address.city}, {contact.address.country}</p>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                    `${contact.address.digitalAddress} ${contact.address.street} ${contact.address.area} ${contact.address.city} ${contact.address.country}`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 mt-3 text-primary hover:text-primary-hover font-medium transition-colors"
                            >
                                View on map
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </address>
                    </Card>
                </CardGrid>

                <Card
                    size="md"
                    className="mx-auto mt-10 max-w-3xl h-auto"
                    align="center"
                    badge="Office Hours"
                    description={`${contact.hours}. ${contact.note}`}
                    descriptionClassName="text-gray-600"
                />
            </Section>
        </>
    );
}
