import React from 'react'
import { Button } from '../ui/button'
import Verify from '@/public/icons/Verify'
import { Badge } from '../ui/badge'

import BoyIcon from '@/public/icons/BoyIcon'
import BedIconComp from './BedComp'

const ContainerRight = () => {
  return (
    <>
     <div className='hidden  px-10 py-6 flex-1/8 sticky top-0 h-fit bg-white rounded-2xl gap-7 lg:flex flex-col'>



        <div className='flex items-center justify-between'>
          <h2 className='h2 text-grayMain-700'>₹15,000<span className='body-txt'>/mounth</span></h2>

          <h2 className='h2 text-grayMain-700'>7 / 10<span className='body-txt'>beds available</span></h2>
        </div>


        {/* badge starts here */}
        <div className='flex gap-2'>
                <Badge className="bg-blue-100 body-sm flex text-blue-900 px-4 rounded-full">
            <span className="w-4 h-4">
                <Verify className="w-full h-full text-blue-500 fill-blue-500" />
            </span>
              Verified
               </Badge>

               <Badge className="bg-pg-200 body-sm flex items-center justify-c text-pg-700 px-4 rounded-full">
            <span className="h-4 flexCenter">
                <BoyIcon className="text-pg-700 " />
            </span>
              Boys only
               </Badge>
            </div>


        {/* bed count starts here */}
        <div className='flex justify-between'>
          <BedIconComp prize='₹15,000' bedCount='1 Bed'/>
          <BedIconComp prize='₹9,000' bedCount='2 Bed'/>
          <BedIconComp prize='₹3,000' bedCount='3 Bed'/>
        </div>


        {/* buttons are here */}
        <div className='flex justify-between gap-4'>
          <Button className='button-txt py-6 flex-1 bg-primary-50 mt-4 hover:bg-primary-100'>Call to Reserve</Button>
          <Button className='button-txt py-6  bg-grayMain-800 hover:bg-grayMain-700 mt-4 flex-1 text-white'>Book This PG </Button>
        </div>
        





      </div>
    </>
  )
}

export default ContainerRight