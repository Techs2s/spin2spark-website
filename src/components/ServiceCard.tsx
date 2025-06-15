
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

const ServiceCard = ({ title, description, price, image, features }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-800 border-gray-700">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-white">{title}</CardTitle>
          <Badge className="ml-2 bg-yellow-400 text-black">{price}</Badge>
        </div>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-300">
              <Check className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="space-y-2">
          <Link to="/contact">
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
              Schedule Pickup
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
              Learn More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
