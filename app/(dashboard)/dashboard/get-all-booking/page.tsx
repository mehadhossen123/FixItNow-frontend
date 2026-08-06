// app/dashboard/get-all-booking/page.tsx

import { getAllBooking } from "@/app/(customer)/_actions/getAllBooking";
import React, { Suspense } from "react";
import { BookingItem } from "@/app/_type/type";
import { BookingListClient } from "@/app/(customer)/_components/BookingListClient";
import BookingSkeleton from "./loading";




async function BookingDataFetcher() {
  const response = await getAllBooking();

  const bookings: BookingItem[] = Array.isArray(response)
    ? response
    : response?.data || [];

  return <BookingListClient bookings={bookings} />;
}


export default function GetAllBookingPage() {
  return (
    <Suspense fallback={<BookingSkeleton />}>
      <BookingDataFetcher />
    </Suspense>
  );
}
