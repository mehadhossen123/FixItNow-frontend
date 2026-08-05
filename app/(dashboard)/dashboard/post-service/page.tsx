



import { Category } from "@/app/_type/type";
import { getAllCategoriesByTechnician } from "@/app/(technician)/_actions/getAllCategory";
import ServicePost from "@/app/(technician)/_components/ServicePostForm";



 const CreateServicePage=async()=> {
   const response = await getAllCategoriesByTechnician()
   
    
     const categories: Category[] = Array.isArray(response)
       ? response
       : response?.data || [];

       
   

  return (
    <div className="w-full min-h-screen bg-slate-100 p-4 sm:p-8">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
        {/* header */}
        <div className="flex items-center justify-center">
          <div className="mb-6 border-b   border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold text-[#1E293B]">
                FixIT
              </span>
              <span className="text-xl font-black text-orange-500">Now</span>
            </div>

            <h2 className="text-2xl font-bold text-[#1E293B] mt-1">
              Post New Service
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Add a new technician service under a specific category
            </p>
          </div>
        </div>

        {/*  (Static) */}
        <ServicePost categories={categories}></ServicePost>
      </div>
    </div>
  );
}

export default CreateServicePage
