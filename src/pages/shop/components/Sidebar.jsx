import React from 'react'

function Sidebar() {
    const names = ['Harry Potter', 'series'];
  return (
    <div className='px-10 py-5 ml-7'>
      <p className='text-[25px] font-bold text-[#012E4A] py-3'>Search</p>
      <div className='h-[3px] w-[70px] bg-black'></div>
      <input
      className='h-[60px] w-full border-[1px] border-gray-500 mt-5 p-5 text-[18px]'
      type="text" placeholder='Search here' />
      <>
      <p className='text-[25px] font-bold text-[#012E4A] py-3'>Categories</p>
      <div>
        {names.filter(name => name.includes('series')).map((filteredName) => (
         <li> {filteredName}</li>
        ))}
      </div>
      </>
    </div>
  )
}

export default Sidebar
