import Link from "next/link";
import { Target, Eye } from "lucide-react"; // npm install lucide-react (or use your own icons)

export default function MissionVision() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-bg-image.jpg')" }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-6 space-y-6">
          <span className="inline-block px-4 py-1.5 bg-blue-100/10 text-blue-200 text-xs font-semibold rounded-full">
            Verified pros. Satisfied clients. One powerful platform.
          </span>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              The Smart Way to Fix, Build, and Grow.
            </h2>
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
            We created Mr FixIT for people tired of broken promises. Here, every
            pro is verified, every client is protected, and every payment is
            secure. It’s home improvement made simple, fair, and human.
          </p>

          <div>
            <Link
              href="/login"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg shadow-md transition duration-300"
            >
              REGISTER YOUR SERVICE
            </Link>
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Mission Card */}
          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl border-t-4 border-orange-500 space-y-4">
            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-[#111e38]" />
              <h3 className="text-2xl font-bold text-[#111e38]">Mission</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              To be the Uber of home improvement. We aim to connect people who
              need help with the people who can provide it, through a trusted,
              technology-driven platform that is familiar, easy and safe to use.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl border-t-4 border-orange-500 space-y-4">
            <div className="flex items-center gap-3">
              <Eye className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-[#111e38]">Vision</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become the world’s most trusted home-improvement network — a
              global platform where every job, payment, and connection is built
              on safety, satisfaction and proper results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
