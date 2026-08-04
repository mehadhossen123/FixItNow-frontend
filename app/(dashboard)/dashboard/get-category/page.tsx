import { getAllCategories } from "@/app/(admin)/_actions/getAllCategory";
import { Category } from "@/app/_type/type";
import Link from "next/link";

import { Edit, Trash2, Plus, Calendar, Tag } from "lucide-react";
import { Suspense } from "react";
import CategorySkeleton from "./loading";
import CategoryCart from "@/app/(admin)/_components/CategoryCart";

const GetAllCategory = async () => {
  const response = await getAllCategories();

 
  const categories: Category[] = Array.isArray(response)
    ? response
    : response?.data || [];

  return (
    <Suspense fallback={<CategorySkeleton></CategorySkeleton>}>
      <div className="w-full min-h-screen bg-slate-100 p-4 sm:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/*header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-[#1E293B]">
                  Mr
                </span>
                <span className="text-2xl font-black text-orange-500">
                  FixIT
                </span>
              </div>
              <h1 className="text-xl font-bold text-[#1E293B] mt-1">
                All Service Categories ({categories.length})
              </h1>
              <p className="text-xs text-slate-500">
                Manage, edit, or remove service categories for technicians
              </p>
            </div>

            <Link
              href="/dashboard/categories/create"
              className="btn bg-orange-500 hover:bg-orange-600 text-white font-semibold border-none shadow-md shadow-orange-500/20 flex items-center gap-2"
            >
              <Plus size={18} />
              Add New Category
            </Link>
          </div>

          {/*  */}
          {categories.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-slate-200">
              <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">
                <Tag size={32} />
              </div>
              <h3 className="text-lg font-bold text-[#1E293B]">
                No Categories Found
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                You haven't created any service categories yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
               <CategoryCart key={category?.id} category={category}></CategoryCart>
              ))}
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default GetAllCategory;
