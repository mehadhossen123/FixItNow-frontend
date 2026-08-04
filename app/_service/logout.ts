"use server"

import { revalidatePath } from "next/cache";

import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export const logout=async()=>{
    const cookiesStore=await cookies();
    cookiesStore.delete("accessToken");
    cookiesStore.delete("refreshToken")

    // cache remove 
    revalidatePath("/","layout")
    // redirect login form
    redirect("/login")
}