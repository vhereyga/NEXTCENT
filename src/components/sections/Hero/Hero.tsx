import React, { useState } from 'react';
import { Button } from '../../common/Button/Button';
import styles from './Hero.module.css';

interface HeroProps {
  onOpenDemoModal: () => void;
}

const SLIDES = [
  {
    id: 1,
    title: 'Lessons and insights',
    highlight: 'from 8 years',
    description: 'Where to grow your business as a photographer: site or social media?',
  },
  {
    id: 2,
    title: 'Streamline your operations',
    highlight: 'in one platform',
    description: 'Empower your association with robust member management, automated events & reporting.',
  },
  {
    id: 3,
    title: 'Engage your community',
    highlight: 'with smart tools',
    description: 'Comprehensive digital workflows built for modern membership organizations.',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = SLIDES[activeSlide];

  return (
    <section id="home" className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroContent}>
          {/* Left Text Copy */}
          <div>
            <h1 className={styles.title}>
              {currentSlide.title} <br />
              <span className={styles.highlightText}>{currentSlide.highlight}</span>
            </h1>
            <p className={styles.description}>{currentSlide.description}</p>
            <Button variant="primary" size="lg" onClick={onOpenDemoModal}>
              Register
            </Button>
          </div>

          {/* Right 1:1 Figma Hero Illustration */}
          <div className={styles.imageWrapper}>
            <img
              src="/images/hero-illustration.png"
              alt="Nexcent Community Insights Illustration"
              className={styles.heroImg}
            />
          </div>
        </div>

        {/* Carousel Slide Indicators */}
        <div className={styles.indicators} role="tablist" aria-label="Hero Carousel Slides">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              className={`${styles.dot} ${index === activeSlide ? styles.activeDot : ''}`}
              onClick={() => setActiveSlide(index)}
              role="tab"
              aria-selected={index === activeSlide}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
