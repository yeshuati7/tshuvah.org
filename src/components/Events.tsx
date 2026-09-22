import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Events() {
  const events = [
    {
      title: "Easter Sunday Celebration",
      date: "March 31, 2024",
      time: "9:00 AM & 11:00 AM",
      location: "Main Sanctuary",
      description: "Join us for a special Easter service celebrating the resurrection of Jesus Christ",
      category: "Special Service",
      featured: true
    },
    {
      title: "Community Food Drive",
      date: "April 5-12, 2024",
      time: "All Week",
      location: "Church Lobby",
      description: "Help us collect food donations for local families in need",
      category: "Outreach"
    },
    {
      title: "Men's Breakfast",
      date: "April 13, 2024",
      time: "8:00 AM",
      location: "Fellowship Hall",
      description: "Monthly fellowship breakfast with guest speaker",
      category: "Fellowship"
    },
    {
      title: "Youth Retreat",
      date: "April 19-21, 2024",
      time: "Weekend",
      location: "Camp Wilderness",
      description: "Annual youth retreat with worship, teaching, and outdoor activities",
      category: "Youth"
    },
    {
      title: "Women's Conference",
      date: "April 27, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Main Sanctuary",
      description: "A day of worship, teaching, and fellowship for women of all ages",
      category: "Special Event"
    },
    {
      title: "Volunteer Appreciation Dinner",
      date: "May 4, 2024",
      time: "6:00 PM",
      location: "Fellowship Hall",
      description: "Celebrating our amazing volunteers with dinner and recognition",
      category: "Fellowship"
    }
  ];

  const categoryColors = {
    "Special Service": "bg-purple-100 text-purple-800",
    "Outreach": "bg-green-100 text-green-800",
    "Fellowship": "bg-blue-100 text-blue-800",
    "Youth": "bg-orange-100 text-orange-800",
    "Special Event": "bg-red-100 text-red-800"
  };

  return (
    <section id="events" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay connected with what's happening in our church community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card 
              key={event.title} 
              className={`overflow-hidden hover:shadow-lg transition-shadow ${
                event.featured ? 'ring-2 ring-primary' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge 
                    variant="secondary" 
                    className={categoryColors[event.category as keyof typeof categoryColors]}
                  >
                    {event.category}
                  </Badge>
                  {event.featured && (
                    <Badge className="bg-primary text-white">Featured</Badge>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">
            Get the latest news and event announcements delivered to your inbox
          </p>
          <Button size="lg">Subscribe to Newsletter</Button>
        </div>
      </div>
    </section>
  );
}