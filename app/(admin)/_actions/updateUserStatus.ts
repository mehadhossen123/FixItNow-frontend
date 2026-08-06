"use server";

import { fetchAxios } from "@/app/(globalComponents)/axios/axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const updateUserStatusAction = async (
  userId: string,
  status: string,
) => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    
    const res = await fetchAxios.patch(
      `api/admin/user/${userId}`,
      { status },
      {
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
      },
    );

    revalidatePath("/dashboard/get-all-user");

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
