import React from 'react'
import { cardData, chartData } from './lib/consts/cardData'
import ProgressBar from "@ramonak/react-progress-bar";

import Chart from './chart';



export default function Sounds() {
  return (
    <div className='flex flex-col gap-3 justiy-around'>
      <h1 className='text-4xl pt-2 font-semibold text-indigo-700'>Sounds</h1>
      <div className='grid grid-cols-1 gap-4 pb-6 md:grid-cols-2 '>
        {cardData.map(({ key, title, image, completion_rate }, index) => {
          return (
            <div key={key} className='flex wrap '>
              <div className='flex  justify-between '>
                <div className='rounded-lg flex flex-row  bg-white w-full  p-4 shadow-[0px_3px_10px_rgba(0,0,0,0.1)]'>
                  <div className='flex  flex-col justify-center p-3 g-3' >
                    <img className='rounded-lg ' width={300} src={image} alt='' />
                    <div className='p-2 mt-6 self-center '>
                      <p className=' text-lg text-center font-medium text-neutral-800 '>{title}</p>
                    </div>
                  </div>
                  <div className='flex  flex-col gap-3 p-2'>
                    <div className=''>
                      <p className='text-xs font-semibold p-3  text-gray-600 pb-2'>Unique and Total plays:</p>
                      <Chart data={chartData[index]} />
                    </div>

                    <div>
                      <div className='flex flex-row justify-between'>
                        <p className='text-xs font-semibold px-3 text-gray-700 pb-2'>Completion rate:</p>
                        <p className='text-xs font-semibold px-3 text-gray-700 pb-2'>{completion_rate}%</p>
                      </div>
                      <ProgressBar className='px-5 pb-2' completed={completion_rate} maxCompleted={100} bgColor='#4338ca' isLabelVisible={false} height='10px' />

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
