import React from "react";

function SideBar() {
  return (
    <ul>
      <li className=' text-green-default font-semibold p-1 cursor-pointer hover:text-green-default'><span className='ml-6'>Home</span></li>

      <li className='text-white font-semibold p-1 cursor-pointer hover:text-green-default'><span className='ml-6'>Laravel</span></li>

      <li className='text-white font-semibold p-1 cursor-pointer hover:text-green-default'><span className='ml-6'>React</span></li>
    </ul>
  );
}

export default SideBar;
