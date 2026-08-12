import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../../common/Button/Button';
import { NavigationItem } from '../../../types';
import styles from './Navbar.module.css';

const NAV_ITEMS: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'service', label: 'Service', href: '#service' },
  { id: 'feature', label: 'Feature', href: '#feature' },
  { id: 'product', label: 'Product', href: '#product' },
  { id: 'testimonial', label: 'Testimonial', href: '#testimonial' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
];

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo */}
        <a href="#home" className={styles.logo} aria-label="Nexcent Homepage">
          <img src="/images/nexcent-logo.png" alt="Nexcent" className={styles.logoImg} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className={styles.navLinks} aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Auth CTAs */}
        <div className={styles.authButtons}>
          <Button variant="text" size="sm" onClick={onOpenDemoModal}>
            Login
          </Button>
          <Button variant="primary" size="sm" onClick={onOpenDemoModal}>
            Sign up
          </Button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-expanded={isMobileOpen}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Drawer Navigation */}
        {isMobileOpen && (
          <div className={styles.mobileDrawer} role="dialog" aria-label="Mobile Navigation">
            <nav className={styles.mobileNavLinks}>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={styles.navLink}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Button variant="outline" size="sm" onClick={() => { setIsMobileOpen(false); onOpenDemoModal(); }}>
                Login
              </Button>
              <Button variant="primary" size="sm" onClick={() => { setIsMobileOpen(false); onOpenDemoModal(); }}>
                Sign up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
