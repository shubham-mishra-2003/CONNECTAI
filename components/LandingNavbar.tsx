"use-client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export const LandingNavbar = () => {
  const signedIn = () =>{
    console.log("hello");
  }
  
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative mr-4 h-[50px] w-[50px] md:h-[75px] md:w-[75px] sm:h-[65px] sm:w-[65px] rounded-">
          <Image
            fill
            src="/logo.png"
            alt="logo"
            style={{
              borderRadius: "50%",
              boxShadow: "0px 0px 30px #00aff0",
            }}
          />
        </div>
        <h1 className="text-[1rem] md:text-[1.5rem] sm:text-[1.3rem] lg:text-[1.5rem] font-bold text-white">
          CONNECT<span className="ml-1 text-[1rem] md:text-[1.5rem] text-blue-500">AI</span>
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={signedIn ? "/dashboard" : "/sign-up"}>
          <button className="get-started navbar-btn">Get Started</button>
        </Link>
      </div>
    </nav>
  );
};
