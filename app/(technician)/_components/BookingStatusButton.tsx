"use client";

import React, { useState, useTransition } from "react";
import { Loader2 } from "lucide-react";
import { updateBookingStatusAction } from "../_actions/updateBookingStatusAction";
import { toast } from "sonner";


interface StatusButtonProps {
  status: string;
  bookingId: string;
}

export const BookingStatusButton = ({
  status,
  bookingId,
}: StatusButtonProps) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  const [isPending, startTransition] = useTransition();

  // 
  let allowedOptions = [{ label: currentStatus, value: currentStatus }];

  if (currentStatus === "PENDING") {
    allowedOptions = [
      { label: "Pending", value: "PENDING" },
      { label: "Accept", value: "ACCEPT" },
      { label: "Decline", value: "DECLINE" },
    ];
  } else if (currentStatus === "PAID") {
    allowedOptions = [
      { label: "Paid", value: "PAID" },
      { label: "In Progress", value: "IN_PROGRESS" },
      { label: "Decline", value: "DECLINE" },
    ];
  } else if (currentStatus === "IN_PROGRESS") {
    allowedOptions = [
      { label: "In Progress", value: "IN_PROGRESS" },
      { label: "Complete", value: "COMPLETE" },
      { label: "Decline", value: "DECLINE" },
    ];
  }

  // 
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextStatus = e.target.value;
    if (nextStatus === currentStatus) return;

    setCurrentStatus(nextStatus);

    startTransition(async () => {
      const res = await updateBookingStatusAction(bookingId, nextStatus);
      if (!res?.success) {
        setCurrentStatus(status); 
       
        toast(res.error ||"Status update failed")
      }
    });
  };

  //set color for status
  let bgClass = "bg-gray-100 text-gray-800 border-gray-300";

  if (currentStatus === "COMPLETE" || currentStatus === "COMPLETED") {
    bgClass = "bg-green-100 text-green-800 border-green-300";
  } else if (currentStatus === "ACCEPT") {
    bgClass = "bg-blue-100 text-blue-800 border-blue-300";
  } else if (currentStatus === "IN_PROGRESS") {
    bgClass = "bg-indigo-100 text-indigo-800 border-indigo-300";
  } else if (currentStatus === "PENDING" || currentStatus === "PAID") {
    bgClass = "bg-yellow-100 text-yellow-800 border-yellow-300";
  } else if (currentStatus === "DECLINE" || currentStatus === "CANCELLED") {
    bgClass = "bg-red-100 text-red-800 border-red-300";
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-xs font-semibold ${bgClass}`}
    >
      {isPending && <Loader2 className="w-3.5 h-3.5 animate-spin" />}

      <select
        value={currentStatus}
        onChange={handleStatusChange}
        disabled={isPending || allowedOptions.length <= 1}
        className="bg-transparent font-medium outline-none cursor-pointer text-xs disabled:cursor-not-allowed"
      >
        {allowedOptions.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className="bg-white text-gray-900"
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
