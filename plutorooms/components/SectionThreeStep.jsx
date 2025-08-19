import HotelIcon from '@/public/icons/HotelIcon'
import ListIcon from '@/public/icons/ListIcon'
import ProfileIcon from '@/public/icons/Profile'
import Image from 'next/image'
import React from 'react'

const SectionThreeStep = () => {
  return (
    <section className=' bg-white mt-15'>

        <div className='py-32  max-container'>

            <div className='flex flex-col items-center '>
                <h2 className='h2 text-center text-grayMain-700'>List Your Property in 3 Simple Steps</h2>
                <p className='body-lg  max-w-[500px] text-center text-grayMain-500'>PlutoRooms helps property owners list, manage, and grow their business with complete control</p>
            </div>


            <div className='flex  flex-col items-center lg:flex-row lg:justify-between mt-8'> 
                <StepCard
                icon={<ProfileIcon className=' fill-cyan-500'/>}
                title='Create Your Brand & Profile'
                paraText='Enter your name, business info, and choose your property type. Add a brand and manage multiple listings'
                bgColor = {`bg-cyan-100`}
                txtColor={`text-cyan-500`}
                step={`1`}/>
                
                <StepCard
                icon={<HotelIcon className=' text-green-700 '/>}
                title='Create Your Brand & Profile'
                paraText='Enter your name, business info, and choose your property type. Add a brand and manage multiple listings'
                bgColor = {`bg-green-100`}
                txtColor={`text-green-700`}
                step={`2`}
                
                />
                
                <StepCard
                icon={<ListIcon className=' text-primary-500'/>}
                title='Create Your Brand & Profile'
                paraText='Enter your name, business info, and choose your property type. Add a brand and manage multiple listings'
                bgColor = {`bg-blue-100`}
                txtColor={`text-primary-500`}
                step={`3`}/>
                
            </div>

        </div>

    </section>
  )
}

export default SectionThreeStep


const StepCard = ({icon,paraText,title,bgColor,txtColor,step})=>{
    return(
        <div className='mt-30  w-[409px] h-[252px]  relative flexCenter'>
            
            
            <div className='absolute w-full flexCenter -top-13'>

            <div className={`w-[108px] h-[108px] flexCenter rounded-2xl   relative ${bgColor}`}>
                
                {icon}

                <div className={`absolute -left-6 -top-6 h-15 w-15 ${bgColor} border-4 border-white rounded-full flexCenter`}>
                    <h2 className={`h2  ${txtColor}`}>{step}</h2>
                </div>

            </div>
            </div>

            <div>
                <h6 className='title text-center text-grayMain-700'>{title}</h6>
                <p className='text-grayMain-500 text-center max-w-[314px]  '>{paraText} </p>
            </div>


            

        </div>







        
    )
}