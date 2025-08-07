import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"


const Nav = () => {
  return (
    <header className='bg-white'>
    <nav className="">
        <div className="max-container  flex items-center justify-between h-16 ">

            
          <div className='flexCenter gap-1'>
            <Link href="/"> <Image src="logoMain.svg" alt="logo" width={40} height={40} /></Link>

            <h4 className='logoText font-workSans w-20 text-primary-700'>Pluto Rooms</h4>
          </div>
            

            <div className='flex justify-center items-center gap-2 md:gap-6 '>

                <Button variant="default" className='bg-primary-100 outline-0 hover:bg-primary-200 py-6 px-4 rounded-full flexCenter body-lg text-grayMain-700 gap-1'  >
                    Become a partner
                    <Image src="down.svg" alt="logo" width={24} height={24} className='mt-0.5'/>
                    </Button>

                  <Image src="notification.svg" alt="logo" width={24} height={24} />

            <Image src="profile.svg" alt="logo" width={24} height={24} />


            </div>

            



           
        </div>
    </nav>
    </header>
  )
}

export default Nav