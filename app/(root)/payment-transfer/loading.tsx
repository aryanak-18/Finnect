import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="z-200 h-full w-full bg-[#33353916]">
      <div className="loader">
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
      </div>
    </div>
  );
};

export default Loading;
