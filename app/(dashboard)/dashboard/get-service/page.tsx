import { getAllService } from "@/app/(customer)/_actions/getAllService";
import ServiceList from "@/app/(customer)/_components/ServiceList";
import React from "react";


const AllServiceGetPage = async () => {
  const servicesData = await getAllService();

  // 
  const services = Array.isArray(servicesData)
    ? servicesData
    : servicesData?.data || [];

  return (
    <div className="min-h-screen bg-slate-50/50 py-10">
      {/*  */}
      <div className="flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore All Services
          </h1>
          <p className="text-slate-600 mt-2 text-sm md:text-base">
            Find top-rated technicians and book your required home services
            instantly.
          </p>
        </div>
      </div>

      {/* (No Services Found) */}
      {services.length === 0 ? (
        <div className="max-w-7xl mx-auto px-4 text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-700">
            No Services Available
          </h3>
          <p className="text-slate-500 text-sm mt-1">
            Check back later or try refreshing the page.
          </p>
        </div>
      ) : (
        /*  UI */
        <ServiceList services={services}></ServiceList>
      )}
    </div>
  );
};

export default AllServiceGetPage;
