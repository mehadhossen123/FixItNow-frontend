import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="bg-[#1b2a4e] text-white py-20 px-4 text-center">
      <div className="max-w-6xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          About Us
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-300 font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="text-orange-500">|</span>
          <span className="text-white">About Us</span>
        </div>
      </div>
    </section>
  );
}
