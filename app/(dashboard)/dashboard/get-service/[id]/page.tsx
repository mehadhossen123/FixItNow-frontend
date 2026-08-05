

import { getAllService } from "@/app/(customer)/_actions/getAllService";
import { ServiceItem } from "@/app/_type/type";
import React, { Suspense} from "react";
import {
  Wrench,
  MapPin,
  Briefcase,
  UserCheck,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  CalendarCheck,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import SingleServiceSkeleton from "./loading";
import BookNowButton from "@/app/(customer)/_components/BookNowButton";

interface PageProps {
  params: Promise<{ id: string }>;
}

const GetSingleService = async ({ params }: PageProps) => {
  const { id } = await params;
  const getService = await getAllService();
  const allService: ServiceItem[] = Array.isArray(getService)
    ? getService
    : getService?.data || [];

//   find single service
  const singleService = allService.find(
    (service: ServiceItem) => service?.id === id,
  );

//   if service not found 
  if (!singleService) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-800">
          Service Not Found!
        </h2>
        <p className="text-slate-500 text-sm mt-2 mb-6">
          The service you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-white font-medium rounded-xl text-sm hover:bg-orange-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Services
        </Link>
      </div>
    );
  }

  const { technician } = singleService;






  return (
    <Suspense fallback={<SingleServiceSkeleton></SingleServiceSkeleton>}>
      <div className="min-h-screen bg-slate-50/50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Back Link */}
          <Link
            href="/dashboard/get-service"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-orange-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          {/* Main Grid: Left Details & Right Booking Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 2 Columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* service header */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-100">
                    <Wrench className="w-3.5 h-3.5" />
                    Verified Service
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Satisfaction Guaranteed
                  </span>
                </div>

                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 leading-snug">
                  {singleService.title}
                </h1>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-800 mb-2">
                    Service Overview
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                    {singleService.description}
                  </p>
                </div>

                {/* features*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    Professional & Certified Technician
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    Safety & Safety Protocols Followed
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    Transparent Fixed Pricing
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    Post-Service Support
                  </div>
                </div>
              </div>

              {/* ২. technician profile card  */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-orange-500" />
                  Assigned Specialist
                </h3>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <img
                    src={
                      technician?.user?.profileImg ||
                      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=150"
                    }
                    alt={technician?.user?.name || "Technician"}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                  />

                  <div className="flex-1">
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                      {technician?.user?.name || "Expert Technician"}
                      <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                    </h4>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {technician?.location || "N/A"}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-slate-700">
                        <Briefcase className="w-3.5 h-3.5 text-orange-500" />
                        {technician?.experience ?? 0} Years Experience
                      </span>
                    </div>
                  </div>
                </div>

                {technician?.bio && (
                  <div className="mt-4 text-xs text-slate-600 bg-orange-50/30 p-3.5 rounded-xl border border-orange-100/50">
                    <span className="font-semibold text-slate-800 block mb-0.5">
                      About Technician:
                    </span>
                    <p className="italic">{technician.bio}</p>
                  </div>
                )}
              </div>
            </div>

            {/*  (Sticky Sidebar) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm sticky top-6 space-y-6">
                <div>
                  <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider mb-1">
                    Total Pricing
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-slate-900">
                      ৳{singleService.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      / fixed charge
                    </span>
                  </div>
                </div>
                <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-400" />
                      Service Duration
                    </span>
                    <span className="font-semibold text-slate-800">
                      ~60 Mins
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      Availability
                    </span>
                    <span className="font-semibold text-emerald-600">
                      Slots Open
                    </span>
                  </div>
                </div>
                {/*  Book Now Action Button */}
                <BookNowButton singleService={singleService} />
                <p className="text-[11px] text-slate-400 text-center leading-tight">
                  No advance payment needed. Pay after service completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default GetSingleService;
