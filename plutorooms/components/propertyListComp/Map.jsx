'use client';
import AddIcon from '@/public/icons/AddIcon'
import CloseIcon from '@/public/icons/CloseIcon'
import ExpandedIcon from '@/public/icons/ExpandedIcon'
import SubtractIcon from '@/public/icons/SubtractIcon'
import Image from 'next/image'
import React, { useState } from 'react'

const Map = () => {
    const [showCard, setShowCard] = useState(false);
  return (
    <>
    <section className='relative' >
        <div className=' h-120 relative'onClick={()=> setShowCard(true)}>
            <Image
            src='/Map.jpg'
            fill
            className='object-cover'
            />

            {/* icon holder */}
            <div className='absolute right-4 top-4 flex flex-col gap-4 '>
                <div className='h-10 w-10  rounded-xl bg-white  flexCenter shadow-xl'>
                <ExpandedIcon className='text-grayMain-700'/>
            </div>

            <div className='h-10 w-10  rounded-xl bg-white   flexCenter shadow-xl'>
                <AddIcon className='text-grayMain-700'/>
            </div>

            <div className='h-10 w-10  rounded-xl bg-white   flexCenter shadow-xl'>
                <SubtractIcon className='text-grayMain-700'/>
            </div>
            </div>

        </div>

        {showCard && <Mapcard onClose={() => setShowCard(false)}/>}
    </section>
    </>
  )
}

export default Map


const Mapcard = ({ onClose }) => {
  return (
    <div className="absolute inset-x-0 mx-auto max-w-100 bottom-10 flex gap-4 bg-white rounded-2xl overflow-hidden">
      <div className="flex-1 relative">
        <Image
          src="/prop2.jpg"
          alt="cardimg"
          fill
          className="object-center object-cover"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="bg-grayMain-700 opacity-65 h-8 w-8 flexCenter rounded-full absolute left-2 top-2 shadow-2xl z-100"
        >
          <CloseIcon className="text-white" />
        </button>
      </div>

      <div className="flex-2 flex flex-col py-4">
        <h1 className="h4 text-grayMain-700">Taj Palace</h1>
        <p className="text-grayMain-500">Chanakyapuri, New Delhi</p>
        <p className="title text-grayMain-600 mt-4">₹4,800</p>
      </div>
    </div>
  );
};
