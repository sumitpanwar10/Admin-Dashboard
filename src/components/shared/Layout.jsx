import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
export default function Layout() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden '>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <div div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">Header</div>
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
      
    </div>
  )
}
