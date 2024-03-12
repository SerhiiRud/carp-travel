import Header from '@/app/sections/header';
import Hero from './sections/hero';
import About from './sections/about';
import Services from './sections/services';
import Career from './sections/career';
import CareerMobileSection from './sections/career-mobile-section';
import Gallery from './sections/gallery';
import Contacts from './sections/contacts';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Career />
      <CareerMobileSection />
      <Gallery />
      <Contacts />
    </main>
  );
}
