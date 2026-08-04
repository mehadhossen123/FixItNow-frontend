import React from "react";
import Navbar from "../(globalComponents)/navbar";

import Footer from "../(globalComponents)/footer";
import { getMe } from "../_service/getMe";
import { UserProfileResponse } from "../_type/type";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const profile: UserProfileResponse = await getMe();
  return (
    <div className="">
      <Navbar profile={profile}></Navbar>

      <main className="">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default AdminLayout;
