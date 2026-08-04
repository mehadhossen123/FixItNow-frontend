
import React, { useActionState, useEffect, useState } from 'react'

import { Eye, EyeOff } from "lucide-react";
import { technicianRegister } from '../_actions/technicianRegister';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const TechnicianRegisterForm = () => {
     const [showPassword, setShowPassword] = useState(false);

    const [state, action, isPending] = useActionState(technicianRegister, false);
    console.log(state);
    const router = useRouter();

    useEffect(() => {
      if (!state) {
        return;
      }

      if (state.success == "true" || state.success == true) {
        toast.success(state.message);
        router.push("/login");
      } else {
        toast.error(state.message);
        router.push("/customer-register");
      }
    }, [state, router]);
  return (
    <form action={action} className="space-y-4">
      <div className="form-control">
        <label className="label text-sm font-medium text-slate-700">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="e.g. Kamal Rahman"
          className="input input-bordered w-full focus:outline-orange-500 bg-slate-50 text-slate-800"
          required
        />
      </div>

      <div className="form-control">
        <label className="label text-sm font-medium text-slate-700">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          placeholder="kamall1.tech@gmail.com"
          className="input input-bordered w-full focus:outline-orange-500 bg-slate-50 text-slate-800"
          required
        />
      </div>

      <div className="form-control">
        <label className="label text-sm font-medium text-slate-700">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="••••••••"
            className="input input-bordered w-full pr-10 focus:outline-orange-500 bg-slate-50 text-slate-800"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="form-control">
        <label className="label text-sm font-medium text-slate-700">
          Location / Service Area
        </label>
        <input
          type="text"
          name="location"
          placeholder="e.g. Charfassion, Dhaka"
          className="input input-bordered w-full focus:outline-orange-500 bg-slate-50 text-slate-800"
          required
        />
      </div>

      <button
        type="submit"
        className="btn w-full bg-orange-500 hover:bg-orange-600 text-white font-bold border-none mt-4 shadow-lg shadow-orange-500/30"
      >
        {isPending ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          " Register as Technician"
        )}
      </button>
    </form>
  );
}

export default TechnicianRegisterForm