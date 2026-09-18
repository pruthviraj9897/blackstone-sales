import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { MotionConfig, useReducedMotion } from 'framer-motion';
import { Toaster } from 'sonner';
import { Header } from './components/site/Header';
import { Hero } from './components/site/Hero';
import { Materials } from './components/site/Materials';
import { EditorialMarquee, Story, Process } from './components/site/Story';
import { Contact } from './components/site/Contact';
import { RentalDialogs } from './components/site/RentalDialogs';
import './App.css';

export default function App() {
  const reduced = useReducedMotion();
  const [dialog, setDialog] = useState(null);
  const [material, setMaterial] = useState('');
  const [product, setProduct] = useState(null);
  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, anchors: { offset: -88 } });
    let frame;
    const raf = time => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(frame); lenis.destroy(); };
  }, [reduced]);
  const onEnquire = (name = '') => { setMaterial(name); setDialog('enquiry'); };
  const onProduct = selected => { setProduct(selected); setDialog('product'); };
  return <MotionConfig reducedMotion="user"><div className="website"><a data-testid="skip-to-content" className="skip-link" href="#main">Skip to content</a><Header onEnquire={onEnquire} /><main id="main"><Hero onEnquire={onEnquire} onProduct={onProduct} /><Materials onProduct={onProduct} onCatalogue={() => setDialog('catalogue')} onEnquire={onEnquire} /><EditorialMarquee /><Story onEnquire={onEnquire} /><Process onEnquire={onEnquire} /><Contact onEnquire={onEnquire} /></main><RentalDialogs dialog={dialog} setDialog={setDialog} material={material} product={product} onEnquire={onEnquire} /><Toaster position="bottom-center" theme="dark" richColors /><div className="grain-overlay" aria-hidden="true" /></div></MotionConfig>;
}