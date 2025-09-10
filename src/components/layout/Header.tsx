"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  MoveUpRight,
  MoveRight,
} from "lucide-react";
import Button from "../ui/button/Button";
import TopNav from "../layout/TopNav";
import { Capabilities } from "../NavLinks/Capabilities";
import { Industries } from "../NavLinks/Industries";
import { Company } from "../NavLinks/Company";
const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  return (
    <main className="w-full">
      {/* Top bar */}
      <TopNav />

      {/* Main header */}
      <div className="flex items-center justify-between px-4 lg:px-18 py-2">
        <Image
          src="/images/Logo.png"
          alt="logo"
          width={150}
          height={150}
          className="w-[100px] md:w-[150px]"
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-14">
          <div className="flex items-center gap-8">
            <div className="relative group">
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "capabilities" ? "" : "capabilities"
                  )
                }
                className="flex items-center gap-2 cursor-pointer hover:text-accent transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
              >
                Capabilities
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "capabilities" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "capabilities" && (
                <Capabilities />
              )}
            </div>

            <div className="relative group">
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "industries" ? "" : "industries"
                  )
                }
                className="flex items-center gap-2 cursor-pointer hover:text-accent transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
              >
                Industries
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "industries" && (
                <Industries />
              )}
            </div>

            <div className="relative group">
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "company" ? "" : "company"
                  )
                }
                className="flex items-center gap-2 cursor-pointer hover:text-accent transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
              >
                Company
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "company" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "company" && (
                <Company />
              )}
            </div>

            <div className="relative">
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "empresa" ? "" : "empresa"
                  )
                }
                className="flex items-center gap-1"
              >
                Empresa
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "empresa" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "empresa" && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 w-48">
                  <ul className="space-y-2">
                    <li>Sobre Nós</li>
                    <li>Carreiras</li>
                    <li>Parceiros</li>
                    <li>Contato</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <Button
            variant="accent"
            size="md"
            className="group hover:bg-transparent hover:text-accent border border-accent"
          >
            Contact Us
            <div className="relative">
              <MoveUpRight className="w-5 h-5 mx-1 bg-white rounded-full p-1 text-accent transition-opacity duration-300 group-hover:opacity-0" />
              <MoveRight className="w-5 h-5 mx-1 bg-accent rounded-full p-1 text-white font-bold absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Header;
