import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
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
                    <div className="flex flex-col items-center rounded-2xl bg-gray-50 p-10 text-center hover:bg-gray-100 transition-colors">
                        <h3 className="mb-4 text-lg font-semibold text-black">Email</h3>
                        <p className="text-base text-gray-600">
                            <a href={`mailto:${contact.email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                                {contact.email}
                            </a>
                        </p>
                    </div>

                    <div className="flex flex-col items-center rounded-2xl bg-gray-50 p-10 text-center hover:bg-gray-100 transition-colors">
                        <h3 className="mb-4 text-lg font-semibold text-black">Phone</h3>
                        {contact.phone.map((num, idx) => (
                            <p key={idx} className="text-base text-gray-600">{num}</p>
                        ))}
                    </div>

                    <div className="flex flex-col items-center rounded-2xl bg-gray-50 p-10 text-center hover:bg-gray-100 transition-colors">
                        <h3 className="mb-4 text-lg font-semibold text-black">Address</h3>
                        {contact.address.lines.map((line, idx) => (
                            <p key={idx} className="text-base text-gray-600">{line}</p>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}
