import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Booklist() {
    const [book, setBook] = useState();
    useEffect(() => {
        axios.get("https://openlibrary.org/search.json?q=harry+potter").then(response => setBook(response.data.docs));
    }, []);
    
  return (
    <div className='px-10 py-5'>

      <div className='grid grid-cols-4 gap-5'>
      {book?.slice(0,20).map((item, i)=> (
        <div
        key={i}
        className="bg-gray-200 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
      >
        <div className='bg-white h-[200px] w-[150px] rounded-2xl'></div>
        <h2 className="text-lg font-semibold mt-4 mb-2">{item.title}</h2>
        <p className="text-gray-600"></p>
        <button className='mt-7 flex p-5 items-center gap-5 bg-orange-400 w-[170px] h-[50px] rounded-4xl text-white font-bold'>Add to Cart</button>
      </div>
      ))}
      </div>
    </div>
  )
}

export default Booklist
