'use client';

export default function StatsSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-16">
      <h2 className="text-3xl font-bold text-center mb-10">My Travel Stats</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">Countries Visited</h3>
          <p className="text-4xl font-bold mt-2">42</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">Days Outside Finland</h3>
          <p className="text-4xl font-bold mt-2">280</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">World Coverage</h3>
          <p className="text-4xl font-bold mt-2">21%</p>
        </div>
      </div>
    </div>
  );
}
