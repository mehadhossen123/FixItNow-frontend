import { getAllTechnician } from "@/app/(customer)/_actions/getTechnician";
import { Technician } from "@/app/_type/type";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Briefcase,
  Star,
  Mail,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowLeft,
  ShieldCheck,
  User,
} from "lucide-react";

const SingleTechnician = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const techniciansData = await getAllTechnician();
  const technicians: Technician[] = Array.isArray(techniciansData)
    ? techniciansData
    : techniciansData?.data || [];

  const technician = technicians.find((tec) => tec.id === id);

  
  if (!technician) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex p-4 rounded-full bg-orange-50 text-orange-500 mb-4">
          <User className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">
          Technician Not Found
        </h2>
        <p className="text-slate-500 mt-2 text-sm">
          The technician profile you are looking for does not exist or has been
          removed.
        </p>
        <Link
          href="/dashboard/get-all-technician"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-orange-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Technicians
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* */}
      <div className="mb-6">
        <Link
          href="/technicians"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-orange-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Technicians
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/*  (Sidebar/Info) */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-6">
            <div className="flex flex-col items-center text-center">
              {/*  */}
              <div className="relative mb-4">
                {technician.user?.image ? (
                  <Image
                    src={technician.user.image}
                    alt={technician.user.name || "Technician"}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/10"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white font-bold text-3xl shadow-md">
                    {technician.user?.name
                      ? technician.user.name.charAt(0)
                      : "T"}
                  </div>
                )}
                <span
                  className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full"
                  title="Available"
                />
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-full border border-amber-100 mb-3">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="text-xs font-semibold text-amber-700">
                  4.9 Rating
                </span>
              </div>

              <h1 className="text-xl font-bold text-slate-900">
                {technician.user?.name || "Expert Technician"}
              </h1>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {technician.user?.email || "verified.technician@fixit.com"}
              </p>

              <div className="w-full border-t border-slate-100 my-5" />

              {/*  */}
              <div className="w-full space-y-3 text-left text-xs text-slate-600">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50">
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-orange-500" /> Experience
                  </span>
                  <strong className="text-slate-800">
                    {technician.experience}{" "}
                    {technician.experience > 1 ? "Years" : "Year"}
                  </strong>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" /> Location
                  </span>
                  <strong className="text-slate-800">
                    {technician.location}
                  </strong>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> Status
                  </span>
                  <strong className="text-emerald-600 font-semibold">
                    Verified Pro
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  (Bio, Slots, Services) */}
        <div className="lg:col-span-2 space-y-6">
          {/*  */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              About Technician
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {technician.bio ||
                "Professional technician dedicated to providing top-quality repairs and services. Highly experienced in troubleshooting and maintenance with a track record of high customer satisfaction."}
            </p>
          </div>

          {/*  (Available Slots) */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-orange-500" /> Available
                Schedule
              </h2>
              <span className="text-xs text-slate-400">
                {technician.slots?.length || 0} Slots Available
              </span>
            </div>

            {technician.slots && technician.slots.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {technician.slots.map((slot: any, index: number) => (
                  <div
                    key={slot.id || index}
                    className="p-3 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-between hover:border-orange-200 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>
                        {slot.time || slot.startTime || "Flexible Time"}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Open
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-slate-50 text-center border border-dashed border-slate-200">
                <p className="text-xs text-slate-500">
                  No explicit time slots listed. Contact for custom appointment
                  booking.
                </p>
              </div>
            )}
          </div>

          {/* */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-sm">
            <h3 className="text-base font-bold mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-orange-400" /> Guaranteed
              Quality Service
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Background Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>On-time Arrival</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTechnician;
