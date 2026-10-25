import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/75 backdrop-blur-md shadow-xs sticky top-0 z-50 py-4 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center border-b border-emerald-100">
      <Link href="/" className="text-2xl font-serif text-emerald-900 font-semibold tracking-wide mb-3 sm:mb-0">
        🌿 Our Special Day
      </Link>
      <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium text-emerald-800">
        <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
        <Link href="/wedding-details" className="hover:text-emerald-600 transition-colors">Details</Link>
        <Link href="/gallery" className="hover:text-emerald-600 transition-colors">Gallery</Link>
        <Link href="/faq" className="hover:text-emerald-600 transition-colors">FAQ</Link>
        <Link href="/rsvp" className="hover:text-emerald-600 transition-colors">RSVP</Link>
      </div>
    </nav>
  );
}