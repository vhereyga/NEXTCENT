import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Testimonial.module.css';

export const Testimonial: React.FC = () => {
  return (
    <section id="testimonial" className={styles.testimonialSection}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Avatar / Image */}
          <div className={styles.avatarWrapper}>
            <img
              src="/images/customer-avatar.png"
              alt="Tim Smith - British Dragon Boat Racing Association"
              className={styles.avatar}
            />
          </div>

          {/* Right Quote Content */}
          <div>
            <p className={styles.quote}>
              “Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui,
              vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero
              ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit
              elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse
              potenti. Cras imperdiet feugiat pretium. Integer varius orci leo, sed facilisis
              arcus egestas vitae.”
            </p>
            <h3 className={styles.author}>Tim Smith</h3>
            <p className={styles.role}>
              British Dragon Boat Racing Association
            </p>

            {/* Client Logos & Meet All Link */}
            <div className={styles.logosRow}>
              {/* Inline SVG Partner Icons */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" stroke="#4CAF4F" strokeWidth="2"/>
                <path d="M11 16L15 20L21 12" stroke="#4CAF4F" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="24" height="24" rx="4" stroke="#263238" strokeWidth="2"/>
                <circle cx="16" cy="16" r="6" fill="#4CAF4F"/>
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 24L16 8L24 24H8Z" stroke="#263238" strokeWidth="2"/>
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="12" stroke="#89939E" strokeWidth="2"/>
              </svg>

              <a href="#customers" className={styles.meetAllBtn}>
                <span>Meet all customers</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
