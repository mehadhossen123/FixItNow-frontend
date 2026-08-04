"use server"

import { cookies } from "next/headers"
import { fetchAxios } from "../(globalComponents)/axios/axios"
export const getMe=async()=>{
    const cookieStore=await cookies()
    const accessToken=cookieStore.get("accessToken")!

    if(!accessToken){
        return {
            message:"User not logged in!"
        }
    }
    const profile = await fetchAxios.get("/api/auth/me", {
      headers: {
        Cookie: `accessToken=${accessToken.value}`,
      
        
        
      },
    });

    return profile.data;
}