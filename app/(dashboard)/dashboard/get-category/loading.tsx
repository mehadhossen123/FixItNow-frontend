import React from "react";

const CategorySkeleton = () => {
  const skeletonCards = Array.from({ length: 6 });

  return (
    <div className="w-full min-h-screen bg-slate-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* হেডার স্কেলেটন */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 animate-pulse">
          <div className="space-y-2">
            <div className="h-6 w-48 bg-slate-200 rounded-md"></div>
            <div className="h-4 w-64 bg-slate-200 rounded-md"></div>
          </div>
          <div className="h-10 w-36 bg-slate-200 rounded-xl"></div>
        </div>

        {/* কার্ড গ্রিড স্কেলেটন */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skeletonCards.map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between space-y-4 animate-pulse"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-200"></div>
                    <div className="h-5 w-32 bg-slate-200 rounded-md"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-slate-200 rounded"></div>
                    <div className="w-6 h-6 bg-slate-200 rounded"></div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="h-4 w-full bg-slate-200 rounded"></div>
                  <div className="h-4 w-5/6 bg-slate-200 rounded"></div>
                  <div className="h-4 w-2/3 bg-slate-200 rounded"></div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <div className="h-3 w-20 bg-slate-200 rounded"></div>
                <div className="h-4 w-16 bg-slate-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySkeleton;
