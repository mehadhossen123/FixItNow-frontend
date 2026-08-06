"use server";

import { fetchAxios } from "@/app/(globalComponents)/axios/axios";
import { cookies } from "next/headers";

export const getAllBooking = async () => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
      return {
        success: false,
        message: "You are not logged in",
      };
    }

    const result = await fetchAxios.get("/api/customer/bookings", {
      headers: {
        Cookie: `accessToken=${accessToken}`,
        
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
   
      params: {
        _t: Date.now(),
      },
    });

    return result.data;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
