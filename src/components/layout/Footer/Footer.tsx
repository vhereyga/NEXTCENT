import React, { useState } from 'react';
import { Send, Instagram, Dribbble, Twitter, Youtube } from 'lucide-react';
import { ApiService } from '../../../services/api';
import styles from './Footer.module.css';

interface FooterProps {
  onShowToast: (message: string, type?: 'success' | 'error') => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowToast }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    try {
      const res = await ApiService.subscribeNewsletter({ email });
      if (res.success) {
        onShowToast(res.message, 'success');
        setEmail('');
      } else {
        onShowToast(res.message, 'error');
      }
    } catch {
      onShowToast('Subscription failed. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Brand & Socials Column */}
        <div className={styles.brandCol}>
          <a href="#home" className={styles.logo} aria-label="Nexcent Homepage">
            <img src="/images/nexcent-logo.png" alt="Nexcent" className={styles.logoImg} />
          </a>
          <div>
            <p className={styles.copyright}>Copyright © 2026 Nexcent ltd.</p>
            <p className={styles.copyright}>All rights reserved</p>
          </div>
          <div className={styles.socials}>
            <a href="#instagram" className={styles.socialIcon} aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#dribbble" className={styles.socialIcon} aria-label="Dribbble">
              <Dribbble size={18} />
            </a>
            <a href="#twitter" className={styles.socialIcon} aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#youtube" className={styles.socialIcon} aria-label="Youtube">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Company Links Column */}
        <div>
          <h3 className={styles.colTitle}>Company</h3>
          <ul className={styles.linkList}>
            <li><a href="#about" className={styles.linkItem}>About us</a></li>
            <li><a href="#blog" className={styles.linkItem}>Blog</a></li>
            <li><a href="#contact" className={styles.linkItem}>Contact us</a></li>
            <li><a href="#pricing" className={styles.linkItem}>Pricing</a></li>
            <li><a href="#testimonials" className={styles.linkItem}>Testimonials</a></li>
          </ul>
        </div>

        {/* Support Links Column */}
        <div>
          <h3 className={styles.colTitle}>Support</h3>
          <ul className={styles.linkList}>
            <li><a href="#help" className={styles.linkItem}>Help center</a></li>
            <li><a href="#terms" className={styles.linkItem}>Terms of service</a></li>
            <li><a href="#legal" className={styles.linkItem}>Legal</a></li>
            <li><a href="#privacy" className={styles.linkItem}>Privacy policy</a></li>
            <li><a href="#status" className={styles.linkItem}>Status</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription Column */}
        <div>
          <h3 className={styles.colTitle}>Stay up to date</h3>
          <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                className={styles.emailInput}
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Your email address for newsletter subscription"
              />
              <button
                type="submit"
                className={styles.sendBtn}
                disabled={isSubmitting}
                aria-label="Subscribe to newsletter"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};
