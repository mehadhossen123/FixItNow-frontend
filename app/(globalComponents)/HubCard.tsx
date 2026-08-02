"use client";

import { motion } from "framer-motion";
import React from "react";

// ৮টি হাবের ডাটা অ্যারে
const hubsData = [
  {
    id: 1,
    name: "Dhaka Hub",
    location: "Dhaka Metro",
    percentage: "100%",
    target: "5,000",
    status: "LIVE",
  },
  {
    id: 2,
    name: "Chittagong Hub",
    location: "Chittagong City",
    percentage: "100%",
    target: "4,200",
    status: "LIVE",
  },
  {
    id: 3,
    name: "Sylhet Hub",
    location: "Sylhet Sadar",
    percentage: "100%",
    target: "3,500",
    status: "LIVE",
  },
  {
    id: 4,
    name: "Rajshahi Hub",
    location: "Rajshahi Metro",
    percentage: "100%",
    target: "3,000",
    status: "LIVE",
  },
  {
    id: 5,
    name: "Khulna Hub",
    location: "Khulna City",
    percentage: "100%",
    target: "2,800",
    status: "LIVE",
  },
  {
    id: 6,
    name: "Barisal Hub",
    location: "Barisal Sadar",
    percentage: "85%",
    target: "2,500",
    status: "ACTIVE",
  },
  {
    id: 7,
    name: "Rangpur Hub",
    location: "Rangpur Metro",
    percentage: "80%",
    target: "2,200",
    status: "ACTIVE",
  },
  {
    id: 8,
    name: "Mymensingh Hub",
    location: "Mymensingh City",
    percentage: "75%",
    target: "2,000",
    status: "LAUNCHING",
  },
];

const ServiceHubs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      {/* Header Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content">
          Our Regional Service Hubs
        </h2>
        <p className="text-base-content/70 mt-2">
          Tracking our service coverage and target milestones across major
          regions.
        </p>
      </div>

      {/* Grid Layout - Responsive 8 Cards */}
      <motion.div 
      initial={{opacity:0,y:-50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.8,ease:"easeOut"}}
      
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hubsData.map((hub) => (
          <motion.div
          whileHover={{scale:1.10,y:-5}}
            key={hub.id}
            className="bg-[#0f172a] text-white rounded-2xl p-6 shadow-xl border border-slate-800 flex flex-col items-center justify-between "
          >
            {/* Orange Circular Badge */}
            <div className="w-32 h-32 rounded-full border-4 border-amber-500 flex flex-col items-center justify-center p-2 text-center bg-slate-900/50 shadow-inner">
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                Hub {hub.id}
              </span>
              <span className="text-sm font-bold text-white leading-tight mt-0.5">
                {hub.name}
              </span>
              <span className="text-lg font-black text-amber-500 mt-1">
                {hub.percentage}
              </span>
            </div>

            {/* Target Details */}
            <div className="text-center my-6">
              <span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">
                Monthly Goal
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Target <span className="text-amber-400">{hub.target}</span>
              </h3>
              <p className="text-xs text-gray-400 mt-1">{hub.location}</p>
            </div>

            {/* Status Tag */}
            <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold text-amber-400">
              <span>🚀</span>
              <span className="tracking-widest uppercase">{hub.status}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceHubs;
