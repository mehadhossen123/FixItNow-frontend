import { getMe } from "@/app/_service/getMe";
import {
  CirclePlus,
  FolderPlus,
  House,
  Menu,
  UserShield,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  const userRole = user?.data?.role;

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* 🟢 ১. টগল করার হিডেন চেকবক্স (Peer Class সহ) */}
      <input
        id="sidebar-toggle"
        type="checkbox"
        className="peer hidden"
        defaultChecked
      />

      {/* 🟢 ২. সাইডবার (peer-checked ট্রিগার অনুযায়ী রেসপন্স করবে) */}
      <aside className="fixed top-0 left-0 z-40 h-screen transition-all duration-300 bg-base-200 border-r border-base-300 flex flex-col w-16 peer-checked:w-64 overflow-hidden">
        {/* সাইডবার হেডার / লোগো */}
        <div className="h-16 flex items-center px-4 border-b border-base-300 shrink-0">
          <div className="flex items-center gap-3 min-w-max">
            <img
              className="rounded-full w-8 h-8 shrink-0"
              src="/logo.jpeg"
              alt="Logo"
            />
            <span className="font-bold text-lg whitespace-nowrap opacity-0 peer-checked:opacity-100 transition-opacity duration-200">
              <span className="text-yellow-600">FixIT</span> Now
            </span>
          </div>
        </div>

        {/* নেভিগেশন মেনু */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-2">
          <ul className="space-y-2 font-medium">
            {/* হোম পেজ */}
            <li>
              <Link
                href="/"
                className="flex items-center gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors"
                title="Homepage"
              >
                <House size={22} className="shrink-0" />
                <span className="whitespace-nowrap hidden peer-checked:inline font-medium">
                  Homepage
                </span>
              </Link>
            </li>

            {/* Admin Items */}
            {userRole === "ADMIN" && (
              <>
                <li>
                  <Link
                    href="/dashboard/get-category"
                    className="flex items-center gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors"
                    title="All Categories"
                  >
                    <FolderPlus size={22} className="shrink-0" />
                    <span className="whitespace-nowrap hidden peer-checked:inline font-medium">
                      All Categories
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/categories/create"
                    className="flex items-center gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors"
                    title="Post Category"
                  >
                    <CirclePlus size={22} className="shrink-0" />
                    <span className="whitespace-nowrap hidden peer-checked:inline font-medium">
                      Post Category
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/get-all-user"
                    className="flex items-center gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors"
                    title="Get all user"
                  >
                    <UserShield size={22} className="shrink-0" />
                    <span className="whitespace-nowrap hidden peer-checked:inline font-medium">
                      Get all user
                    </span>
                  </Link>
                </li>
              </>
            )}

            {/* Technician Items */}
            {user && userRole === "TECHNICIAN" && (
              <li>
                <Link
                  href="/dashboard/post-service"
                  className="flex items-center gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors"
                  title="Post service"
                >
                  <Wrench size={22} className="shrink-0" />
                  <span className="whitespace-nowrap hidden peer-checked:inline font-medium">
                    Post service
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </aside>

      {/* 🟢 ৩. মূল কন্টেন্ট এরিয়া (Peer Checked হলে মার্জিন অ্যাডজাস্ট হবে) */}
      <div className="flex-1 flex flex-col min-h-screen transition-all duration-300 ml-16 peer-checked:ml-64">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300 px-4 sticky top-0 z-30 border-b border-base-300">
          <label
            htmlFor="sidebar-toggle"
            className="btn btn-square btn-ghost cursor-pointer"
            title="Toggle Menu"
          >
            <Menu size={22} />
          </label>

          <div className="px-4 font-bold flex items-center gap-2">
            <span>Dashboard</span>
          </div>
        </nav>

        {/* Page Content */}
        <main className="p-4 sm:p-6 flex-1 bg-base-100">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
