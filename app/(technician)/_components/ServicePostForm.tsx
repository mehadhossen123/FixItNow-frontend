
"use client"
import {motion} from "framer-motion"
import React, { useActionState, useEffect } from 'react'
import { Wrench, DollarSign, FolderTree, AlignLeft, Send } from "lucide-react";
import { Category } from '@/app/_type/type';
import { postService } from '../_actions/postService';
import { toast } from 'sonner';

const ServicePost = ({ categories }:{categories:Category[]}) => {

  const [state, action, isPending] = useActionState(postService,false);

  useEffect(()=>{
    if(!state&& !(state.success=="true")){
      return
    }

    if(state.success=="true" || state.success==true){
      toast.success("Service created")
    }else{
      toast.error("Service created failed")
    }
  },[state])


  return (
    <form  action={action} className="space-y-5">
      {/* .  (Title) */}
      <div>
        <label className="block text-sm font-semibold text-[#1E293B] mb-2">
          Service Title <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <Wrench className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            name="title"
            required
          
            placeholder="e.g. Wooden Door Alignment & Lock Installation"
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* .  (CategoryId) */}
      <div>
        <label className="block text-sm font-semibold text-[#1E293B] mb-2">
          Select Category <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <FolderTree className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
          <select
          required
            name="category"
         
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#1E293B] focus:outline-none focus:border-orange-500 focus:bg-white transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled>
              -- Select a category --
            </option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ৩. (Price) */}
      <div>
        <label className="block text-sm font-semibold text-[#1E293B] mb-2">
          Service Price (BDT / USD) <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
          required
            type="number"
            step="0.01"
            name="price"
         
            placeholder="600.00"
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* ৪.  Description */}
      <div>
        <label className="block text-sm font-semibold text-[#1E293B] mb-2">
          Service Description <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <AlignLeft className="absolute left-3.5 top-3.5 text-slate-400 w-5 h-5" />
          <textarea
          required
            name="description"
            rows={4}
           
            placeholder="Describe what services are included in this package..."
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors resize-none"
          ></textarea>
        </div>
      </div>

      {/* button*/}
      <div className="pt-2">
        <motion.button
        whileHover={{scale:1.05}}
        whileTap={{scale:0.90}}
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          {isPending?<span className="loading loading-spinner loading-sm"></span>:"Publish Service"}
        </motion.button>
      </div>
    </form>
  );
};

export default ServicePost