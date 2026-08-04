import { Calendar, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const CategoryCart = ({category}:any) => {
  return (
    <div
      key={category.id}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-orange-200 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-lg group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
              {category.name.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-lg font-bold text-[#1E293B] line-clamp-1">
              {category.name}
            </h2>
          </div>

          {/* EDIT & DELETE BUTTONS */}
          <div className="flex items-center gap-1">
            {/* Edit Button */}
            <Link
              href={`/dashboard/categories/edit/${category.id}`}
              className="btn btn-ghost btn-xs btn-square text-slate-500 hover:text-orange-500 hover:bg-orange-50"
              title="Edit Category"
            >
              <Edit size={16} />
            </Link>

            {/* Delete Button */}
            <button
              className="btn btn-ghost btn-xs btn-square text-slate-400 hover:text-rose-600 hover:bg-rose-50"
              title="Delete Category"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        {/*descripton*/}
        <p className="text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
          {category.description || "No description provided."}
        </p>
      </div>

      {/* footer and date */}
      <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <Calendar size={13} />
          {category.createdAt
            ? new Date(category.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "N/A"}
        </span>
        <span className="font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px]">
          ID: {category.id ? category.id.slice(0, 8) : "N/A"}...
        </span>
      </div>
    </div>
  );
}

export default CategoryCart