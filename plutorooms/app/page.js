import Image from "next/image";
import { Button } from "@/components/ui/button"
import Nav from "@/components/Nav";
import TopImage from "@/components/TopImage";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <>
    <Nav/>
    <TopImage/>
    <SearchBox/>

    


      <h1 className="text-3xl bg-blue-100 font-workSans">This uses Work Sans</h1>
      <h1 className="display-xl bg-blue-100 font-workSans">This uses Monsieur</h1>

       <h1 className="h1 bg-blue-100 font-workSans">This uses Monsieur</h1>

        <h1 className="h2 bg-blue-100 font-workSans">This uses Monsieur</h1>

         <h1 className="h3 bg-blue-100 font-workSans">This uses Monsieur</h1>
         <h1 className="h4 bg-blue-100 font-workSans">This uses Monsieur</h1>

         <h1 className="title bg-blue-100 font-workSans">This uses Monsieur</h1>

         <h1 className="body-lg bg-blue-100 font-workSans">This uses Monsieur</h1>

         <h1 className="body-sm bg-blue-100 font-workSans">This uses Monsieur</h1>

         <h1 className="body-xs bg-blue-100 font-workSans">This uses Monsieur</h1>

         <h1 className="label-sm bg-blue-100 font-workSans">This uses Monsieur</h1>

         <h1 className="button bg-blue-100 font-workSans">This uses Monsieur</h1>

        <Button variant="outline">Button</Button>
    </>
  );
}
