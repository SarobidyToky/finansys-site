import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Responsive from './Responsive';
import About from './About';
import Services from './Services';
import Platform from './Platform';
import Gallery from './Gallery';
import Pricing from './Pricing';
import Advantages from './Advantages';
import Testimonials from './Testimonials';
import Faq from './Faq';
import ClosingCta from './ClosingCta';
import Contact from './Contact';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Responsive />
      <About />
      <Services />
      <Platform />
      <Gallery />
      <Pricing />
      <Advantages />
      <Testimonials />
      <Faq />
      <ClosingCta />
      <Contact />
    </>
  );
}
