
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, Leaf, Heart, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every aspect of our service, from cleaning techniques to customer care."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We go above and beyond to exceed your expectations every time."
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "Reliable Service",
      description: "Count on us for consistent, on-time pickup and delivery. We respect your schedule and your trust."
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Eco-Friendly",
      description: "We use environmentally responsible cleaning products and processes to protect our planet."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "50,000+", label: "Items Cleaned" },
    { number: "15", label: "Years Experience" },
    { number: "99.9%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Since 2009</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              About Spin2Spark
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              We're more than just a laundry service. We're your trusted partner in maintaining 
              the clothes you love, giving you more time for the things that matter most.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 px-4 sm:py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4 sm:mb-6">
                  Spin2Spark began in 2009 with a simple mission: to provide busy families and professionals 
                  with a reliable, high-quality laundry service that saves time and delivers exceptional results.
                </p>
                <p className="text-gray-600 mb-4 sm:mb-6">
                  What started as a small neighborhood service has grown into the city's most trusted laundry 
                  provider, serving thousands of satisfied customers who rely on us for their most precious garments.
                </p>
                <p className="text-gray-600">
                  Today, we continue to innovate and improve our services while maintaining the personal touch 
                  and attention to detail that made us who we are.
                </p>
              </div>
              <div className="order-1 lg:order-2 aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Our laundry facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-4 sm:py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              These core values guide everything we do and shape how we serve our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:py-16">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">By the Numbers</h2>
            <p className="text-lg sm:text-xl text-gray-600">Our track record speaks for itself</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4 sm:py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Mission</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
              To provide exceptional laundry and dry cleaning services that give our customers 
              more time to focus on what matters most in their lives, while treating every 
              garment with the care it deserves.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 text-center sm:text-left">Trusted & Secure</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <Leaf className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 text-center sm:text-left">Eco-Friendly Process</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <Award className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <span className="text-gray-700 text-center sm:text-left">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
