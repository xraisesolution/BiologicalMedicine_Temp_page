
import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center bg-white shadow-sm sticky top-0 z-10">
      <Link to="/" className="mb-4 md:mb-0">
        <Logo />
      </Link>
      
      <div className="hidden md:flex items-center text-sm text-gray-600 mx-4">
        <MapPin className="h-4 w-4 text-brand-green mr-2" />
        <span>1281 Stouffville Rd, Richmond Hill, ON</span>
      </div>
      
      <Button className="bg-brand-blue hover:bg-blue-700 animate-fade-in-up">
        <Phone className="mr-2 h-4 w-4" />
        <a href="tel:9057809912">(905) 780-9912</a>
      </Button>
    </header>
  );
};

export default Header;
