export default function WeddingDetailsPage() {
  return (
    <main className="min-h-screen bg-[var(--ivory)]">

      {/* HERO */}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8E8] via-[#FFFDF8] to-[#F7DCE5]" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">

          <p className="uppercase tracking-[6px] text-sm text-gray-500 mb-4">
            Wedding Details
          </p>

          <h1
            className="
            text-6xl
            md:text-7xl
            font-serif
            text-[var(--text-dark)]
            "
          >
            Our Celebration
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We are so excited to celebrate this beautiful chapter
            with our family and friends.
            Here you'll find everything you need to know before
            the big day.
          </p>

        </div>
      </section>

      {/* DATE CARD */}

      <section className="max-w-5xl mx-auto px-6 -mt-8">

        <div
          className="
          rounded-[32px]
          shadow-lg
          bg-white
          border border-[var(--border)]
          p-8
          text-center
          "
        >

          <p className="text-sm uppercase tracking-[4px] text-gray-500">
            Save The Date
          </p>

          <h2 className="text-4xl font-serif mt-3 text-[var(--text-dark)]">
            June 5, 2027
          </h2>

          <p className="mt-3 text-gray-600">
            Please arrive at least 30 minutes before the ceremony.
          </p>

        </div>
      </section>

      {/* TIMELINE */}

      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-serif text-center mb-10">
          Wedding Day Timeline
        </h2>

        <div className="grid gap-5">

          {[
            ["2:30 PM", "Guest Arrival & Registration"],
            ["3:00 PM", "Ceremony Begins"],
            ["4:00 PM", "Cocktail Hour"],
            ["5:00 PM", "Reception Program"],
            ["6:00 PM", "Dinner Service"],
            ["8:00 PM", "Dancing & Celebration"],
          ].map(([time, activity]) => (
            <div
              key={time}
              className="
              bg-white
              rounded-2xl
              p-6
              shadow-sm
              border
              border-[var(--border)]
              flex
              justify-between
              "
            >
              <span className="font-semibold">
                {time}
              </span>

              <span className="text-gray-600">
                {activity}
              </span>
            </div>
          ))}

        </div>
      </section>

      {/* VENUE */}

      <section className="bg-[#D9E8F8]/40 py-16">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-serif text-center mb-10">
            Venue Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div
              className="
              bg-white
              p-8
              rounded-3xl
              shadow-sm
              "
            >
              <h3 className="text-2xl font-semibold mb-4">
                Ceremony
              </h3>

              <p>[Church / Garden Venue]</p>
              <p>[Complete Address]</p>
            </div>

            <div
              className="
              bg-white
              p-8
              rounded-3xl
              shadow-sm
              "
            >
              <h3 className="text-2xl font-semibold mb-4">
                Reception
              </h3>

              <p>[Reception Venue]</p>
              <p>[Complete Address]</p>
            </div>

          </div>

          <div className="text-center mt-8">

            <a
              href="#"
              className="
              inline-block
              px-8
              py-4
              rounded-full
              bg-[#C9AB72]
              text-white
              "
            >
              View Google Maps
            </a>

          </div>

        </div>

      </section>

      {/* DRESS CODE */}

      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-serif text-center mb-12">
          Dress Code
        </h2>

        <div
          className="
          bg-white
          rounded-[32px]
          shadow-sm
          p-10
          "
        >

          <p className="text-center text-lg mb-8">
            Garden Formal Attire
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-8">

            <div className="w-16 h-16 rounded-full bg-pink-200"></div>

            <div className="w-16 h-16 rounded-full bg-blue-200"></div>

            <div className="w-16 h-16 rounded-full bg-yellow-200"></div>

            <div className="w-16 h-16 rounded-full bg-purple-200"></div>

            <div className="w-16 h-16 rounded-full bg-amber-100"></div>

          </div>

          <div className="text-center text-gray-600">
            Soft pastels, romantic tones, and elegant neutral
            colors are highly encouraged.
          </div>

          <div
            className="
            bg-red-50
            rounded-2xl
            mt-8
            p-5
            text-center
            "
          >
            Kindly avoid white, ivory, and colors reserved
            for the wedding party.
          </div>

        </div>

      </section>

      {/* PARKING */}

      <section className="bg-[#F7DCE5]/40 py-16">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-serif text-center mb-10">
            Transportation & Parking
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white p-8 rounded-3xl">
              <h3 className="font-semibold mb-3">
                Parking
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>✓ Complimentary parking available</li>
                <li>✓ Parking attendants on-site</li>
                <li>✓ Easy access to venue entrance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl">
              <h3 className="font-semibold mb-3">
                Transportation
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>✓ Ride-share accessible</li>
                <li>✓ Shuttle updates through RSVP</li>
                <li>✓ Nearby hotels available</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

      {/* GIFTS */}

      <section className="max-w-5xl mx-auto px-6 py-16">

        <div
          className="
          bg-gradient-to-r
          from-[#F7DCE5]
          via-[#FFF8E8]
          to-[#D9E8F8]
          rounded-[32px]
          p-10
          text-center
          "
        >

          <h2 className="text-4xl font-serif mb-6">
            Gifts
          </h2>

          <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
            Your presence at our wedding is the greatest gift
            of all. Should you wish to honor us with a gift,
            a contribution toward our future together would be
            sincerely appreciated.
          </p>

        </div>

      </section>

      {/* CONTACT */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div
          className="
          bg-[#E6DDF4]
          rounded-[32px]
          p-10
          "
        >

          <h2 className="text-4xl font-serif text-center mb-8">
            Need Assistance?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-center">

            <div>
              <h3 className="font-semibold mb-2">
                Wedding Coordinator
              </h3>

              <p>Coordinator Name</p>
              <p>09XX XXX XXXX</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Guest Concerns
              </h3>

              <p>Jan & Joyce</p>
              <p>09XX XXX XXXX</p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}