export default function Home() {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto py-12 px-4">
      {/* Decorative Garden Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 text-emerald-900 text-sm font-medium mb-6 shadow-xs border border-emerald-200 backdrop-blur-xs">
        <span>🌿</span> Save the Date
      </div>

      {/* Couple Names */}
      <h1 className="text-5xl md:text-7xl font-serif text-emerald-950 font-bold mb-4 tracking-tight drop-shadow-xs">
        Robert &amp; Joyce
      </h1>
      
      <p className="text-lg md:text-xl text-stone-600 font-serif italic mb-10 max-w-xl">
        Together with their families, invite you to celebrate their garden wedding.
      </p>

      {/* Main Details Glassmorphic Card */}
      <div className="w-full bg-white/85 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl border border-emerald-100/90 mb-10 transition-transform duration-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-700 divide-y md:divide-y-0 md:divide-x divide-emerald-100">
          <div className="flex flex-col items-center pb-4 md:pb-0 md:pr-4">
            <span className="text-emerald-800 font-semibold mb-1 text-xs uppercase tracking-widest">Date</span>
            <span className="font-serif text-lg text-stone-800">Saturday, June 5, 2026</span>
          </div>
          <div className="flex flex-col items-center py-4 md:py-0 md:px-4">
            <span className="text-emerald-800 font-semibold mb-1 text-xs uppercase tracking-widest">Time</span>
            <span className="font-serif text-lg text-stone-800">3:00 PM in the Afternoon</span>
          </div>
          <div className="flex flex-col items-center pt-4 md:pt-0 md:pl-4">
            <span className="text-emerald-800 font-semibold mb-1 text-xs uppercase tracking-widest">Location</span>
            <span className="font-serif text-lg text-stone-800">The Hilltop Garden </span>
          </div>
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
        <a 
          href="/rsvp" 
          className="px-8 py-3.5 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-medium shadow-md transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
        >
          RSVP Here
        </a>
        <a 
          href="/wedding-details" 
          className="px-8 py-3.5 rounded-full bg-white/90 hover:bg-white text-emerald-900 font-medium border border-emerald-300 shadow-sm transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5"
        >
          Explore Details
        </a>
      </div>
    </div>
  );
}