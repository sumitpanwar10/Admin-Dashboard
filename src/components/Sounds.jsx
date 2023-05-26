import React from 'react'
import { cardData, chartData } from './lib/consts/cardData'
import ProgressBar from "@ramonak/react-progress-bar";

import Chart from './chart';



export default function Sounds() {
  return (
    <div className='flex flex-col gap-3 justiy-around'>
      <h1 className='text-4xl font-semibold text-indigo-700'>Sounds</h1>
      <div className='grid grid-cols-1 py-6'>
        {cardData.map(({ key, title, image, data, unique_plays, total_plays, completion_rate },index) => {
          return (
            <div key={key} className='flex wrap '>
              <div className='flex  justify-center min-h-full'>
                <div className='rounded-lg flex flex-row  bg-white w-full  p-4 m-6 shadow-[0px_3px_10px_rgba(0,0,0,0.1)]'>
                  <div className='flex  flex-col justify-center p-3 g-3' >
                    <img className='rounded-lg ' width={300} src={image} alt='' />
                    <div className='p-4 mt-6 self-center rounded-full border-2  border-indigo-700 '>
                      <p className=' text-lg font-medium text-neutral-800 '>{title}</p>
                    </div>
                  </div>
                  <div className='flex  flex-col gap-5 p-2 g-3'>
                    <div className=''>
                      <p className='text-xs font-semibold p-3  text-gray-700 pb-3'>Unique and Total plays:</p>
                      <Chart data={chartData[index]} />
                    </div>
                    
                    <div>
                      <p className='text-xs font-semibold text-gray-700 pb-1'>Completion rate:</p>
                      <ProgressBar completed={completion_rate} maxCompleted={100} bgColor='#4338ca' isLabelVisible={false} height='10px' />

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
