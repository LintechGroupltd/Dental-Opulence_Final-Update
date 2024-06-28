import React from "react";
import Image from "next/image";
import { home_process } from "../../../constants";
import { ProcessCard } from "../molecule";

import arrow_right_light from "../../../assets/images/arrow-right.svg";

const OurProcess = () => {
  return (
    <div className="">
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] bg-[#100E10]">
        <div className="flex justify-center flex-wrap gap-6">
          <div className="xs:w-[394px] w-full sm:h-[228px] h-full bg-[#161616] rounded-lg py-8 px-6 flex flex-col justify-between items-start border border-[#2D2D2D]">
            <p className="text-base font-Pangram-Bold text-[#AFAFAF] ">
              Our Process
            </p>
            <h3 className="xs:text-[36px] text-2xl font-Pangram-Bold text-white">
              Streamlined Dental Excellence
            </h3>
            <button className="flex flex-row items-center">
              <span className="text-xs font-Pangram-Regular text-white">Our story</span>
              <Image src={arrow_right_light} alt="" />
            </button>
          </div>
          {home_process.map((data, index) => (
            <ProcessCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
