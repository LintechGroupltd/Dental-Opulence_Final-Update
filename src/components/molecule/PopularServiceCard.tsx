import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HomePopularServicesType } from "../../../types";
import pointer_right_dark from "../../../assets/images/pointer-right-dark.svg";
import pointer_right_light from "../../../assets/images/pointer-right-light.svg";

const PopularServiceCard = ({
  description,
  image,
  title,
  image_inverted,
}: HomePopularServicesType) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="w-[278px] h-[367px] p-6 hover:bg-[#000000] hover:shadow-xl ease-in-out transition lg:border-0 border-[1px] border-[#E5E5E5] rounded-[24px] duration-0"
    >
      <Image src={hover ? image_inverted : image} alt={title} />
      <h3
        className={`mt-4 ${
          hover ? "text-white" : "text-[#100E10]"
        } text-[24px] font-Pangram-Bold`}
      >
        {title}
      </h3>
      <p
        className={`mt-4 text-[#4E4E4E] text-[12px] font-Pangram-Regular ${
          hover ? "text-[#D6D6D6]" : "text-[#100E10]"
        } `}
      >
        {description}
      </p>
      <Link href="" className="">
        <button
          className={`py-2 px-4 border border-[#100E10] rounded-[32px] mt-6 ${
            hover ? "bg-white" : "bg-transparent"
          }`}
        >
          <p className="flex items-center gap-[10px]">
            <span
              className={`text-xs ${
                hover ? "text-[#100E10]" : "text-[#100E10]"
              } `}
            >
              More Info
            </span>
            <Image
              src={hover ? pointer_right_dark : pointer_right_dark}
              alt=""
            />
          </p>
        </button>
      </Link>
    </div>
  );
};

export default PopularServiceCard;
