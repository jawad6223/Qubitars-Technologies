import React from "react";
import Image from "next/image";
import { Workflow, PenTool, Rotate3D, GalleryVertical } from "lucide-react";

export const Capabilities = () => {
  return (
    <>
      <div className="fixed inset-x-0 top-[110px] mx-30 bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-300 ease-in-out">
        <div className="mx-[10%] py-6">
          <div className="grid grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-accent border-b border-accent/20 pb-2">
                AI & ML Development
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item">
                  <div className="bg-blue-50 p-1.5 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                    <Image
                      src="/images/Capabilities/AI Consultation.png"
                      alt="AI"
                      width={22}
                      height={22}
                      className="opacity-90"
                    />
                  </div>
                  <span className="font-medium">AI Consultation</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item">
                  <div className="bg-blue-50 p-1.5 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                    <Image
                      src="/images/Capabilities/AI Development.png"
                      alt="AI"
                      width={22}
                      height={22}
                      className="opacity-90"
                    />
                  </div>
                  <span className="font-medium">
                    AI Development & Integration
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item">
                  <div className="bg-blue-50 p-1.5 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                    <Image
                      src="/images/Capabilities/AI Agent.png"
                      alt="AI"
                      width={22}
                      height={22}
                      className="opacity-90"
                    />
                  </div>
                  <span className="font-medium">AI Agent</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item">
                  <div className="bg-blue-50 p-1.5 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                    <Workflow width={22} height={22} className="opacity-90" />
                  </div>
                  <span className="font-medium">AI Workflow Automation</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item">
                  <div className="bg-blue-50 p-1.5 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                    <Image
                      src="/images/Capabilities/Generative AI Solutions.png"
                      alt="AI"
                      width={22}
                      height={22}
                      className="opacity-90"
                    />
                  </div>
                  <span className="font-medium">Generative AI Solutions</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-accent border-b border-accent/20 pb-2">
                Digital Transformation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item">
                  <div className="bg-blue-50 p-1.5 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                    <PenTool width={22} height={22} className="opacity-90" />
                  </div>
                  <span className="font-medium">UI/UX Design</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item">
                  <div className="bg-blue-50 p-1.5 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                    <Image
                      src="/images/Capabilities/Software Development.png"
                      alt="AI"
                      width={22}
                      height={22}
                      className="opacity-90"
                    />
                  </div>
                  <span className="font-medium">
                    Custom Software Development
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item">
                  <div className="bg-blue-50 p-1.5 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                    <Image
                      src="/images/Capabilities/App Development.png"
                      alt="AI"
                      width={22}
                      height={22}
                      className="opacity-90"
                    />
                  </div>
                  <span className="font-medium">Web App Development</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item">
                  <div className="bg-blue-50 p-1.5 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                    <Image
                      src="/images/Capabilities/Mobile App.png"
                      alt="AI"
                      width={22}
                      height={22}
                      className="opacity-90"
                    />
                  </div>
                  <span className="font-medium">Mobile App Development</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item">
                  <div className="bg-blue-50 p-1.5 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                    <Rotate3D width={22} height={22} className="opacity-90" />
                  </div>
                  <span className="font-medium">MVP Development</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item">
                  <div className="bg-blue-50 p-1.5 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                    <GalleryVertical
                      width={22}
                      height={22}
                      className="opacity-90"
                    />
                  </div>
                  <span className="font-medium">SAAS Development</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item">
                  <div className="bg-blue-50 p-1.5 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                    <img
                      src="/images/Capabilities/Programming Hold.png"
                      alt="AI"
                      width={22}
                      height={22}
                      className="opacity-90"
                    />
                  </div>
                  <span className="font-medium">
                    Low-Code/No-Code Development
                  </span>
                </li>
              </ul>
            </div>
            <div className="space-y-3 pt-8">
              <div className="cursor-pointer">
                <h3 className="font-bold text-lg text-accent hover:text-accent/80 transition-colors duration-300 border-b border-accent/20 pb-2">
                  Product Design
                </h3>
              </div>
              <div className="group/item cursor-pointer">
                <h3 className="font-bold text-lg text-accent hover:text-accent/80 transition-colors duration-300 border-b border-accent/20 pb-2">
                  Quality Assurance
                </h3>
              </div>
              <div className="group/item cursor-pointer">
                <h3 className="font-bold text-lg text-accent hover:text-accent/80 transition-colors duration-300 border-b border-accent/20 pb-2">
                  DevOps
                </h3>
              </div>
              <div className="group/item cursor-pointer">
                <h3 className="font-bold text-lg text-accent hover:text-accent/80 transition-colors duration-300 border-b border-accent/20 pb-2">
                  Staff Augmentation
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
