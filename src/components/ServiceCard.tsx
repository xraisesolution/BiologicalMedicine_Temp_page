
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ title, description, className = "" }: ServiceCardProps) => {
  return (
    <Card className={`h-full hover-card-effect ${className}`}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-brand-blue">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
