'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white shadow-md z-50 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-xl font-bold">Travel Chronicles</span>
        <ul className="flex gap-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/timeline" className="hover:underline">Timeline</Link>
          <Link href="/gallery" className="hover:underline">Gallery</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </ul>
      </div>
    </nav>
  );
}
