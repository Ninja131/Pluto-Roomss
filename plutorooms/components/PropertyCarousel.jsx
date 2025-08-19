"use client";  // add this if you are using Next.js App Router


import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from 'next/image'
import {destinations, properties} from '../constants/index'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import PropertyCard from './PropertyCard';





export const PropertyCarousel = ({title}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;

    const animation = gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
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

    return () => {
    // Kill the animation and its scroll trigger on unmount
    animation.scrollTrigger.kill();
    animation.kill();
  };
  
    
  }, [])
  






   return (
    <section className="bg-muted py-12 mt-15"
    ref={sectionRef}
    >
      <div className="container max-container ">
        <Carousel opts={{ align: "start" }} className="w-full overflow-visible">
  {/* Heading row */}
  <div className="flex items-center justify-between mb-6">
    <h2 className="res-title text-primary-800">{title}</h2>
    <div className="flex gap-2">
      <CarouselPrevious className="static translate-y-0 rounded-lg h-10 w-10 bg-white border-none" />
      <CarouselNext className="static translate-y-0 h-10 w-10 rounded-lg bg-white border-none" />
    </div>
  </div>

  {/* Carousel items */}
  <CarouselContent className="-ml-4">
    {properties
      .map((dest, idx) => (
        <CarouselItem
          key={idx}
          className="pl-4 basis-full md:basis-[calc(43.333%-1rem)] lg:basis-[calc(33.333%-1rem)]"
        >
          <PropertyCard 
          image={dest.image}
          name={dest.hotelName}
          address={dest.address}
          brandImage={dest.brandImage}
          brandName={dest.brandName}
          price={dest.price}
           />
        </CarouselItem>
      ))}
  </CarouselContent>
</Carousel>

      </div>
    </section>
  )
}








