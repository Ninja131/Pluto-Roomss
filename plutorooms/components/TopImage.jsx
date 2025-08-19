import { Fullscreen } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TopImage = () => {
  return (
    <section>
        <div className='h-65 w-full border-red relative'>
            <Image src='/heroBackground.jpg' fill alt='top image' className='object-cover object-center '/>
            
        </div>
    </section>
  )
}

export default TopImage