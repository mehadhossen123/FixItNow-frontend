"use client";

import Image from "next/image";
import Link from "next/link";

const Slider = () => {
  return (
    <section className="bg-base-100 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content Div */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
            <span>⚡ Reliable Service Provider</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-base-content leading-tight">
            BOOK VERIFIED <br />
            <span className="text-amber-500">HOME SERVICES</span> <br />
            PROS IN MINUTES
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-base-content/70 max-w-xl mx-auto lg:mx-0">
            Get instant access to trusted, background-checked plumbers,
            electricians, and technicians right at your doorstep.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              href="/dashboard/get-service"
              className="btn btn-primary btn-lg w-full sm:w-auto px-8 shadow-lg shadow-primary/30"
            >
              Book Service Now
            </Link>
            <Link
              href="/dashboard/get-service"
              className="btn btn-outline btn-lg w-full sm:w-auto px-8"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right Image Div */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-base-200">
            <Image
              src="/slider.jpeg" // public/slider.jpeg ফোল্ডারে থাকলে এটি কাজ করবে
              alt="Home Services Banner"
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
