import { useState } from 'react';
import { Menu, X, Leaf, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Supply Chain', href: '#supply-chain' },
    { name: 'Track Herbs', href: '#tracking' },
    { name: 'QR Scanner', href: '#scanner' },
    { name: 'Benefits', href: '#benefits' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Leaf className="h-8 w-8 text-herb-green floating-animation" />
              <Shield className="h-4 w-4 text-primary absolute -top-1 -right-1" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-playfair font-bold text-gradient-herbal">
                AyurChain
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                Blockchain Herb Tracking
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
            <Button className="ayur-button">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button className="ayur-button w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;