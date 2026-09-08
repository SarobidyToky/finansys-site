import { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Advantages from './components/Advantages';
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
          <About />
          <Services />
          <Advantages />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
