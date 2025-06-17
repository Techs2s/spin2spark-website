import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Truck, Users, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Outlets = () => {
  const outlets = [
    {
      id: 1,
      name: "Spin2Spark Hoodi",
      address: "S.Babureddy Complex, Seetharam Palya, Bengaluru 560048",
      phone: "+91 7090100080",
      timing: "9:00 AM - 9:00 PM",
      rating: 4.7,
      reviews: 33,
      image: "/lovable-uploads/a62a405e-f37c-4503-99d2-c7bebfa35958.png",
      services: ["Wash & Fold", "Dry Cleaning", "Ironing", "Express Service"],
      specialties: ["Premium fabric care", "Same-day delivery", "Eco-friendly cleaning", "Expert stain removal"]
    },
    {
      id: 2,
      name: "Spin2Spark Aecs",
      address: "Vaikuntam Layout, AECS Layout, Bengaluru, 560037",
      phone: "+91 7090100081",
      timing: "9:00 AM - 9:00 PM",
      rating: 4.6,
      reviews: 29,
      image: "/lovable-uploads/f08f07d0-a138-4263-a4ed-31460e602411.png",
      services: ["Wash & Fold", "Dry Cleaning", "Ironing", "Pickup & Delivery"],
      specialties: ["Quick turnaround", "Delicate fabric handling", "Professional pressing", "Quality assurance"]
    }
  ];

  const handleWhatsAppClick = (phone: string) => {
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black text-white py-12 px-4 sm:py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              Our Service Outlets
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
              Find the nearest Spin2Spark outlet for convenient pickup and delivery services. 
              Quality laundry care at locations across the city.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Badge className="bg-yellow-400 text-black text-sm sm:text-lg px-3 sm:px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                2 Locations
              </Badge>
              <Badge className="bg-yellow-400 text-black text-sm sm:text-lg px-3 sm:px-4 py-2">
                <Truck className="w-4 h-4 mr-2" />
                Free Pickup & Delivery
              </Badge>
              <Badge className="bg-yellow-400 text-black text-sm sm:text-lg px-3 sm:px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                1000+ Happy Customers
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Outlets Grid */}
      <section className="py-12 px-4 sm:py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {outlets.map((outlet) => (
              <Card key={outlet.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={outlet.image} 
                    alt={outlet.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <CardTitle className="text-lg sm:text-xl">{outlet.name}</CardTitle>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-semibold">{outlet.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">({outlet.reviews})</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{outlet.address}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{outlet.phone}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-1 h-8 w-8 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors duration-200"
                        onClick={() => handleWhatsAppClick(outlet.phone)}
                        title="Contact on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                      </Button>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{outlet.timing}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Services Available:</h4>
                    <div className="flex flex-wrap gap-1">
                      {outlet.services.map((service, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Specialties:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {outlet.specialties.map((specialty, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 flex-shrink-0"></div>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <Link to="/contact">
                      <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm">
                        Schedule Pickup
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 px-4 sm:py-16">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Service Coverage</h2>
            <p className="text-lg sm:text-xl text-gray-600">We serve East Bengaluru with free pickup and delivery</p>
          </div>
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">East Bengaluru</h3>
            <p className="text-gray-600 text-sm">Whitefield, ITPL, Marathahalli, Brookefield, Varthur, Sarjapur, Hoodi, AECS Layout</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Outlets;
