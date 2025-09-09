import { Leaf, Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Supply Chain', href: '#supply-chain' },
    { name: 'Track Products', href: '#tracking' },
    { name: 'QR Scanner', href: '#scanner' },
    { name: 'Benefits', href: '#benefits' }
  ];

  const resources = [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Developer Guide', href: '#' },
    { name: 'Blockchain Explorer', href: '#' },
    { name: 'Certification Guide', href: '#' }
  ];

  const support = [
    { name: 'Help Center', href: '#' },
    { name: 'Contact Support', href: '#' },
    { name: 'Farmer Onboarding', href: '#' },
    { name: 'Manufacturer Portal', href: '#' },
    { name: 'Consumer Guide', href: '#' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Leaf className="h-10 w-10 text-herb-green floating-animation" />
                  <Shield className="h-5 w-5 text-primary absolute -top-1 -right-1" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-playfair font-bold text-gradient-herbal">
                    AyurChain
                  </span>
                  <span className="text-sm text-muted-foreground -mt-1">
                    Blockchain Herb Tracking
                  </span>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Revolutionary blockchain technology ensuring authenticity, quality, and sustainability 
                in the Ayurvedic herb supply chain. Building trust from farm to pharmacy.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>contact@ayurchain.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-herb-green" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-ayur-copper" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-playfair font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-playfair font-semibold text-lg mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-playfair font-semibold text-lg mb-6">Support</h3>
              <ul className="space-y-3">
                {support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Stay Updated with <span className="text-gradient-primary">AyurChain</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on blockchain technology, Ayurvedic herbs, and supply chain innovations.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="ayur-button">
                Subscribe
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} AyurChain. All rights reserved. Built with ❤️ for sustainable Ayurveda.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Compliance
              </a>
            </div>
          </div>
        </div>

        {/* Certifications & Trust Badges */}
        <div className="border-t border-border py-6">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-xs text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-herb-green" />
              <span>Blockchain Verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Leaf className="h-4 w-4 text-primary" />
              <span>Organic Certified</span>
            </div>
            <div>AYUSH Ministry Recognized</div>
            <div>ISO 27001 Certified</div>
            <div>FSSAI Approved</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;