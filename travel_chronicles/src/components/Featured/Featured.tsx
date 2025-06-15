'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import styles from './Featured.module.css';

const trips = [1, 2, 3, 4, 5];

export default function FeaturedTrips() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const speed = 40; // px per second
  const duplicateTrips = [...trips, ...trips]; // Must be at least twice as long

  useAnimationFrame((t, delta) => {
    if (!containerRef.current || isHovered) return;

    const containerWidth = containerRef.current.scrollWidth / 2;
    const moveBy = (speed * delta) / 1000; // convert ms to s

    let newX = x.get() - moveBy;
    if (Math.abs(newX) >= containerWidth) {
      newX = 0;
    }

    x.set(newX);
  });

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Featured Trips</h2>
      <div className={styles.scrollViewport}>
        <motion.div
          className={styles.tripList}
          ref={containerRef}
          style={{ x }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {duplicateTrips.map((trip, i) => (
            <div key={i} className={styles.tripCard}>
              <div className={styles.thumbnail} />
              <h3 className={styles.tripTitle}>Trip {trip}</h3>
              <p className={styles.tripText}>Short description of the trip...</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
