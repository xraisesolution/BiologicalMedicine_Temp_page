import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import Map from "@/components/Map";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

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

  const images = [
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      alt: "Natural healing herbs and flowers",
    },
    {
      src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      alt: "Sunlight through forest trees",
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Calm water surrounded by nature",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-white to-gray-100 py-20 px-4 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
              Our Website is Currently Under Construction
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-md inline-block animate-fade-in-up stagger-1">
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
        
        {/* Nature Images Carousel */}
        <section className="py-12 px-4 bg-white">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="overflow-hidden rounded-lg">
                          <img 
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </ScrollReveal>
        </section>
        
        {/* Address Section - Enhanced to stand out */}
        <section className="py-14 px-4">
          <ScrollReveal delay={200}>
            <div className="max-w-3xl mx-auto address-section rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">Come Visit Us</h2>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
                  <MapPin className="h-8 w-8 text-brand-green mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-brand-blue mb-1">Address</h3>
                    <p className="text-gray-600">1281 Stouffville Rd, Richmond Hill, ON L4E 3S5</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
                  <Phone className="h-8 w-8 text-brand-green mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-brand-blue mb-1">Contact</h3>
                    <p>
                      <a href="tel:9057809912" className="text-brand-blue hover:underline font-medium">
                        (905) 780-9912
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
        
        {/* Map Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">Find Us</h2>
              <Map className="w-full shadow-lg" />
            </ScrollReveal>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                EXPERTISE YOU CAN COUNT ON
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
                We offer a new standard in naturopathic medicine, utilizing European technology, in an energetically inclined facility. 
                Our Chief Medical Director Karim Dhanani scours the globe to find the best tools for your improved health.
              </p>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={index} delay={100 * index}>
                  <ServiceCard 
                    title={service.title}
                    description={service.description}
                  />
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal className="mt-12 text-center" delay={600}>
              <Button size="lg" className="bg-brand-blue hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:9057809912">Call For More Information</a>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
