"use client";  // add this if you are using Next.js App Router

import Link from 'next/link'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



import { Button } from "@/components/ui/button"
import Image from "next/image"
import SearchField from "./ui/SearchField"
import {SearchCard} from '../constants/index'


const SearchBox = () => {

  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  
    
  }, [])










  return (
    <section ref={sectionRef} className=" px-4 md:px-5 lg:px-6 xl:px-0 absolute w-full top-20">
        <div className=" relative z-10 p-6 md:p-10 mt-18 max-w-[904px] mx-auto bg-white rounded-2xl ">

            <div className=" flex flex-wrap items-center justify-between gap-4 ">{SearchCard.map((c)=>(
              <div 
               key={c.nameMain}  
               className={`${c.classes}
               flex flex-col px-1 py-1 xl:px-10  xl:py-5   rounded-lg flex-1 items-center justify-center min-w-[80px]
               `}>
                <Image src={c.img}alt="homeBanquetImg" width={24} height={24}
                className="h-4 w-4 md:h-6 md:w-6"
                />
                {c.nameMain}
               </div>
            ))}
               
             
                
              

               

               
                
                

               
                 
                
            </div>
            
            <SearchField/>

            <div className=" flexCenter  absolute w-full left-0 -bottom-10 h-20">
              <Link href="/PropertyList"> <Button 
            className=' bg-primary-500 text-white button-txt px-20 py-7 cursor-pointer rounded-lg hover:bg-primary-600'
            >Search</Button></Link> 
            </div>
          
        </div>
        
    </section>
  )
}

export default SearchBox