'use client';
import styles from './Featured.module.css';

export default function FeaturedTrips() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Featured Trips</h2>
      <div className={styles.tripList}>
        {[1, 2, 3, 4, 5].map((trip) => (
          <div key={trip} className={styles.tripCard}>
            <div className={styles.thumbnail} />
            <h3 className={styles.tripTitle}>Trip {trip}</h3>
            <p className={styles.tripText}>Short description of the trip...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
