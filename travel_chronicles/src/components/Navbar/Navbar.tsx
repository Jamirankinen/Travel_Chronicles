'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <span className={styles.logo}>Travel Chronicles</span>
        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          <li><Link href="/" className={styles.link} onClick={closeMenu}>Home</Link></li>
          <li><Link href="/timeline" className={styles.link} onClick={closeMenu}>Timeline</Link></li>
          <li><Link href="/gallery" className={styles.link} onClick={closeMenu}>Gallery</Link></li>
          <li><Link href="/contact" className={styles.link} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
