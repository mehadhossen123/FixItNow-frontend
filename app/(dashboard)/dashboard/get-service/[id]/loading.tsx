import React from "react";

const SingleServiceSkeleton = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 py-10 animate-pulse">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button Skeleton */}
        <div className="h-4 w-28 bg-slate-200 rounded-md mb-6"></div>

        {/* Main Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side: Main Details (2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Service Header Card Skeleton */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 space-y-4">
              <div className="flex gap-2">
                <div className="h-6 w-32 bg-slate-200 rounded-full"></div>
                <div className="h-6 w-36 bg-slate-200 rounded-full"></div>
              </div>

              {/* Title Skeleton */}
              <div className="h-8 w-3/4 bg-slate-200 rounded-lg"></div>

              {/* Description Skeleton */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="h-4 w-28 bg-slate-200 rounded"></div>
                <div className="h-3.5 w-full bg-slate-200 rounded"></div>
                <div className="h-3.5 w-11/12 bg-slate-200 rounded"></div>
                <div className="h-3.5 w-4/5 bg-slate-200 rounded"></div>
              </div>

              {/* Feature Checklist Skeleton */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-100">
                <div className="h-4 w-full bg-slate-200 rounded"></div>
                <div className="h-4 w-full bg-slate-200 rounded"></div>
                <div className="h-4 w-full bg-slate-200 rounded"></div>
                <div className="h-4 w-full bg-slate-200 rounded"></div>
              </div>
            </div>

            {/* Technician Profile Card Skeleton */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8">
              <div className="h-5 w-40 bg-slate-200 rounded mb-4"></div>

              <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                {/* Technician Avatar Skeleton */}
                <div className="w-16 h-16 rounded-full bg-slate-200 shrink-0"></div>

                <div className="flex-1 space-y-2 w-full">
                  <div className="h-4 w-36 bg-slate-200 rounded"></div>
                  <div className="h-3 w-48 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Booking Card Skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-6">
              <div className="space-y-2">
                <div className="h-3 w-20 bg-slate-200 rounded"></div>
                <div className="h-8 w-28 bg-slate-200 rounded-lg"></div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex justify-between">
                  <div className="h-3.5 w-24 bg-slate-200 rounded"></div>
                  <div className="h-3.5 w-16 bg-slate-200 rounded"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-3.5 w-20 bg-slate-200 rounded"></div>
                  <div className="h-3.5 w-16 bg-slate-200 rounded"></div>
                </div>
              </div>

              {/* Book Now Button Skeleton */}
              <div className="h-12 w-full bg-slate-200 rounded-xl"></div>
              <div className="h-3 w-3/4 bg-slate-200 rounded mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceSkeleton;
