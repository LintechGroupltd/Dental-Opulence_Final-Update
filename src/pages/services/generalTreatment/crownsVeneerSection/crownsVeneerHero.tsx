import React from "react";
import Image from "next/image";
import PrimaryLink from "@/components/atom/PrimaryLink";
import crown_veneers_service_hero_image from "../../../../../assets/DO Format/1.jpg"
import right_thick from '../../../../../assets/images/right_thick.svg'
import Link from "next/link";

const CrownsVeneerHero = () => {
  return (
    <div className="w-full">
      <div className="bg-[#FFFFFF] rounded-t-[24px] pt-[100px] pb-[100px] h-full w-full items-center flex xl:flex-row flex-col justify-between xl:px-[100px] sm:px-[40px] px-[20px]">
        <div className="flex flex-col xl:items-start items-center w-full xl:w-[50%] py-8">
          <div className="flex flex-row items-center gap-4">
            <h1 className="font-Pangram-Bold sm:text-[60px] w-full sm:leading-[64px] text-[44px] xl:text-left text-center text-[#161616]">
            Crowns / Veneers
                        </h1>
          </div>
          <p className="text-[18px] text-[#161616] mt-6 lg:text-left text-center">
          Crowns and veneers are cosmetic dental solutions that enhance the appearance of your teeth. Crowns cover damaged or discoloured teeth, providing a natural look and restoring functionality. Veneers are thin shells applied to the front of teeth to correct imperfections such as chips, gaps, or uneven shapes. Both options improve the aesthetics of your smile, offering a more uniform and radiant appearance. With crowns and veneers, you can achieve a flawless, confident smile.          </p>

          <div className="mt-6">
            <div className="flex gap-2 items-center">
              <Image src={right_thick} alt="right_thick" />
              <p className="text-[16px] text-[#161616] lg:text-left text-center">0% Finance Options</p>
            </div>

            <div className="flex gap-2 items-center mt-3">
              <Image src={right_thick} alt="right_thick" />
              <p className="text-[16px] text-[#161616] lg:text-left text-center">Evening and weekend appointments</p>
            </div>
          </div>

          <div className="flex gap-6 xs:mt-[56px] mt-[32px] sm:mx-0 mx-auto xs:flex-row flex-col">
            <Link
              href="https://book.do.co.uk/"
              target="_blank"
              title="Book now"
              className="py-4 px-8 rounded-[34px] text-white bg-[#100E10] font-Pangram-Medium text-xs mt-6 hover:text-[#100E10] hover:bg-transparent border border-transparent hover:border-[#100E10] duration-0 cursor-pointer"
            >
              Book now
            </Link>
            <PrimaryLink
              href="/about"
              title="About us"
              style="py-4 px-8 rounded-[34px] font-Pangram-Medium text-xs xs:mt-6 border border-[#100E10] bg-transparent text-[#100E10] hover:text-[#fff] hover:bg-[#100E10] hover:border-[#100E10] duration-0 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-center w-full xl:w-[50%] mt-8 xl:mt-0">
          <Image src={crown_veneers_service_hero_image} alt="Composite Bonding Hero Image" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default CrownsVeneerHero;
