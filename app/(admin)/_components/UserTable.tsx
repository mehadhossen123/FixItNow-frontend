"use client";

import { useState } from "react";
import { User } from "@/app/_type/type";
import { Trash2, Shield, Mail, Calendar } from "lucide-react";
import { updateUserStatusAction } from "../_actions/updateUserStatus";
import { toast } from "sonner";

interface UserTableProps {
  users: User[];
}

export default function UserTable({ users }: UserTableProps) {

  const [userStatuses, setUserStatuses] = useState<{ [key: string]: string }>(
    {},
  );

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getRoleBadge = (role: string) => {
    if (role === "ADMIN") {
      return "bg-purple-100 text-purple-700 border-purple-200";
    } else if (role === "TECHNICIAN") {
      return "bg-blue-100 text-blue-700 border-blue-200";
    } else {
      return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

 
  const handleStatusChange = async(userId: string, newStatus: string) => {
   
    setUserStatuses((prev) => ({
      ...prev,
      [userId]: newStatus,
    }));

    const res=await updateUserStatusAction(userId,newStatus)

   
    if(res&& res.success==true){
      toast.success(res.data.message)

    }
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">User Management</h2>
          <p className="text-sm text-slate-500 mt-1">
            Total {users.length} registered users
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <th className="py-4 px-6">User Info</th>
              <th className="py-4 px-6">Role</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6">Joined Date</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {users.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-slate-500">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => {
               
                const currentStatus =
                  userStatuses[user.id] ||
                  user.status ||
                  (user.isActive ? "ACTIVE" : "BLOCKED");

              
                let statusColor =
                  "bg-emerald-50 text-emerald-700 border-emerald-200";
                if (
                
                  currentStatus === "BLOCKED"
                ) {
                  statusColor = "bg-rose-50 text-rose-700 border-rose-200";
                } else if (currentStatus === "PENDING") {
                  statusColor = "bg-amber-50 text-amber-700 border-amber-200";
                }

                return (
                  <tr
                    key={user.id}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                  
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-amber-500 flex items-center justify-center text-white font-semibold shadow-sm">
                          {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">
                            {user.name}
                          </p>
                          <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                            <Mail className="w-3 h-3" /> {user.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* রোল */}
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getRoleBadge(
                          user.role,
                        )}`}
                      >
                        <Shield className="w-3 h-3" />
                        {user.role}
                      </span>
                    </td>

                    {/*  */}
                    <td className="py-4 px-6">
                      <div
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${statusColor}`}
                      >
                        <select
                          value={currentStatus}
                          onChange={(e) =>
                            handleStatusChange(user.id, e.target.value)
                          }
                          className="bg-transparent font-medium cursor-pointer outline-none text-xs"
                        >
                          <option
                            value="ACTIVE"
                            className="bg-white text-slate-800"
                          >
                            ACTIVE
                          </option>
                         
                          <option
                            value="BLOCKED"
                            className="bg-white text-slate-800"
                          >
                            BLOCKED
                          </option>
                        </select>
                      </div>
                    </td>

                    {/* date */}
                    <td className="py-4 px-6 text-slate-500">
                      <div className="flex items-center gap-1.5 text-xs">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {formatDate(user.createdAt)}
                      </div>
                    </td>

                    {/* DELETE BUTTON */}
                    <td className="py-4 px-6 text-right">
                      <button
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                        title="Delete User"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
