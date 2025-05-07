
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center bg-white shadow-sm sticky top-0 z-10 transition-all duration-300">
      <div className="w-full md:w-1/3 flex justify-start">
        <Link to="/" className="block">
          <Logo size={isScrolled ? "normal" : "large"} />
        </Link>
      </div>
      
      <div className="hidden md:flex items-center text-sm text-gray-600 mx-4 flex-1 justify-center">
        <MapPin className="h-4 w-4 text-brand-green mr-2" />
        <span>1281 Stouffville Rd, Richmond Hill, ON</span>
      </div>
      
      <div className="md:w-1/3 flex justify-end mt-4 md:mt-0">
        <Button className="bg-brand-blue hover:bg-blue-700 animate-fade-in-up">
          <Phone className="mr-2 h-4 w-4" />
          <a href="tel:9057809912">(905) 780-9912</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
