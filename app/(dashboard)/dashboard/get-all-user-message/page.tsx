import { getAllMessage } from "@/app/(admin)/_actions/getAllCategory copy";
import { Message, MessageItem } from "@/app/_type/type";
import {
  Mail,
  Calendar,
  Phone,
  User,
  MessageSquare,
  Search,
  Filter,
} from "lucide-react";

// Types derived from your JSON structure


const UserMessagePage = async () => {
  const rawMessages = await getAllMessage();
  const messages: MessageItem[] = Array.isArray(rawMessages)
    ? rawMessages
    : rawMessages?.data || [];

  return (
    <div className="p-6 md:p-8 space-y-8 bg-slate-50/50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Customer Inquiries & Messages
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage and respond to user messages submitted through the contact
            form.
          </p>
        </div>

        {/* Action / Search Bar */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 w-full sm:w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium border border-gray-200 rounded-lg bg-white hover:bg-gray-50 text-gray-700 transition">
            <Filter className="w-4 h-4 text-gray-500" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Analytics / Quick Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Total Messages
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {messages.length}
            </p>
          </div>
          <div className="p-3 bg-orange-50 rounded-lg text-orange-600">
            <MessageSquare className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Recent Today
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {
                messages.filter(
                  (m) =>
                    new Date(m.createdAt).toDateString() ===
                    new Date().toDateString(),
                ).length
              }
            </p>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
            <Calendar className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Active Users
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {new Set(messages.map((m) => m.email)).size}
            </p>
          </div>
          <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
            <User className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Messages Data Table */}
      <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <h2 className="text-sm font-semibold text-gray-800">
            All Received Messages ({messages.length})
          </h2>
        </div>

        {messages.length === 0 ? (
          <div className="p-12 text-center text-gray-500 space-y-3">
            <MessageSquare className="w-10 h-10 mx-auto text-gray-300" />
            <p className="text-base font-medium">No messages found</p>
            <p className="text-xs text-gray-400">
              When users submit contact forms, they will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3.5">User Info</th>
                  <th className="px-6 py-3.5">Contact Details</th>
                  <th className="px-6 py-3.5">Message Content</th>
                  <th className="px-6 py-3.5">Submitted Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {messages.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition">
                    {/* User Name & Avatar */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-semibold text-xs flex items-center justify-center uppercase shadow-sm">
                          {item.name ? item.name.slice(0, 2) : "U"}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 capitalize">
                            {item.name || "N/A"}
                          </p>
                          <p className="text-xs text-gray-400">
                            ID: {item.id.slice(0, 8)}...
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Email & Phone */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-gray-700">
                          <Mail className="w-3.5 h-3.5 text-gray-400" />
                          <a
                            href={`mailto:${item.email}`}
                            className="hover:underline hover:text-orange-600"
                          >
                            {item.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <Phone className="w-3.5 h-3.5 text-gray-400" />
                          <span>{item.phone}</span>
                        </div>
                      </div>
                    </td>

                    {/* Message Body */}
                    <td className="px-6 py-4 max-w-sm">
                      <p className="text-gray-800 line-clamp-2 text-xs leading-relaxed bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                        "{item.text}"
                      </p>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span>
                          {new Date(item.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            },
                          )}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMessagePage;
