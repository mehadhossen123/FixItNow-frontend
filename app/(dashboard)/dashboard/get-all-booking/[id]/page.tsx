import { getAllBooking } from "@/app/(customer)/_actions/getAllBooking";
import { BookingItem } from "@/app/_type/type";
import React, { Suspense } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Wrench,
  CheckCircle2,
  AlertCircle,
  XCircle,
  BadgeDollarSign,
  ArrowLeft,
  User,
  Mail,
  Phone,
  FileText,
  ShieldCheck,
} from "lucide-react";
import SingleBookingSkeleton from "./loading";

interface PageProps {
  params: Promise<{ id: string }>;
}

const SingleBookingPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const allBookings = await getAllBooking();
  const bookings: BookingItem[] = Array.isArray(allBookings)
    ? allBookings
    : allBookings?.data || [];

  const booking = bookings.find((book: BookingItem) => book.id === id);

  // Status Badge Helper
  const getStatusBadge = (status: string) => {
    switch (status?.toUpperCase()) {
      case "COMPLETED":
        return (
          <span className="inline-flex items-center text-yellow-700 gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50  border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" /> Completed
          </span>
        );
      case "PENDING":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <Clock className="w-3.5 h-3.5" /> Pending
          </span>
        );
      case "CANCELLED":
        return (
          <span className="inline-flex items-center gap-1.5 text-red-700 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            <XCircle className="w-3.5 h-3.5" /> Cancelled
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-50 text-gray-700 border border-gray-200">
            <AlertCircle className="w-3.5 h-3.5" /> {status}
          </span>
        );
    }
  };

  // 404 / Not Found State
  if (!booking) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mx-auto mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Booking Not Found
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          We couldn't find any booking details matching ID:{" "}
          <span className="font-mono text-gray-700">{id}</span>
        </p>
        <Link
          href="/dashboard/get-all-booking"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to My Bookings
        </Link>
      </div>
    );
  }

  return (
    <Suspense fallback={<SingleBookingSkeleton/>}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/dashboard/get-all-booking"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Bookings
          </Link>
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Header Section */}
          <div className="p-6 sm:p-8 border-b border-gray-100 bg-gray-50/50">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Booking ID:
                  </span>
                  <span className="text-xs font-mono font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                    {booking.id}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {booking.service?.title || "Service Title Unavailable"}
                </h1>
              </div>
              <div>{getStatusBadge(booking.status)}</div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Service Description */}
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-500" /> Service
                Description
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                {booking.service?.description ||
                  "No detailed description provided."}
              </p>
            </div>

            {/* Grid Information: Schedule & Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Booking Date & Time */}
              <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100/60 flex items-start gap-3">
                <div className="p-2.5 bg-blue-100/60 text-blue-600 rounded-lg">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-blue-900/60 uppercase">
                    Scheduled Date
                  </p>
                  <p className="text-sm font-semibold text-blue-950 mt-0.5">
                    {new Date(booking.bookingDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* Total Cost */}
              <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100/60 flex items-start gap-3">
                <div className="p-2.5 bg-emerald-100/60 text-emerald-600 rounded-lg">
                  <BadgeDollarSign className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-emerald-900/60 uppercase">
                    Total Amount
                  </p>
                  <p className="text-lg font-bold text-emerald-950 mt-0.5">
                    ৳{booking.totalCost}
                  </p>
                </div>
              </div>
            </div>

            {/* Assigned Technician Section */}
            {booking.technician ? (
              <div className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white shadow-xs">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-gray-500" /> Assigned
                  Technician
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg shrink-0">
                      {booking.technician.user?.name?.[0] || "T"}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">
                        {booking.technician.user?.name || "Technician"}
                      </h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                        {booking.technician.experience} Years Experience
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg self-start sm:self-auto">
                    <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                    <span>{booking.technician.location}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                <p className="text-xs text-gray-500">
                  No technician assigned to this booking yet.
                </p>
              </div>
            )}

            {/* Timeline / Additional Metadata */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400">
              <span>
                Booked on: {new Date(booking.createdAt).toLocaleDateString()}
              </span>
              {booking.createdAt && (
                <span>
                  Last Updated:{" "}
                  {new Date(booking.bookingDate).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default SingleBookingPage;
