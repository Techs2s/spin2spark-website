
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingCalculator from "@/components/PricingCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Check, Star, MapPin, ChevronUp, ChevronDown, Shirt, Sparkles, MessageCircle } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [selectedOutlet, setSelectedOutlet] = useState("hoodi");
  const [openCategories, setOpenCategories] = useState<string[]>(["basic"]);

  // Outlet data from outlets page
  const outlets = [
    {
      id: "hoodi",
      name: "Spin2Spark Hoodi",
      address: "S.Babureddy Complex, Seetharam Palya, Bengaluru 560048",
      phone: "+91 7090100080",
      timing: "9:00 AM - 9:00 PM",
      rating: 4.7,
      reviews: 33,
    },
    {
      id: "aecs",
      name: "Spin2Spark Aecs",
      address: "Vaikuntam Layout, AECS Layout, Bengaluru, 560037",
      phone: "+91 7090100081",
      timing: "9:00 AM - 9:00 PM",
      rating: 4.6,
      reviews: 29,
    }
  ];

  const pricingByOutlet = {
    hoodi: {
      basic: {
        title: "Basic Services",
        subtitle: "Essential laundry services for everyday needs",
        icon: <Shirt className="w-6 h-6" />,
        services: [
          { service: "Wash & Fold", price: "₹79/kg", description: "Complete washing, drying, and folding service" },
          { service: "Wash & Iron", price: "₹109/kg", description: "Washing with professional ironing" },
          { service: "Steam Ironing", price: "From ₹12/pc", description: "Professional steam ironing service" },
        ]
      },
      premium: {
        title: "Premium Services",
        subtitle: "High-quality specialty cleaning services",
        icon: <Sparkles className="w-6 h-6" />,
        services: [
          { service: "Dry Cleaning - Shirts", price: "₹89", description: "Professional pressing included" },
          { service: "Dry Cleaning - Pants", price: "₹89", description: "Creased and pressed" },
          { service: "Dry Cleaning - Suits", price: "₹299", description: "Jacket and pants" },
          { service: "Dry Cleaning - Dresses", price: "₹199", description: "Varies by style" },
          { service: "Comforters/Blankets", price: "₹399", description: "Queen size" },
          { service: "Shoes", price: "₹279", description: "Sports and Canvas Shoes" }
        ]
      }
    },
    aecs: {
      basic: {
        title: "Basic Services",
        subtitle: "Essential laundry services for everyday needs",
        icon: <Shirt className="w-6 h-6" />,
        services: [
          { service: "Wash & Fold", price: "₹79/kg", description: "Complete washing, drying, and folding service" },
          { service: "Wash & Iron", price: "₹109/kg", description: "Washing with professional ironing" },
          { service: "Steam Ironing", price: "From ₹12/pc", description: "Professional steam ironing service" },
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
          { service: "Dry Cleaning - Dresses", price: "₹199", description: "Varies by style" },
          { service: "Comforters/Blankets", price: "₹399", description: "Queen size" },
          { service: "Shoes", price: "₹279", description: "Sports and Canvas Shoes" }
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

  const handleWhatsAppClick = (phone: string) => {
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}`;
    window.open(whatsappUrl, '_blank');
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
              <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{currentOutlet.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-semibold text-white">{currentOutlet.rating}</span>
                    <span className="ml-1 text-sm text-gray-400">({currentOutlet.reviews})</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <span className="font-medium text-white">Phone:</span> {currentOutlet.phone}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-3 h-auto bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
                    onClick={() => handleWhatsAppClick(currentOutlet.phone)}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </Button>
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  <span className="font-medium text-white">Hours:</span> {currentOutlet.timing}
                </div>
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
