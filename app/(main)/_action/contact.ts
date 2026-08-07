"use server"

import { fetchAxios } from "@/app/(globalComponents)/axios/axios";
import { Message } from "@/app/_type/type";

export const handleContact=async(prevState:Message,formData:FormData)=>{
   try {
     const name = formData.get("name");
     const email = formData.get("email");
     const phone = formData.get("number");
     const text = formData.get("text");
     const payload = {
       name,
       email,
       phone,
       text,
     };
     const result = await fetchAxios.post("/api/customer/contract", payload);
     return result.data
    
   } catch (error) {
    console.log(error)
    return{
        success:false,
        message:"Something went wrong"
    }
    
   }
   



}