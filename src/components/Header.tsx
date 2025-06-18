
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Menu, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import BookingForm from "@/components/BookingForm";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Outlets", href: "/outlets" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  const handleImageError = (imageName: string) => {
    console.log(`Image failed to load: ${imageName}`);
  };

  const handleImageLoad = (imageName: string) => {
    console.log(`Image loaded successfully: ${imageName}`);
  };

  const handleMobileBookingClick = () => {
    setIsOpen(false); // Close mobile menu first
    setTimeout(() => {
      setIsDialogOpen(true); // Then open dialog with slight delay
    }, 100);
  };

  return (
    <header className="bg-black shadow-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/0dfb919c-c65a-49a8-a860-cf8de6dd85bd.png" 
              alt="Spin2Spark Icon" 
              className="h-10 w-10"
              onError={() => handleImageError('icon')}
              onLoad={() => handleImageLoad('icon')}
            />
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-bold text-yellow-400 leading-tight">Spin2Spark</span>
              <span className="text-xs text-yellow-300 leading-tight -mt-1">Laundry | Dry Cleaning | Ironing</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors ${
                  isActiveLink(item.href)
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 7090100080</span>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
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
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-yellow-400">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black border-gray-800">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 mb-6">
                  <img 
                    src="/lovable-uploads/0dfb919c-c65a-49a8-a860-cf8de6dd85bd.png" 
                    alt="Spin2Spark Icon" 
                    className="h-8 w-8"
                    onError={() => handleImageError('mobile icon')}
                    onLoad={() => handleImageLoad('mobile icon')}
                  />
                  <div className="flex flex-col justify-center">
                    <span className="text-xl font-bold text-yellow-400 leading-tight">Spin2Spark</span>
                    <span className="text-xs text-yellow-300 leading-tight -mt-1">Laundry | Dry Cleaning | Ironing</span>
                  </div>
                </div>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-lg font-medium transition-colors ${
                      isActiveLink(item.href)
                        ? "text-yellow-400"
                        : "text-gray-300 hover:text-yellow-400"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-800">
                  <div className="flex items-center space-x-2 text-gray-300 mb-4">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">+91 7090100080</span>
                  </div>
                  <Button 
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold" 
                    onClick={handleMobileBookingClick}
                  >
                    Schedule Pickup
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Mobile Dialog - Separate from Sheet */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
              <DialogHeader>
                <DialogTitle>Schedule Your Pickup</DialogTitle>
              </DialogHeader>
              <BookingForm onSuccess={() => setIsDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
