"use server"

import { fetchAxios } from "@/app/(globalComponents)/axios/axios"

export const getAllService=async()=>{
    try {
        const result=await fetchAxios.get("/api/customer")
        return result.data;
        
    } catch (error) {
        console.log(error)
        return{
            success:false,
            message:"Something went wrong"
        }
        
    }
}