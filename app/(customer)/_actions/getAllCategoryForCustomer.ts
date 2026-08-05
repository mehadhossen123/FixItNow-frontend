"use server"

import { fetchAxios } from "@/app/(globalComponents)/axios/axios";



export const getAllCategoriesForCustomer=async()=>{
    

    try {
        
        const result = await fetchAxios.get("/api/customer/categories", {
          
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