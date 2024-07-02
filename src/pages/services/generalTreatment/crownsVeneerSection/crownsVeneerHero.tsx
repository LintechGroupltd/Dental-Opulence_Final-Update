import React from "react";
import Image from "next/image";
import PrimaryLink from "@/components/atom/PrimaryLink";


import crown_veneers_service_hero_image from "../../../../../assets/HeroSectionImages/crown-veneer-service-hero-image.svg"
import right_thick from '../../../../../assets/images/right_thick.svg'

const CrownsVeneerHero = () => {

  return (
    <div className="w-full">
      <div className="bg-[#FFFFFF] rounded-t-[24px] lg:pt-[50px] pt-[150px] pb-[120px] h-full xl:gap-0 gap-[40px] w-full items-center flex xl:flex-row flex-col justify-between xl:px-[100px] sm:px-[40px] px-[20px]">
        <div className="flex flex-col xl:items-start items-center xl:w-[467px] sm:w-[70%] xl:py-[170px] lg:pt-[120px]">
          <div className="flex flex-row items-center gap-4">
            <h1 className="font-Pangram-Bold sm:text-[60px] w-full sm:leading-[64px] text-[44px] xl:text-left text-center text-[#161616]">
             Crowns / Veneers
            </h1>
            {/*   <span className="text-[#161616] sm:text-2xl text-base">
              /from {servicePageData?.price}
            </span> */}
          </div>
          <p className="text-[18px] text-[#161616] mt-6 lg:text-left text-center">
          We understand tooth damage and discoloration can impact oral health and self-confidence. We offer crowns and veneers to restore and enhance your teeth&apos;s appearance.
          </p>

           {/* extra section */}
           <div className="mt-6">
            <div className="flex gap-2 items-center">
              <Image src={right_thick}  alt="right_thick"/>
              <p className="text-[16px] text-[#161616] lg:text-left text-center">0% Finance Options</p>
            </div>

            <div className="flex gap-2 items-center mt-3">
              <Image src={right_thick}  alt="right_thick"/>
              <p className="text-[16px] text-[#161616] lg:text-left text-center">Evening and weekend appointments</p>
            </div>
          </div>

          <div className="flex gap-6 xs:mt-[40px] mt-[32px] sm:mx-0 mx-auto xs:flex-row flex-col">
            <PrimaryLink
              href="/contact"
              title="Contact Us"
              style="py-4 px-8 rounded-[34px] text-white bg-[#100E10] font-Pangram-Medium text-xs mt-6 hover:text-[#100E10] hover:bg-transparent border border-transparent hover:border-[#100E10] duration-0 cursor-pointer"
            />
            <PrimaryLink
              href="/about"
              title="About us"
              style="py-4 px-8 rounded-[34px] font-Pangram-Medium text-xs xs:mt-6 border border-[#100E10] bg-transparent text-[#100E10] hover:text-[#fff] hover:bg-[#100E10] hover:border-[#100E10] duration-0 cursor-pointer"
            />
          </div>
        </div>
        <Image src={crown_veneers_service_hero_image} alt="" className="xl:absolute right-0 top-0 xl:w-[700px]" />
      </div>
    </div>
  );
};

export default CrownsVeneerHero;
