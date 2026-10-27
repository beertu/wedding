"use client";

import Link from "next/link";

export default function CalliePage() {
  return (
    <div className="min-h-screen bg-amber-50/60 text-stone-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-6 text-center bg-gradient-to-b from-amber-100/70 to-amber-50/20 border-b border-amber-200/50">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200/70 text-amber-900 font-medium text-sm mb-4 shadow-xs">
            🎉 Special Birthday Girl ✨
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-amber-950 font-bold tracking-tight mb-4">
            Meet Callie 🐾
          </h1>
          <p className="text-lg md:text-xl text-stone-600 font-light max-w-xl mx-auto leading-relaxed">
            Our precious Golden Retriever and the true VIP (Very Important Pup) of our wedding day! Today we're celebrating her extra special day. 🥳
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* Profile & Fast Facts */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-amber-100 grid md:grid-cols-2 gap-8 items-center">
          {/* Photo Placeholder */}
          <div className="relative aspect-square rounded-2xl bg-amber-100 overflow-hidden flex items-center justify-center border-4 border-amber-50 shadow-inner group">
            {/* Replace this div with an <img> or Next.js <Image /> component */}
            <div className="text-center p-6">
              <span className="text-6xl mb-2 block">🐕</span>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                Insert Callie's Cute Photo Here
              </p>
            </div>
          </div>

          {/* Facts List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-amber-950 flex items-center gap-2">
              👑 Birthday Princess Profile
            </h2>
            <ul className="space-y-3 text-stone-700">
              <li className="flex items-center gap-3 bg-amber-50/80 p-3 rounded-xl border border-amber-100/60">
                <span className="text-xl">🎂</span>
                <div>
                  <strong className="block text-amber-950 text-sm">Status</strong>
                  <span className="text-sm">Celebrating her Birthday Today!</span>
                </div>
              </li>
              <li className="flex items-center gap-3 bg-amber-50/80 p-3 rounded-xl border border-amber-100/60">
                <span className="text-xl">🦮</span>
                <div>
                  <strong className="block text-amber-950 text-sm">Breed</strong>
                  <span className="text-sm">Golden Retriever (100% Good Girl)</span>
                </div>
              </li>
              <li className="flex items-center gap-3 bg-amber-50/80 p-3 rounded-xl border border-amber-100/60">
                <span className="text-xl">💍</span>
                <div>
                  <strong className="block text-amber-950 text-sm">Wedding Role</strong>
                  <span className="text-sm">Ring Bearer & Chief Happiness Officer</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Favorite Things Grid */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-serif text-amber-950 font-semibold">
              Callie's Favorite Things 💛
            </h2>
            <p className="text-stone-500 text-sm mt-1">A few things that guarantee a tail wag!</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-amber-100 text-center shadow-xs hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                🎾
              </div>
              <h3 className="font-semibold text-amber-950 mb-1">Endless Tennis Balls</h3>
              <p className="text-xs text-stone-600">She will retrieve them all day long if you let her!</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-100 text-center shadow-xs hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                🥩
              </div>
              <h3 className="font-semibold text-amber-950 mb-1">Pup Cups & Treats</h3>
              <p className="text-xs text-stone-600">Peanut butter and whipped cream are top-tier favorites.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-100 text-center shadow-xs hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                🛋️
              </div>
              <h3 className="font-semibold text-amber-950 mb-1">Belly Rubs</h3>
              <p className="text-xs text-stone-600">Any guest willing to give scratches becomes an instant best friend.</p>
            </div>
          </div>
        </section>

        {/* Birthday Wish Card */}
        <section className="bg-gradient-to-r from-amber-100 to-emerald-100 rounded-3xl p-8 text-center border border-amber-200/50 shadow-xs space-y-4">
          <span className="text-4xl">🎁</span>
          <h2 className="text-2xl font-serif font-bold text-stone-800">
            Wish Callie a Happy Birthday!
          </h2>
          <p className="text-stone-600 max-w-md mx-auto text-sm">
            Be sure to give her extra belly rubs and greetings when you see her at the celebration!
          </p>
          <div className="pt-2">
            <Link
              href="/rsvp"
              className="inline-block bg-emerald-800 hover:bg-emerald-900 text-white font-medium px-6 py-3 rounded-xl transition-colors shadow-xs"
            >
              Send Birthday Love via RSVP ❤️
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}