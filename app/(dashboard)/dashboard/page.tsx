import React from "react";
import { getMe } from "@/app/_service/getMe";


export default async function DashboardPage() {
  const user = await getMe();
  const userName = user?.data?.name || "User";

  return (
    <div className="p-6 bg-base-200 rounded-2xl shadow-sm border border-base-300">
      <h1 className="text-2xl font-bold">
        Welcome back, <span className="text-orange-500">{userName}</span>
      </h1>
      <p className="text-sm text-slate-500 mt-2">
        Select an option from the sidebar to manage your categories or services.
      </p>

      {/* Quick Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-base-100 rounded-xl border border-base-300 shadow-sm">
          <p className="text-xs text-slate-400 font-semibold">ROLE</p>
          <h2 className="text-lg font-bold text-orange-500 mt-1">
            {user?.data?.role || "GUEST"}
          </h2>
        </div>
      </div>
    </div>
  );
}
