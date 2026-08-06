import { getAllUser } from "@/app/(admin)/_actions/getAllUser";
import UserTable from "@/app/(admin)/_components/UserTable";
import { User } from "@/app/_type/type";

import React from "react";

const GetAllUser = async () => {
 
  const usersResponse = await getAllUser();

  const users: User[] = Array.isArray(usersResponse)
    ? usersResponse
    : usersResponse?.data || [];

  return (
    <div className="w-full min-h-screen bg-slate-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
      
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default GetAllUser;
