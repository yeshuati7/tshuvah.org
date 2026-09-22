import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Ministries() {
  const ministries = [
    {
      title: "Children's Ministry",
      description: "Fun, safe, and engaging programs for kids from birth to 5th grade",
      image: "https://images.unsplash.com/photo-1713012633197-1426a345ca99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN1bmRheSUyMHNjaG9vbHxlbnwxfHx8fDE3NTYzNjE2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Sunday School", "Vacation Bible School", "Children's Worship"]
    },
    {
      title: "Youth Ministry",
      description: "Connecting teens with God and each other through relevant teaching and fun activities",
      image: "https://images.unsplash.com/photo-1545886082-e66c6b9e011a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGdyb3VwJTIwdGVlbmFnZXJzfGVufDF8fHx8MTc1NjM2MTY3OHww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Youth Group", "Summer Camps", "Mission Trips"]
    },
    {
      title: "Community Outreach",
      description: "Serving our neighbors and making a difference in our community",
      image: "https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwc2VydmluZyUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTYzNjE2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Food Bank", "Homeless Ministry", "Community Events"]
    }
  ];

  return (
    <section id="ministries" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Ministries
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover opportunities to grow in faith, build relationships, and serve others
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ministries.map((ministry) => (
            <Card key={ministry.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={ministry.image}
                  alt={ministry.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{ministry.title}</h3>
                <p className="text-gray-600 mb-4">{ministry.description}</p>
                <ul className="space-y-2 mb-6">
                  {ministry.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-500 flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Ministries */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-center mb-8">Additional Ministries</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2">Small Groups</h4>
              <p className="text-sm text-gray-600">Bible study and fellowship in homes</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Women's Ministry</h4>
              <p className="text-sm text-gray-600">Encouraging women in their faith journey</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Men's Ministry</h4>
              <p className="text-sm text-gray-600">Building strong Christian men</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Seniors Ministry</h4>
              <p className="text-sm text-gray-600">Fellowship and activities for seniors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}