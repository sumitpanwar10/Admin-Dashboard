import React from 'react'
import { data } from '../components/lib/consts/data'
import ProgressBar from "@ramonak/react-progress-bar";
export default function Sounds() {
  return (
    <div className='flex flex-col gap-3 justiy-around'>
      <h1 className='text-4xl font-semibold text-indigo-700'>Sounds</h1>
      <div className='grid grid-cols-4 py-12'>
        {data.map(({ key, title, image, unique_plays, total_plays, completion_rate }) => {
          return (
            <div key={key} className='flex wrap '>
              <div className='flex  justify-center min-h-full'>
                <div className='rounded-lg bg-white max-w-sm  m-6 shadow-[0px_3px_10px_rgba(0,0,0,0.1)]'>
                  <img className='rounded-t-lg' width={300} src={image} />
                  <div className='p-6 flex flex-col gap-3 '>
                    <p className=' self-center font-medium text-neutral-800 '>{title}</p>
                    <div>
                      <p className='text-xs font-semibold text-gray-500 pb-1'>Completion rate:</p>
                      <ProgressBar completed={completion_rate} maxCompleted={100} bgColor='#4338ca' isLabelVisible={false} height='10px'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}
