import { Clock, Calendar, Users, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function ServiceTimes() {
  const services = [
    {
      name: "Sunday Morning Worship",
      times: ["9:00 AM", "11:00 AM"],
      description: "Join us for inspiring worship, biblical teaching, and fellowship",
      icon: Clock,
    },
    {
      name: "Wednesday Bible Study",
      times: ["7:00 PM"],
      description: "Dive deeper into God's word with our midweek study",
      icon: Calendar,
    },
    {
      name: "Youth Service",
      times: ["6:00 PM Sunday"],
      description: "Engaging worship and relevant teaching for teens",
      icon: Users,
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Times
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come as you are and experience the love of Christ in our welcoming community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <IconComponent className="h-12 w-12 text-primary mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-3">
                    {service.times.join(" & ")}
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Location Info */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <MapPin className="h-8 w-8 text-primary mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Our Location</h3>
                <p className="text-gray-600">
                  123 Faith Street, Grace City, GC 12345
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500 mb-2">Need directions?</p>
              <button className="text-primary hover:underline font-medium">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}