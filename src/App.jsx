import { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="min-h-screen">
          <Navbar />
          {/* Les sections du site viendront ici */}
        </div>
      )}
    </>
  );
}

export default App;
