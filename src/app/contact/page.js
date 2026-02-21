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
