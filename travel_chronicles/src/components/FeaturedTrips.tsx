'use client';

export default function FeaturedTrips() {
  return (
    <div className="text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Featured Trips</h2>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide flex space-x-6 px-6">
        {/* Replace with dynamic content later */}
        {[1, 2, 3, 4, 5].map((trip) => (
          <div
            key={trip}
            className="w-72 flex-shrink-0 bg-white text-black rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-300"
          >
            <div className="h-40 bg-gray-300 rounded mb-4" />
            <h3 className="text-xl font-semibold">Trip {trip}</h3>
            <p className="text-sm">Short description of the trip...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
