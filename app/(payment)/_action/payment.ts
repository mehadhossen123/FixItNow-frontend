"use server";

import { fetchAxios } from "@/app/(globalComponents)/axios/axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const makePayment = async (bookingId: string) => {
  let redirectUrl = ""; 

  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
      return {
        success: false,
        message: "Please login first",
      };
    }

    const result = await fetchAxios.post(
      "/api/payment/create",
      { bookingId },
      {
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
      },
    );

    if (result.data.success === true || result.data.success === "true") {
      redirectUrl = result.data.data;
    }
  } catch (error: any) {
    
    if (error.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }

    console.log(error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }

 
  if (redirectUrl) {
    redirect(redirectUrl);
  }
};
