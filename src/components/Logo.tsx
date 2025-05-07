
import React from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center ${className}`}>
      <div className="logo-circle bg-white relative">
        <span className="logo-cross">+</span>
        <div className="logo-arrow-blue"></div>
        <div className="logo-arrow-green"></div>
      </div>
      <div className="logo-text ml-2 mt-2 md:mt-0">
        <div className="text-brand-green text-sm">centre</div>
        <div className="text-brand-green text-sm">for</div>
        <div className="text-brand-blue text-lg font-semibold">biological</div>
        <div className="text-brand-blue text-lg font-semibold">medicine</div>
      </div>
    </div>
  );
};

export default Logo;
