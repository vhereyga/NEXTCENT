import React from 'react';
import { Button } from '../../common/Button/Button';
import styles from './Pixelgrade.module.css';

interface PixelgradeProps {
  onOpenDemoModal: () => void;
}

export const Pixelgrade: React.FC<PixelgradeProps> = ({ onOpenDemoModal }) => {
  return (
    <section id="product" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left 1:1 Figma Illustration */}
          <div className={styles.imageWrapper}>
            <img
              src="/images/pixelgrade-illustration.png"
              alt="Spending three years at Pixelgrade Illustration"
              className={styles.img}
            />
          </div>

          {/* Right Text Content */}
          <div>
            <h2 className={styles.title}>
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
              Sed accumsan quam vitae est varius fringilla. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Mauris et sapien eget tellus
              sollicitudin accumsan. Fusce feugiat neque nec mattis sodales.
            </p>
            <Button variant="primary" size="md" onClick={onOpenDemoModal}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
