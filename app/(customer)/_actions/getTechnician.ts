"use server"

import { fetchAxios } from "@/app/(globalComponents)/axios/axios"

export const getAllTechnician=async()=>{
    try {
        const result = await fetchAxios.get("/api/customer/technician");
        return result.data;
        
    } catch (error) {
        console.log(error)
        
    }
}