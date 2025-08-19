import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"


const SearchField = () => {
  return (
    <>
    <div className=' flex flex-col md:flex-row items-start justify-between md:items-center mt-8 gap-4 py-4 '>

      

      <div className=' flex items-center  flex-1 gap-4 '>
        <div className='flexCenter h-10 w-10 rounded-full bg-surface-50'>
          <Image src='/location.svg' alt='location' width={24} height={24}/>
        </div>

        <div className='flex flex-col justify-center items-start'>
          <label 
          className='body-sm text-grayMain-600'
          htmlFor="searchLoaction">Location</label>
          <Input
         type="text"
         id="searchLocation"
         placeholder="Search City, Area , Hotel"
         className="
           focus-visible:border-0 
           bg-transparent 
           font-workSans
           body-sm
          placeholder:!text-primary-800
           rounded-none 
           focus-visible:ring-0 
           shadow-none
           p-0
           h-5  
           border-none
         "
             />

        </div>
        
      </div>

      <div className=' flex items-center  flex-1 gap-4'>
        <div className='flexCenter h-10 w-10 rounded-full bg-surface-50'>
          <Image src='/calander.svg' alt='location' width={24} height={24}/>
        </div>

        <div className='flex flex-col justify-center items-start'>
          <label 
          className='body-sm text-grayMain-600'
          htmlFor="searchLoaction">Date</label>
          <Input
         type="text"
         id="searchLocation"
         placeholder="Search date"
         className="
           focus-visible:border-0 
           bg-transparent 
           font-workSans
           body-sm
          placeholder:!text-primary-800
           rounded-none 
           focus-visible:ring-0 
           shadow-none
           p-0
           h-5  
           border-none
         "
             />

        </div>
        
      </div>

    </div>
    </>
  )
}

export default SearchField