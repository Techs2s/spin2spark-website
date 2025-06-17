
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactSubmitting(true);
    
    try {
      console.log("Submitting contact form:", contactForm);
      
      // Send email via edge function directly without authentication
      const { data, error } = await supabase.functions.invoke('send-form-email', {
        body: {
          formType: 'contact',
          data: contactForm
        }
      });

      console.log("Edge function response:", { data, error });

      if (error) {
        console.error("Email sending error:", error);
        
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive"
        });
        return;
      }

      console.log("Email sent successfully:", data);
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setContactForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsContactSubmitting(false);
    }
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleBookingSuccess = () => {
    setIsBookingDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section - Mobile Optimized */}
      <section className="bg-black py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
              Ready to experience the best laundry service in town? Contact us today!
            </p>
            <Dialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-base sm:text-lg px-6 sm:px-8 py-3">
                  Schedule Pickup
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg sm:max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
                <DialogHeader>
                  <DialogTitle className="text-lg sm:text-xl">Schedule Your Pickup</DialogTitle>
                </DialogHeader>
                <BookingForm onSuccess={handleBookingSuccess} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Contact Info - Mobile Optimized */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="text-center bg-gray-800 border-gray-700">
              <CardContent className="p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2 text-white">Call Us</h3>
                <p className="text-gray-300 text-sm sm:text-base">+91 7090100080</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">Mon-Sat: 7AM-9PM</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-800 border-gray-700">
              <CardContent className="p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2 text-white">Email Us</h3>
                <p className="text-gray-300 text-sm sm:text-base break-all">support@spin2spark.com</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">24/7 Support</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-800 border-gray-700">
              <CardContent className="p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2 text-white">Visit Us</h3>
                <p className="text-gray-300 text-sm sm:text-base">Seetharam Palya</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">Bengaluru, Karnataka</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-800 border-gray-700">
              <CardContent className="p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2 text-white">Hours</h3>
                <p className="text-gray-300 text-sm sm:text-base">Mon-Sat: 9AM-9PM</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">Sunday: 9AM-6PM</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white text-lg sm:text-xl">
                    <MessageCircle className="w-5 h-5 text-yellow-400" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm sm:text-base">
                    Have a question or need help? We're here to assist you!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-white">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={contactForm.name}
                          onChange={handleContactChange}
                          className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-gray-700 text-white text-sm sm:text-base"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-white">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={contactForm.phone}
                          onChange={handleContactChange}
                          className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-gray-700 text-white text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-gray-700 text-white text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Subject</label>
                      <select
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleContactChange}
                        className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-gray-700 text-white text-sm sm:text-base"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="pricing">Pricing Question</option>
                        <option value="service">Service Issue</option>
                        <option value="pickup">Pickup/Delivery</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Message</label>
                      <textarea
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactChange}
                        rows={5}
                        className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-gray-700 text-white text-sm sm:text-base resize-none"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isContactSubmitting}
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-black h-12 text-base font-semibold"
                    >
                      {isContactSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                          Sending Message...
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info - Mobile Optimized */}
            <div className="space-y-6 sm:space-y-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg sm:text-xl">Our Location</CardTitle>
                  <CardDescription className="text-gray-400 text-sm sm:text-base">Visit our facility or schedule a pickup</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                      alt="Modern laundry facility with professional equipment"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-white text-sm sm:text-base">Spin2Spark Laundry Services</p>
                    <p className="text-gray-300 text-sm sm:text-base">6, S.Babureddy Complex</p>
                    <p className="text-gray-300 text-sm sm:text-base">Seetharam Palya Main Road</p>
                    <p className="text-gray-300 text-sm sm:text-base">Bengaluru, Karnataka 560048</p>
                    <p className="text-gray-300 text-sm sm:text-base">India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg sm:text-xl">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-300">Service Area:</span>
                    <span className="font-medium text-white">5 km radius</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-300">Pickup Time:</span>
                    <span className="font-medium text-white">Same day</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-300">Turnaround:</span>
                    <span className="font-medium text-white">24-72 hours</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-300">Emergency Service:</span>
                    <span className="font-medium text-white">Available</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
