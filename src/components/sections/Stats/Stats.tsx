import React from 'react';
import { Users, Landmark, Calendar, CreditCard } from 'lucide-react';
import styles from './Stats.module.css';

export const Stats: React.FC = () => {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Section Heading */}
          <div>
            <h2 className={styles.title}>
              Helping a local <br />
              <span className={styles.highlight}>business reinvent itself</span>
            </h2>
            <p className={styles.subtitle}>
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className={styles.statsGrid}>
            {/* Stat 1 */}
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                <Users size={40} />
              </div>
              <div>
                <div className={styles.count}>2,245,341</div>
                <div className={styles.label}>Members</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                <Landmark size={40} />
              </div>
              <div>
                <div className={styles.count}>46,328</div>
                <div className={styles.label}>Clubs</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                <Calendar size={40} />
              </div>
              <div>
                <div className={styles.count}>828,867</div>
                <div className={styles.label}>Event Bookings</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                <CreditCard size={40} />
              </div>
              <div>
                <div className={styles.count}>1,926,436</div>
                <div className={styles.label}>Payments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
