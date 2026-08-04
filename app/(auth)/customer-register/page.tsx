"use client";

import CustomerRegisterForm from "../_components/CustomerRegisterForm";


const CustomerRegister = () => {


  return (
  
    <div className="w-full min-h-screen bg-[#7B8B9E] flex justify-center items-center p-4 sm:p-6">
    
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
        {/* header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="mb-2">
            <div className="flex gap-2 items-center">
              <div>
                <img src="/logo.jpeg" width={70} height={70} alt="" />
              </div>
              <div>
                <span className="text-3xl font-extrabold text-[#1E293B]">
                  FixIT{" "}
                </span>
                <br />
                <span className="text-3xl font-black text-orange-500">Now</span>
              </div>
            </div>
            <p className="text-[10px] tracking-widest font-bold text-slate-600 uppercase">
              Contractor-On-Demand
            </p>
          </div>
          <h1 className="text-2xl font-bold text-[#1E293B] mt-2">
            Join as a Customer
          </h1>
          <p className="text-sm text-slate-500">Create your client account</p>
        </div>

        {/*form*/}
        <CustomerRegisterForm/>
        
       
      </div>
    </div>
  );
};

export default CustomerRegister;
