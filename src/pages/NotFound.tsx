
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center bg-gray-50 px-4 py-16">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-brand-blue mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you are looking for could not be found.
          </p>
          <Button asChild>
            <Link to="/" className="text-white">
              Return to Home
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
