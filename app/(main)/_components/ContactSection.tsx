"use client"
import { Mail} from "lucide-react";
import ContractForm from "./ContractForm";

export default function ContactSection() {
  return (
    <section className="bg-[#ee5a0c] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Info */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              We’re Here to Help.
            </h2>
            <div className="w-12 h-1 bg-white/80 rounded-full"></div>
          </div>

          <div className="space-y-2 text-orange-100 text-base sm:text-lg">
            <p>Need support or want to learn more about Mr FixIT?</p>
            <p className="font-semibold text-white">We’ve got you covered.</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="#"
              className="w-9 h-9 bg-[#111e38] text-white rounded-full flex items-center justify-center hover:opacity-90 transition"
            >
             
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-[#111e38] text-white rounded-full flex items-center justify-center hover:opacity-90 transition"
            >
           
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-[#111e38] text-white rounded-full flex items-center justify-center hover:opacity-90 transition"
            >
              <span className="font-bold text-xs">TikTok</span>
            </a>
          </div>

          {/* Email Info */}
          <div className="flex items-center gap-4 pt-4">
            <div className="p-3 bg-white/10 rounded-lg">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs text-orange-200 font-medium">Email</p>
              <p className="text-base font-semibold text-white">
                mehad004938@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Static Form */}
        <div className="bg-white text-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <ContractForm></ContractForm>
        </div>
      </div>
    </section>
  );
}
