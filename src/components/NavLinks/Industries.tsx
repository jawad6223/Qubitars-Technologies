import Image from "next/image";
import {
  ChartNoAxesCombined,
  MapPin,
  Atom,
  Diameter,
  HeartPlus,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";
import Button from "../ui/button/Button";
export const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState("real-estate");
  return (
    <>
      <div className="fixed inset-x-0 top-[110px] mx-30 bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-300 ease-in-out">
        <div className="mx-[5%] py-6">
          <div className="grid grid-cols-[20%_80%] gap-8">
            <div className="space-y-3">
              <div
                onClick={() => setActiveIndustry("real-estate")}
                className={`flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item ${
                  activeIndustry === "real-estate"
                    ? "bg-accent/10 rounded-lg"
                    : ""
                }`}
              >
                <div className=" p-1.5 rounded-lg ">
                  <ChartNoAxesCombined
                    width={22}
                    height={22}
                    className={`opacity-90 ${activeIndustry === "real-estate" ? "text-accent" : ""}`}
                  />
                </div>
                <span
                  className={`font-medium ${
                    activeIndustry === "real-estate" ? "text-accent" : ""
                  }`}
                >
                  Real Estate
                </span>
              </div>
              <div
                onClick={() => setActiveIndustry("travel")}
                className={`flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item ${
                  activeIndustry === "travel" ? "bg-accent/10 rounded-lg" : ""
                }`}
              >
                <div className=" p-1.5 rounded-lg ">
                  <MapPin width={22} height={22} className={`opacity-90 ${activeIndustry === "travel" ? "text-accent" : ""}`} />
                </div>
                <span
                  className={`font-medium ${
                    activeIndustry === "travel" ? "text-accent" : ""
                  }`}
                >
                  Travel & Hospitality
                </span>
              </div>
              <div
                onClick={() => setActiveIndustry("energy")}
                className={`flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item ${
                  activeIndustry === "energy" ? "bg-accent/10 rounded-lg" : ""
                }`}
              >
                <div className=" p-1.5 rounded-lg ">
                  <Atom width={22} height={22} className={`opacity-90 ${activeIndustry === "energy" ? "text-accent" : ""}`} />
                </div>
                <span
                  className={`font-medium ${
                    activeIndustry === "energy" ? "text-accent" : ""
                  }`}
                >
                  Oil Gas & Energy
                </span>
              </div>
              <div
                onClick={() => setActiveIndustry("banking")}
                className={`flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item ${
                  activeIndustry === "banking" ? "bg-accent/10 rounded-lg" : ""
                }`}
              >
                <div className=" p-1.5 rounded-lg ">
                  <Diameter width={22} height={22} className={`opacity-90 ${activeIndustry === "banking" ? "text-accent" : ""}`} />
                </div>
                <span
                  className={`font-medium ${
                    activeIndustry === "banking" ? "text-accent" : ""
                  }`}
                >
                  Banking & FinTech
                </span>
              </div>
              <div
                onClick={() => setActiveIndustry("healthcare")}
                className={`flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item ${
                  activeIndustry === "healthcare"
                    ? "bg-accent/10 rounded-lg"
                    : ""
                }`}
              >
                <div className=" p-1.5 rounded-lg ">
                  <HeartPlus width={22} height={22} className={`opacity-90 ${activeIndustry === "healthcare" ? "text-accent" : ""}`} />
                </div>
                <span
                  className={`font-medium ${
                    activeIndustry === "healthcare" ? "text-accent" : ""
                  }`}
                >
                  Healthcare
                </span>
              </div>
              <div
                onClick={() => setActiveIndustry("edtech")}
                className={`flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item ${
                  activeIndustry === "edtech" ? "bg-accent/10 rounded-lg" : ""
                }`}
              >
                <div className=" p-1.5 rounded-lg ">
                  <GraduationCap
                    width={22}
                    height={22}
                    className={`opacity-90 ${activeIndustry === "edtech" ? "text-accent" : ""}`}
                  />
                </div>
                <span
                  className={`font-medium ${
                    activeIndustry === "edtech" ? "text-accent" : ""
                  }`}
                >
                  EdTech
                </span>
              </div>
              <div
                onClick={() => setActiveIndustry("startups")}
                className={`flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item ${
                  activeIndustry === "startups" ? "bg-accent/10 rounded-lg underline underline-offset-4" : ""
                }`}
              >
                <div className=" p-1.5 rounded-lg ">
                  <Image
                    src="/images/Industries/Product Rocket.png"
                    alt="AI"
                    width={22}
                    height={22}
                    className={`opacity-90 ${activeIndustry === "startups" ? "text-accent" : ""}`}
                  />
                </div>
                <span
                  className={`font-medium ${
                    activeIndustry === "startups" ? "text-accent" : ""
                  }`}
                >
                  Startups
                </span>
              </div>
            </div>

            <div className="border-l-2 border-gray-200 p-6">
              {activeIndustry === "real-estate" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center w-full border-b-2 border-gray-300 pb-4">
                    <p className="text-gray-600 w-[80%] leading-snug">
                    We empower real estate professionals with smart digital solutions—streamlining property management, simplifying transactions, and enhancing customer journeys from search to close.
                    </p>
                    <Button variant="outline" size="md" className="whitespace-nowrap">
                      Discover More
                    </Button>
                  </div>
                  <div className="flex flex-col w-full border-b-2 border-gray-300">
                    <h3 className="text-lg font-bold text-accent mb-2">
                      Companies that we have worked with
                    </h3>
                    <div className="overflow-hidden w-full">
                      <div className="flex items-center gap-6 relative whitespace-nowrap marquee py-2">
                        <Image src="/images/Industries/Deal Closer.png" width={130} height={130} alt="Deal Closer" className="hover:opacity-90 transition-opacity"/>
                        <Image src="/images/Industries/Cash Flow.png" width={130} height={130} alt="Cash Flow" className="hover:opacity-90 transition-opacity"/>
                        <Image src="/images/Industries/Republic.png" width={130} height={130} alt="Republic" className="hover:opacity-90 transition-opacity"/>
                        <Image src="/images/Industries/Roofing.png" width={130} height={130} alt="Roofing" className="hover:opacity-90 transition-opacity"/>
                        <Image src="/images/Industries/Faraway.png" width={130} height={130} alt="Faraway" className="hover:opacity-90 transition-opacity"/>
                        <Image src="/images/Industries/Republic.png" width={130} height={130} alt="Republic" className="hover:opacity-90 transition-opacity"/>
                      </div>
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-300 pb-4">
                    <p className="text-gray-600 italic">
                    “Qubitars is an integral part of our team and we probably wouldn&apos;t be here today without them. Some of their team has worked with us for 5-8 years and we&apos;ve built a trusted business relationship. We share successes together.”
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <Image src="/images/Industries/Man.png" alt="Jake Peters" width={50} height={50} className="hover:opacity-90 transition-opacity"/>
                      <span className="text-accent font-bold text-md">Jake Peters <span className="text-gray-600 font-semibold text-sm">/ CEO & CO-Founder, PayPerks</span></span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-accent">Let&apos;s Build Your Next Project Together</h3>
                      <p className="text-gray-600 text-sm">With over 1000 tech experts, we&apos;re ready to discuss your project.</p>
                    </div>
                    <Button variant="accent" size="lg">
                      Schedule a Call
                    </Button>
                  </div>
                </div>
              )}
              {activeIndustry === "travel" && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-accent">
                    Travel & Hospitality Innovation
                  </h3>
                  <p className="text-gray-600">
                    Elevating guest experiences through smart technology
                    solutions. We help travel businesses modernize operations
                    and deliver exceptional service.
                  </p>
                </div>
              )}
              {activeIndustry === "energy" && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-accent">
                    Energy Sector Technology
                  </h3>
                  <p className="text-gray-600">
                    Powering the future of energy with advanced digital
                    solutions. Our expertise helps optimize operations and drive
                    sustainable practices.
                  </p>
                </div>
              )}
              {activeIndustry === "banking" && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-accent">
                    FinTech Solutions
                  </h3>
                  <p className="text-gray-600">
                    Revolutionizing financial services with cutting-edge
                    technology. We enable secure, efficient, and user-friendly
                    banking experiences.
                  </p>
                </div>
              )}
              {activeIndustry === "healthcare" && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-accent">
                    Healthcare Innovation
                  </h3>
                  <p className="text-gray-600">
                    Advancing healthcare delivery through digital
                    transformation. Our solutions improve patient care and
                    streamline medical operations.
                  </p>
                </div>
              )}
              {activeIndustry === "edtech" && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-accent">
                    Educational Technology
                  </h3>
                  <p className="text-gray-600">
                    Revolutionizing learning through innovative digital
                    solutions. We help create engaging and effective educational
                    experiences.
                  </p>
                </div>
              )}
              {activeIndustry === "startups" && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-accent">
                    Startup Solutions
                  </h3>
                  <p className="text-gray-600">
                    Empowering startups with scalable technology solutions. We
                    help turn innovative ideas into successful digital products.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
