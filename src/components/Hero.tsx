import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1724398932316-e0d488b96e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBzYW5jdHVhcnklMjBpbnRlcmlvciUyMHBlYWNlZnVsfGVufDF8fHx8MTc1NjM2MTYzMnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Church sanctuary"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Grace Community Church
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          A place where faith grows, community thrives, and love abounds
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-3">
            Plan Your Visit
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white/10 border-white text-white hover:bg-white hover:text-black">
            Watch Online
          </Button>
        </div>
        
        {/* Service Times Quick Info */}
        <div className="mt-12 bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
          <h3 className="text-lg font-semibold mb-2">Join Us This Sunday</h3>
          <p className="text-base">Service Times: 9:00 AM & 11:00 AM</p>
        </div>
      </div>
    </section>
  );
}