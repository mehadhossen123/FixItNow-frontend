"use server"

import { fetchAxios } from "@/app/(globalComponents)/axios/axios";
import { cookies } from "next/headers";


export const getAllMessage=async()=>{
    const cookieStore=await cookies()
    const accessToken= cookieStore.get("accessToken")?.value
     if (!accessToken) {
       return {
         success: false,
         message: "User not logged in!",
       };
     }

    try {
        
        const result = await fetchAxios.get("/api/admin/contract/get", {
          headers: {
            Cookie: `accessToken=${accessToken}`,
          },
        });

        return result.data;
        
    } catch (error) {
        console.log(error)
        return{
            success:false,
            message:"Something went wrong"
        }
        
    }


}