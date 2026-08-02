"use client";

import { motion } from "framer-motion";
import { CircleCheck, MapPin, ShieldCheck, UserShield } from "lucide-react";

const Hero1 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="bg-blue-900 py-8 lg:py-12 px-6 lg:px-10 rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <div className="text-amber-500 shrink-0">
              <UserShield size={48} />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-500">
                5000+
              </h2>
              <p className="font-semibold text-white text-sm sm:text-base">
                Verified Contractors
              </p>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <div className="text-amber-500 shrink-0">
              <CircleCheck size={48} />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-500">
                1000+
              </h2>
              <p className="font-semibold text-white text-sm sm:text-base">
                Jobs Completed
              </p>
            </div>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <div className="text-amber-500 shrink-0">
              <ShieldCheck size={48} />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-500">
                4.8/5
              </h2>
              <p className="font-semibold text-white text-sm sm:text-base">
                Average Rating
              </p>
            </div>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <div className="text-amber-500 shrink-0">
              <MapPin size={48} />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-500">
                ALL 9 <br /> Provinces
              </h2>
              <p className="font-semibold text-white text-sm sm:text-base">
                Nationwide Coverage
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
