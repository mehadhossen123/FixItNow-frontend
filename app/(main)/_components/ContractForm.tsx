"use client"

import { useActionState } from "react";
import { handleContact } from "../_action/contact";
import {motion} from "framer-motion"

const ContractForm = () => {
    const [state, action, isPending] = useActionState(handleContact,false);

  return (
    <form action={action} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-700">
            Your name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-700">
            Email address *
          </label>
          <input
            name="email"
            type="email"
            placeholder="example@email.com"
            className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-gray-700">Phone</label>
        <input
        name="number"
          type="tel"
          placeholder="123 456 7890"
          className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-gray-700">Message *</label>
        <textarea
        name="text"
          rows={4}
          placeholder="Tell us briefly about your needs"
          className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition resize-none"
        ></textarea>
      </div>

      <motion.button
      whileHover={{scale:1.05}}
      whileTap={{scale:.60}}
        type="submit"
        className="bg-[#ee5a0c] hover:bg-orange-600 cursor-pointer text-white font-semibold px-7 py-2.5 rounded-lg text-sm shadow transition duration-300"
      >
        Submit
      </motion.button>
    </form>
  );
}

export default ContractForm