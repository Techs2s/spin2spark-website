import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Phone, User, FileText, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    instructions: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.address.trim()) {
      newErrors.address = "Pickup address is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log("Submitting booking form:", formData);
      
      // Send email via edge function
      const { data, error } = await supabase.functions.invoke('send-form-email', {
        body: {
          formType: 'booking',
          data: formData
        }
      });

      if (error) {
        console.error("Email sending error:", error);
        toast({
          title: "Error",
          description: "Failed to schedule pickup. Please try again.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      console.log("Booking email sent successfully:", data);
      
      toast({
        title: "🎉 Pickup Scheduled Successfully!",
        description: "We'll contact you within 30 minutes to confirm your pickup details.",
      });
      
      // Reset form
      setFormData({ name: "", phone: "", address: "", instructions: "" });
      setErrors({});
    } catch (error) {
      console.error("Booking form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to schedule pickup. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="space-y-4">
      {/* Compact Header Section */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            Free Pickup & Delivery
          </Badge>
          <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
            <Clock className="w-3 h-3 mr-1" />
            24-48 Hour Service
          </Badge>
        </div>
        <p className="text-xs text-gray-600">
          Schedule your pickup in under 2 minutes. We'll handle the rest!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Personal Information - Compact */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-gray-600" />
            <h3 className="font-medium text-gray-900 text-sm">Personal Information</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-xs font-medium text-gray-700">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`h-9 text-sm transition-all duration-200 ${
                  errors.name 
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
                    : "border-gray-300 focus:border-yellow-500 focus:ring-yellow-200"
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-600">{errors.name}</p>
              )}
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="phone" className="text-xs font-medium text-gray-700">
                Phone Number *
              </Label>
              <div className="relative">
                <Phone className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className={`pl-7 h-9 text-sm transition-all duration-200 ${
                    errors.phone 
                      ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
                      : "border-gray-300 focus:border-yellow-500 focus:ring-yellow-200"
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-xs text-red-600">{errors.phone}</p>
              )}
            </div>
          </div>
        </div>

        {/* Pickup Details - Compact */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-600" />
            <h3 className="font-medium text-gray-900 text-sm">Pickup Details</h3>
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="address" className="text-xs font-medium text-gray-700">
              Pickup Address *
            </Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Main Street, City, State, ZIP"
              className={`h-9 text-sm transition-all duration-200 ${
                errors.address 
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
                  : "border-gray-300 focus:border-yellow-500 focus:ring-yellow-200"
              }`}
            />
            {errors.address && (
              <p className="text-xs text-red-600">{errors.address}</p>
            )}
            <p className="text-xs text-gray-500">
              We service within 15 miles of downtown
            </p>
          </div>
        </div>

        {/* Special Instructions - Compact */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-gray-600" />
            <h3 className="font-medium text-gray-900 text-sm">Special Instructions</h3>
            <Badge variant="secondary" className="text-xs">Optional</Badge>
          </div>
          
          <div className="space-y-1">
            <Textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              rows={2}
              placeholder="Any special requests, gate codes, or delivery instructions..."
              className="resize-none border-gray-300 focus:border-yellow-500 focus:ring-yellow-200 transition-all duration-200 text-sm"
            />
            <p className="text-xs text-gray-500">
              Help us serve you better with any additional details
            </p>
          </div>
        </div>

        {/* Compact Service Promise */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <h4 className="font-medium text-yellow-800 text-sm">Our Promise</h4>
              <div className="text-xs text-yellow-700 grid grid-cols-2 gap-1">
                <div>• Free pickup & delivery</div>
                <div>• 24-48 hour service</div>
                <div>• 100% satisfaction</div>
                <div>• Eco-friendly products</div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 h-10 transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
              Scheduling Your Pickup...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Schedule My Pickup
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
