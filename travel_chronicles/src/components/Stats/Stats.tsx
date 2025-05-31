'use client';
import styles from './Stats.module.css';

export default function StatsSection() {
  return (
    <div className={styles.statsWrapper}>
      <h2 className={styles.title}>My Travel Stats</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Countries Visited</h3>
          <p className={styles.cardValue}>42</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Days Outside Finland</h3>
          <p className={styles.cardValue}>280</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>World Coverage</h3>
          <p className={styles.cardValue}>21%</p>
        </div>
      </div>
    </div>
  );
}
