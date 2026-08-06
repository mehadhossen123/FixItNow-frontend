"use server"

import { fetchAxios } from "@/app/(globalComponents)/axios/axios";
import { cookies } from "next/headers"

export const getPaymentHistory=async()=>{
    try {
        const cookieStore=await cookies();
        const accessToken =cookieStore.get("accessToken")?.value
        if(!accessToken){
            return{
                success:false,
                message:"Your are not logged in !"
            }
        }

        const result = await fetchAxios.get("/api/payment/payments",{
            headers:{
            Cookie:`accessToken=${accessToken}`
            }
        });

        return result.data;
        
    } catch (error ) {
        console.log(error)
        return{
            success:false,
            message:"Something went wrong"
        }
        
    }
}