
import React from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center ${className}`}>
      <img 
        src="/lovable-uploads/1619de79-6bc4-4de8-9ece-8b00f9c3c7b8.png" 
        alt="Centre for Biological Medicine" 
        className="h-20 md:h-16"
      />
    </div>
  );
};

export default Logo;
