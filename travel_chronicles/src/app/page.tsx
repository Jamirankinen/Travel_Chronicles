'use client';

import { useEffect, useState } from 'react';
import styles from './HomePage.module.css';

import VideoBackground from '@/components/Video/VideoBg';
import Navbar from '@/components/Navbar/Navbar';
import FeaturedTrips from '@/components/Featured/Featured';
import AboutSection from '@/components/About/About';
import StatsSection from '@/components/Stats/Stats';
import Background from '@/components/Animations/Background';

export default function HomePage() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.main}>
      {showNavbar && <Navbar />}

      {/* Background Video with Animated Overlay Text */}
      <section className={styles.videoSection}>
        <VideoBackground />
      </section>

      {/* Aurora background starts after video */}
      <Background />

      {/* Sections over aurora background */}
      <section className={styles.featuredSection}>
        <FeaturedTrips />
      </section>

      <section className={styles.aboutSection}>
        <AboutSection />
      </section>

      <section className={styles.statsSection}>
        <StatsSection />
      </section>
    </main>
  );
}
