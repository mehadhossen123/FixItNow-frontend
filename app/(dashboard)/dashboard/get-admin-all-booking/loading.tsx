const BookingSkeletonForAdmin = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-pulse">
      {/* Page Header Skeleton */}
      <div className="mb-8 border-b border-gray-100 pb-5">
        <div className="h-8 w-48 bg-gray-200 rounded-md mb-2"></div>
        <div className="h-4 w-72 bg-gray-200 rounded-md"></div>
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 flex flex-col justify-between"
          >
            <div>
              {/* Header: ID & Badge */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
                <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
              </div>

              {/* Title & Description */}
              <div className="h-6 w-3/4 bg-gray-200 rounded mb-3"></div>
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
              </div>

              {/* Date & Price Box */}
              <div className="grid grid-cols-2 gap-3 p-3 bg-gray-50 rounded-xl mb-4 border border-gray-100">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-16 bg-gray-200 rounded justify-self-end"></div>
              </div>

              {/* Technician Info */}
              <div className="pt-3 border-t border-gray-100">
                <div className="h-3 w-28 bg-gray-200 rounded mb-3"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <div className="space-y-1.5">
                      <div className="h-3.5 w-24 bg-gray-200 rounded"></div>
                      <div className="h-3 w-16 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="h-6 w-20 bg-gray-200 rounded-md"></div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
              <div className="h-3 w-28 bg-gray-200 rounded"></div>
              <div className="h-3 w-20 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSkeletonForAdmin;
