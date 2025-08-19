"use client";
import { useEffect,useState}  from "react"
import Image from "next/image"
import { Input } from "../ui/input"
import { SearchCard } from "@/constants"
import { Button } from "../ui/button"
import FilterIcon from "@/public/icons/FilterIcon"
import ArrowIcon from "@/public/icons/ArrowIcon"
import CloseIcon from "@/public/icons/CloseIcon";
import Link from "next/link";


const SearchComp = () => {
  return (
    <>
    <section className="py-4 bg-white mt-18">
        <div className="max-container "
        >
        
        {/* outer wrap */}
        <div
            className="
            hidden
            
            
                sm:grid 
                grid-cols-4 grid-rows-1             
                sm:grid-cols-8 sm:grid-rows-2       
                md:grid-cols-8 md:grid-rows-2      
                lg:grid-cols-12 lg:grid-rows-2       
                xl:grid-cols-12 xl:grid-rows-1      
                gap-2
                xl:h-15
                h-30
            "
            > 




        {/* location and date wrap */}
        <div className="col-span-6 flex xl:row-start-1 xl:row-end-2
        xl:col-start-1 xl:col-end-7

        lg:row-start-1 lg:row-end-2
        lg:col-start-3 lg:col-end-9

        md:row-start-1 md:row-end-2
        md:col-start-1 md:col-end-8

        sm:row-start-1 sm:row-end-2
        sm:col-start-1 sm:col-end-8
        ">
            {/* location box starts here */}
        
            
             <div className=' flex items-center  flex-1 gap-4 border-2 border-grayMain-100 pl-2 py-2 h-full rounded-tl-lg rounded-bl-lg '>
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

        

        {/* Date box starts here */}
        <div className=' flex items-center  flex-1 gap-4 border-2 border-grayMain-100 border-l-0 pl-2 py-2 h-full rounded-tr-lg rounded-br-lg'>
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





              <div className="col-span-5  flex flex-wrap items-center justify-between h-full   

               xl:row-start-1 xl:row-end-2 xl:col-start-7 xl:col-end-12 rounded-lg 

              lg:row-start-2 lg:row-end-3
              lg:col-start-3 lg:col-end-11

              md:row-start-2 md:row-end-3
              md:col-start-1 md:col-end-9

              sm:row-start-2 sm:row-end-3
              sm:col-start-1 sm:col-end-9


              overflow-hidden gap-2">{SearchCard.map((c)=>(
                            <div 
                             key={c.nameMain}  
                             className={`
                             flex flex-col  py-1     flex-1 items-center justify-center min-w-[80px] border-2 h-full border-grayMain-100 rounded-xl
                             `}>
                              <Image src={c.img}alt="homeBanquetImg" width={24} height={24}
                              className="h-0 w-0 xl:w-6 xl:h-6"
                              />
                              {c.nameMain}
                             </div>
                          ))}
                             
                               
                              
                          </div>

           
            <div className="
            xl:row-start-1 xl:row-end-2 xl:col-start-12 xl:col-end-13
            
            lg:row-start-1 lg:row-end-2 lg:col-start-9 lg:col-end-11

            sm:row-start-1 sm:row-end-2
            sm:col-start-8 sm:col-end-9
            
            
            ">
                 <Link href='/PropertyDetails'>
              
                <Button 
            className=' bg-grayMain-700 text-white button-txt  cursor-pointer rounded-lg   hover:bg-primary-600 h-full w-full
            
            '
            >Search</Button></Link>
            </div> 

              </div> 






        </div>

        <SearchSmall/>

    </section>

 
    </>
  )
}

export default SearchComp












const SearchSmall = () => {
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    if (overlay) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = ""; // re-enable scroll
    }

    // cleanup in case component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [overlay]);

  return (
    <>
      <div className="max-container">
        <div className="sm:hidden grid grid-cols-4 grid-rows-1 sm:grid-cols-8 sm:grid-rows-1 ">
          {overlay && <MobileSearchOverlay onClose={() => setOverlay(false)} />}

          {/* search small device comp starts here */}
          <div className="flex justify-between items-center col-span-8">
            <div className="flexCenter border-2 border-grayMain-100 h-10 w-10 rounded-lg">
              <ArrowIcon className="text-grayMain-700" />
            </div>

            <div
              className="border-2 border-grayMain-100 flex flex-col justify-center items-center mx-4 flex-1 rounded-lg"
              onClick={() => setOverlay(true)}
            >
              <p className="body text-grayMain-700 font-bold text-center">
                Bahadurpura, Hyderabad
              </p>
              <div className="flex gap-4">
                <p className="body text-grayMain-700 text-center">16 Jul</p>
                <p className="body text-grayMain-700 text-center">Banquet</p>
              </div>
            </div>

            <div className="flexCenter border-2 border-grayMain-100 h-10 w-10 rounded-lg">
              <FilterIcon className="text-grayMain-700" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



const MobileSearchOverlay = ({onClose})=>{
  return(
    <>
    <div className="bg-grayMain-50 fixed top-0 bottom-0 left-0 right-0 z-999">

    {/* close icon container */}
    <div className="w-full  flex justify-end mt-4">
      <div className="h-10 w-10 border-2 border-grayMain-100 flexCenter rounded-lg mr-4" onClick={onClose}> 
      <CloseIcon className='text-grayMain-600'/>
    </div>
    </div>

        {/* location input */}
        <div className="mx-auto px-4 mt-6">
          <div className="flex items-center gap-4 w-full border-2 border-grayMain-100 px-4 py-2 rounded-lg bg-white">
          <div className='flexCenter  p-3 rounded-full bg-grayMain-100 '>
          <Image src='/location.svg' alt='location' width={24} height={24}/>
        </div>

        
         
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


        {/* date input */}
        <div className="mx-auto px-4 mt-6">
          <div className="flex items-center gap-4 w-full border-2 border-grayMain-100 px-4 py-2 rounded-lg bg-white">
          <div className='flexCenter  p-3 rounded-full bg-grayMain-100 '>
          <Image src='/calander.svg' alt='location' width={24} height={24}/>
        </div>

        
         
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




        {/* select property type */}
       <div className="mx-auto px-4 mt-13">

         <div className="grid grid-cols-3 gap-4">
          {SearchCard.map((c)=>(
                            <div 
                             key={c.nameMain}  
                             className={`
                             flex flex-col  py-1     flex-1 items-center justify-center min-w-[80px] border-2 h-full border-grayMain-100 rounded-xl
                             `}>
                              <Image src={c.img}alt="homeBanquetImg" width={24} height={24}
                              className="w-6 h-6"
                              />
                              {c.nameMain}
                             </div>
                          ))}
        </div>

       </div>


       {/* search button */}

       <div className="fixed bottom-0 right-0 mr-4 mb-4">
        <Button 
            className=' bg-grayMain-700 text-white button-txt  py-5 px-10 cursor-pointer rounded-xl   hover:bg-primary-600 h-full  
            
            '
            >Search</Button>
       </div>
        




        

        </div>
        
 
    </>
  )
}