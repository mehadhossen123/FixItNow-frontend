"use server"

import { fetchAxios } from "@/app/(globalComponents)/axios/axios";
import { PayloadInterface } from "@/app/_type/type";
import { cookies } from "next/headers";



export const bookingService = async ({ payload }:{payload:PayloadInterface} ) => {
    try {
        const cookieStore=await cookies();
        const accessToken=cookieStore.get("accessToken")?.value
        if(!accessToken){
            return{
                success:false,
                message:"You are not logged in"
            }
        }

        const result = await fetchAxios.post("/api/customer/bookings",payload,{
            headers:{
                Cookie:`accessToken=${accessToken}`
            }
        });

        return result.data;
        
    } catch (error) {
        console.log(error)
        return{
            success:false,
            message:"Something went wrong"
        }
        
    }
};