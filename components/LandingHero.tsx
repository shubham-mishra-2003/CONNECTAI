import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const LandingHero = () => {
  // const signedIn = useAuth();
  const signedIn = () =>{
    console.log("hello");
  }

  return (
    <div className="text-white font-bold py-10 text-center space-y-5">
      <div className="text-3xl sm:text-5xl md:6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Best AI tool for</h1>
      </div>
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        {/* <TypewriterComponent
          options={{
            strings: [
              "ChatBot",
              "Code Generator",
              "Image Generator",
              "Video Generator",
              "Music Generator",
            ],
            autoStart: true,
            loop: true,
          }}
        /> */}
        <h1
          className="text-6xl sm:text-8xl md:text-9xl lg:text-8xl"
          id="typewriter"
        >
          ChatBot
        </h1>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI 10X faster.
      </div>
      <div>
        <Link href={signedIn ? "/dashboard" : "/sign-up"}>
          <button className="get-started hero">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingHero;
