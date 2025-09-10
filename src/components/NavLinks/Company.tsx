import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,LandPlot,Handshake,ThumbsUp,
  Building2,Lightbulb,BriefcaseBusiness,Linkedin,Facebook,Github,Instagram, MoveRight, MoveLeft
} from "lucide-react";

export const Company = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <div className="fixed inset-x-0 top-[110px] mx-30 bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-300 ease-in-out">
        <div className="mx-[10%] py-4">
          <div className="grid grid-cols-[45%_25%_30%] gap-8 w-full">
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-darkGray">A Technology Partnership That Goes Beyond Code</h3>
              <div className="relative w-full">
                <div className="absolute right-0 top-0 flex gap-1 z-10">
                    <button disabled={currentSlide === 0}>
                    <MoveLeft width={18} height={18} className={`${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 cursor-pointer hover:scale-110 transition-transform'}`} onClick={handlePrevSlide}/>
                    </button>
                    <button disabled={currentSlide === totalSlides - 1}>
                    <MoveRight width={18} height={18} className={`${currentSlide === totalSlides - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 cursor-pointer hover:scale-110 transition-transform'}`} onClick={handleNextSlide}/>
                    </button>
                </div>
                <div className="overflow-hidden">
                  <div className="flex transition-transform duration-300 ease-in-out mt-10"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    <div className="w-full flex-shrink-0 relative group">
                      <div className="absolute left-0 -top-[15%] w-[100px] h-[35px] transition-transform duration-300 group-hover:scale-105">
                        <Image src="/images/Company/Frame.png" alt="Logo Qubitars" fill className="rounded-sm object-cover" priority/>
                      </div>
                      <p className="text-gray-600 mb-4 text-base leading-relaxed hover:text-accent transition-colors duration-300">
                      "Qubitars is an integral part of our team and we probably wouldn't be here today without them, Some of their team has worked with us for 5-8 years and we've built a trusted business relationship."
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <Image src="/images/Company/Jake.png" alt="Logo PayPerks" width={60} height={30} className="rounded-sm hover:opacity-90 transition-opacity"/>
                        <span className="text-accent font-bold text-md">Jake Peters <span className="text-gray-600">/ CEO & CO-Founder, PayPerks</span></span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-8">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <Users width={24} height={24} className="text-accent"/>
                                <span className="text-gray-600 font-bold text-lg">95%</span>
                            </div>
                            <p className="text-gray-600 text-sm font-semibold">Client Retention</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <LandPlot width={24} height={24} className="text-accent"/>
                                <span className="text-gray-600 font-bold text-lg">90%</span>
                            </div>
                            <p className="text-gray-600 text-sm font-semibold">Automation Efficiency</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <Handshake width={24} height={24} className="text-accent"/>
                                <span className="text-gray-600 font-bold text-lg">100+</span>
                            </div>
                            <p className="text-gray-600 text-sm font-semibold">Users Impacted</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <ThumbsUp width={24} height={24} className="text-accent"/>
                                <span className="text-gray-600 font-bold text-lg">10/10</span>
                            </div>
                            <p className="text-gray-600 text-sm font-semibold">Client Recommendations</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex-shrink-0 relative group">
                      <div className="absolute left-0 -top-[15%] w-[100px] h-[35px] transition-transform duration-300 group-hover:scale-105">
                        <Image src="/images/Company/Frame.png" alt="Logo Qubitars" fill className="rounded-sm object-cover" priority/>
                      </div>
                      <p className="text-gray-600 mb-4 text-base leading-relaxed hover:text-accent transition-colors duration-300">
                      "Qubitars is an integral part of our team and we probably wouldn't be here today without them, Some of their team has worked with us for 5-8 years and we've built a trusted business relationship."
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <Image src="/images/Company/Jake.png" alt="Logo PayPerks" width={60} height={30} className="rounded-sm hover:opacity-90 transition-opacity"/>
                        <span className="text-accent font-bold text-md">Jake Peters <span className="text-gray-600">/ CEO & CO-Founder, PayPerks</span></span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-8">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <Users width={24} height={24} className="text-accent"/>
                                <span className="text-gray-600 font-bold text-lg">95%</span>
                            </div>
                            <p className="text-gray-600 text-sm font-semibold">Client Retention</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <LandPlot width={24} height={24} className="text-accent"/>
                                <span className="text-gray-600 font-bold text-lg">90%</span>
                            </div>
                            <p className="text-gray-600 text-sm font-semibold">Automation Efficiency</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <Handshake width={24} height={24} className="text-accent"/>
                                <span className="text-gray-600 font-bold text-lg">100+</span>
                            </div>
                            <p className="text-gray-600 text-sm font-semibold">Users Impacted</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <ThumbsUp width={24} height={24} className="text-accent"/>
                                <span className="text-gray-600 font-bold text-lg">10/10</span>
                            </div>
                            <p className="text-gray-600 text-sm font-semibold">Client Recommendations</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex-shrink-0 relative group">
                      <div className="absolute left-0 -top-[15%] w-[100px] h-[35px] transition-transform duration-300 group-hover:scale-105">
                        <Image src="/images/Company/Frame.png" alt="Logo Qubitars" fill className="rounded-sm object-cover" priority/>
                      </div>
                      <p className="text-gray-600 mb-4 text-base leading-relaxed hover:text-accent transition-colors duration-300">
                      "Qubitars is an integral part of our team and we probably wouldn't be here today without them, Some of their team has worked with us for 5-8 years and we've built a trusted business relationship."
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <Image src="/images/Company/Jake.png" alt="Logo PayPerks" width={60} height={30} className="rounded-sm hover:opacity-90 transition-opacity"/>
                        <span className="text-accent font-bold text-md">Jake Peters <span className="text-gray-600">/ CEO & CO-Founder, PayPerks</span></span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-8">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <Users width={24} height={24} className="text-accent"/>
                                <span className="text-gray-600 font-bold text-lg">95%</span>
                            </div>
                            <p className="text-gray-600 text-sm font-semibold">Client Retention</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <LandPlot width={24} height={24} className="text-accent"/>
                                <span className="text-gray-600 font-bold text-lg">90%</span>
                            </div>
                            <p className="text-gray-600 text-sm font-semibold">Automation Efficiency</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <Handshake width={24} height={24} className="text-accent"/>
                                <span className="text-gray-600 font-bold text-lg">100+</span>
                            </div>
                            <p className="text-gray-600 text-sm font-semibold">Users Impacted</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <ThumbsUp width={24} height={24} className="text-accent"/>
                                <span className="text-gray-600 font-bold text-lg">10/10</span>
                            </div>
                            <p className="text-gray-600 text-sm font-semibold">Client Recommendations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600 cursor-pointer group/item">
                <div className="p-1 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                  <Building2 width={20} height={20} className="opacity-90"/>
                </div>
                <h3 className="font-bold text-lg text-accent border-b border-accent/20 pb-1">Company</h3>
              </div>
              <div className="flex flex-col space-y-2">
                <Link href="/" className="hover:text-accent hover:translate-x-2 transition-all duration-300">About Us</Link>
                <Link href="/" className="hover:text-accent hover:translate-x-2 transition-all duration-300">Success Stories</Link>
                <Link href="/" className="hover:text-accent hover:translate-x-2 transition-all duration-300">Blogs</Link>
              </div>
              <div className="border-b border-gray-200"></div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2 text-gray-600 cursor-pointer group/item">
                  <div className="p-1 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                    <Lightbulb width={20} height={20} className="opacity-90"/>
                  </div>
                  <h3 className="font-bold text-lg text-accent pb-1">Inside Qubitars</h3>
                </div>
                <Link href="/" className="hover:text-accent hover:translate-x-2 transition-all duration-300">Life at Qubitars</Link>
              </div>
              <div className="border-b border-gray-200"></div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item">
                <div className="p-1 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                  <BriefcaseBusiness width={20} height={20} className="opacity-90"/>
                </div>
                <h3 className="font-bold text-lg text-accent border-b border-accent/20 pb-1">Careers</h3>
              </div>
              <div className="flex flex-col space-y-2">
                <Link href="/" className="hover:text-accent hover:translate-x-2 transition-all duration-300">Fresh Graduates</Link>
                <Link href="/" className="hover:text-accent hover:translate-x-2 transition-all duration-300">Open Positions</Link>
              </div>
              <div className="border-b border-gray-200"></div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <h3 className="font-bold text-lg text-accent pb-1">Trending Blogs</h3>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-1 transition-colors cursor-pointer">
                    <Image src="/images/Company/blog1.jpeg" alt="Blog 1" width={80} height={80} className="rounded"/>
                    <p className="text-sm">Adaptive Learning for Neurodivergent Students</p>
                  </div>
                  <div className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-1 transition-colors cursor-pointer">
                    <Image src="/images/Company/blog2.png" alt="Blog 2" width={80} height={80} className="rounded"/>
                    <p className="text-sm">Adaptive Learning for Neurodivergent Students</p>
                  </div>
                  <div className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-1 transition-colors cursor-pointer">
                    <Image src="/images/Company/blog3.png" alt="Blog 3" width={80} height={80} className="rounded"/>
                    <p className="text-sm">Adaptive Learning for Neurodivergent Students</p>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200"></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-accent">Find us on:</h3>
                <div className="flex items-center gap-4">
                  <Linkedin width={20} height={20} className="opacity-90 hover:opacity-100 cursor-pointer"/>
                  <Facebook width={20} height={20} className="opacity-90 hover:opacity-100 cursor-pointer"/>
                  <Github width={20} height={20} className="opacity-90 hover:opacity-100 cursor-pointer"/>
                  <Instagram width={20} height={20} className="opacity-90 hover:opacity-100 cursor-pointer"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
