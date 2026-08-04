"use client";

import React, { useActionState, useEffect } from "react";
import { motion } from "framer-motion";
import { postCategory } from "../_actions/postCategory";
import { toast } from "sonner";
import { useRouter } from "next/navigation";



const PostCategoryForm = () => {

    const [state,action,isPending]=useActionState(postCategory,false)
    console.log(state)

   const router=useRouter()

    useEffect(()=>{
        if(!state &&!(state?.success=="true")){
            return

        }

        if(state && (state?.success=="true"|| state?.success==true)){
            toast.success("Category created ! ")
            router.push("/dashboard/get-category");

        }else{
            toast.error("Category created failed")
        }
    },[state,router])


  return (
    <motion.form
      action={action}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-4"
    >
      {/* Category Name */}
      <div className="form-control">
        <label className="label text-sm font-medium text-slate-700">
          Category Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="e.g. Carpentry"
          className="input input-bordered w-full focus:outline-orange-500 bg-slate-50 text-slate-800"
          required
        />
      </div>

      {/* Description */}
      <div className="form-control">
        <label className="label text-sm font-medium text-slate-700">
          Description
        </label>
        <textarea
          name="description"
          rows={4}
          placeholder="Furniture repair, door lock installation, hinge replacement, and custom woodwork."
          className="textarea textarea-bordered w-full focus:outline-orange-500 bg-slate-50 text-slate-800 h-28"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="btn w-full bg-orange-500 hover:bg-orange-600 text-white font-bold border-none mt-4 shadow-lg shadow-orange-500/30"
      >
        {isPending ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          "Create Category"
        )}
      </motion.button>
    </motion.form>
  );
};

export default PostCategoryForm;
