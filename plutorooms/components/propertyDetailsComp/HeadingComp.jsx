import React from 'react'
import { Badge } from '../ui/badge'
import Verify from '@/public/icons/Verify'
import SaveIcon from '@/public/icons/SaveIcon'
import ShareIcon from '@/public/icons/ShareIcon'
import BoyIcon from '@/public/icons/BoyIcon'

const HeadingComp = () => {
  return (
    <>
    <section className=' mt-26 lg:mt-36 max-container '>



        <div className='flex flex-col gap-2 justify-center items-start'>
            <h1 className='property-heading text-grayMain-700'>
                Furnished PG for Rent in Mandi House, Delhi
            </h1>
            <p className='body-sm lg:body-txt text-grayMain-700'>K-115-122, Laxmi Nagar, Mangal Bazar, Laxmi Nagar, Delhi</p>


            {/* Badge container is here */}
            <div className=' flex justify-between items-center w-full'>

                <div className='flexCenter gap-2'>
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

            


            {/* share and save icons are here */}
            <div className='flex gap-2'>
            <div className='h-8 w-8 flexCenter  rounded-sm  bg-white'>
                <SaveIcon className='text-grayMain-600'/>
            </div>

             <div className='h-8 w-8 flexCenter  bg-white rounded-sm '>
                <ShareIcon className='text-grayMain-600'/>
            </div>
            </div>

            </div>

            

        </div>

        

    </section>
    </>
  )
}

export default HeadingComp