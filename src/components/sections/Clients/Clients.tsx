import React from 'react';
import styles from './Clients.module.css';

export const Clients: React.FC = () => {
  return (
    <section id="service" className={styles.clientsSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our Clients</h2>
          <p className={styles.subtitle}>
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className={styles.logoGrid}>
          {/* Logo 1 */}
          <div className={styles.logoCard}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4L8 16V32L24 44L40 32V16L24 4Z" stroke="#263238" strokeWidth="3" strokeLinejoin="round"/>
              <path d="M24 16L16 22V26L24 32L32 26V22L24 16Z" fill="#4CAF4F"/>
            </svg>
          </div>

          {/* Logo 2 */}
          <div className={styles.logoCard}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="18" stroke="#263238" strokeWidth="3"/>
              <path d="M16 24C16 19.5817 19.5817 16 24 16C28.4183 16 32 19.5817 32 24" stroke="#4CAF4F" strokeWidth="3"/>
            </svg>
          </div>

          {/* Logo 3 */}
          <div className={styles.logoCard}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="12" width="32" height="24" rx="4" stroke="#263238" strokeWidth="3"/>
              <circle cx="24" cy="24" r="6" fill="#4CAF4F"/>
            </svg>
          </div>

          {/* Logo 4 */}
          <div className={styles.logoCard}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 36L24 12L36 36H12Z" stroke="#263238" strokeWidth="3"/>
              <circle cx="24" cy="28" r="4" fill="#4CAF4F"/>
            </svg>
          </div>

          {/* Logo 5 */}
          <div className={styles.logoCard}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 24H40M24 8V40" stroke="#263238" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="24" cy="24" r="8" fill="#4CAF4F"/>
            </svg>
          </div>

          {/* Logo 6 */}
          <div className={styles.logoCard}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 14L34 34M34 14L14 34" stroke="#263238" strokeWidth="3"/>
              <rect x="20" y="20" width="8" height="8" fill="#4CAF4F"/>
            </svg>
          </div>

          {/* Logo 7 */}
          <div className={styles.logoCard}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40" stroke="#263238" strokeWidth="3"/>
              <path d="M24 14V34L34 24L24 14Z" fill="#4CAF4F"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
