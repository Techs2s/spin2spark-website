import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, Clock, Shield, Truck, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import GoogleReviews from "@/components/GoogleReviews";

const Index = () => {
  const services = [
    {
      title: "Wash & Fold",
      description: "Professional washing, drying, and folding service",
      price: "From ₹79/kg",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
      features: ["Free pickup & delivery", "24-72 hour turnaround", "Eco-friendly detergents"]
    },
    {
      title: "Dry Cleaning",
      description: "Expert dry cleaning for delicate and formal wear",
      price: "Varies by item",
      image: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=400&h=300&fit=crop",
      features: ["Same-day service available", "Stain treatment", "Professional pressing"]
    },
    {
      title: "Commercial Laundry",
      description: "Bulk laundry services for businesses and institutions",
      price: "Custom pricing",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop",
      features: ["Volume discounts", "Scheduled pickups", "Quality guarantee"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Spin2Spark has been a lifesaver! Their pickup and delivery service is so convenient, and my clothes always come back perfectly clean.",
      location: "Downtown"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Best dry cleaning service in the city. They got out a stain I thought was impossible to remove. Highly recommend!",
      location: "Midtown"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment: "Professional, reliable, and affordable. I've been using Spin2Spark for over a year and they never disappoint.",
      location: "Uptown"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black py-12 px-4 sm:py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-yellow-400 text-black border-yellow-400 text-sm sm:text-base">Premium Laundry Service</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Your Clothes Deserve the <span className="text-yellow-400 block sm:inline">Spark</span> Treatment
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Professional laundry and dry cleaning services with free pickup and delivery. 
              Quality care for your clothes, convenience for your life.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center px-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold w-full sm:w-auto">
                    Schedule Pickup
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
                  <DialogHeader>
                    <DialogTitle>Schedule Your Pickup</DialogTitle>
                  </DialogHeader>
                  <BookingForm />
                </DialogContent>
              </Dialog>
              <Link to="/services#services-list" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black w-full">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:py-16 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Free Pickup & Delivery</h3>
              <p className="text-gray-400 text-sm sm:text-base">Convenient door-to-door service</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">24-72 Hour Service</h3>
              <p className="text-gray-400 text-sm sm:text-base">Quick turnaround guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">100% Satisfaction</h3>
              <p className="text-gray-400 text-sm sm:text-base">Quality guarantee on all services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">5-Star Rated</h3>
              <p className="text-gray-400 text-sm sm:text-base">Trusted by thousands of customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-list" className="py-12 px-4 sm:py-16 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              From everyday laundry to specialty cleaning, we've got you covered
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-12 px-4 sm:py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Real reviews from our satisfied customers
            </p>
          </div>
          <GoogleReviews />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 sm:py-16 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:py-16 bg-yellow-400">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Ready to Experience the Spin2Spark Difference?
          </h2>
          <p className="text-lg sm:text-xl text-black/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join thousands of satisfied customers who trust us with their laundry needs
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center px-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-black text-yellow-400 hover:bg-gray-800 w-full sm:w-auto">
                  Get Started Today
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
                <DialogHeader>
                  <DialogTitle>Schedule Your Pickup</DialogTitle>
                </DialogHeader>
                <BookingForm />
              </DialogContent>
            </Dialog>
            <Link to="/pricing#pricing-table" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-yellow-400 w-full">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
