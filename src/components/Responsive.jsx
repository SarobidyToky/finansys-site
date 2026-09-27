import useInView from '../hooks/useInView';
import { TabletFrame, PhoneFrame } from './DeviceFrames';
import BrowserFrame from './BrowserFrame';
import dashboardImg from '../img/screenshots/dashboard.png';
import '../styles/animations.css';

export default function Responsive() {
  const [ref, visible] = useInView(0.2);

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
        <div className={`reveal ${visible ? 'reveal-visible' : ''}`}>
          <h2 className="text-3xl md:text-[2.4rem] font-extrabold leading-[1.1] mb-5" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}>
            Vos chiffres, sur n'importe quel écran
          </h2>
          <p className="text-base leading-relaxed max-w-md" style={{ color: 'var(--color-text-muted)' }}>
            Ordinateur au bureau, tablette en réunion, téléphone sur le terrain — FinanSys s'adapte, sans rien installer. Une connexion internet suffit.
          </p>
        </div>

        <div className={`reveal ${visible ? 'reveal-visible' : ''} relative h-[420px]`}>
          <div className="absolute left-0 top-4 w-[68%]">
            <BrowserFrame src={dashboardImg} alt="FinanSys sur ordinateur" />
          </div>
          <TabletFrame src={dashboardImg} alt="FinanSys sur tablette" className="absolute right-0 top-0 w-[42%]" />
          <PhoneFrame src={dashboardImg} alt="FinanSys sur mobile" className="absolute right-2 bottom-0 w-[20%]" />
        </div>
      </div>
    </section>
  );
}
