import React from "react";


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
   
     

     
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center py-10">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
