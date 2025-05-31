import Image from 'next/image';
import styles from './SkyBackground.module.css';

const cloudImages = [
  { src: '/cloud-100.webp', width: 100 },
  { src: '/cloud-200.webp', width: 200 },
  { src: '/cloud-300.webp', width: 300 },
  { src: '/cloud-400.webp', width: 400 },
];

// Generate an array of 12 clouds with randomized properties
const clouds = Array.from({ length: 12 }).map(() => {
  const img = cloudImages[Math.floor(Math.random() * cloudImages.length)];
  const speed = 50 + Math.random() * 60; // 50-110s
  const blur = (Math.random() * 2.5).toFixed(2) + 'px';

  return {
    src: img.src,
    width: img.width,
    speed,
    blur,
  };
});

export default function SkyBackground() {
  // Clouds between 5% and 35% from top
  const randomTops = clouds.map(() => 5 + Math.random() * 30);

  return (
    <div className={styles.sky}>
      {/* Sun fixed top right */}
      <div className={styles.sunWrapper} title="Sun">
        <Image
          src="/sun.webp"
          alt="Sun"
          width={120}
          height={120}
          draggable={false}
          priority={false}
        />
      </div>

      {/* Clouds */}
      {clouds.map(({ src, width, speed, blur }, i) => {
        const leftStart = -(width + Math.random() * 300);
        const animDelay = Math.random() * speed;

        return (
          <div
            key={i}
            className={styles.cloudWrapper}
            style={{
              width: `${width}px`,
              top: `${randomTops[i]}%`,
              animationDuration: `${speed}s`,
              filter: `blur(${blur})`,
              left: `${leftStart}px`,
              animationDelay: `${animDelay}s`,
            }}
          >
            <Image
              src={src}
              alt="Cloud"
              width={width}
              height={Math.round(width * 0.6)}
              draggable={false}
              priority={false}
            />
          </div>
        );
      })}
    </div>
  );
}
