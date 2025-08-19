"use client";  // add this if you are using Next.js App Router


import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



import Image from 'next/image'
import {destinations} from '../constants/index'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const LocationCarousel = () => {
    const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;

   const animation= gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
    // Kill the animation and its scroll trigger on unmount
    animation.scrollTrigger.kill();
    animation.kill();
  };
  
    
  }, [])








 return (
    <section ref={sectionRef} className="bg-muted py-12 mt-60 sm:mt-45">
      <div className="container max-container ">
        <Carousel opts={{ align: "start" }} className="w-fill ">
          {/* Heading row */}
          <div className=" flex items-center justify-between mb-6">
            <div>
              <h2 className="res-title text-primary-800 res-title">Popular Destinations</h2>
            </div>
            <div className="flex gap-2">
              <CarouselPrevious className="static translate-y-0 rounded-lg h-10 w-10 bg-white border-none" />
              <CarouselNext className=" static translate-y-0 h-10 w-10 rounded-lg bg-white border-none" />
            </div>
          </div>

          {/* Carousel items */}
          <CarouselContent>
            {destinations.map((dest) => (
              <CarouselItem
                key={dest.name}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
              >
                <div className="   transition overflow-hidden ">
                  <Image
                    src={dest.img}
                    alt={dest.alt}
                    width={400}
                    height={250}
                    className="w-full h-58 object-cover rounded-xl"
                  />
                    <h3 className="text-lg font-semibold mt-2 body-lg text-primary-800">{dest.name}</h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

export default LocationCarousel