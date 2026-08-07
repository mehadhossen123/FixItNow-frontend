"use client";


import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import LoginForm from "../_components/LoginForm";
import { Suspense } from "react";

const LoginPage = () => {
  

  return (
    <Suspense fallback={"loading..."}>
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
                Log in to manage your bookings, connect with verified home
                service pros, and track progress instantly.
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
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="p-6 sm:p-10 flex flex-col justify-center bg-base-100"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-base-content">
                Sign In to Your Account
              </h3>
              <p className="text-sm text-base-content/60 mt-1">
                Please enter your details to continue
              </p>
            </div>
            {/* form */}
            <LoginForm></LoginForm>

            {/* Divider */}
            <div className="divider my-4 text-xs text-base-content/50 uppercase tracking-wider">
              OR
            </div>

            {/* Footer Link */}
            <p className="text-center text-xs text-base-content/70 mt-4">
              Don't have an account? <br />
              <Link
                href={"/customer-register"}
                className="text-primary font-bold hover:underline"
              >
                Sign up as customer
              </Link>
              <br />
              <Link
                href={"/technician-register"}
                className="text-primary font-bold hover:underline"
              >
                Sign up as technician
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </Suspense>
  );
};

export default LoginPage;
