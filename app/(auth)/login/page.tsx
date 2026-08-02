"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-10 px-4 sm:px-6">
      <div className="max-w-4xl w-full bg-base-100 rounded-3xl shadow-2xl border border-base-200 overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Image / Branding */}
        <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 p-8 flex flex-col justify-between text-white min-h-[300px] md:min-h-[500px]">
          <div className="relative z-10 flex items-center gap-2">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/20">
              <Image
                src="/logo.jpeg"
                alt="FixItNow Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-extrabold text-xl tracking-wide">
              FixItNow
            </span>
          </div>

          <div className="relative z-10 my-auto py-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Welcome Back!
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Log in to manage your bookings, connect with verified home service
              pros, and track progress instantly.
            </p>
          </div>

          <div className="relative z-10 text-xs text-slate-400">
            © {new Date().getFullYear()} FixItNow Inc. All rights reserved.
          </div>

          {/* Background Decorative Circles */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl" />
        </div>

        {/* Right Side: Login Form */}
        <motion.div 
        initial={{opacity:0,y:-40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8,ease:"easeInOut"}}
        className="p-6 sm:p-10 flex flex-col justify-center bg-base-100">
          <div className="mb-6">
            <h3 className="text-2xl font-extrabold text-base-content">
              Sign In to Your Account
            </h3>
            <p className="text-sm text-base-content/60 mt-1">
              Please enter your details to continue
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
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
              className="btn btn-primary w-full shadow-lg shadow-primary/20 gap-2 mt-2"
            >
              <span>Login</span>
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Divider */}
          <div className="divider my-6 text-xs text-base-content/50 uppercase tracking-wider">
            OR
          </div>

          {/* Social Logins */}
          <button className="btn btn-outline border-base-300 hover:border-base-300 hover:bg-base-200 text-base-content w-full gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Footer Link */}
          <p className="text-center text-xs text-base-content/70 mt-6">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-primary font-bold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
