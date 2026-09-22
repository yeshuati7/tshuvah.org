import { Facebook, Instagram, Youtube, Twitter, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' }
  ];

  const quickLinks = [
    'About Us',
    'Service Times',
    'Ministries',
    'Events',
    'Contact',
    'Give Online'
  ];

  const resources = [
    'Sermons',
    'Bible Study',
    'Prayer Requests',
    'Volunteer',
    'Membership',
    'Staff Directory'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Grace Community Church</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              A place where faith grows, community thrives, and love abounds. 
              Join us in experiencing the transforming love of Jesus Christ.
            </p>
            <div className="text-gray-300 space-y-2">
              <p>123 Faith Street</p>
              <p>Grace City, GC 12345</p>
              <p>(555) 123-4567</p>
              <p>info@gracecommunitychurch.org</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Service Times */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-gray-300 hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-2">Service Times</h4>
              <p className="text-gray-300">Sunday: 9:00 AM & 11:00 AM</p>
              <p className="text-gray-300">Wednesday: 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            <span>&copy; 2024 Grace Community Church. All rights reserved.</span>
            <Heart className="h-4 w-4 mx-2 text-red-500" />
            <span>Made with love for our community</span>
          </p>
        </div>
      </div>
    </footer>
  );
}