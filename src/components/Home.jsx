import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Stats from './Stats';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Pricing from './Pricing';
import Advantages from './Advantages';
import Testimonials from './Testimonials';
import Faq from './Faq';
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
      <Stats />
      <About />
      <Services />
      <Gallery />
      <Pricing />
      <Advantages />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
