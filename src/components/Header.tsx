
import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center bg-white shadow-sm">
      <Link to="/" className="mb-4 md:mb-0">
        <Logo />
      </Link>
      <Button className="bg-brand-blue hover:bg-blue-700">
        <Phone className="mr-2 h-4 w-4" />
        <a href="tel:9057809912">(905) 780-9912</a>
      </Button>
    </header>
  );
};

export default Header;
