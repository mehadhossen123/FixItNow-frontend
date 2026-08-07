export const dynamic = "force-dynamic";
import React from "react";
import { getPaymentHistory } from "@/app/(payment)/_action/getPaymentHistory";
import {
  CreditCard,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Search,
  Receipt,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default async function PaymentHistoryPage() {
  const allPayment = await getPaymentHistory();
  const payments = Array.isArray(allPayment)
    ? allPayment
    : allPayment?.data || [];

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Top Bar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Payment History
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            View, track, and manage all your completed service payments and
            invoices.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 p-2 rounded-xl flex items-center text-xs text-gray-600 font-medium">
            <Receipt className="w-4 h-4 mr-1.5 text-gray-500" />
            Total Transactions:{" "}
            <span className="font-bold text-gray-900 ml-1">
              {payments.length}
            </span>
          </div>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        {/* Empty State */}
        {payments.length === 0 ? (
          <div className="text-center py-16 px-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-400">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">
              No Payment Records Found
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              You haven't completed any payment transactions yet.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  <th className="py-3.5 px-6">Transaction ID</th>
                  <th className="py-3.5 px-6">Booking Details</th>
                  <th className="py-3.5 px-6">Date & Time</th>
                  <th className="py-3.5 px-6">Amount</th>
                  <th className="py-3.5 px-6">Status</th>
                  <th className="py-3.5 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {payments.map((payment: any) => {
                  const formattedDate = new Date(
                    payment.createdAt,
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  });
                  const formattedTime = new Date(
                    payment.createdAt,
                  ).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  });

                  return (
                    <tr
                      key={payment.id}
                      className="hover:bg-gray-50/80 transition-colors"
                    >
                      {/* Transaction / Payment ID */}
                      <td className="py-4 px-6 font-mono font-medium text-gray-900">
                        <span
                          className="truncate max-w-[120px] inline-block"
                          title={payment.id}
                        >
                          #{payment.id.slice(0, 8)}...
                        </span>
                      </td>

                      {/* Booking Reference */}
                      <td className="py-4 px-6">
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-800">
                            Booking #{payment.bookingId.slice(0, 8)}
                          </span>
                          <span className="text-[10px] text-gray-400 font-mono mt-0.5">
                            Tech:{" "}
                            {payment.booking?.technicianId
                              ? `#${payment.booking.technicianId.slice(0, 6)}`
                              : "Unassigned"}
                          </span>
                        </div>
                      </td>

                      {/* Created At Date */}
                      <td className="py-4 px-6">
                        <div className="flex flex-col text-gray-600">
                          <span className="font-medium flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-gray-400" />
                            {formattedDate}
                          </span>
                          <span className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {formattedTime}
                          </span>
                        </div>
                      </td>

                      {/* Total Paid Cost */}
                      <td className="py-4 px-6">
                        <span className="font-bold text-gray-900 text-sm">
                          $
                          {parseFloat(
                            payment.booking?.totalCost || "0",
                          ).toFixed(2)}
                        </span>
                      </td>

                      {/* Payment Status Badge */}
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 font-bold rounded-full text-[10px] border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          {payment.status}
                        </span>
                      </td>

                      {/* View Details Redirect Button */}
                      <td className="py-4 px-6 text-right">
                        <Link
                          href={`/dashboard/get-payment-history/${payment?.id}`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-900 hover:bg-gray-800 text-white font-medium text-[11px] rounded-lg transition-all shadow-sm active:scale-95"
                        >
                          View Details
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
