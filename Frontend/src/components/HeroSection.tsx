import { useState, useEffect } from 'react';
import { ArrowRight, Play, ShieldCheck, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-herbs.jpg';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const rotatingText = [
    "Track Every Herb",
    "Verify Authenticity", 
    "Ensure Quality",
    "Build Trust"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingText.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Ayurvedic Herbs Collection"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 scroll-reveal">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-herb-green font-semibold">
                <ShieldCheck className="h-5 w-5" />
                <span>Blockchain-Powered Ayurvedic Supply Chain</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">
                <span className="text-gradient-herbal">AyurChain:</span>
                <br />
                <span className="text-gradient-primary transition-all duration-500">
                  {rotatingText[currentText]}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Revolutionary blockchain technology tracking every Ayurvedic herb from farm to pharmacy. 
                Ensuring authenticity, quality, and sustainable harvesting practices with complete transparency.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="ayur-button group">
                Start Tracking
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-herb-green text-herb-green hover:bg-herb-green hover:text-white transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Herbs Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-herb-green">500+</div>
                <div className="text-sm text-muted-foreground">Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ayur-copper">99.9%</div>
                <div className="text-sm text-muted-foreground">Verified</div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Elements */}
          <div className="relative scroll-reveal">
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 herb-card floating-animation">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-8 w-8 text-herb-green" />
                  <div>
                    <div className="font-semibold">Geo-Tagged</div>
                    <div className="text-sm text-muted-foreground">GPS Tracking</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 herb-card floating-animation" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">Blockchain</div>
                    <div className="text-sm text-muted-foreground">Verified</div>
                  </div>
                </div>
              </div>

              {/* Main Visual */}
              <div className="bg-gradient-herbal p-8 rounded-3xl shadow-2xl">
                <div className="bg-card rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-herb-green">TRACKING STATUS</span>
                    <span className="w-3 h-3 bg-herb-green rounded-full pulse-glow"></span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Turmeric Root</span>
                      <span className="text-xs bg-herb-green/20 text-herb-green px-2 py-1 rounded-full">Verified</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Location: Kerala, India</span>
                      <MapPin className="h-4 w-4 text-herb-green" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Harvest Date: Nov 2024</span>
                      <span className="text-xs text-muted-foreground">Certified Organic</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;