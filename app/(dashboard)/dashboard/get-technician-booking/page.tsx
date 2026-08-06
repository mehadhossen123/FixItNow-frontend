import { getAllBookingByTechnician } from "@/app/(technician)/_actions/getAllBooking";
import React, { Suspense } from "react";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Wrench,
  BadgeDollarSign,
  FileText,
} from "lucide-react";
import { BookingStatusButton } from "@/app/(technician)/_components/BookingStatusButton";
import TechnicianBookingSkeleton from "./loading";


const GetTechnicianBooking = async () => {
  const allBookings = await getAllBookingByTechnician();

 
  const bookings = Array.isArray(allBookings)
    ? allBookings
    : allBookings?.data || [];

  return (
    <Suspense fallback={<TechnicianBookingSkeleton/>}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8 border-b border-gray-100 pb-5">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Assigned Bookings
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage and track all service requests assigned to you
          </p>
        </div>

        {/* Empty State */}
        {bookings.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <Wrench className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-gray-800">
              No service requests yet
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              You don't have any bookings assigned at the moment.
            </p>
          </div>
        ) : (
          /* Booking List Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookings.map((item: any) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between"
              >
                <div className="p-5 sm:p-6">
                  {/* Header: ID & Status Button */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono font-medium text-gray-400 uppercase tracking-wider">
                      ID: {item.id.slice(0, 8)}...
                    </span>
                    <BookingStatusButton
                      status={item.status}
                      bookingId={item.id}
                    />
                  </div>

                  {/* Service Details */}
                  <h2 className="text-lg font-bold text-gray-900 line-clamp-1 mb-2">
                    {item.service?.title || "Service Title Unavailable"}
                  </h2>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                    {item.service?.description || "No description provided."}
                  </p>

                  {/* Customer Information Card */}
                  <div className="bg-blue-50/50 rounded-xl p-3.5 mb-4 border border-blue-100/60 space-y-2">
                    <p className="text-xs font-semibold text-blue-900/60 uppercase tracking-wider">
                      Customer Details
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                      <User className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{item.customer?.name || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{item.customer?.email || "No Email Provided"}</span>
                    </div>
                  </div>

                  {/* Date & Price Info */}
                  <div className="grid grid-cols-2 gap-3 py-3 px-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="text-xs font-semibold">
                        {new Date(item.bookingDate).toLocaleDateString(
                          "en-US",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-700 justify-end">
                      <BadgeDollarSign className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-sm font-bold text-gray-900">
                        ৳{item.totalCost}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span>
                    Booked on: {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                  <span className="font-medium text-gray-500">
                    Price: ৳{item.service?.price || item.totalCost}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default GetTechnicianBooking;
