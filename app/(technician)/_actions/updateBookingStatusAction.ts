"use server";

import { fetchAxios } from "@/app/(globalComponents)/axios/axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const updateBookingStatusAction = async (
  bookingId: string,
  status: string,
) => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    
    const res = await fetchAxios.patch(
      `api/technician/bookings/${bookingId}`,
      { status },
      {
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
      },
    );

    revalidatePath("/dashboard/get-technician-booking");

    return {
      success: true,
      data: res.data,
    };
  } catch (error: any) {
    return {
      success: false,
      error:
        error?.response?.data?.message ||
        error.message ||
        "Something went wrong",
    };
  }
};
