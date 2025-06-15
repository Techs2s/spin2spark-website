
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingCalculator from "@/components/PricingCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Star, MapPin } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [selectedOutlet, setSelectedOutlet] = useState("downtown");

  const outlets = [
    {
      id: "downtown",
      name: "Downtown Central",
      address: "123 MG Road, City Center, Mumbai 400001",
    },
    {
      id: "residential",
      name: "Residential Hub", 
      address: "456 Linking Road, Bandra West, Mumbai 400050",
    }
  ];

  const pricingByOutlet = {
    downtown: {
      "Wash & Care": [
        { service: "Wash & Fold", price: "₹79/kg", description: "Minimum 2 kg" },
        { service: "Wash & Iron", price: "₹109/kg", description: "Professional pressing included" },
      ],
      "Dry Cleaning - Clothing": [
        { service: "Shirts", price: "₹89", description: "Professional pressing included" },
        { service: "Pants", price: "₹129", description: "Creased and pressed" },
        { service: "Suits", price: "₹299", description: "Jacket and pants" },
        { service: "Dresses", price: "₹199", description: "Varies by style" },
      ],
      "Premium Services": [
        { service: "Comforters/Blankets", price: "₹1,799", description: "Queen size" },
        { service: "Wedding Dress Cleaning", price: "₹6,499", description: "Includes preservation box" }
      ]
    },
    residential: {
      "Wash & Care": [
        { service: "Wash & Fold", price: "₹69/kg", description: "Minimum 2 kg" },
        { service: "Wash & Iron", price: "₹99/kg", description: "Professional pressing included" },
      ],
      "Dry Cleaning - Clothing": [
        { service: "Shirts", price: "₹79", description: "Professional pressing included" },
        { service: "Pants", price: "₹119", description: "Creased and pressed" },
        { service: "Suits", price: "₹279", description: "Jacket and pants" },
        { service: "Dresses", price: "₹179", description: "Varies by style" },
      ],
      "Premium Services": [
        { service: "Comforters/Blankets", price: "₹1,599", description: "Queen size" },
        { service: "Wedding Dress Cleaning", price: "₹5,999", description: "Includes preservation box" }
      ]
    }
  };

  const currentOutlet = outlets.find(outlet => outlet.id === selectedOutlet);
  const currentPricing = pricingByOutlet[selectedOutlet as keyof typeof pricingByOutlet];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black py-12 px-4 sm:py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
              Pay only for what you need with our outlet-specific pricing
            </p>
          </div>
        </div>
      </section>

      {/* Outlet Selection */}
      <section className="py-8 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto">
            <label className="block text-sm font-medium text-white mb-2">
              Select Outlet
            </label>
            <Select value={selectedOutlet} onValueChange={setSelectedOutlet}>
              <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Choose an outlet" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                {outlets.map((outlet) => (
                  <SelectItem key={outlet.id} value={outlet.id} className="text-white hover:bg-gray-700">
                    <div className="flex flex-col">
                      <span className="font-medium">{outlet.name}</span>
                      <span className="text-xs text-gray-400">{outlet.address}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {currentOutlet && (
              <div className="mt-2 flex items-center text-sm text-gray-400">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{currentOutlet.address}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Category-wise Pricing */}
      <section id="pricing-table" className="py-12 px-4 sm:py-16 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Pricing for {currentOutlet?.name}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">Organized by service categories</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {Object.entries(currentPricing).map(([category, services]) => (
              <Card key={category} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{category}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="grid grid-cols-1 gap-4">
                    {services.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-gray-600 last:border-b-0">
                        <div className="flex-1 pr-4">
                          <h3 className="font-semibold text-white text-sm sm:text-base">{item.service}</h3>
                          <p className="text-xs sm:text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="text-sm sm:text-lg font-bold text-yellow-400">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-12 px-4 sm:py-16 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Calculate Your Cost</h2>
            <p className="text-lg sm:text-xl text-gray-300 px-4">Get an instant estimate for your laundry needs</p>
          </div>
          
          <PricingCalculator />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 sm:py-16 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Pricing FAQ</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">How do you weigh my laundry?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">We use professional scales to weigh your laundry before and after cleaning. You'll receive a detailed receipt showing the exact weight and pricing.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">Are there any hidden fees?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">No hidden fees! Our pricing is transparent. The only additional charges would be for special treatments or express services, which we'll always confirm with you first.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">Do prices vary by outlet?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Yes, pricing may vary slightly between outlets based on local operating costs. Use the outlet selector above to see specific pricing for your preferred location.</p>
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
