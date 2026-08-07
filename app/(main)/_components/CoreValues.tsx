const values = [
  {
    title: "Accountability",
    description:
      "We hold ourselves and every service pro to the highest standard. Every job, rating, and payment is tracked — so quality isn't just expected, it's guaranteed.",
  },
  {
    title: "Integrity",
    description:
      "We don't make empty promises. We believe in honesty, fairness, and doing the right thing — even when no one's watching.",
  },
  {
    title: "Respect",
    description:
      "We treat every client, every service pro, and every job with equal importance. Mutual respect keeps our platform strong and our community thriving.",
  },
  {
    title: "Speed",
    description:
      "No waiting, no delays. Mr FixIT connects you instantly with the right expert nearby — because time matters, and help should never be far.",
  },
  {
    title: "Protection",
    description:
      "Your safety comes first. Every pro is verified, every payment secured, and every job supported from start to finish — so you can book with total confidence.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          More Than a Platform — A Promise of Trust
        </h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Mr FixIT isn't just an app — it's a movement built on reliability,
          accountability, and respect. We stand for fair opportunity, honest
          work, and real results. Every pro is verified, every client protected,
          and every job tracked from start to finish.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {values.map((item, index) => (
          <div
            key={index}
            className="bg-[#111e38] text-white p-6 rounded-2xl shadow-lg flex flex-col space-y-3 hover:-translate-y-1 transition duration-300"
          >
            <h3 className="text-xl font-bold tracking-wide">{item.title}</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
