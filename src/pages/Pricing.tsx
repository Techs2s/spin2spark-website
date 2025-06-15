
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingCalculator from "@/components/PricingCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const individualPricing = [
    { service: "Wash & Fold", price: "₹79/kg", description: "Minimum 2 kg" },
    { service: "Wash & Iron", price: "₹109/kg", description: "Professional pressing included" },
    { service: "Dry Cleaning - Shirts", price: "Varies by item", description: "Professional pressing included" },
    { service: "Dry Cleaning - Pants", price: "Varies by item", description: "Creased and pressed" },
    { service: "Dry Cleaning - Suits", price: "Varies by item", description: "Jacket and pants" },
    { service: "Dry Cleaning - Dresses", price: "Varies by item", description: "Varies by style" },
    { service: "Comforters/Blankets", price: "₹1,799", description: "Queen size" },
    { service: "Wedding Dress Cleaning", price: "₹6,499", description: "Includes preservation box" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
              Pay only for what you need with our individual pricing
            </p>
          </div>
        </div>
      </section>

      {/* Individual Pricing */}
      <section className="py-12 px-4 sm:py-16">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Pricing</h2>
            <p className="text-lg sm:text-xl text-gray-600">Pay only for what you need</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-4 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {individualPricing.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                      <div className="flex-1 pr-4">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.service}</h3>
                        <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-sm sm:text-lg font-bold text-blue-600">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-12 px-4 sm:py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Calculate Your Cost</h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">Get an instant estimate for your laundry needs</p>
          </div>
          
          <PricingCalculator />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 sm:py-16">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Pricing FAQ</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do you weigh my laundry?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We use professional scales to weigh your laundry before and after cleaning. You'll receive a detailed receipt showing the exact weight and pricing.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are there any hidden fees?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">No hidden fees! Our pricing is transparent. The only additional charges would be for special treatments or express services, which we'll always confirm with you first.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What services are included?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">All our services include pickup and delivery within our service area. Pricing varies based on the type of service and items being cleaned.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
