'use client';

import { useEffect, useState } from 'react';
import VideoBackground from '@/components/VideoBackground';
import Navbar from '@/components/Navbar';
import FeaturedTrips from '@/components/FeaturedTrips';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';

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
    <main className="relative h-full w-full overflow-x-hidden">
      {showNavbar && <Navbar />}

      {/* Background Video with Animated Overlay Text */}
      <section className="relative h-screen w-full">
        <VideoBackground />
      </section>

      {/* Animated Blurry Background Section */}
      <section className="relative z-0 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-20">
        <FeaturedTrips />
      </section>

      {/* About + Stats Sections */}
      <section className="w-full bg-white py-20">
        <AboutSection />
        <StatsSection />
      </section>
    </main>
  );
}
