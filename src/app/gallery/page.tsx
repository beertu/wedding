export default function GalleryPage() {
  const memories = [
    {
      title: "How We Met 🌸",
      caption:
        "The moment our story began. A simple hello that changed everything.",
      photos: ["🥰", "☕", "🌷"],
    },
    {
      title: "Our Favorite Dates 💕",
      caption:
        "Coffee runs, spontaneous adventures, and countless laughs together.",
      photos: ["🍰", "☕", "💕"],
    },
    {
      title: "Adventures Together ✈️",
      caption:
        "Collecting memories one trip at a time.",
      photos: ["🏖️", "✈️", "🌅"],
    },
    {
      title: "The Proposal 💍",
      caption:
        "The easiest 'YES' and the happiest moment of our lives.",
      photos: ["💍", "🥹", "🌹"],
    },
    {
      title: "Forever Starts Here 🤍",
      caption:
        "A beautiful journey leading to our wedding day.",
      photos: ["🤍", "💐", "✨"],
    },
    {
      title: "See You At The Wedding 🌼",
      caption:
        "We can't wait to celebrate this special day with all of you.",
      photos: ["🌼", "🎉", "🥂"],
    },
  ];

  const pastelColors = [
    "bg-pink-100",
    "bg-blue-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-amber-100",
    "bg-rose-100",
  ];

  return (
    <main className="min-h-screen bg-[var(--ivory)]">
      {/* Hero */}

      <section className="relative overflow-hidden">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-pink-200 blur-3xl opacity-30" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-blue-200 blur-3xl opacity-30" />

        <div className="bg-gradient-to-b from-[var(--powder-blue)] via-[var(--ivory)] to-[var(--blush)] py-24 px-6 text-center">
          <p className="uppercase tracking-[6px] text-sm text-gray-500 mb-4">
            Our Gallery
          </p>

          <h1 className="text-6xl md:text-7xl font-serif text-[var(--text-dark)]">
            Our Love Story
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg">
            Every memory has led us here. Thank you for being part
            of our journey and celebrating this beautiful chapter
            with us.
          </p>
        </div>
      </section>

      {/* Quote */}

      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="bg-white rounded-[32px] shadow-sm border border-[var(--border)] p-10 text-center">
          <p className="text-2xl md:text-3xl font-serif leading-relaxed text-gray-700">
            "Every love story is beautiful,
            but ours is our favorite."
          </p>
        </div>
      </section>

      {/* Gallery Cards */}

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

          {memories.map((memory, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-[32px]
              p-5
              shadow-lg
              hover:-translate-y-2
              transition-all
              duration-300
              border
              border-[var(--border)]
            "
            >
              {/* scrapbook collage */}

              <div className="grid grid-cols-2 gap-3">

                <div
                  className={`
                  ${pastelColors[index % pastelColors.length]}
                  col-span-2
                  h-52
                  rounded-3xl
                  flex
                  items-center
                  justify-center
                  text-8xl
                  `}
                >
                  {memory.photos[0]}
                </div>

                <div
                  className="
                  bg-pink-100
                  h-28
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-5xl
                  "
                >
                  {memory.photos[1]}
                </div>

                <div
                  className="
                  bg-blue-100
                  h-28
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-5xl
                  "
                >
                  {memory.photos[2]}
                </div>

              </div>

              <div className="text-center mt-6">

                <h2 className="text-2xl font-serif mb-3 text-[var(--text-dark)]">
                  {memory.title}
                </h2>

                <p className="text-gray-600">
                  {memory.caption}
                </p>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Memory Timeline */}

      <section className="bg-[#FFF8E8] py-20">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-5xl font-serif text-center mb-12">
            Milestones
          </h2>

          <div className="space-y-6">

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold">
                🌸 First Meeting
              </h3>

              <p className="text-gray-600 mt-2">
                The start of an unexpected and beautiful connection.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold">
                💕 First Date
              </h3>

              <p className="text-gray-600 mt-2">
                A simple date that quickly became unforgettable.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold">
                💍 Engagement
              </h3>

              <p className="text-gray-600 mt-2">
                A promise to spend forever together.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold">
                🤍 Wedding Day
              </h3>

              <p className="text-gray-600 mt-2">
                The beginning of our greatest adventure.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Closing */}

      <section className="py-24 bg-gradient-to-r from-pink-100 via-yellow-50 to-blue-100">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-serif mb-6">
            Thank You
          </h2>

          <p className="text-lg text-gray-600">
            Thank you for being part of our story.
            We feel incredibly lucky to celebrate this special day
            surrounded by the people we love most.
          </p>

          <div className="text-5xl mt-8">
            🤍 🌸 🦋 🌼 💍
          </div>

        </div>
      </section>
    </main>
  );
}