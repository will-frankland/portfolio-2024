"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import animationData from "@/data/confetti.json";
import { techStackItems } from "../../data/index";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import MagicButton from "./MagicButton";
import ConfettiEffect from "./ConfettiEffect";

// BentoGrid component
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

// BentoGridItem component
export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = "will-frankland@hotmail.com";
    await navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(38,38,212,1) 15%, rgba(64,46,89,1) 37%)",
      }}
    >
      <div>
        <div className="absolute right-0 -bottom-5">
          {img && (
            <img
              src={img}
              alt={img}
              className={(cn(imgClassName), "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {id === 4 && (
            <BackgroundGradientAnimation>
              <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
            </BackgroundGradientAnimation>
          )}
          {id === 4 && (
            <div className="mt-5 relative">
              <div className="font-sans font-bold text-lg lg:text-3xl z-10 mb-2">
                {title}
              </div>
              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                {description}
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31] w-full"
                handleClick={handleCopy}
              />
            </div>
          )}
          {id === 3 && (
            <div className="absolute inset-0 flex flex-row justify-between p-5 lg:p-10">
              {/* Left side: Title and Description */}
              <div className="flex flex-col">
                <h2 className="text-white font-bold text-lg lg:text-3xl">
                  {title}
                </h2>
                <p className="text-[#c1c2d3] text-sm lg:text-base mt-2">
                  {description}
                </p>
              </div>

              {/* Center: Globe */}
              <div className="flex justify-center items-center flex-grow">
                <GlobeDemo />
              </div>
            </div>
          )}
          {id === 2 && (
            <>
              <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 mb-2">
                {title}
              </div>
              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 mt-2">
                {description}
              </div>
            </>
          )}

          {id === 1 && (
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-3 lg:gap-4 w-full justify-center mt-4">
                {techStackItems.map((item, idx) => (
                  <span
                    key={idx}
                    className="flex flex-col items-center justify-center gap-2 py-2 lg:py-8 lg:px-10 px-3 text-xs lg:text-base opacity-75 lg:opacity-100 rounded-lg text-center bg-[#10132E] min-w-[120px] flex-grow max-w-[300px]"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                    <div>
                      <span className="">{item.name}</span>
                    </div>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <ConfettiEffect active={copied} />
    </div>
  );
};
