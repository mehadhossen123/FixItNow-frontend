import Link from "next/link";

export default function WorkCTA() {
  return (
    <section className="bg-[#1b2a4e] text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Stop Searching for Work. Let Work Find You.
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl font-medium text-gray-200">
          Join <span className="font-semibold text-white">FixIT Now</span> and
          start getting instant job requests from real clients in your area.
        </p>

        {/* Divider Line */}
        <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full my-4"></div>

        {/* Description Paragraphs */}
        <div className="space-y-2 text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
          <p>
            Sign up, get verified, and start receiving real job requests near
            you — instantly.
          </p>
          <p>
            You choose the jobs you want, show up, complete the work, and get
            paid securely through the platform.
          </p>
          <p>
            No advertising, no waiting, no nonsense — just steady work,
            guaranteed payments, and cashback rewards on your materials.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Link
            href="/login"
            className="inline-block bg-[#ee5a0c] hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg shadow-lg hover:shadow-orange-500/20 transition duration-300 text-sm uppercase tracking-wider"
          >
            REGISTER YOUR SERVICE
          </Link>
        </div>
      </div>
    </section>
  );
}
