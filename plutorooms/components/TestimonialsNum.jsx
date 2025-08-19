"use client";  // add this if you are using Next.js App Router

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TestimonialsNumData } from "@/constants";
import Image from "next/image";

export const TestimonialsNum = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;

   const animation= gsap.fromTo(
      el,
      { y: 50, opacity: 0 },
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



  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative max-container mt-20 opacity-0"
    >
      <div className="px-4 md:px-16 py-24 rounded-2xl bg-grayMain-800">
        <Image
          src="/globebackground.png"
          width={500}
          height={500}
          alt="globebackground"
          className="absolute right-0 w-[800px]"
        />

        {/* container upper */}
        <div>
          <h3 className="h3 max-lg:text-center text-grayMain-50">We’re Growing, With You</h3>
          <p className="body-lg max-lg:text-center  text-grayMain-500">
            Here’s why more businesses and guests are choosing PlutoRooms.
          </p>
        </div>

        {/* container lower */}
        <div className="mt-22 flex flex-col lg:flex-row lg:justify-between gap-15  ">
          {TestimonialsNumData.map((d, i) => (
            <div key={i} className="flex flex-col gap-4 lg:px-4 max-lg:items-center">
              <h1 className=  "max-lg:text-center   text-grayMain-50 h1">{d.num}</h1>
              <p className=" max-lg:text-center  text-grayMain-500 body-lg text-justify max-w-80">
                {d.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
