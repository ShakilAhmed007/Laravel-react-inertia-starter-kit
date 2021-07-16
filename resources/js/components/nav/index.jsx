import { Inertia } from "@inertiajs/inertia";
import { ajax } from "jquery";
import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
function Nav({search}) {
  const [searchContent, setSearchContent] = useState("");
  // handleing search input data
  const handleSearch = (event) => {
    let data = event.target.value
    setSearchContent(data)
    search(data)
  };


  return (
    <nav className='bg-dark-default border-b border-white w-full'>
      <div className='container px-10 mx-auto py-4 flex items-center'>
        <div className='logo max-w-xs'>
          <span className='text-lg text-white font-bold'>Bookmak</span>
        </div>
        <div className='search ml-auto'>
          <input
            className='p-2 w-96 pl-5 outline-none text-white rounded-full bg-dark-default border-2 border-green-default'
            placeholder='Search...'
            type='text'
            value={searchContent}
            onChange={(event) => handleSearch(event)}
          />
        </div>
        <div className='add-category ml-14'>
          <button className='rounded-full p-3 bg-green-default hover:bg-green-default-light'>
            <span className='text-white'>
              <FaPlus />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
