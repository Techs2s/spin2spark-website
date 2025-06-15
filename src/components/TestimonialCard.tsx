
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  rating: number;
  comment: string;
  location: string;
}

const TestimonialCard = ({ name, rating, comment, location }: TestimonialCardProps) => {
  return (
    <Card className="h-full bg-gray-800 border-gray-700">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-300 mb-4 italic">"{comment}"</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-white">{name}</p>
            <p className="text-sm text-gray-400">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
