import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ServicePage from './components/ServicePage';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
        <BrowserRouter>
          <div className="min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/:slug" element={<ServicePage />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
