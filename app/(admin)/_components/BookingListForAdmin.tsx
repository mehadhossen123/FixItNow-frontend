"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Wrench,
  CheckCircle2,
  AlertCircle,
  XCircle,
  BadgeDollarSign,
  ArrowRight,
} from "lucide-react";
import { BookingItem } from "@/app/_type/type";
import Link from "next/link";

interface Props {
  bookings: BookingItem[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

export const BookingListClientForAdmin: React.FC<Props> = ({ bookings }) => {
  const getStatusBadge = (status: string) => {
    switch (status?.toUpperCase()) {
      case "COMPLETED":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5" /> Completed
          </span>
        );
      case "PENDING":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60 shadow-sm">
            <Clock className="w-3.5 h-3.5" /> Pending
          </span>
        );
      case "CANCELLED":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/60 shadow-sm">
            <XCircle className="w-3.5 h-3.5" /> Cancelled
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-50 text-gray-700 border border-gray-200/60 shadow-sm">
            <AlertCircle className="w-3.5 h-3.5" /> {status}
          </span>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 border-b border-gray-100 pb-5 flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-yellow-700 tracking-tight">
            My Bookings
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage and track all your scheduled service requests
          </p>
        </div>
        <div className="hidden sm:block text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
          Total: {bookings.length}
        </div>
      </motion.div>

      {bookings.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center py-16 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200"
        >
          <Wrench className="w-10 h-10 text-gray-400 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-gray-800">
            No bookings found
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            You haven't scheduled any service bookings yet.
          </p>
        </motion.div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {bookings.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="text-xs font-mono font-medium text-gray-400 uppercase tracking-wider bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                    ID: {item.id.slice(0, 8)}...
                  </span>
                  {getStatusBadge(item.status)}
                </div>

                <h2 className="text-lg font-bold text-gray-900 line-clamp-1 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.service?.title || "Service Title Unavailable"}
                </h2>

                <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                  {item.service?.description || "No description provided."}
                </p>

                <div className="grid grid-cols-2 gap-3 py-3 px-4 bg-gray-50/80 rounded-xl mb-4 border border-gray-100">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-medium">
                      {new Date(item.bookingDate).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-gray-700 justify-end">
                    <BadgeDollarSign className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-sm font-bold text-gray-900">
                      ৳{item.totalCost}
                    </span>
                  </div>
                </div>

                {item.technician && (
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Assigned Technician
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs shadow-inner">
                          {item.technician.user?.name?.[0] || "T"}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 leading-none">
                            {item.technician.user?.name || "Technician"}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {item.technician.experience} yrs experience
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100/80 px-2.5 py-1 rounded-md border border-gray-200/50">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span>{item.technician.location}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="px-5 py-3 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span>
                  Booked on: {new Date(item.createdAt).toLocaleDateString()}
                </span>
                <Link href={`/dashboard/get-admin-all-booking/${item?.id}`} className="inline-flex items-center gap-1 text-blue-600 group-hover:text-green-700 font-semibold transition-all group-hover:translate-x-1">
                  View Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};
