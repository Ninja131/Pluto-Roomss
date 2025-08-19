import { Badge } from "@/components/ui/badge";
import CalandarIcon from "@/public/icons/CalandarIcon";
import DollarIcon from "@/public/icons/DollarIcon";
import EditIcon from "@/public/icons/EditIcon";
import GrowthIcon from "@/public/icons/GrowthIcon";
import Verify from "@/public/icons/Verify";
import Image from "next/image";



const PropertyCard = ({image,name,address,brandImage,brandName,price}) => {


    












  return (


    <>
    {/* card starts here */}
    <div className="  bg-white rounded-2xl overflow-hidden">

        {/* image holder */}
        <div className="relative  h-[176px] overflow-hidden flex items-center justify-center">
            <Image src={`/${image}`} fill className="object-cover w-full "/>
        </div>

        {/* content holder */}
        <div className="h-full px-4 py-4">

            <div >
                <h6 className="title text-grayMain-700">{name}</h6>
                <p className="body-sm text-grayMain-500">{address}</p>
            </div>

            {/* badge holder */}

            <div className=" flex  mt-2 items-center flex-wrap gap-x-4 gap-y-2">


                <div >
                <Badge className="bg-blue-100 body-sm flex text-blue-900 px-4 rounded-full">
            <span className="w-4 h-4">
                <Verify className="w-full h-full text-blue-500 fill-blue-500" />
            </span>
              Verified
               </Badge>
            </div>

            <div >
                <Badge className="bg-green-100 body-sm flex text-green-900 px-4 rounded-full">
            <span className="w-4 h-4 ">
                <DollarIcon className=" text-green-500  w-full h-full" />
            </span>
              Subscription Ends on: 27-03-2027
               </Badge>
            </div>
            

            </div>


            {/* brand card */}

            <div className="border-2 border-grayMain-100 h-16 rounded-lg mt-2 flex justify-between items-center p-2">

                <div className="w-full h-full  flex items-center gap-1">
                    <div className="relative  w-11 h-full rounded-[4px] overflow-hidden">
                       <Image src='/brandLogo.jpg' alt="brand" fill className="object-contain"/> 
                    </div>

                    <h6 className="body text-grayMain-700">{brandName}</h6>
                </div>

                <h6 className="body-xs text-primary-500">Restaurants</h6>

            </div>

            {/* prize section */}

            <div className=" mt-4 flex justify-between items-center">

                <h3 className="h3 text-grayMain-700">{`${price}/`} <span className="body-sm text-grayMain-500">Starting From</span></h3>

                <div className="flex items-center justify-center gap-2">
                    <div 
                    
                     className="border-2 border-grayMain-100 rounded-sm  h-10 w-10 flexCenter   group hover:bg-grayMain-400 transition-all">
                        <GrowthIcon className='text-grayMain-500 group-hover:text-grayMain-50'/>
                    </div>

                    <div className="border-2 border-grayMain-100 rounded-sm  h-10 w-10 flexCenter group hover:bg-grayMain-400 transition-all">
                        <CalandarIcon className='text-grayMain-500 group-hover:text-grayMain-50'/>
                    </div>

                    <div className="border-2 border-grayMain-100 rounded-sm  h-10 w-10 flexCenter group hover:bg-grayMain-400 transition-all">
                        <EditIcon className='text-grayMain-500 group-hover:text-grayMain-50'/>
                    </div>
                    
                </div>

            </div>

            

            
            
        </div>

    </div>


    
    </>
  )
}

export default PropertyCard