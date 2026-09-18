import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Reveal = ({ children, className = '', delay = 0, ...props }) => {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }} {...props}>{children}</motion.div>;
};

export const Brand = ({ footer = false }) => <a data-testid={`${footer ? 'footer' : 'header'}-brand-home`} href="#home" className={`brand ${footer ? 'brand-footer' : ''}`} aria-label="Mahalaxmi Corporation home">
  <img src="/assets/brand-mark.png" alt="Mahalaxmi Corporation company logo" className="brand-mark" />
  <span className="brand-wordmark">MAHALAXMI<span>C O R P O R A T I O N</span></span>
</a>;

export const Action = ({ children, onClick, href, secondary = false, className = '', testId, ...props }) => {
  const cls = `action ${secondary ? 'action-secondary' : ''} ${className}`;
  return href ? <a data-testid={testId} href={href} className={cls} {...props}>{children}<ArrowUpRight size={18} /></a> : <button data-testid={testId} onClick={onClick} className={cls} {...props}>{children}<ArrowUpRight size={18} /></button>;
};

export const Chapter = ({ number, label, light = false }) => <div data-testid={`chapter-${number}`} className={`chapter ${light ? 'chapter-light' : ''}`}><span>[ {number} ]</span><span>{label}</span><span className="chapter-line" /></div>;