"use server"

import { fetchAxios } from "@/app/(globalComponents)/axios/axios";
import { PostCategoryResponse } from "@/app/_type/type"
import { cookies } from "next/headers";


export const postCategory = async (
  prevState: PostCategoryResponse,
  formData: FormData,
) => {
  try {
    const cookieStore=await cookies()
    const accessToken=cookieStore.get("accessToken")?.value;
    const name = formData.get("name");
    const description = formData.get("description");

    const payload = {
      name,
      description,
    };

    const result = await fetchAxios.post("/api/admin/categories", payload, {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    });

    console.log(result.data)
   return result.data;


  } 
  
  catch (error:any) {
    
    return{
        success:false,
        message:{error}

    }
  }

 



};