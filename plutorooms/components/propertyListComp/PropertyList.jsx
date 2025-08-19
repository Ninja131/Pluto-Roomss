import React from 'react'
import { Button } from '../ui/button'
import PropertyCard from '../PropertyCard'
import { properties } from '@/constants'
import { Badge } from '../ui/badge'

const PropertyListing = () => {
  return (
    <>
    <section className='max-container   pt-15'>
        <div className=' flex  xl:px-4 justify-between items-center'>
            <h2 className='h2 text-grayMain-700'>Hotels in saket,Delhi</h2>

            <div className='relative'>
              <Button 
            className='border-2 border-grayMain-400  button-txt  py-6  cursor-pointer rounded-lg   hover:bg-grayMain-400 px-8 
            
            '
            >Filter</Button>
             <Badge className='bg-red-500 body-xs text-white absolute -right-2 -top-2 rounded-full'>11</Badge>
            </div>

        </div>


        {/* cards displa    yed here */}
        <div className=' grid grid-cols-6 gap-4 mt-10'>
            {properties
      .map((dest, idx) => (
        
          
        
          <div  key={idx}
          className='col-span-6 md:col-span-3 xl:col-span-2'
          >
            <PropertyCard
           
         
          image={dest.image}
          name={dest.hotelName}
          address={dest.address}
          brandImage={dest.brandImage}
          brandName={dest.brandName}
          price={dest.price}
           />
          </div>
        
      ))}

        </div>
        
    </section>
    </>
  )
}

export default PropertyListing