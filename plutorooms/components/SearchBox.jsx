import { Button } from "@/components/ui/button"
import Image from "next/image"


const SearchBox = () => {
  return (
    <section>
        <div className="border-red relative z-10 p-10 mt-[120px] max-w-[904px] mx-auto bg-white rounded-2xl">

            <div className="flex items-center justify-between border-red ">
               
               <button className="bg-banquet-200 flex flex-col items-center justify-center h-[80px] w-[136px] rounded-lg body-sm gap-2">
                <Image src='/homeBanquetImg.png' alt="homeBanquetImg" width={24} height={24}/>
                Become a partner
               </button>
               
               <button className="bg-banquet-200 flex flex-col items-center justify-center h-[80px] w-[136px] rounded-lg body-sm gap-2">
                <Image src='/homeBanquetImg.png' alt="homeBanquetImg" width={24} height={24}/>
                Become a partner
               </button>
               
               <button className="bg-banquet-200 flex flex-col items-center justify-center h-[80px] w-[136px] rounded-lg body-sm gap-2">
                <Image src='/homeBanquetImg.png' alt="homeBanquetImg" width={24} height={24}/>
                Become a partner
               </button>

               <button className="bg-banquet-200 flex flex-col items-center justify-center h-[80px] w-[136px] rounded-lg body-sm gap-2">
                <Image src='/homeBanquetImg.png' alt="homeBanquetImg" width={24} height={24}/>
                Become a partner
               </button>

               <button className="bg-banquet-200 flex flex-col items-center justify-center h-[80px] w-[136px] rounded-lg body-sm gap-2">
                <Image src='/homeBanquetImg.png' alt="homeBanquetImg" width={24} height={24}/>
                Become a partner
               </button>

              

                 
               
               

               
                
                

               
                 
                
            </div>
        </div>
    </section>
  )
}

export default SearchBox