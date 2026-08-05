
"use server"
import { fetchAxios } from "@/app/(globalComponents)/axios/axios";

import { cookies} from "next/headers";


export const postService=async(prevState:any,formData:FormData)=>{

    try {
        const title = formData.get("title");
        const categoryId = formData.get("category");
        const price = Number(formData.get("price"));

        const description = formData.get("description");
        const cookieStore = await cookies();
        const accessToken = cookieStore.get("accessToken")?.value;

        if (!accessToken) {
          return {
            success: false,
            message: "You are  not logged in !",
          };
        }
        const payload = {
          title,
          categoryId,
          price,
          description,
        };

        const result = await fetchAxios.post(
          "/api/technician/service",
          payload,
          {
            headers: {
              Cookie: `accessToken=${accessToken}`,
            },
          },
        );

        return result.data;



        
    } catch (error) {
        console.log(error)
        return{
            success:false,
            message:"Something went wrong"
        }
        
    }


}