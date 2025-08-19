import HotelIcon from "@/public/icons/HotelIcon"
import { Button } from "@/components/ui/button"
import RupeeIcon from "@/public/icons/RupeeIcon"

const Cta = () => {
  return (
    <>
    <section className="bg-grayMain-900 px-4 ">
        <div className="max-container  py-21 flex justify-center items-center flex-col md:flex-row gap-4 ">
            
            <Card icon ={ <HotelIcon className='text-cyan-600'/>} 
            title='Grow Your Business with PlutoRooms'
            para='We help Property owners to reach customers and grow faster.'
            buttontxt='Add Your Property'
            bgColor='bg-cyan-100'
            />

            <Card icon ={ <RupeeIcon className='text-green-600'/>} 
            title='Earn 12% Commission by Listing Properties'
            para='Help businesses join PlutoRooms and get rewarded for every successful listing.'
            buttontxt='Become a Sales Partner'
            bgColor='bg-green-100'
            />
            

        </div>
        
    </section>
    </>
  )
}

export default Cta



// card component 
const Card = ({icon,title,para,buttontxt,bgColor})=>{
    return(
        <>
        <div className="px-8 lg:px-16 h-[340px] lg:h-[400px]  w-full  flex flex-col items-start justify-center gap-4 bg-white rounded-2xl ">

            <div className={`h-17 w-17  ${bgColor} rounded-lg flexCenter `}>
                {icon}
            </div>

            <h2 className="h3 lg:h2 text-grayMain-700" >{title}</h2>
            <p  className="body text-grayMain-600">{para}</p>

            <Button 
            className=' bg-grayMain-900 text-white button-txt px-10 lg:px-20 py-7 cursor-pointer rounded-lg hover:bg-primary-600'
            >{buttontxt}</Button>
        </div>
        </>
    )
}