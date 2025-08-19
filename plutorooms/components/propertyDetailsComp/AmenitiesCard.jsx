import { AMENITIES } from "@/constants"
import Image from "next/image"
import { Button } from "../ui/button"


const AmenitiesCard = () => {
  return (
    <>
     <section className=" bg-white rounded-2xl">
      <div className="w-full flex justify-center items-start gap-4 px-6 py-10 flex-col ">
         <h3 className="h3 text-grayMain-700">What’s Included</h3>
        
        {/* amenity container */}
         <div className=" w-full grid grid-cols-2  gap-7">
            {/* the amenity */}
            {AMENITIES.map((data)=>(
                <div className="flex items-center gap-4  " key={data.name}>
                <div className="relative w-6 h-6"><Image 
                alt={data.name}
                src={data.image}
                width={24}
                height={24}
                /></div>
                <p className="body-txt text-grayMain-700">{data.name}</p>
            </div>
            ))}

            

         </div>

         {/* button starts here */}
         <Button className='button-txt py-6 bg-primary-50 mt-4'>Show all Amanities</Button>
      </div>

      </section>
    </>
  )
}

export default AmenitiesCard