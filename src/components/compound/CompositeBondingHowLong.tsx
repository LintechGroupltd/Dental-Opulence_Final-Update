"use client";
import React, { useRef, useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

interface VideoRefs {
  video1: React.RefObject<HTMLVideoElement>;
  video2: React.RefObject<HTMLVideoElement>;
  video3: React.RefObject<HTMLVideoElement>;
}

interface IsPlayingState {
  video1: boolean;
  video2: boolean;
  video3: boolean;
}

const CompositeBondingHowLong: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<IsPlayingState>({ video1: false, video2: false, video3: false });
  const videoRefs: VideoRefs = {
    video1: useRef<HTMLVideoElement>(null),
    video2: useRef<HTMLVideoElement>(null),
    video3: useRef<HTMLVideoElement>(null),
  };

  const handlePlayPause = (videoId: keyof VideoRefs) => {
    const videoElement = videoRefs[videoId].current;

    if (videoElement) {
      if (isPlaying[videoId]) {
        videoElement.pause();
      } else {
        videoElement.play();
      }

      setIsPlaying((prev) => ({ ...prev, [videoId]: !prev[videoId] }));
    }
  };

  return (
    <div className={`w-full md:mt-24 mb-14`}>
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] bg-white">
        <div className="mt-12 flex flex-col items-center">
          
          
          <h2 className="font-Pangram  font-bold md:text-[48px] text-[35px] leading-[53px] text-[#100E10] text-center sm:max-w-[593px]">
            Our patient success story showcase
          </h2>
          <p className="text-[#4C4C4C] text-[18px] font-Pangram-Regular text-center sm:max-w-[453px] mt-4 mb-14">
              Dental Opulence and Smile Transformation,Take a look at some of our results below
          </p>
          



          <div className="grid md:grid-cols-3 gap-6 ">
        {['video1', 'video2', 'video3'].map((videoId, index) => (
          <div key={videoId} className="relative mx-auto my-4">
            <video
              ref={videoRefs[videoId as keyof VideoRefs]}
              id={videoId}
              className="w-full h-full object-cover rounded-lg"
              playsInline
              controls={false}
              onClick={() => handlePlayPause(videoId as keyof VideoRefs)}
            >
              <source src={`/video/${videoId}.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying[videoId as keyof IsPlayingState] && (
              <div
              
                className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg"
                onClick={() => handlePlayPause(videoId as keyof VideoRefs)}
              >
                <BsPlayCircleFill className="text-white text-6xl" />
              </div>
            )}
          </div>
        ))}
      </div>












        </div>
      </div>
    </div>
  );
};

export default CompositeBondingHowLong;

{
  /*
<video
              autoPlay={true}
              loop
              height="416"
              className="object-cover rounded-2xl h-[416px] w-[394px]"
              id="video1"
              playsInline
              muted
              onClick={(e) => {
                if (e.currentTarget.paused) {
                  e.currentTarget.play();
                } else {
                  e.currentTarget.pause();
                }
              }}
            >
              <source src={`/videos/DOREELWALKTHROUGH.mp4`} type="video/mp4" />
              <source src="example.webm" type="video/webm" />
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>
            <video
              autoPlay={true}
              loop
              height="416"
              className="object-cover rounded-2xl h-[416px] w-[394px]"
              id="video1"
              playsInline
              muted
              onClick={(e) => {
                if (e.currentTarget.paused) {
                  e.currentTarget.play();
                } else {
                  e.currentTarget.pause();
                }
              }}
            >
              <source src={`/videos/DOREELWALKTHROUGH.mp4`} type="video/mp4" />
              <source src="example.webm" type="video/webm" />
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>
*/
}
