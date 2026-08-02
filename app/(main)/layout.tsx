import React from "react";
import Navbar from "../(globalComponents)/navbar";

import Footer from "../(globalComponents)/footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar></Navbar>
      

      <main className="">
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
