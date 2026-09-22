import { Heart, Users, Book, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "We believe love is the foundation of our faith and community",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building meaningful relationships and supporting one another",
    },
    {
      icon: Book,
      title: "Truth",
      description: "Committed to biblical teaching and authentic discipleship",
    },
    {
      icon: Star,
      title: "Hope",
      description: "Bringing hope and transformation to our city and beyond",
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1658734029438-d97357737bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29tbXVuaXR5JTIwcGVvcGxlJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzU2MzYxNjU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Community gathering"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our Church
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Grace Community Church has been serving our community for over 25 years. 
              We are a vibrant, diverse congregation committed to following Jesus Christ 
              and making a positive impact in our world.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to know God and make Him known through authentic worship, 
              biblical teaching, and loving service to others. We believe that everyone 
              has a place in God's family and in our church family.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value) => {
                const IconComponent = value.icon;
                return (
                  <div key={value.title} className="text-center">
                    <div className="mb-3">
                      <IconComponent className="h-8 w-8 text-primary mx-auto" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}