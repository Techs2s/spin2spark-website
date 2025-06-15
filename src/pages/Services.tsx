
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Check, Clock, Shield, Truck } from "lucide-react";
import BookingForm from "@/components/BookingForm";

const Services = () => {
  const services = [
    {
      title: "Wash & Fold",
      description: "Our most popular service - we wash, dry, and fold your everyday clothes with care.",
      price: "From ₹79/kg",
      features: [
        "Free pickup and delivery",
        "24-72 hour turnaround",
        "Eco-friendly detergents",
        "Fabric softener included",
        "Folded and packaged neatly"
      ],
      additionalInfo: "Perfect for busy professionals and families. Minimum order of 5 kg."
    },
    {
      title: "Dry Cleaning",
      description: "Professional dry cleaning for your delicate and formal garments.",
      price: "Varies by item",
      features: [
        "Expert stain removal",
        "Professional pressing",
        "Specialty fabric care",
        "Protective packaging"
      ],
      additionalInfo: "Specializing in suits, dresses, and delicate fabrics. Same-day service for urgent needs."
    },
    {
      title: "Commercial Laundry",
      description: "Bulk laundry services for businesses, restaurants, and institutions.",
      price: "Custom pricing",
      features: [
        "Volume discounts available",
        "Scheduled regular pickups",
        "Quality control standards",
        "Inventory tracking",
        "Dedicated account manager"
      ],
      additionalInfo: "Perfect for restaurants, hotels, gyms, and medical facilities. Contact us for custom pricing."
    },
    {
      title: "Wash & Iron",
      description: "Professional washing and ironing service for crisp, wrinkle-free clothes.",
      price: "From ₹109/kg",
      features: [
        "Thorough washing and drying",
        "Professional pressing and ironing",
        "Starch treatment available",
        "Crease-free folding",
        "Premium fabric care"
      ],
      additionalInfo: "Perfect for shirts, pants, and formal wear that needs that professional pressed look."
    },
    {
      title: "Specialty Cleaning",
      description: "Specialized cleaning for unique items like wedding dresses, leather, and household items.",
      price: "Varies by item",
      features: [
        "Wedding dress preservation",
        "Leather and suede cleaning",
        "Comforter and blanket cleaning",
        "Curtain and drapery service",
        "Area rug cleaning"
      ],
      additionalInfo: "Expert care for your most precious and delicate items. Call for consultation."
    },
    {
      title: "Express Service",
      description: "Rush service for when you need your items cleaned quickly.",
      price: "+50% surcharge",
      features: [
        "Same-day turnaround",
        "Priority processing",
        "Direct communication",
        "Guaranteed delivery time"
      ],
      additionalInfo: "Perfect for last-minute events or urgent business needs. Available 7 days a week."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black py-12 px-4 sm:py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Complete Laundry & Dry Cleaning Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
              From everyday wash & fold to specialized dry cleaning, we provide comprehensive 
              laundry solutions to meet all your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-list" className="py-12 px-4 sm:py-16 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    <Badge className="self-start bg-yellow-400 text-black">{service.price}</Badge>
                  </div>
                  <CardDescription className="text-base text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                        <Check className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-400 mb-4 italic">{service.additionalInfo}</p>
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-12 px-4 sm:py-16 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-lg sm:text-xl text-gray-300">Simple, convenient, and reliable</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Schedule Pickup</h3>
              <p className="text-gray-400 text-sm">Book online or call us to schedule your free pickup</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">We Collect</h3>
              <p className="text-gray-400 text-sm">Our team picks up your items at your convenience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Expert Care</h3>
              <p className="text-gray-400 text-sm">Professional cleaning using premium products</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Fresh Delivery</h3>
              <p className="text-gray-400 text-sm">Clean clothes delivered back to your door</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 px-4 sm:py-16 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">What areas do you serve?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">We currently serve the greater metropolitan area with free pickup and delivery within a 15-mile radius of our main facility.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">How long does the service take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Most services are completed within 24-72 hours. Express services are available for same-day or next-day delivery with additional charges.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">Do you handle special fabrics?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Yes! We specialize in delicate fabrics, leather, suede, and designer garments. Our expert team ensures proper care for all fabric types.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
