"use client"

import React, { useActionState, useState } from 'react'
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { loginAction, LoginResponse } from '../_actions/loginAction';

const LoginForm = () => {

    const initialState: LoginResponse = {
      success: false,
      message: "",
      data: {
        accessToken: "",
        refreshToken: "",
      },
    };

    
    const [showPassword, setShowPassword] =  useState(false);
    const [state, action, isPending] = useActionState(loginAction,initialState );

    



  return (
    <form action={action} className="space-y-4">
      {/* Email Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Email Address</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/40">
            <Mail size={18} />
          </div>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            className="input input-bordered w-full pl-10 focus:input-primary transition-all"
            required
          />
        </div>
      </div>

      {/* Password Field */}
      <div className="form-control">
        <div className="flex justify-between items-center mb-1">
          <label className="label p-0">
            <span className="label-text font-semibold">Password</span>
          </label>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/40">
            <Lock size={18} />
          </div>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="input input-bordered w-full pl-10 pr-10 focus:input-primary transition-all"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-base-content/40 hover:text-base-content"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn font-bold text-white bg-orange-500 hover:bg-orange-600 w-full shadow-lg shadow-primary/20 gap-2 mt-2"
      >
        <span>
          {isPending ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "login"
          )}
        </span>
        <ArrowRight size={18} />
      </button>
    </form>
  );
}

export default LoginForm