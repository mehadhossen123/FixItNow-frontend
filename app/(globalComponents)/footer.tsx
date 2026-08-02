"use client";

import { Mail, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-40 h-40">
              {/* Logo Placeholder - Replace with your actual logo */}
              <div className="bg-gradient-to-b from-[#1e3a5f] to-[#2a4a7c] rounded-full p-4 flex flex-col items-center justify-center text-center h-full">
                <div className=" w-40 h-40">
                 <img src="/logo.jpeg" alt="" className="rounded-full" />
                </div>
              </div>
              {/* Verified Badge */}
              <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 w-12 h-12 flex items-center justify-center border-4 border-[#1e3a5f]">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 mt-4 text-center md:text-left max-w-xs">
              Your trusted contractor on demand
            </p>
          </div>

          {/* Policies Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 pb-2 border-b-2 border-[#ff8c00] inline-block">
              Policies
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#privacy"
                  className="flex items-center gap-2 text-gray-200 hover:text-[#ff8c00] transition-colors"
                >
                  <ArrowRight size={16} className="text-[#ff8c00]" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="flex items-center gap-2 text-gray-200 hover:text-[#ff8c00] transition-colors"
                >
                  <ArrowRight size={16} className="text-[#ff8c00]" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#conditions"
                  className="flex items-center gap-2 text-gray-200 hover:text-[#ff8c00] transition-colors"
                >
                  <ArrowRight size={16} className="text-[#ff8c00]" />
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 pb-2 border-b-2 border-[#ff8c00] inline-block">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="flex items-center gap-2 text-gray-200 hover:text-[#ff8c00] transition-colors"
                >
                  <ArrowRight size={16} className="text-[#ff8c00]" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="flex items-center gap-2 text-gray-200 hover:text-[#ff8c00] transition-colors"
                >
                  <ArrowRight size={16} className="text-[#ff8c00]" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="flex items-center gap-2 text-gray-200 hover:text-[#ff8c00] transition-colors"
                >
                  <ArrowRight size={16} className="text-[#ff8c00]" />
                  Request A Service
                </a>
              </li>
              <li>
                <a
                  href="#register"
                  className="flex items-center gap-2 text-gray-200 hover:text-[#ff8c00] transition-colors"
                >
                  <ArrowRight size={16} className="text-[#ff8c00]" />
                  Register Your Service
                </a>
              </li>
              <li>
                <a
                  href="#partnership"
                  className="flex items-center gap-2 text-gray-200 hover:text-[#ff8c00] transition-colors"
                >
                  <ArrowRight size={16} className="text-[#ff8c00]" />
                  Partnership Program
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-gray-200 hover:text-[#ff8c00] transition-colors"
                >
                  <ArrowRight size={16} className="text-[#ff8c00]" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 pb-2 border-b-2 border-[#ff8c00] inline-block">
              Get In Touch
            </h4>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone
                  size={20}
                  className="text-[#ff8c00] mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+27769142901"
                  className="text-gray-200 hover:text-[#ff8c00] transition-colors"
                >
                  (+27) 76 914 2901
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-[#ff8c00] mt-1 flex-shrink-0" />
                <a
                  href="mailto:admin@mrfixithq.com"
                  className="text-gray-200 hover:text-[#ff8c00] transition-colors"
                >
                  admin@mrfixithq.com
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <form className="mt-6 space-y-3">
              <input
                type="email"
                placeholder="Email Address *"
                className="w-full px-4 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff8c00] transition-all"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#ff8c00] hover:bg-orange-600 text-white font-bold rounded-full transition-colors"
              >
                Subscribe!
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Mr FIXIT. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#ff8c00] transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ff8c00] transition-colors text-sm"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ff8c00] transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
