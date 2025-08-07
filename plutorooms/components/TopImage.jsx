import { Fullscreen } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TopImage = () => {
  return (
    <section>
        <div className='p-10 absolute w-full h-[15.875rem] border-red'>
            <Image src='/heroBackground.jpg' fill className='object-cover'/>
            
        </div>
    </section>
  )
}

export default TopImage