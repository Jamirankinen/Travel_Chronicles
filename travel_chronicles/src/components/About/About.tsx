'use client';

import Image from 'next/image';
import styles from './About.module.css';

export default function AboutSection() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src="/about.webp"
          alt="About Travel Chronicles"
          fill
          sizes="(min-width: 768px) 400px, 100vw"
          className={styles.aboutImage}
          priority
        />
      </div>
      <div>
        <h2 className={styles.title}>About Travel Chronicles</h2>
        <p className={styles.text}>
          Travel Chronicles is a living record of my adventures across the world
          — from quiet villages to bustling cities, and everything in between.
        </p>
        <p className={styles.text}>
          This website showcases my journeys through visuals, stories, and
          statistics. Scroll through memories, discover featured trips, and
          explore the journey.
        </p>
      </div>
    </div>
  );
}
