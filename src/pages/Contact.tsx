
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Contact Us
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-brand-blue">Centre for Biological Medicine</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-brand-green mt-1" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-600">1281 Stouffville Rd<br />Richmond Hill, ON L4E 3S5</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-brand-green mt-1" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:9057809912" className="hover:text-brand-blue">(905) 780-9912</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 text-brand-green mt-1" />
                    <div>
                      <h3 className="font-medium">Hours of Operation</h3>
                      <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday & Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold mb-3 text-gray-800">About Dr. Karim Dhanani</h3>
                  <p className="text-gray-600 mb-4">
                    Dr. Karim Dhanani is a Naturopathic Doctor and the Chief Medical Director at the Centre for Biological Medicine. 
                    With extensive experience in naturopathic medicine, Dr. Dhanani specializes in identifying and integrating the best tools 
                    for improved health from around the globe.
                  </p>
                </div>
                
                <Button className="mt-6 w-full bg-brand-blue hover:bg-blue-700">
                  <Phone className="mr-2 h-4 w-4" />
                  <a href="tel:9057809912">Call Now</a>
                </Button>
              </CardContent>
            </Card>
            
            <div className="flex flex-col space-y-6">
              <Map className="mb-6" />
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 text-brand-blue">Website Under Construction</h2>
                  <p className="text-gray-600">
                    Our website is currently being updated to serve you better. We appreciate your patience 
                    during this time. For any inquiries or to book an appointment, please contact us directly 
                    via phone.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 text-brand-blue">Our Expertise</h2>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Naturopathic Medicine</li>
                    <li>Terrain Medicine</li>
                    <li>Biological Medicine</li>
                    <li>Autoimmune Disease Treatment</li>
                    <li>Chronic Fatigue Solutions</li>
                    <li>Diagnostic Testing</li>
                    <li>Lyme Disease Treatment</li>
                    <li>Therapeutics & Natural Remedies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
