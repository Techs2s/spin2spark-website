
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import BookingForm from "@/components/BookingForm";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

const ServiceCard = ({ title, description, price, image, features }: ServiceCardProps) => {
  // Use laundry-related clipart for all service cards
  const getLaundryClipArt = (originalImage: string) => {
    // Use laundry room/washing machine clipart
    return "https://images.unsplash.com/photo-1721322800607-8c38375eef04";
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-800 border-gray-700">
      <div className="aspect-video overflow-hidden">
        <img 
          src={getLaundryClipArt(image)} 
          alt={`${title} laundry service equipment`}
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
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                Schedule Pickup
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Schedule Your Pickup</DialogTitle>
              </DialogHeader>
              <BookingForm />
            </DialogContent>
          </Dialog>
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
