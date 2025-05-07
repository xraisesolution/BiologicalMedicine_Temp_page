
import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Logo className="mb-4" />
            <p className="text-gray-600 mt-2 text-center md:text-left">
              Where Nature Meets Science
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4 uppercase text-gray-700">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-brand-green" />
                <span className="text-gray-600">1281 Stouffville Rd, Richmond Hill, ON L4E 3S5</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-brand-green" />
                <a href="tel:9057809912" className="text-gray-600 hover:text-brand-blue">
                  (905) 780-9912
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4 uppercase text-gray-700">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-brand-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-blue">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Centre for Biological Medicine. All rights reserved.</p>
          <p className="mt-1">Dr. Karim Dhanani, Naturopathic Doctor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
