import React from "react";

export default function TechnicianBookingSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-pulse">
      {/* Page Header Skeleton */}
      <div className="mb-8 border-b border-gray-100 pb-5">
        <div className="h-8 w-56 bg-gray-200 rounded-md mb-2"></div>
        <div className="h-4 w-80 bg-gray-200 rounded-md"></div>
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 flex flex-col justify-between"
          >
            <div>
              {/* Header: ID & Status Button Skeleton */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
                <div className="h-7 w-24 bg-gray-200 rounded-full"></div>
              </div>

              {/* Service Title & Description Skeleton */}
              <div className="h-6 w-3/4 bg-gray-200 rounded mb-3"></div>
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
              </div>

              {/* Customer Details Box Skeleton */}
              <div className="bg-gray-50 rounded-xl p-3.5 mb-4 border border-gray-100 space-y-2.5">
                <div className="h-3 w-28 bg-gray-200 rounded"></div>
                <div className="h-4 w-36 bg-gray-200 rounded"></div>
                <div className="h-3 w-48 bg-gray-200 rounded"></div>
              </div>

              {/* Date & Price Box Skeleton */}
              <div className="grid grid-cols-2 gap-3 py-3 px-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-16 bg-gray-200 rounded justify-self-end"></div>
              </div>
            </div>

            {/* Footer Skeleton */}
            <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
              <div className="h-3 w-28 bg-gray-200 rounded"></div>
              <div className="h-3 w-20 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
