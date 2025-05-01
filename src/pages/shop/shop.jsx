import React from 'react'
import Booklist from './components/Booklist'
import Layout from '../../layout'
import Sidebar from './components/Sidebar'

export const Shop = () => {
  return (
   <Layout>
     <div className='grid grid-cols-3 px-5'>
      <div className='col-span-1'>
       <Sidebar />
      </div>
      <div className='col-span-2'>
        <Booklist />
      </div>
    </div>
   </Layout>
  )
}

