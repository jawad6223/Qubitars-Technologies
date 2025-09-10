import React from "react";
import Button from "../ui/button/Button";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
const Hero = () => {
  return (
    <main className="flex items-center justify-center w-full min-h-screen mt-32 lg:mt-0 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-8" style={{
            backgroundImage: `url(${'/images/BG.png'})`,
            // backgroundSize: "cover",
            backgroundPosition: "left",
          }}>
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
          <h1 className="text-4xl lg:text-6xl font-bold text-darkGray mb-2">
            Your Partner in Digital
          </h1>
          <Image src="/images/Title.png" alt="hero" width={250} height={50} />
          <Button variant="accent" size="lg">
            Book a Consultation, it&apos;s free
          </Button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-end">
          <Image
            src="/images/Card-1.png"
            alt="Hero Card"
            width={500}
            height={400}
            className="rounded-lg"
            priority
          />
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
            <CalendarDays className="relative bottom-[500px] left-48 lg:bottom-0 lg:left-0 lg:top-[100px] bg-accent rounded-full p-2 w-12 cursor-pointer h-12"/>
        </div>
      </div>
    </main>
  );
};

export default Hero;
