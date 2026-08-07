"use server"

import { fetchAxios } from "@/app/(globalComponents)/axios/axios";

export const handleContact=async(formData:FormData)=>{
   try {
     const name = formData.get("name");
     const email = formData.get("email");
     const number = formData.get("number");
     const text = formData.get("text");
     const payload = {
       name,
       email,
       number,
       text,
     };
     const result = await fetchAxios.post("/api/customer/contract", payload);
    
   } catch (error) {
    console.log(error)
    return{
        success:false,
        message:"Something went wrong"
    }
    
   }
   



}