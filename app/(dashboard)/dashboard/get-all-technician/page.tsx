import { getAllTechnician } from "@/app/(customer)/_actions/getTechnician";
import React from "react";
import { MapPin, Briefcase, UserCheck, Star, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; 
import { Technician } from "@/app/_type/type";



const GetAllTechnician = async () => {
  // fetch data
  const techniciansData = await getAllTechnician();
  const technicians: Technician[] = Array.isArray(techniciansData)
    ? techniciansData
    : techniciansData?.data || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Skilled Technicians
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Find and hire expert technicians available for your service
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-100">
            <UserCheck className="w-4 h-4" />
            Total Technicians: {technicians.length}
          </span>
        </div>
      </div>

      {technicians.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <p className="text-slate-500 text-sm">
            No technicians found at the moment.
          </p>
        </div>
      ) : (
        /* Responsive Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technicians.map((tech) => (
            <div
              key={tech.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="relative">
                    {tech.user?.image ? (
                      <Image
                        src={tech.user.image}
                        alt={tech.user.name || "Technician"}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-2xl object-cover ring-2 ring-orange-500/10"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white font-bold text-xl shadow-md">
                        {tech.user?.name ? tech.user.name.charAt(0) : "T"}
                      </div>
                    )}
                    <span
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"
                      title="Available"
                    />
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-100">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    4.9
                  </span>
                </div>

                {/* technician profile */}
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-orange-500 transition-colors">
                    {tech.user?.name || "Expert Technician"}
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    {tech.user?.email || "verified.technician@fixit.com"}
                  </p>
                </div>

                {/* bio */}
                <p className="text-xs text-slate-600 mt-3 line-clamp-2 min-h-[32px]">
                  {tech.bio ||
                    "Professional technician dedicated to providing top-quality repairs and services."}
                </p>

                {/* experience and location */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>
                      Experience:{" "}
                      <strong className="text-slate-800">
                        {tech.experience}{" "}
                        {tech.experience > 1 ? "Years" : "Year"}
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>
                      Location:{" "}
                      <strong className="text-slate-800">
                        {tech.location}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* view profile button */}
              <div className="mt-6 pt-2">
                <Link
                  href={`/dashboard/get-all-technician/${tech.id}`}
                  className="w-full bg-slate-900 hover:bg-orange-500 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm text-center"
                >
                  <User className="w-4 h-4" />
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetAllTechnician;
