import React from 'react';
import { Button } from '../../common/Button/Button';
import styles from './Unlock.module.css';

interface UnlockProps {
  onOpenDemoModal: () => void;
}

export const Unlock: React.FC<UnlockProps> = ({ onOpenDemoModal }) => {
  return (
    <section className={styles.unlockSection}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left 1:1 Unlock Illustration */}
          <div className={styles.imageWrapper}>
            <img
              src="/images/unlock-illustration.png"
              alt="Member Engagement & Unlock Illustration"
              className={styles.img}
            />
          </div>

          {/* Right Copy Content */}
          <div>
            <h2 className={styles.title}>
              How to keep your members engaged your community
            </h2>
            <p className={styles.description}>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec
              tincidunt molestie, massa nunc varius arcu, at scelerisque elit magna id orci.
              Quisque dui orci, vulputate non enim id, pellentesque sollicitudin lacus. Sed ut
              vulputate mauris. Integer est eros, imperdiet nec diam quis, vulputate facilisis
              libero. Mauris vel sollicitudin massa. Donec nunc tortor, sollicitudin sit amet sed,
              varius quam.
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
