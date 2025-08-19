import BedIcon from '@/public/icons/BedIcon'
import React from 'react'

const BedComp = ({prize,bedCount}) => {
  return (
    <>
     <div className='flexCenter gap-2'>
            <BedIcon className=' text-grayMain-500  ' />
            <div className='flex flex-col justify-center items-start'>
              <p className='title text-grayMain-700 '>{prize}/mo.</p>

            <div className='flex items-center gap-2 text-grayMain-500 '><p>{bedCount}</p><p className='bg-grayMain-100 h-5 w-5 flexCenter rounded-full'>?</p></div>
            </div>
        </div>
    </>
  )
}

export default BedComp