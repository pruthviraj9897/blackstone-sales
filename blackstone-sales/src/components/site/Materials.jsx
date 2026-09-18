import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import { Chapter, Reveal } from './Shared';
import { products } from '../../data/company';

const filters = ['All materials', 'Scaffolding', 'Shuttering', 'Props & jacks', 'Timber & ply'];

export const Materials = ({ onProduct, onCatalogue, onEnquire }) => {
  const [filter, setFilter] = useState('All materials');
  const reduced = useReducedMotion();
  const visible = filter === 'All materials' ? products.slice(0, 3) : products.filter(p => p.category === filter);
  return <section className="materials-section section-pad" id="materials" data-testid="materials-section">
    <div className="page-width">
      <Chapter number="01" label="THE RIGHT MATERIALS. THE RIGHT START." />
      <Reveal className="section-heading"><h2 data-testid="materials-title">STRONG MATERIALS.<br /><span>STRONGER POSSIBILITIES.</span></h2><div className="heading-aside"><p data-testid="materials-intro">From the first slab to the final storey.<br />Find the support your project deserves.</p><button className="underlined-link" data-testid="open-full-catalogue" onClick={onCatalogue}>View full catalogue <ArrowUpRight size={17} /></button></div></Reveal>
      <div className="material-filters" aria-label="Filter materials">{filters.map((f, i) => <button data-testid={`material-filter-${i}`} key={f} className={filter === f ? 'selected' : ''} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}{filter === f && <span className="filter-dot" />}</button>)}<span className="filter-caption mono">BUILT FOR THE WAY YOU BUILD.</span></div>
      <motion.div layout className="material-grid" data-testid="material-grid"><AnimatePresence mode="popLayout">{visible.map((product, i) => <motion.article key={product.id} layout initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.4, delay: i * 0.07 }} className="material-card" data-testid={`product-card-${product.id}`}>
        <button className="product-image-button" data-testid={`product-image-${product.id}`} onClick={() => onProduct(product)} aria-label={`View ${product.name}`}><span className="product-number mono">/ {product.number}</span><span className="product-image-tag">RENT + SALE</span><img src={product.image} alt={product.id === 'timber' ? 'Construction formwork showing timber applications' : product.name} className={product.imageClass} loading="lazy" /><span className="product-image-cross" aria-hidden="true"><Plus size={20} strokeWidth={1} /></span><span className="product-view-label">EXPLORE MATERIAL <ArrowUpRight size={17} /></span></button>
        <div className="product-info"><span className="eyebrow" data-testid={`product-label-${product.id}`}>{product.label}</span><button className="product-name" data-testid={`product-title-${product.id}`} onClick={() => onProduct(product)}>{product.name}<ArrowUpRight size={24} strokeWidth={1.5} /></button><p data-testid={`product-summary-${product.id}`}>{product.id === 'scaffolding' ? 'Modular systems. Maximum possibilities.' : product.id === 'shuttering' ? 'Precision formwork for every foundation.' : product.id === 'props' ? 'Reliable support. Adjustable to your needs.' : 'Versatile formwork for your next build.'}</p></div>
      </motion.article>)}</AnimatePresence></motion.div>
      <div className="materials-bottom"><p data-testid="materials-availability"><span className="small-dot" />Need a specific size or material? We’ll help you find it.</p><button data-testid="materials-talk-expert" className="underlined-link" onClick={() => onEnquire(filter === 'All materials' ? '' : filter)}>Talk to our team <ArrowRight size={17} /></button></div>
    </div>
  </section>;
};