import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingCalculator from "@/components/PricingCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Check, Star, MapPin, ChevronUp, ChevronDown, Shirt, Sparkles } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [selectedOutlet, setSelectedOutlet] = useState("downtown");
  const [openCategories, setOpenCategories] = useState<string[]>(["basic"]);

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
      basic: {
        title: "Basic Services",
        subtitle: "Essential laundry services for everyday needs",
        icon: <Shirt className="w-6 h-6" />,
        services: [
          { service: "Wash & Fold", price: "From $2.50/lb", description: "Complete washing, drying, and folding service" },
          { service: "Wash & Hang", price: "From $3.00/lb", description: "Washing and hanging for delicate items" },
          { service: "Self-Service", price: "From $4.00/load", description: "Use our premium machines yourself" },
        ]
      },
      premium: {
        title: "Premium Services",
        subtitle: "High-quality specialty cleaning services",
        icon: <Sparkles className="w-6 h-6" />,
        services: [
          { service: "Dry Cleaning - Shirts", price: "₹89", description: "Professional pressing included" },
          { service: "Dry Cleaning - Pants", price: "₹129", description: "Creased and pressed" },
          { service: "Dry Cleaning - Suits", price: "₹299", description: "Jacket and pants" },
          { service: "Dry Cleaning - Dresses", price: "₹199", description: "Varies by style" },
          { service: "Comforters/Blankets", price: "₹1,799", description: "Queen size" },
          { service: "Wedding Dress Cleaning", price: "₹6,499", description: "Includes preservation box" }
        ]
      }
    },
    residential: {
      basic: {
        title: "Basic Services",
        subtitle: "Essential laundry services for everyday needs",
        icon: <Shirt className="w-6 h-6" />,
        services: [
          { service: "Wash & Fold", price: "From $2.30/lb", description: "Complete washing, drying, and folding service" },
          { service: "Wash & Hang", price: "From $2.80/lb", description: "Washing and hanging for delicate items" },
          { service: "Self-Service", price: "From $3.50/load", description: "Use our premium machines yourself" },
        ]
      },
      premium: {
        title: "Premium Services",
        subtitle: "High-quality specialty cleaning services",
        icon: <Sparkles className="w-6 h-6" />,
        services: [
          { service: "Dry Cleaning - Shirts", price: "₹79", description: "Professional pressing included" },
          { service: "Dry Cleaning - Pants", price: "₹119", description: "Creased and pressed" },
          { service: "Dry Cleaning - Suits", price: "₹279", description: "Jacket and pants" },
          { service: "Dry Cleaning - Dresses", price: "₹179", description: "Varies by style" },
          { service: "Comforters/Blankets", price: "₹1,599", description: "Queen size" },
          { service: "Wedding Dress Cleaning", price: "₹5,999", description: "Includes preservation box" }
        ]
      }
    }
  };

  const currentOutlet = outlets.find(outlet => outlet.id === selectedOutlet);
  const currentPricing = pricingByOutlet[selectedOutlet as keyof typeof pricingByOutlet];

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black py-12 px-4 sm:py-16 sm:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-yellow-400 text-black hover:bg-yellow-500">Transparent Pricing</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Pay only for what you need with our outlet-specific pricing. No hidden fees, just quality service.
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

      {/* Category-wise Pricing with Collapsible Design */}
      <section id="pricing-table" className="py-12 px-4 sm:py-16 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Pricing for {currentOutlet?.name}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">Organized by service categories</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {Object.entries(currentPricing).map(([categoryId, category]) => (
              <Collapsible
                key={categoryId}
                open={openCategories.includes(categoryId)}
                onOpenChange={() => toggleCategory(categoryId)}
              >
                <CollapsibleTrigger asChild>
                  <div className="w-full">
                    <Card className="bg-yellow-400 border-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer">
                      <CardHeader className="py-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-black">
                              {category.icon}
                            </div>
                            <div className="text-left">
                              <CardTitle className="text-xl text-black">{category.title}</CardTitle>
                              <CardDescription className="text-black/80">{category.subtitle}</CardDescription>
                            </div>
                          </div>
                          <div className="text-black">
                            {openCategories.includes(categoryId) ? 
                              <ChevronUp className="w-6 h-6" /> : 
                              <ChevronDown className="w-6 h-6" />
                            }
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {category.services.map((item, index) => (
                      <Card key={index} className="bg-gray-800 border-gray-700">
                        <CardContent className="p-6">
                          <div className="text-center">
                            <h3 className="font-semibold text-lg mb-2 text-white">{item.service}</h3>
                            <div className="text-2xl font-bold text-yellow-400 mb-2">{item.price}</div>
                            <p className="text-sm text-gray-300">{item.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-12 px-4 sm:py-16 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Calculate Your Cost</h2>
            <p className="text-lg sm:text-xl text-gray-300 px-4">Get an instant estimate for your laundry needs</p>
          </div>
          
          <PricingCalculator />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 sm:py-16 bg-black">
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
