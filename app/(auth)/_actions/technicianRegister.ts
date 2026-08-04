"use server"

import { fetchAxios } from "@/app/(globalComponents)/axios/axios"
import { RegisterResponse } from "@/app/_type/type";




export const technicianRegister = async (
  presState: RegisterResponse,
  formData: FormData,
) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const location = formData.get("location");
  const payload = {
    name,
    email,
    password,
    role: "TECHNICIAN",
    location,
  };

 const result=await fetchAxios.post("/api/auth/register",payload);
 
 return result.data;
 
  
};