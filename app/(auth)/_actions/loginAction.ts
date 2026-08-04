"use server"

import { fetchAxios } from "@/app/(globalComponents)/axios/axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    refreshToken: string;
    accessToken: string;
  };


  
}
export  const loginAction=async(prevState:LoginResponse,formData:FormData)=>{
    const email=formData.get("email");
    const password=formData.get("password")
    const payload={
        email,
        password
    }
    const res = await fetchAxios.post("/api/auth/login", payload);
   if(res?.data?.success){
    const cookieStore=await cookies();

    // set access token into the cookies
    cookieStore.set("accessToken",res.data.data.accessToken,{
        httpOnly:true,
        maxAge:60*60*24,
        sameSite:"lax"
    })
    // set refresh token into the cookies 
    cookieStore.set("refreshToken",res.data.data.refreshToken,{
        httpOnly:true,
        maxAge:60*60*24*7,
        sameSite:"lax"
    })

    
   }

   redirect("/")
   

   

    
    

}