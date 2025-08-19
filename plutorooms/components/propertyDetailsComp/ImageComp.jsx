"use client"
import Image from "next/image"
import React from "react"
import { Button } from "../ui/button"
import ImageIcon from "@/public/icons/ImageIcon"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"

const ImageComp = () => {
  return (
    <section className="max-container mt-10 relative">

      {/* ✅ Carousel for small devices */}
      <div className="lg:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {["/HotelImg-1.jpg", "/HotelImg-2.jpg", "/HotelImg-3.jpg"].map(
              (src, i) => (
                <CarouselItem key={i}>
                  <div className="relative w-full h-[248px] md:h-[340px] overflow-hidden rounded-2xl">
                    <Image
                      src={src}
                      alt={`hotelimage-${i}`}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
      </div>

      {/* ✅ Grid for large devices */}
      <div className="hidden lg:grid grid-rows-2 grid-cols-12 h-[488px] w-full gap-4">

        <div className="relative overflow-hidden rounded-2xl row-start-1 row-end-3 col-start-1 col-end-9">
          <Image
            src="/HotelImg-1.jpg"
            alt="hotelimage"
            fill
            className="object-center object-cover"
          />
        </div>

        <div className="relative overflow-hidden rounded-2xl lg:row-start-1 lg:row-end-2 lg:col-start-9 lg:col-end-13">
          <Image
            src="/HotelImg-2.jpg"
            alt="hotelimage"
            fill
            className="object-center object-cover"
          />
        </div>

        <div className="relative overflow-hidden rounded-2xl lg:row-start-2 lg:row-end-3 lg:col-start-9 lg:col-end-13">
          <Image
            src="/HotelImg-3.jpg"
            alt="hotelimage"
            fill
            className="object-center object-cover"
          />
        </div>

        {/* show all images button */}
        <div className="absolute bottom-4 right-12 xl:right-8">
          <Button className="bg-white text-grayMain-700 button-txt cursor-pointer rounded-lg hover:bg-grayMain-100 h-full flex items-center justify-center">
            <ImageIcon className="text-grayMain-600 size-5" />
            Show all Images
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ImageComp
