import React from "react";
import { FaSearch } from "react-icons/fa";
import Nav from "../nav";
import SideBar from "../sidebar";

function Layout({ children, search }) {
  
  return (
    <React.Fragment>
      <Nav search={search} />
      <div className='container px-10 mx-auto mt-10'>
        <div className='grid grid-cols-5 gap-4'>
          <SideBar />
          <div className='col-span-4'>{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Layout;
