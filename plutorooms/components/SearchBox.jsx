import { Button } from "@/components/ui/button"
import Image from "next/image"


const SearchBox = () => {
  return (
    <section>
        <div className="border-red relative z-10 p-10 mt-[120px] max-w-[904px] mx-auto bg-white rounded-2xl">

            <div className="flex items-center justify-between  ">
               
               <Button  variant='propertyCard' size='propertyCard'
               className='bg-banquet-200 hover:bg-banquet-300'>
                <Image src='/homeBanquetImg.png' alt="homeBanquetImg" width={24} height={24}/>
                Banquet
               </Button>


                <Button  variant='propertyCard' size='propertyCard'
               className='bg-pg-200 hover:bg-pg-300'>
                <Image src='/homePgImg.png' alt="homeBanquetImg" width={24} height={24}/>
                Pg's
               </Button>


                <Button  variant='propertyCard' size='propertyCard'
               className='bg-catering-200 hover:bg-catering-300'>
                <Image src='/homeCateringImg.png' alt="homeBanquetImg" width={24} height={24}/>
                Catering
               </Button>

                <Button  variant='propertyCard' size='propertyCard'
               className='bg-hotels-200 hover:bg-hotels-300'>
                <Image src='/homeHotelImg.png' alt="homeHotelImg" width={24} height={24}/>
                Hotels
               </Button>

              

               <Button  variant='propertyCard' size='propertyCard'
               className='bg-restaurants-200 hover:bg-restaurants-300'>
                <Image src='/homeRestaurantsImg.png' alt="homeBanquetImg" width={24} height={24}/>
                Restaurants
               </Button>

              

                 
               
               

               
                
                

               
                 
                
            </div>
        </div>
    </section>
  )
}

export default SearchBox