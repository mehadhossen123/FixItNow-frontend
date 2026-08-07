// app/dashboard/get-all-booking/page.tsx

import React, { Suspense } from "react";
import { BookingItem } from "@/app/_type/type";
import { getAllBookingByAdmin } from "@/app/(admin)/_actions/getAllBookingByAdmin";
import BookingSkeletonForAdmin from "./loading";
import { BookingListClientForAdmin } from "@/app/(admin)/_components/BookingListForAdmin";

export const dynamic = "force-dynamic";

async function BookingDataFetcher() {
  const response = await getAllBookingByAdmin();

  const bookings: BookingItem[] = Array.isArray(response)
    ? response
    : response?.data || [];

  return <BookingListClientForAdmin bookings={bookings} />;
}

export default function GetAllBookingPage() {
  return (
    <Suspense fallback={<BookingSkeletonForAdmin />}>
      <BookingDataFetcher />
    </Suspense>
  );
}
