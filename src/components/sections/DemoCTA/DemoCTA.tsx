import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../common/Button/Button';
import styles from './DemoCTA.module.css';

interface DemoCTAProps {
  onOpenDemoModal: () => void;
}

export const DemoCTA: React.FC<DemoCTAProps> = ({ onOpenDemoModal }) => {
  return (
    <section className={styles.demoSection}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>
            Pellentesque suscipit <br />
            fringilla libero eu.
          </h2>
          <Button
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight size={20} />}
            onClick={onOpenDemoModal}
          >
            Get a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
