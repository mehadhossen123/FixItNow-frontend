import React from "react";

interface SkeletonProps {
  count?: number;
}

const ServiceListSkeleton = ({ count = 6 }: SkeletonProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      {/* Grid Layout matching real ServiceList */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 animate-pulse flex flex-col justify-between"
          >
            <div>
              {/* Category & Price Skeleton */}
              <div className="flex items-center justify-between mb-4">
                <div className="h-6 w-24 bg-slate-200 rounded-full"></div>
                <div className="h-7 w-16 bg-slate-200 rounded-lg"></div>
              </div>

              {/* Title Skeleton */}
              <div className="h-6 bg-slate-200 rounded-md w-3/4 mb-2"></div>
              <div className="h-6 bg-slate-200 rounded-md w-1/2 mb-4"></div>

              {/* Description Skeleton */}
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-slate-200 rounded w-full"></div>
                <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                <div className="h-4 bg-slate-200 rounded w-4/6"></div>
              </div>

              {/* Technician Profile Card Skeleton */}
              <div className="bg-slate-100 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-slate-200 rounded-full shrink-0"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                    <div className="h-3 bg-slate-200 rounded w-1/3"></div>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200/60 space-y-2">
                  <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                  <div className="h-3 bg-slate-200 rounded w-4/5"></div>
                </div>
              </div>
            </div>

            {/* Footer Skeleton */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="h-4 w-20 bg-slate-200 rounded"></div>
              <div className="h-9 w-28 bg-slate-200 rounded-xl"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceListSkeleton;
