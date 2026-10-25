import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-xs sticky top-0 z-50 py-4 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center border-b border-emerald-100">
      <Link href="/" className="text-2xl font-serif text-emerald-900 font-semibold tracking-wide mb-3 sm:mb-0 hover:opacity-85 transition-opacity">
        🌿 Our Special Day
      </Link>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm md:text-base font-medium text-emerald-800">
        <Link href="/" className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-emerald-100 hover:text-emerald-950">
          Home
        </Link>
        <Link href="/wedding-details" className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-emerald-100 hover:text-emerald-950">
          Details
        </Link>
        <Link href="/gallery" className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-emerald-100 hover:text-emerald-950">
          Gallery
        </Link>
        <Link href="/faq" className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-emerald-100 hover:text-emerald-950">
          FAQ
        </Link>
        <Link href="/rsvp" className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-emerald-100 hover:text-emerald-950">
          RSVP
        </Link>
      </div>
    </nav>
  );
}