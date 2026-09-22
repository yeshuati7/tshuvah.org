import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      subtitle: "Call us anytime"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@gracecommunitychurch.org",
      subtitle: "Send us a message"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Faith Street, Grace City, GC 12345",
      subtitle: "Come visit us"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 9:00 AM - 5:00 PM",
      subtitle: "Saturday & Sunday: Closed"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions or to learn more about our church
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <Card key={info.title} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="mr-4">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{info.title}</h4>
                          <p className="text-gray-900 mb-1">{info.details}</p>
                          <p className="text-sm text-gray-500">{info.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone (Optional)
                    </label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      className="min-h-32"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}