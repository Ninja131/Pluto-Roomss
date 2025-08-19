import TopImage from "@/components/TopImage";
import SearchBox from "@/components/SearchBox";
import LocationCarousel from "@/components/LocationCarousel";
import LogoCarousel from "@/components/LogoCarousel";
import { PropertyCarousel } from "@/components/PropertyCarousel";
import PropertyCard from "@/components/PropertyCard";
import { TestimonialsNum } from "@/components/TestimonialsNum";
import SectionThreeStep from "@/components/SectionThreeStep";
import TestimonialUser from "@/components/TestimonialUser";
import Cta from "@/components/Cta";




export default function Home() {
  return (
    <>
    <TopImage/>
    <SearchBox/>
    <LocationCarousel/> 
    <LogoCarousel/>
    <PropertyCarousel title='Hotels for Every Budget & Occasion'/>
    <PropertyCarousel title='PGs That Feel Like Home'/>
    <TestimonialsNum/>
    <SectionThreeStep/>
    <PropertyCarousel title='Find the Perfect Spot to Dine & Unwind'/>
    <PropertyCarousel title='Book Trusted Caterers for Your Next Event'/>
    <PropertyCarousel title='Banquet Halls for Weddings, Parties & More'/>
    <TestimonialUser/>

    <Cta/>

    


    


    
    </>
  );
}
