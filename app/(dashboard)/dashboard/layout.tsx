import { getMe } from "@/app/_service/getMe";
import { CirclePlus, FolderPlus, House, Menu, UserShield } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  const userRole = user?.data?.role;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* ডানপাশের কনটেন্ট এলাকা */}
      <div className="drawer-content flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            className="btn btn-square btn-ghost drawer-button cursor-pointer lg:hidden"
          >
            <Menu size={22} />
          </label>
          <div className="px-4 font-bold flex items-center gap-2">
            <img className="rounded-full w-8 h-8" src="/logo.jpeg" alt="Logo" />
            <span>
              <span className="text-yellow-600">FixIT</span> Now
            </span>
          </div>
        </nav>

        {/* page content */}
        <main className="p-4 sm:p-6 flex-1 bg-base-100">{children}</main>
      </div>

      {/*  */}
      <div className="drawer-side z-50 is-drawer-close:overflow-visible">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <div className="flex min-h-full flex-col items-start bg-base-200 transition-all duration-300 is-drawer-close:w-16 is-drawer-open:w-64 p-2 sm:p-3">
          <ul className="menu w-full space-y-2 p-0">
            {/* হোম পেজ */}
            <li>
              <Link
                href="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3 p-3 rounded-lg hover:bg-base-300"
                data-tip="Homepage"
              >
                <House size={22} className="shrink-0" />
                <span className="is-drawer-close:hidden font-medium">
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
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3 p-3 rounded-lg hover:bg-base-300"
                    data-tip="All Categories"
                  >
                    <FolderPlus size={22} className="shrink-0" />
                    <span className="is-drawer-close:hidden font-medium">
                      All Categories
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/categories/create"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3 p-3 rounded-lg hover:bg-base-300"
                    data-tip="Post Category"
                  >
                    <CirclePlus size={22} className="shrink-0" />
                    <span className="is-drawer-close:hidden font-medium">
                      Post Category
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/get-all-user"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3 p-3 rounded-lg hover:bg-base-300"
                    data-tip="Get all user"
                  >
                    
                    <UserShield size={22} className="shrink-0"/>
                    <span className="is-drawer-close:hidden font-medium">
                      Get all user
                    </span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
