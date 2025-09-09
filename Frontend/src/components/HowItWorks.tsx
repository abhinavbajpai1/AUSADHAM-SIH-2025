import { useState } from 'react';
import { Leaf, MapPin, Shield, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Herb Collection",
      description: "Farmers and collectors use our mobile app to record harvesting details with GPS coordinates",
      icon: Leaf,
      color: "herb-green",
      details: [
        "GPS location tracking",
        "Photo documentation",
        "Harvesting date & time",
        "Collector identification"
      ]
    },
    {
      id: 2,
      title: "Blockchain Recording",
      description: "Every step is recorded on an immutable blockchain ledger for complete transparency",
      icon: Shield,
      color: "primary",
      details: [
        "Immutable records",
        "Cryptographic security",
        "Smart contracts",
        "Real-time updates"
      ]
    },
    {
      id: 3,
      title: "Processing Trail",
      description: "Track transportation, processing, and quality checks through the entire supply chain",
      icon: ArrowRight,
      color: "ayur-copper",
      details: [
        "Transportation logs",
        "Quality assessments",
        "Processing stages",
        "Storage conditions"
      ]
    },
    {
      id: 4,
      title: "Consumer Verification",
      description: "End customers scan QR codes to verify authenticity and view complete herb history",
      icon: Smartphone,
      color: "ayur-turmeric",
      details: [
        "QR code scanning",
        "Complete traceability",
        "Authenticity verification",
        "Quality assurance"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            How <span className="text-gradient-primary">AyurChain</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From farm to pharmacy, our blockchain technology ensures every Ayurvedic herb 
            is tracked, verified, and authenticated at every step of the journey.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-primary opacity-30 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={step.id}
                  className="relative scroll-reveal"
                  style={{ animationDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Step Card */}
                  <Card className={`relative overflow-hidden transition-all duration-500 cursor-pointer ${
                    isActive ? 'scale-105 shadow-2xl' : 'hover:scale-102'
                  }`}>
                    <CardHeader className="text-center pb-4">
                      <div className="relative mx-auto mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${step.color} to-${step.color}/70 flex items-center justify-center mb-4 mx-auto ${
                          isActive ? 'pulse-glow' : ''
                        }`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {step.id}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-playfair">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      
                      {/* Details List */}
                      <div className={`space-y-2 transition-all duration-300 ${
                        isActive ? 'opacity-100 max-h-40' : 'opacity-70 max-h-20 overflow-hidden'
                      }`}>
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className={`h-4 w-4 text-${step.color} flex-shrink-0`} />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Connection Arrow for Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-8 w-8 text-primary" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-gradient-herbal rounded-xl flex items-center justify-center mx-auto">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-playfair font-semibold">GPS Tracking</h3>
            <p className="text-muted-foreground">Precise location data for every harvest point</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-playfair font-semibold">Blockchain Security</h3>
            <p className="text-muted-foreground">Immutable records with cryptographic protection</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-gradient-to-br from-ayur-turmeric to-ayur-copper rounded-xl flex items-center justify-center mx-auto">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-playfair font-semibold">Mobile Integration</h3>
            <p className="text-muted-foreground">Easy-to-use apps for farmers and consumers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;