import { getPaymentHistory } from "@/app/(payment)/_action/getPaymentHistory";
import { IPaymentHistory } from "@/app/_type/type";
import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Clock,
  ShieldCheck,
  CreditCard,
  User,
  Wrench,
  Receipt,
  FileText,
} from "lucide-react";

const SinglePaymentHistory = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const allPayment = await getPaymentHistory();
  const payments = Array.isArray(allPayment)
    ? allPayment
    : allPayment?.data || [];

  const singlePayment: IPaymentHistory | undefined = payments.find(
    (pay: IPaymentHistory) => pay.id === id,
  );

  // Error/Not Found State
  if (!singlePayment) {
    return (
      <div className="max-w-xl mx-auto my-20 p-6 text-center bg-white border border-gray-200 rounded-2xl shadow-sm">
        <Receipt className="w-12 h-12 text-gray-400 mx-auto mb-3" />
        <h2 className="text-lg font-bold text-gray-900">
          Payment Record Not Found
        </h2>
        <p className="text-xs text-gray-500 mt-1 mb-6">
          No matching transaction was found for ID:{" "}
          <span className="font-mono">{id}</span>
        </p>
        <Link
          href="/dashboard/payment-history"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-xl text-xs font-medium hover:bg-gray-800 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Payment History
        </Link>
      </div>
    );
  }

  const { booking } = singlePayment;
  const formattedAmount = parseFloat(booking?.totalCost || "0").toFixed(2);
  const paymentDate = new Date(singlePayment.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );
  const paymentTime = new Date(singlePayment.createdAt).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
    },
  );

  return (
    <div className="max-w-3xl mx-auto my-8 p-4 sm:p-6">
      {/* Top Bar Actions */}
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/dashboard/get-payment-history"
          className="inline-flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to History
        </Link>

        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-700 font-bold rounded-full text-[10px] border border-emerald-200">
          <CheckCircle2 className="w-3 h-3" />
          {singlePayment.status}
        </span>
      </div>

      {/* Main SaaS Invoice Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        {/* Brand & Receipt Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                <Receipt className="w-5 h-5" />
              </div>
              <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                Payment Receipt
              </h1>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Official transaction confirmation for service booking.
            </p>
          </div>

          <div className="sm:text-right">
            <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">
              Total Paid
            </span>
            <span className="text-2xl font-bold text-emerald-600">
              ${formattedAmount}
            </span>
          </div>
        </div>

        {/* Transaction Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-gray-100 text-xs">
          <div>
            <span className="text-gray-400 block uppercase font-semibold text-[10px]">
              Transaction ID
            </span>
            <span className="font-mono font-semibold text-gray-800 break-all">
              {singlePayment.id}
            </span>
          </div>
          <div>
            <span className="text-gray-400 block uppercase font-semibold text-[10px]">
              Booking Reference
            </span>
            <span className="font-mono font-semibold text-gray-800 break-all">
              {singlePayment.bookingId}
            </span>
          </div>
          <div>
            <span className="text-gray-400 block uppercase font-semibold text-[10px]">
              Date & Time
            </span>
            <span className="font-medium text-gray-800 flex items-center gap-1 mt-0.5">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              {paymentDate} at {paymentTime}
            </span>
          </div>
          <div>
            <span className="text-gray-400 block uppercase font-semibold text-[10px]">
              Payment Method
            </span>
            <span className="font-medium text-gray-800 flex items-center gap-1 mt-0.5">
              <CreditCard className="w-3.5 h-3.5 text-gray-400" />
              Stripe Secured Card
            </span>
          </div>
        </div>

        {/* Associated Entity Details (Customer & Technician) */}
        <div className="py-6 border-b border-gray-100">
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
            Service Entities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-gray-50/80 p-3 rounded-xl border border-gray-100 flex items-center gap-3">
              <User className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-[10px] text-gray-400 font-medium">
                  Customer ID
                </p>
                <p className="font-mono font-semibold text-gray-800 truncate max-w-[180px]">
                  {singlePayment.customerId}
                </p>
              </div>
            </div>

            <div className="bg-gray-50/80 p-3 rounded-xl border border-gray-100 flex items-center gap-3">
              <Wrench className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-[10px] text-gray-400 font-medium">
                  Technician ID
                </p>
                <p className="font-mono font-semibold text-gray-800 truncate max-w-[180px]">
                  {booking?.technicianId || "Unassigned"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Breakdown Table */}
        <div className="py-6 border-b border-gray-100">
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
            Line Items
          </h3>
          <div className="w-full text-xs">
            <div className="flex justify-between py-2 font-semibold text-gray-400 border-b border-gray-100 uppercase text-[10px]">
              <span>Item Description</span>
              <span>Subtotal</span>
            </div>
            <div className="flex justify-between py-3 text-gray-800 font-medium border-b border-gray-50">
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-400" />
                Service Order Booking Charge
              </span>
              <span>${formattedAmount}</span>
            </div>
          </div>

          <div className="mt-4 pt-2 space-y-1.5 text-xs text-right">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>${formattedAmount}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Gateway Charges</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between font-bold text-gray-900 text-sm pt-2 border-t border-gray-100">
              <span>Total Paid</span>
              <span className="text-emerald-600">${formattedAmount}</span>
            </div>
          </div>
        </div>

        {/* Verification Footer */}
        <div className="mt-6 bg-emerald-50/50 border border-emerald-100 p-3.5 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span className="text-xs font-medium text-emerald-900">
              Verified System Record
            </span>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">
            Paid
          </span>
        </div>
      </div>
    </div>
  );
};

export default SinglePaymentHistory;
