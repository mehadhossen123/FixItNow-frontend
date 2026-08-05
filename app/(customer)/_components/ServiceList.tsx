import React from "react";
import {
  Wrench,
  MapPin,
  Briefcase,
  UserCheck,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { ServiceCardProps } from "@/app/_type/type";




const ServiceList = ({ services }: ServiceCardProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      {/*  Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
          >
            {/*  */}
            <div className="p-6">
              {/* category and price */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-100">
                  <Wrench className="w-3.5 h-3.5" />
                  Service
                </span>
                <div className="text-right">
                  <span className="text-2xl font-black text-slate-900">
                    ৳{service.price}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium block">
                    Fixed Rate
                  </span>
                </div>
              </div>

              {/* title */}
              <h3 className="text-lg font-bold text-slate-800 line-clamp-2 mb-2 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>

              {/* description */}
              <p className="text-slate-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* technician profile */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 transition-colors group-hover:bg-orange-50/20 group-hover:border-orange-100">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="relative shrink-0">
                    <img
                      src={
                        service.technician?.user?.profileImg ||
                        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=150"
                      }
                      alt={service.technician?.user?.name || "Technician"}
                      className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <span
                      className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"
                      title="Available"
                    ></span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-slate-900 truncate flex items-center gap-1">
                      {service.technician?.user?.name || "Verified Technician"}
                      <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                    </h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">
                        {service.technician?.location || "Location not set"}
                      </span>
                    </p>
                  </div>
                </div>

                {/* এক্সপেরিয়েন্স ও বায়ো */}
                <div className="space-y-1.5 pt-2.5 border-t border-slate-200/60 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                    <Briefcase className="w-3.5 h-3.5 text-orange-500" />
                    <span>
                      {service.technician?.experience ?? 0} Years Experience
                    </span>
                  </div>
                  {service.technician?.bio && (
                    <p className="line-clamp-2 text-slate-500 italic">
                      {service.technician.bio}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* service booking button */}
            <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                Fast Service
              </span>

              <Link
                href={`/dashboard/get-service/${service.id}`}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs py-2.5 px-4 rounded-xl transition-all duration-200 shadow-md shadow-orange-500/20 active:scale-95"
              >
                View Details
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
