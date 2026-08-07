import { getMe } from "@/app/_service/getMe";
import {
  CirclePlus,
  FolderPlus,
  GroupIcon,
  HistoryIcon,
  House,
  List,
  ListChecks,
  ListChevronsDownUp,
  ListSortDescending,
  LucideNotebookTabs,
  Menu,
  PlusIcon,
  Users,
  UserShield,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  const userRole = user?.data?.role ||null


  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Hidden checkbox for sidebar toggle */}
      <input
        id="sidebar-toggle"
        type="checkbox"
        className="peer hidden"
        defaultChecked
      />

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-40 h-screen bg-base-200 border-r border-base-300 flex flex-col transition-all duration-300 ease-in-out w-16 peer-checked:w-64 overflow-hidden">
        {/* Sidebar Header / Logo */}
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

        {/* Navigation Menu */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-2">
          <ul className="space-y-2 font-medium">
            {/* Homepage */}
            <li>
              <Link href="/">
                <button
                  className="w-full cursor-pointer flex items-center gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors relative group"
                  title="Homepage"
                >
                  <House size={22} className="shrink-0" />
                  <span className="whitespace-nowrap opacity-0 peer-checked:opacity-100 transition-opacity duration-200 inline-block">
                    Homepage
                  </span>
                  {/* Tooltip for collapsed state */}
                  <span className="absolute left-16 bg-base-300 text-base-content text-sm px-2 py-1 rounded opacity-0 pointer-events-none peer-checked:hidden group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Homepage
                  </span>
                </button>
              </Link>
            </li>

            {/* Admin Items */}
            {userRole === "ADMIN" && (
              <>
                <li>
                  <Link href="/dashboard/get-category">
                    <button
                      className="w-full cursor-pointer flex items-center gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors relative group"
                      title="All Categories"
                    >
                      <FolderPlus size={22} className="shrink-0" />
                      <span className="whitespace-nowrap opacity-0 peer-checked:opacity-100 transition-opacity duration-200 inline-block">
                        All Categories
                      </span>
                      <span className="absolute left-16 bg-base-300 text-base-content text-sm px-2 py-1 rounded opacity-0 pointer-events-none peer-checked:hidden group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        All Categories
                      </span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/categories/create">
                    <button
                      className="w-full cursor-pointer flex items-center gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors relative group"
                      title="Post Category"
                    >
                      <CirclePlus size={22} className="shrink-0" />
                      <span className="whitespace-nowrap opacity-0 peer-checked:opacity-100 transition-opacity duration-200 inline-block">
                        Post Category
                      </span>
                      <span className="absolute left-16 bg-base-300 text-base-content text-sm px-2 py-1 rounded opacity-0 pointer-events-none peer-checked:hidden group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        Post Category
                      </span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/get-admin-all-booking">
                    <button
                      className="w-full cursor-pointer flex items-center gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors relative group"
                      title="All Booking"
                    >
                      <ListChevronsDownUp size={22} className="shrink-0" />
                      <span className="whitespace-nowrap opacity-0 peer-checked:opacity-100 transition-opacity duration-200 inline-block">
                        All Booking
                      </span>
                      <span className="absolute left-16 bg-base-300 text-base-content text-sm px-2 py-1 rounded opacity-0 pointer-events-none peer-checked:hidden group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        All Booking
                      </span>
                    </button>
                  </Link>
                </li>

                <li>
                  <Link href="/dashboard/get-all-user">
                    <button
                      className="w-full cursor-pointer flex items-center gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors relative group"
                      title="All users"
                    >
                      <GroupIcon size={22} className="shrink-0"></GroupIcon>
                      <span className="whitespace-nowrap opacity-0 peer-checked:opacity-100 transition-opacity duration-200 inline-block">
                        All users
                      </span>
                      <span className="absolute left-16 bg-base-300 text-base-content text-sm px-2 py-1 rounded opacity-0 pointer-events-none peer-checked:hidden group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        All users
                      </span>
                    </button>
                  </Link>
                </li>
              </>
            )}

            {/* Technician Items */}
            {userRole === "TECHNICIAN" && (
              <>
                <li>
                  <Link href="/dashboard/post-service">
                    <button
                      className="w-full flex items-center cursor-pointer gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors relative group"
                      title="All Requests"
                    >
                      <PlusIcon size={22} className="shrink-0"></PlusIcon>
                      <span className="whitespace-nowrap opacity-0 peer-checked:opacity-100 transition-opacity duration-200 inline-block">
                        Post Service
                      </span>
                      <span className="absolute left-16 bg-base-300 text-base-content text-sm px-2 py-1 rounded opacity-0 pointer-events-none peer-checked:hidden group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        Post Service
                      </span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/get-technician-booking">
                    <button
                      className="w-full flex cursor-pointer items-center gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors relative group"
                      title="My Requests"
                    >
                      <LucideNotebookTabs size={22} className="shrink-0" />
                      <span className="whitespace-nowrap opacity-0 peer-checked:opacity-100 transition-opacity duration-200 inline-block">
                        My Booking
                      </span>
                      <span className="absolute left-16 bg-base-300 text-base-content text-sm px-2 py-1 rounded opacity-0 pointer-events-none peer-checked:hidden group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        My Booking
                      </span>
                    </button>
                  </Link>
                </li>
              </>
            )}

            {/* Customer Items */}
            { (userRole===null ||userRole === "CUSTOMER") && (
              <>
                <li>
                  <Link href="/dashboard/get-service">
                    <button
                      className="w-full flex cursor-pointer items-center gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors relative group"
                      title="All Service"
                    >
                      <List size={22} className="shrink-0" />
                      <span className="whitespace-nowrap opacity-0 peer-checked:opacity-100 transition-opacity duration-200 inline-block">
                        All Service
                      </span>
                      <span className="absolute left-16 bg-base-300 text-base-content text-sm px-2 py-1 rounded opacity-0 pointer-events-none peer-checked:hidden group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        All Service
                      </span>
                    </button>
                  </Link>
                </li>

                <li>
                  <Link href="/dashboard/get-service-category">
                    <button
                      className="w-full flex cursor-pointer items-center gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors relative group"
                      title="Service Category"
                    >
                      <ListSortDescending size={22} className="shrink-0" />
                      <span className="whitespace-nowrap opacity-0 peer-checked:opacity-100 transition-opacity duration-200 inline-block">
                        Service Category
                      </span>
                      <span className="absolute left-16 bg-base-300 text-base-content text-sm px-2 py-1 rounded opacity-0 pointer-events-none peer-checked:hidden group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        Service Category
                      </span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/get-all-technician">
                    <button
                      className="w-full flex cursor-pointer items-center gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors relative group"
                      title=" All Technician"
                    >
                      <Users size={22} className="shrink-0" />
                      <span className="whitespace-nowrap opacity-0 peer-checked:opacity-100 transition-opacity duration-200 inline-block">
                        All Technician
                      </span>
                      <span className="absolute left-16 bg-base-300 text-base-content text-sm px-2 py-1 rounded opacity-0 pointer-events-none peer-checked:hidden group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        All Technician
                      </span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/get-all-booking">
                    <button
                      className="w-full flex cursor-pointer items-center gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors relative group"
                      title=" My Booking"
                    >
                      <ListChecks size={22} className="shrink-0" />
                      <span className="whitespace-nowrap opacity-0 peer-checked:opacity-100 transition-opacity duration-200 inline-block">
                        My Booking
                      </span>
                      <span className="absolute left-16 bg-base-300 text-base-content text-sm px-2 py-1 rounded opacity-0 pointer-events-none peer-checked:hidden group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        My Booking
                      </span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/get-payment-history">
                    <button
                      className="w-full flex cursor-pointer items-center gap-4 p-3 text-base-content rounded-lg hover:bg-base-300 transition-colors relative group"
                      title="Payment History"
                    >
                      <HistoryIcon size={22} className="shrink-0" />
                      <span className="whitespace-nowrap opacity-0 peer-checked:opacity-100 transition-opacity duration-200 inline-block">
                        Payment History
                      </span>
                      <span className="absolute left-16 bg-base-300 text-base-content text-sm px-2 py-1 rounded opacity-0 pointer-events-none peer-checked:hidden group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        Payment history
                      </span>
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Sidebar Footer / User Profile */}
        <div className="h-16 flex items-center px-4 border-t border-base-300 shrink-0">
          <div className="flex items-center gap-3 min-w-max">
            <img
              className="rounded-full w-8 h-8 shrink-0"
              src={user?.data?.profileImage || "/avatar.png"}
              alt="User Avatar"
            />
            <div className="opacity-0 peer-checked:opacity-100 transition-opacity duration-200">
              <p className="text-sm font-semibold whitespace-nowrap">
                {user?.data?.name}
              </p>
              <p className="text-xs text-base-content opacity-70 whitespace-nowrap">
                {user?.data?.role}
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-16 peer-checked:ml-64 transition-all duration-300 ease-in-out">
        <header className="sticky top-0 z-30 h-16 bg-white border-b border-base-300 flex items-center px-6 gap-4">
          <label htmlFor="sidebar-toggle" className="cursor-pointer">
            <Menu size={24} className="text-base-content" />
          </label>
          <h1 className="text-2xl font-bold text-base-content">Dashboard</h1>
        </header>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
