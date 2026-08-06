"use client"
import { makePayment } from '@/app/(payment)/_action/payment';
import { BookingItem } from '@/app/_type/type';
import { CreditCard } from 'lucide-react';

import React from 'react'

const PaymentButton = ({booking}:{booking:BookingItem}) => {


  return (
    <button
     onClick={()=>{makePayment(booking?.id)}}

      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium text-sm shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 cursor-pointer active:scale-95"
    >
      <CreditCard className="w-4 h-4" />
      <span>Pay ৳{booking.totalCost}</span>
    </button>
  );
}

export default PaymentButton