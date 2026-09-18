import { useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Plus } from 'lucide-react';
import { Action } from './Shared';
import { products } from '../../data/company';

export const Hero = ({ onEnquire, onProduct }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const [slide, setSlide] = useState(0);
  const product = products[slide];
  return <section id="home" ref={ref} className="hero" data-testid="hero-section">
    <div className="hero-lines" aria-hidden="true" />
    <div className="hero-photo-frame">
      <motion.img className="hero-photo" src="/assets/hero-structure.jpg" alt="Architectural steel scaffolding supporting a building under construction" style={reduced ? {} : { y }} initial={reduced ? false : { scale: 1.12, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} fetchPriority="high" />
      <div className="photo-shade" />
      <span className="photo-coordinate mono" aria-hidden="true">21°37′ N &nbsp; 73°00′ E &nbsp; / &nbsp; ANKLESHWAR</span>
      <div className="hero-cross cross-top" aria-hidden="true"><Plus strokeWidth={1} /></div>
      <div className="hero-structural-mark" aria-hidden="true"><span /><span /><span /></div>
      <div className="hero-stamp" aria-hidden="true"><svg viewBox="0 0 120 120"><defs><path id="stamp-path" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" /></defs><text><textPath href="#stamp-path">RENT. BUILD. REPEAT. · MAHALAXMI · </textPath></text></svg><ArrowUpRight size={34} strokeWidth={1.3} /></div>
    </div>
    <div className="hero-content page-width">
      <motion.div className="eyebrow hero-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} data-testid="hero-eyebrow"><span className="amber-square" />YOUR VISION. OUR SUPPORT.</motion.div>
      <h1 className="hero-title" data-testid="hero-title">{['BUILD HIGHER.', 'BUILD', 'BETTER.'].map((line, i) => <span className={`title-mask ${i === 2 ? 'amber-text' : ''}`} key={line}><motion.span initial={reduced ? false : { y: '110%', rotate: 2 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1.05, delay: 0.2 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}>{line}</motion.span></span>)}</h1>
      <motion.div initial={reduced ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.75 }}>
        <p className="hero-description" data-testid="hero-description">Centering, shuttering & scaffolding rentals.<br />The strength behind your next big build.</p>
        <div className="hero-actions"><Action testId="hero-explore-materials" href="#materials">Explore our materials</Action><button className="text-action" data-testid="hero-request-quote" onClick={() => onEnquire()}>Get a rental quote <ArrowUpRight size={17} /></button></div>
      </motion.div>
    </div>
    <div className="hero-product" data-testid="hero-featured-product">
      <div className="hero-product-meta"><span className="eyebrow">THE MATERIAL SPOTLIGHT</span><span className="mono">0{slide + 1} <span className="muted">/ 03</span></span></div>
      <div className="hero-product-bottom"><AnimatePresence mode="wait"><motion.button key={product.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} onClick={() => onProduct(product)} className="spotlight-title" data-testid="hero-spotlight-detail">{product.name}<ArrowUpRight size={21} /></motion.button></AnimatePresence><div className="slide-controls"><button data-testid="hero-previous-slide" aria-label="Previous material" onClick={() => setSlide((slide + 2) % 3)}><ArrowLeft size={18} /></button><button data-testid="hero-next-slide" aria-label="Next material" onClick={() => setSlide((slide + 1) % 3)}><ArrowRight size={18} /></button></div></div>
      <div className="slide-progress" aria-hidden="true">{[0, 1, 2].map(i => <span key={i} className={i === slide ? 'active' : ''} />)}</div>
    </div>
    <div className="hero-bottom page-width"><span data-testid="hero-location"><MapPin size={13} />ANKLESHWAR, GUJARAT</span><span className="hero-bottom-center" data-testid="hero-service">MATERIALS FOR RENT & SALE</span><a data-testid="hero-scroll" href="#materials">SCROLL TO EXPLORE <ArrowDown size={15} /></a></div>
  </section>;
};