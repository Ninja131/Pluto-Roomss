"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";

const Nav = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setVisible(false);
      } else {
        // scrolling up → show
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white  z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full "
      }`}
    >
      <nav>
        <div className="max-container flex items-center justify-between h-16 ">
          {/* Logo */}
          <div className="flexCenter gap-1">
            <Link href="/">
              <Image
                src="/logoMain.svg"
                alt="logo"
                width={40}
                height={40}
                priority
              />
            </Link>
            <h4 className="logoText font-workSans w-20 text-primary-700">
              Pluto Rooms
            </h4>
          </div>

          {/* Right side */}
          <div className="flex justify-center items-center gap-2 md:gap-6">
            <Button
              variant="default"
              className="bg-primary-100 outline-0 hover:bg-primary-200 py-6 px-4 rounded-full flexCenter body-lg text-grayMain-700 gap-1"
            >
              Become a partner
              <Image
                src="/down.svg"
                alt="logo"
                width={24}
                height={24}
                className="mt-0.5"
              />
            </Button>

            <div className=" relative"
            ><Image src="/notification.svg" alt="notif" width={24} height={24} />

            <Badge className='bg-red-500 body-xs text-white absolute -right-3 -top-3 rounded-full'>9</Badge>
            
            </div>
            <Image src="/profile.svg" alt="profile" width={24} height={24} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
