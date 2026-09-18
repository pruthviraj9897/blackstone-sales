import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Brand } from './Shared';

const navigation = [['home', 'Home'], ['materials', 'Our materials'], ['about', 'Why Mahalaxmi'], ['process', 'How it works'], ['contact', 'Contact']];

export const Header = ({ onEnquire }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: '-20% 0px -60% 0px' });
    navigation.forEach(([id]) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const closeOnEscape = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);
  return <header className="site-header" data-testid="site-header">
    <div className="header-inner page-width">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([id, text]) => <a data-testid={`nav-${id}`} key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined}>{text}</a>)}</nav>
      <button className="header-cta" data-testid="header-enquire" onClick={() => onEnquire()}>Let’s talk rentals <ArrowUpRight size={17} /></button>
      <button className="mobile-menu-toggle" data-testid="mobile-menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
    </div>
    <AnimatePresence>{open && <motion.nav id="mobile-navigation" className="mobile-nav" data-testid="mobile-navigation" aria-label="Mobile navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>{navigation.map(([id, text], i) => <a data-testid={`mobile-nav-${id}`} key={id} href={`#${id}`} onClick={() => setOpen(false)}><span>0{i + 1}</span>{text}<ArrowUpRight size={22} /></a>)}<button data-testid="mobile-enquire" onClick={() => { setOpen(false); onEnquire(); }}>Request a rental <ArrowUpRight size={20} /></button></motion.nav>}</AnimatePresence>
  </header>;
};