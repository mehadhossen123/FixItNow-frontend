"use client"

import { PayloadInterface, ServiceItem } from "@/app/_type/type";
import { CalendarCheck, X } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion"; 
import { bookingService } from "../_actions/postBooking";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


interface BookNowButtonProps {
  singleService: ServiceItem
}

const BookNowButton = ({ singleService }: BookNowButtonProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [bookingDate, setBookingDate] = useState("");
  const router=useRouter()
 
 

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  

  // confer booking function
  const handleConfirm =async (e: React.FormEvent) => {
    e.preventDefault();
    const payload: PayloadInterface = {
      technicianId: singleService.technicianId,
      serviceId: singleService?.id,
      bookingDate: bookingDate,
      totalCost: Number(singleService.price),
    };

     const result=await bookingService({payload})
     
      if(!result&&!(result.success=="true"||result.success==true)){
        return
      }
      if(result&& (result.success=="true"||result.success==true)){
        toast.success("Your booking is pending now")
        router.push("/dashboard/get-service")
      }else{
        toast.error("Booking failed please try again")
      }
   
  };

  return (
    <>
      {/* Book Now Button */}
      <button
        type="button"
        onClick={openModal}
        className="w-full bg-orange-500 cursor-pointer hover:bg-orange-600 active:scale-95 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 text-sm"
      >
        <CalendarCheck className="w-4 h-4" />
        Book Now
      </button>

      {/* Modal */}
      <dialog
        ref={dialogRef}
        id="my_modal_2"
        className="modal backdrop:bg-black/50"
      >
        <div className="modal-box bg-white max-w-md p-6 rounded-2xl relative shadow-2xl">
          {/* Close Button */}
          <button
            type="button"
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="text-center mb-4">
            <h3 className="font-extrabold text-2xl text-slate-900">
              FixIt <span className="text-orange-500">Now</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Select date and time for booking
            </p>
          </div>

          {/* Date Input Field with Form Wrap */}
          <form onSubmit={handleConfirm} className="space-y-4 my-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Select Date & Time
              </label>
              <input
                type="datetime-local"
                value={bookingDate}
                onChange={(e) => {
                  setBookingDate(e.target.value);
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-800 bg-white"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 shadow-md text-sm cursor-pointer"
            >
              Confirm Booking
            </motion.button>
          </form>
        </div>

        {/* Modal Backdrop */}
        <form method="dialog" className="modal-backdrop">
          <button type="submit">close</button>
        </form>
      </dialog>
    </>
  );
};

export default BookNowButton;
