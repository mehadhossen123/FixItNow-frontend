import { getAllCategoriesForCustomer } from "@/app/(customer)/_actions/getAllCategoryForCustomer";
import React from "react";
import { Zap, Wrench, Droplet, Tv, Wind, FolderTree } from "lucide-react";

// 🟢 ক্যাটাগরি টাইপ ইন্টারফেস
export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

// 🟢 ক্যাটাগরির নাম অনুযায়ী আইকন ও কালার সেট করার হেল্পার ফাংশন
const getCategoryIcon = (name: string) => {
  const lowerName = name.toLowerCase();

  if (lowerName.includes("electric")) {
    return {
      icon: Zap,
      bg: "bg-amber-500/10 text-amber-600 border-amber-200/50",
      accent: "group-hover:bg-amber-500",
    };
  }
  if (lowerName.includes("plumb") || lowerName.includes("water")) {
    return {
      icon: Droplet,
      bg: "bg-blue-500/10 text-blue-600 border-blue-200/50",
      accent: "group-hover:bg-blue-500",
    };
  }
  if (lowerName.includes("ac") || lowerName.includes("cooling")) {
    return {
      icon: Wind,
      bg: "bg-sky-500/10 text-sky-600 border-sky-200/50",
      accent: "group-hover:bg-sky-500",
    };
  }
  if (
    lowerName.includes("appliance") ||
    lowerName.includes("tv") ||
    lowerName.includes("fridge")
  ) {
    return {
      icon: Tv,
      bg: "bg-purple-500/10 text-purple-600 border-purple-200/50",
      accent: "group-hover:bg-purple-500",
    };
  }

  // Default Icon
  return {
    icon: Wrench,
    bg: "bg-orange-500/10 text-orange-600 border-orange-200/50",
    accent: "group-hover:bg-orange-500",
  };
};

const GetServiceCategoryForCustomer = async () => {
  const res = await getAllCategoriesForCustomer();

  const categories: CategoryItem[] = Array.isArray(res) ? res : res?.data || [];

  return (
    <section className="py-12 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold tracking-wider text-orange-500 uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
              Categories
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">
              Explore Our Services
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Browse through our available service categories.
            </p>
          </div>
        </div>

        {/* Categories Section */}
        {categories.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200/80">
            <FolderTree className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-slate-500 font-medium text-sm">
              No categories found.
            </p>
          </div>
        ) : (
          /* Static Card Grid (No Link / Routing) */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {categories.map((cat) => {
              const style = getCategoryIcon(cat.name);
              const IconComponent = style.icon;

              return (
                <div
                  key={cat.id}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div>
                    {/* Icon Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-colors duration-300 ${style.bg} ${style.accent} group-hover:text-white`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400 group-hover:text-orange-500 transition-colors">
                        Available
                      </span>
                    </div>

                    {/* Category Name */}
                    <h3 className="text-base font-bold text-slate-800 mb-1.5 group-hover:text-orange-600 transition-colors">
                      {cat.name}
                    </h3>

                    {/* Category Description */}
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  {/* Accent Line */}
                  <div className="w-full h-1 bg-slate-100 group-hover:bg-orange-500 rounded-full mt-4 transition-colors"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default GetServiceCategoryForCustomer;
