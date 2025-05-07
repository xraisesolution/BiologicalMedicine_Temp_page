
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "What is Biological Medicine?",
      description: "A comprehensive approach to medicine focusing on natural healing and identifying the root causes of health issues."
    },
    {
      title: "Treatments & Assessments",
      description: "Utilizing European technology in an energetically inclined facility to identify the best tools for your improved health."
    },
    {
      title: "Therapeutics",
      description: "Natural remedies for evidence of different types of toxins using the body's amazing natural ability to defend and heal."
    },
    {
      title: "Autoimmune Diseases",
      description: "Specialized care addressing the underlying causes of autoimmune conditions through natural treatment protocols."
    },
    {
      title: "Chronic Fatigue",
      description: "Comprehensive solutions for persistent fatigue focusing on restoring energy and overall wellbeing."
    },
    {
      title: "Lyme Disease",
      description: "Expert diagnosis and treatment plans for Lyme disease and associated conditions."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-white to-gray-100 py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Website is Currently Under Construction
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-md inline-block">
              <p className="text-xl text-gray-600 mb-6">
                We're working on bringing you an improved online experience.
                <br />In the meantime, please contact us or visit us at our clinic.
              </p>
              <Button size="lg" className="bg-brand-blue hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:9057809912" className="text-lg">Call Us: (905) 780-9912</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Address Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Come Visit Us</h2>
            <div className="text-lg text-gray-600">
              <p className="mb-4">1281 Stouffville Rd, Richmond Hill, ON L4E 3S5</p>
              <p>
                <a href="tel:9057809912" className="text-brand-blue hover:underline">
                  (905) 780-9912
                </a>
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              EXPERTISE YOU CAN COUNT ON
            </h2>
            <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              We offer a new standard in naturopathic medicine, utilizing European technology, in an energetically inclined facility. 
              Our Chief Medical Director Karim Dhanani scours the globe to find the best tools for your improved health.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-brand-blue hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:9057809912">Call For More Information</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
