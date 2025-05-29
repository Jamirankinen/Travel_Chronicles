"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <Image
        src="/about.jpg"
        alt="About Travel Chronicles"
        width={600}
        height={400}
        className="rounded-2xl shadow-lg w-full h-auto"
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">About Travel Chronicles</h2>
        <p className="text-gray-700 mb-2">
          Travel Chronicles is a living record of my adventures across the world
          — from quiet villages to bustling cities, and everything in between.
        </p>
        <p className="text-gray-700">
          This website showcases my journeys through visuals, stories, and
          statistics. Scroll through memories, discover featured trips, and
          explore the journey.
        </p>
      </div>
    </div>
  );
}
