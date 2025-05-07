
import React from "react";

interface LogoProps {
  className?: string;
  size?: "normal" | "large";
}

const Logo = ({ className = "", size = "normal" }: LogoProps) => {
  const sizeClass = size === "large" ? "h-24 md:h-20" : "h-20 md:h-16";
  
  return (
    <div className={`flex flex-col md:flex-row items-center ${className}`}>
      <img 
        src="/lovable-uploads/1619de79-6bc4-4de8-9ece-8b00f9c3c7b8.png" 
        alt="Centre for Biological Medicine" 
        className={`${sizeClass} transition-all duration-300`}
      />
    </div>
  );
};

export default Logo;
