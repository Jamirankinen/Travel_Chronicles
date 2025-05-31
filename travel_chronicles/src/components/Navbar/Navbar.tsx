'use client';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <span className={styles.logo}>Travel Chronicles</span>
        <ul className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/timeline" className={styles.link}>Timeline</Link>
          <Link href="/gallery" className={styles.link}>Gallery</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </ul>
      </div>
    </nav>
  );
}
