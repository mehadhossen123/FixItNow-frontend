import React from "react";

export default function SingleBookingSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-pulse">
      {/* Back Button Skeleton */}
      <div className="mb-6">
        <div className="h-4 w-36 bg-gray-200 rounded-md"></div>
      </div>

      {/* Main Container Skeleton */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Header Section */}
        <div className="p-6 sm:p-8 border-b border-gray-100 bg-gray-50/50">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="h-3 w-28 bg-gray-200 rounded"></div>
              <div className="h-8 w-64 sm:w-80 bg-gray-200 rounded-md"></div>
            </div>
            <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Description Skeleton */}
          <div>
            <div className="h-3 w-32 bg-gray-200 rounded mb-3"></div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Grid Info Skeleton: Date & Cost */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-lg shrink-0"></div>
              <div className="space-y-1.5 w-full">
                <div className="h-3 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-36 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-lg shrink-0"></div>
              <div className="space-y-1.5 w-full">
                <div className="h-3 w-24 bg-gray-200 rounded"></div>
                <div className="h-5 w-20 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Technician Skeleton */}
          <div className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white space-y-3">
            <div className="h-3 w-36 bg-gray-200 rounded mb-4"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0"></div>
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                  <div className="h-3 w-24 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="h-8 w-28 bg-gray-200 rounded-lg"></div>
            </div>
          </div>

          {/* Footer Skeleton */}
          <div className="pt-4 border-t border-gray-100 flex justify-between">
            <div className="h-3 w-32 bg-gray-200 rounded"></div>
            <div className="h-3 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
