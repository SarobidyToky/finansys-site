import { useEffect, useState } from 'react';
import '../styles/loader.css';

const fullText = 'FinanSys...';

export default function Loader({ onFinish }) {
  const [displayedText, setDisplayedText] = useState('');
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      index++;
      setDisplayedText(fullText.slice(0, index));
      if (index === fullText.length) {
        clearInterval(typingInterval);
        setTimeout(() => setSlideOut(true), 900);
        setTimeout(() => onFinish(), 900 + 700);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white ${slideOut ? 'loader-slideout' : ''}`}
    >
      <h1
        className="text-5xl font-extrabold"
        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}
      >
        {displayedText}
        <span className="loader-cursor">|</span>
      </h1>
    </div>
  );
}
