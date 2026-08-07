import Image from "next/image";
import Link from "next/link";

export default function WhyWeExist() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side Image Container */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative rounded-2xl overflow-hidden bg-[#111e38] p-6 shadow-xl">
            <Image
              src="/logo.jpeg"
              alt="Mr FixIT Team"
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1.5 bg-[#111e38] text-white text-xs font-semibold rounded-full uppercase tracking-wider">
            Why We Exist
          </span>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              We Are Reinventing How Home Improvement Works.
            </h2>
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            <p>
              FixIT Now is the Uber of home improvement — a platform built on
              trust, speed, and simplicity. We connect homeowners with verified,
              rated service pros who show up, get it done right, and get paid
              securely through the platform.
            </p>
            <p>
              For service providers, it’s a smarter way to work — instant job
              requests, guaranteed payments, and a growing network that values
              skill and reliability over empty promises.
            </p>
            <p className="font-medium text-gray-800">
              We’re not just fixing homes; we’re rebuilding trust in an entire
              industry.
            </p>
          </div>

          <div>
            <Link
              href="/login"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg shadow-md transition duration-300"
            >
              REQUEST A SERVICE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
