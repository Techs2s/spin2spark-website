
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    console.log("Contact form submitted:", contactForm);
    setContactForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to experience the best laundry service in town? Contact us today!
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
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
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-gray-600">+91 7090100080</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Sat: 7AM-9PM</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-gray-600">support@spin2spark.com</p>
                <p className="text-sm text-gray-500 mt-1">24/7 Support</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                <p className="text-gray-600">123 Main St</p>
                <p className="text-sm text-gray-500 mt-1">City, State 12345</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Hours</h3>
                <p className="text-gray-600">Mon-Sat: 7AM-9PM</p>
                <p className="text-sm text-gray-500 mt-1">Sunday: 9AM-6PM</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    Have a question or need help? We're here to assist you!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={contactForm.name}
                          onChange={handleContactChange}
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={contactForm.phone}
                          onChange={handleContactChange}
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <select
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleContactChange}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactChange}
                        rows={5}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                  <CardDescription>Visit our facility or schedule a pickup</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <p className="text-gray-500">Interactive Map Coming Soon</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Spin2Spark Laundry Services</p>
                    <p className="text-gray-600">123 Main Street</p>
                    <p className="text-gray-600">City, State 12345</p>
                    <p className="text-gray-600">India</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service Area:</span>
                    <span className="font-medium">15 km radius</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pickup Time:</span>
                    <span className="font-medium">Same day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Turnaround:</span>
                    <span className="font-medium">24-72 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Emergency Service:</span>
                    <span className="font-medium">Available</span>
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
