
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const handleImageError = (imageName: string) => {
    console.log(`Footer image failed to load: ${imageName}`);
  };

  const handleImageLoad = (imageName: string) => {
    console.log(`Footer image loaded successfully: ${imageName}`);
  };

  // Debug: Log the current paths
  console.log('Footer component rendered');
  console.log('Footer icon path:', '/lovable-uploads/0dfb919c-c65a-49a8-a860-cf8de6dd85bd.png');

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/0dfb919c-c65a-49a8-a860-cf8de6dd85bd.png" 
                alt="Spin2Spark Icon" 
                className="h-10 w-10"
                onError={() => handleImageError('footer icon')}
                onLoad={() => handleImageLoad('footer icon')}
              />
              <span className="text-2xl font-bold text-yellow-400 leading-none">Spin2Spark</span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium laundry and dry cleaning services with a commitment to quality and convenience.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                <span className="text-xs">i</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-yellow-400 transition-colors">Wash & Fold</Link></li>
              <li><Link to="/services" className="hover:text-yellow-400 transition-colors">Dry Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-yellow-400 transition-colors">Commercial Laundry</Link></li>
              <li><Link to="/services" className="hover:text-yellow-400 transition-colors">Pickup & Delivery</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/pricing" className="hover:text-yellow-400 transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-yellow-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+91 7090100080</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>support@spin2spark.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>123 Main St, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 7AM-9PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Spin2Spark Laundry Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
