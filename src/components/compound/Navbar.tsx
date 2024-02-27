import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import nav_logo from "../../../assets/images/nav-logo.svg";
import pointer_down from "../../../assets/images/pointer-down.svg";
import PrimaryLink from "../atom/PrimaryLink";
import Hambuger from "../atom/Hamburger";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../../lib/gsap";

import { navlinks } from "../../../constants";

const Navbar = () => {
  const [hoverId, setHoverId] = useState<number | null>(null);

  useGSAP(() => {
    let link_list = document.querySelectorAll(".link-list");

    link_list?.forEach((link) => {
      let arrow = link.querySelector(".link-pointer-down");

      link?.addEventListener("mouseover", () => {
        gsap.to(arrow, { rotate: 180, duration: 0.5 });
      });

      link?.addEventListener("mouseleave", () => {
        gsap.to(arrow, { rotate: 0, duration: 0.5 });
      });
    });
  }, []);

  return (
    <nav className="fixed w-full h-[70px] flex items-center justify-between top-[30px] pt-5 lg:px-[120px] sm:px-[60px] px-10 z-[10]">
      <Link href="/" >
        <Image src={nav_logo} alt="" />
      </Link>

      <div className=" px-[43.5px] bg-[#494849]/40 rounded-[80px] lg:flex hidden items-center bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <ul className="flex items-center text-white gap-10">
          {navlinks.map((link, index) => (
            <li key={index} className="font-Pangram-Regular link-list dropdown">
              <Link href={link.href}>
                <p className="flex items-center py-6">
                  <span className="dropbtn">{link.label}</span>
                  {link.subLinks && (
                    <Image
                      src={pointer_down}
                      alt=""
                      className="ml-2 link-pointer-down"
                    />
                  )}
                </p>
              </Link>
              {link?.subLinks && (
                <div
                  className={`dropdown-content grid grid-cols-2 max-w-[558px] h-[280px] w-full p-6 bg-[#2E2E2E] text-white font-Pangram-Regular rounded-lg`}
                >
                  {link.subLinks.map((subLink, index: number) => (
                    <Link
                      onMouseOver={() => setHoverId(index)}
                      onMouseOut={() => setHoverId(null)}
                      href={subLink.href}
                      key={index}
                      className="relative h-fit flex items-center"
                    >
                      <p className="flex items-center relative">
                        <Image
                          src={
                            hoverId === index
                              ? subLink?.icon_hovered
                              : subLink.icon
                          }
                          className=""
                          alt=""
                          width={15}
                          height={15}
                        />
                        <span className="text-white text-base ml-2">
                          {subLink.title}
                        </span>
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <PrimaryLink
          href="/contact"
          title="Book Now"
          style="py-2 px-4 rounded-[34px] bg-white text-[#100E10] font-Pangram-Medium text-xs ml-10"
        />
      </div>
      <div className="relative right-0">
        <Hambuger />
      </div>
    </nav>
  );
};

export default Navbar;
