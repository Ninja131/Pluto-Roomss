import { Marquee } from "@/src/components/magicui/marquee";
import Image from "next/image";
import { logos } from "@/constants";


 const  LogoCarousel=() =>{
 

  return (
    <div className="max-container relative flex flex-col items-center w-full overflow-hidden mt-20">
        <div><h2 className="body-lg text-grayMain-500 mb-10 text-center">Join Our Network of Trusted Hospitality Providers</h2></div>
      <Marquee pauseOnHover className="[--duration:20s] ">
        {logos.map((src, i) => (
          <div key={i} className=" flex items-center justify-center h-20 w-40 mx-4">
            <img src={src} alt={`Logo ${i + 1}`} className="h-16 w-auto" />
          </div>
        ))}
      </Marquee>

     
     
    
    </div>
  );
 }

 export default LogoCarousel