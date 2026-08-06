"use client";


import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Printer,
  ArrowLeft,
  ShieldCheck,
  FileText,
} from "lucide-react";
import Link from "next/link";

const PaymentSuccessPage = () => {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");
  const rawAmount = searchParams.get("amount");

  // Format amount safely
  const formattedAmount = rawAmount ? parseFloat(rawAmount).toFixed(2) : "0.00";

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-4">
      {/* Printable Invoice Container */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm print:shadow-none print:border-none print:p-0">
        {/* Header & Brand Section */}
        <div className="flex justify-between items-start border-b border-gray-100 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                INVOICE
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Payment Status:{" "}
              <span className="text-emerald-600 font-semibold uppercase">
                Paid
              </span>
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-400 uppercase font-semibold">
              Date
            </p>
            <p className="text-xs font-medium text-gray-800">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Invoice Metadata Grid */}
        <div className="grid grid-cols-2 gap-4 py-6 text-xs border-b border-gray-100">
          <div>
            <span className="text-gray-400 block uppercase font-semibold text-[10px]">
              Booking Reference
            </span>
            <span className="font-mono font-semibold text-gray-800 break-all text-xs">
              {bookingId || "N/A"}
            </span>
          </div>
          <div className="text-right">
            <span className="text-gray-400 block uppercase font-semibold text-[10px]">
              Payment Method
            </span>
            <span className="font-medium text-gray-800">
              Stripe Online Payment
            </span>
          </div>
        </div>

        {/* Itemized Service Table */}
        <div className="py-6 border-b border-gray-100">
          <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3 tracking-wider">
            Service Summary
          </h3>
          <div className="w-full text-xs">
            <div className="flex justify-between py-2 font-semibold text-gray-500 border-b border-gray-100 uppercase text-[10px]">
              <span>Description</span>
              <span>Amount</span>
            </div>
            <div className="flex justify-between py-3 text-gray-800 font-medium border-b border-gray-50">
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-400" />
                Service Booking Payment
              </span>
              <span>${formattedAmount}</span>
            </div>
          </div>
        </div>

        {/* Pricing Calculation Summary */}
        <div className="py-4 border-b border-gray-100">
          <div className="flex justify-between items-center text-xs py-1 text-gray-600">
            <span>Subtotal</span>
            <span className="font-medium">${formattedAmount}</span>
          </div>
          <div className="flex justify-between items-center text-xs py-1 text-gray-600">
            <span>Tax / Gateway Processing Fee</span>
            <span className="font-medium">$0.00</span>
          </div>
          <div className="flex justify-between items-center text-sm py-3 mt-2 border-t border-gray-100 font-bold text-gray-900">
            <span>Total Amount Paid</span>
            <span className="text-emerald-600 text-lg">${formattedAmount}</span>
          </div>
        </div>

        {/* Status Confirmation Badge */}
        <div className="mt-6 flex items-center justify-between bg-emerald-50/50 border border-emerald-100 p-3.5 rounded-xl">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span className="text-xs font-medium text-emerald-900">
              Payment Secured & Verified
            </span>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">
            Official Receipt
          </span>
        </div>

        {/* Footer Note */}
        <div className="pt-6 text-center text-[11px] text-gray-400">
          Thank you for your trust! If you have any questions, please reach out
          to our support team.
        </div>
      </div>

      {/* Action Buttons (Hidden during Printing) */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          href="/dashboard/get-all-booking"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to My Bookings
        </Link>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm rounded-xl transition-all shadow-sm active:scale-95"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Download Receipt</span>
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
