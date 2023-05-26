import React from 'react'
import { HiOutlineSearch, HiOutlineBell } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'
export default function Header() {
    return (
        <div div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
            <div className="relative">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-lg"
                />
            </div>
            <div className='pr-4 flex flex-row gap-3'>
                <HiOutlineBell fontSize={32} className='text-indigo-800 text-3xl hover:text-gray-500' />
                <CgProfile className='text-indigo-800 text-3xl hover:text-gray-500' />
            </div>
        </div>
    )
}
