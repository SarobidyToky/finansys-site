import { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <Stats />
          <About />
          <Services />
          <Pricing />
          <Advantages />
          <Testimonials />
          <Faq />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
