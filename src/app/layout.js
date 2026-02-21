import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import BackToTop from '../components/ui/BackToTop';

export const metadata = {
  title: 'Sustainable Green Future Foundation (SGFF)',
  description: 'Empowering youth and communities for a sustainable tomorrow.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-white text-black min-h-screen flex flex-col" suppressHydrationWarning={true}>
        <Header />
        <main className="flex-grow flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
