'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const textVariant = {
  hidden: { opacity: 1 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      delayChildren: i * 0.2,
      staggerChildren: 0.04,
    },
  }),
};

const letterVariant = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: {
      duration: 0.4,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export default function VideoBackground() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowText(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderText = (text: string, className: string, delayIndex = 1) => (
    <motion.h1
      variants={textVariant}
      initial="hidden"
      animate="visible"
      custom={delayIndex}
      className={className}
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={letterVariant} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  );

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white px-24 text-center z-10"
          >
            {renderText('Hello, My name is Jami!', 'text-4xl md:text-6xl font-bold drop-shadow-lg mb-6', 1)}
            {renderText(
              'Welcome to my humble collection of my travels & exploits!',
              'text-xl md:text-3xl font-medium drop-shadow-md max-w-3xl',
              2
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
