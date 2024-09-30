"use client"
import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";

const DownloadResumeBtn = () => {
  const [copied, setCopied] = useState(false);
  return (
    <div>
      <a
        href="/resume.pdf"
        download="Resume [Will Frankland].pdf"
        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        Download Resume
      </a>
      {/* <Lottie
        options={{
          loop: copied,
          autoplay: copied,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
      /> */}
    </div>
  );
};

export default DownloadResumeBtn;
