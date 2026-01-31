import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import EmailWithCopy from '@/components/ui/EmailWithCopy';
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
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mx-auto max-w-5xl">
                    <EmailWithCopy email={contact.email} label="Email" />

                    <div className="flex flex-col items-center rounded-2xl bg-gray-50 p-10 text-center hover:bg-gray-100 transition-colors">
                        <h3 className="mb-4 text-lg font-semibold text-black">Phone</h3>
                        {contact.phone.map((num, idx) => (
                            <p key={idx} className="text-base text-gray-600">{num}</p>
                        ))}
                    </div>

                    <div className="flex flex-col items-center rounded-2xl bg-gray-50 p-10 text-center hover:bg-gray-100 transition-colors">
                        <h3 className="mb-4 text-lg font-semibold text-black">Address</h3>
                        <address className="not-italic text-base text-gray-600 space-y-2">
                            <div>
                                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">Digital Address</span>
                                <p className="mt-0.5 font-medium text-gray-800 tracking-wide">{contact.address.digitalAddress}</p>
                            </div>
                            <p className="text-gray-600">{contact.address.street}</p>
                            <p className="text-gray-600">{contact.address.area}</p>
                            <p className="font-medium text-gray-800">{contact.address.city}, {contact.address.country}</p>
                        </address>
                    </div>
                </div>
            </Section>
        </>
    );
}
