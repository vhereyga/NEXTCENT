import React from 'react';
import { Users, Building2, Landmark } from 'lucide-react';
import styles from './Community.module.css';

export const Community: React.FC = () => {
  return (
    <section id="feature" className={styles.communitySection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Manage your entire community in a single system
          </h2>
          <p className={styles.subtitle}>Who is Nextcent suitable for?</p>
        </div>

        <div className={styles.cardsGrid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Users size={32} />
            </div>
            <h3 className={styles.cardTitle}>Membership Organisations</h3>
            <p className={styles.cardDescription}>
              Our membership management software provides full automation of membership renewals and payments.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Landmark size={32} />
            </div>
            <h3 className={styles.cardTitle}>National Associations</h3>
            <p className={styles.cardDescription}>
              Our membership management software provides full automation of membership renewals and payments.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Building2 size={32} />
            </div>
            <h3 className={styles.cardTitle}>Clubs And Groups</h3>
            <p className={styles.cardDescription}>
              Our membership management software provides full automation of membership renewals and payments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
