import React, { useState, useRef } from "react";
import PrimaryLink from "@/components/atom/PrimaryLink";
import videoPlayButton from "../../../../../assets/videoPlayButton/videoPlayButton.svg";
import speakerIcon from "../../../../../assets/speakerIcon/speakerIcon.svg";
import speakerMuteIcon from "../../../../../assets/speakerIcon/speakerMuteIcon.svg";
import Image from "next/image";

const DentureVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] flex flex-col items-center justify-between sm:gap-[64px] gap-[37px]">
        <h2 className="text-[#100E10] sm:text-[34px] text-[26px] font-normal font-Pangram-Medium md:w-[650px] text-center w-full">
          Unveiling a Patient&apos;s Dental Journey
        </h2>
        <div className="relative mx-auto my-4">
          <video
            ref={videoRef}
            className="object-cover rounded-2xl w-full h-full opacity-1"
            onClick={handleVideoClick}
            playsInline
            muted={isMuted} // Initial mute state
          >
            <source src="/videos/DentalAllServicesVideo/GeneralTreatmentCompress/Dentures.mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <div
              className="absolute inset-0 flex justify-center items-center cursor-pointer"
              onClick={handleVideoClick}
            >
              <Image src={videoPlayButton} alt="videoPlayButton" />
            </div>
          )}
          <div
            className="absolute bottom-4 left-4 cursor-pointer"
            onClick={toggleMute}
          >
            <Image
              src={isMuted ? speakerMuteIcon : speakerIcon}
              alt="Speaker Icon"
            />
          </div>
        </div>
        <PrimaryLink
          href="/contact"
          title="Book Free Consultation Now"
          style="py-4 px-8 rounded-[34px] w-fit text-white bg-[#100E10] font-Pangram-Medium text-xs mt-6 hover:text-[#100E10] hover:bg-transparent border border-transparent hover:border-[#100E10] duration-0"
        />
      </div>
    </div>
  );
};

export default DentureVideo;
