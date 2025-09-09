import { useState } from 'react';
import { ArrowRight, Package, Truck, Factory, Store, CheckCircle, MapPin, Clock, Thermometer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SupplyChain = () => {
  const [selectedStage, setSelectedStage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const supplyStages = [
    {
      id: 'collection',
      title: 'Collection',
      icon: Package,
      location: 'Kerala, India',
      timestamp: '2024-11-15 06:30 AM',
      temperature: '28°C',
      details: {
        description: 'Premium turmeric harvested by certified organic farmers',
        records: [
          'GPS: 9.9312° N, 76.2673° E',
          'Farmer: Rajesh Kumar (ID: FK001)',
          'Organic Certification: ICS-2024',
          'Quality Grade: Premium A+',
          'Quantity: 50 kg'
        ]
      }
    },
    {
      id: 'processing',
      title: 'Processing',
      icon: Factory,
      location: 'Kochi Processing Unit',
      timestamp: '2024-11-16 10:15 AM',
      temperature: '22°C',
      details: {
        description: 'Traditional cleaning and drying processes applied',
        records: [
          'Processing Method: Sun-dried',
          'Quality Check: Passed',
          'Moisture Content: 8.5%',
          'Batch Number: TP-2024-1115',
          'Inspector: Dr. Priya Singh'
        ]
      }
    },
    {
      id: 'packaging',
      title: 'Packaging',
      icon: Package,
      location: 'Mumbai Facility',
      timestamp: '2024-11-18 02:45 PM',
      temperature: '20°C',
      details: {
        description: 'Sealed in food-grade packaging with QR codes',
        records: [
          'Package Type: Vacuum Sealed',
          'QR Code: Generated',
          'Expiry Date: Nov 2026',
          'Batch Tracking: Enabled',
          'Weight: 500g packets'
        ]
      }
    },
    {
      id: 'transport',
      title: 'Transport',
      icon: Truck,
      location: 'En Route to Delhi',
      timestamp: '2024-11-19 08:00 AM',
      temperature: '18°C',
      details: {
        description: 'Temperature-controlled transportation',
        records: [
          'Vehicle: TR-1234 (Refrigerated)',
          'Driver: Amit Sharma',
          'Route: Mumbai → Delhi',
          'ETA: 2024-11-20 06:00 PM',
          'Temperature Monitoring: Active'
        ]
      }
    },
    {
      id: 'retail',
      title: 'Retail',
      icon: Store,
      location: 'AyurMart Delhi',
      timestamp: '2024-11-20 07:30 PM',
      temperature: '25°C',
      details: {
        description: 'Available for consumer purchase with full traceability',
        records: [
          'Store ID: AM-DEL-001',
          'Shelf Life: 22 months',
          'Price: ₹299/500g',
          'Stock Status: Available',
          'Consumer Verification: QR Ready'
        ]
      }
    }
  ];

  const handleStageClick = (index) => {
    if (index !== selectedStage) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedStage(index);
        setIsAnimating(false);
      }, 150);
    }
  };

  const currentStage = supplyStages[selectedStage];
  const StageIcon = currentStage.icon;

  return (
    <section id="supply-chain" className="py-24 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            <span className="text-gradient-herbal">Complete Supply Chain</span> Transparency
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow the journey of our premium turmeric from organic farms in Kerala 
            to your local store with complete blockchain-verified transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Supply Chain Timeline */}
          <div className="space-y-6 scroll-reveal">
            <h3 className="text-2xl font-playfair font-semibold mb-8">
              Track Product Journey
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              
              {supplyStages.map((stage, index) => {
                const Icon = stage.icon;
                const isActive = selectedStage === index;
                const isPassed = selectedStage > index;
                
                return (
                  <div
                    key={stage.id}
                    className={`relative flex items-start space-x-4 pb-8 cursor-pointer transition-all duration-300 ${
                      isActive ? 'scale-105' : 'hover:scale-102'
                    }`}
                    onClick={() => handleStageClick(index)}
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-primary shadow-lg pulse-glow' 
                        : isPassed 
                        ? 'bg-herb-green shadow-md' 
                        : 'bg-muted border-2 border-border'
                    }`}>
                      <Icon className={`h-8 w-8 ${
                        isActive || isPassed ? 'text-white' : 'text-muted-foreground'
                      }`} />
                      
                      {isPassed && (
                        <CheckCircle className="absolute -top-2 -right-2 h-6 w-6 text-herb-green bg-background rounded-full" />
                      )}
                    </div>
                    
                    {/* Stage Info */}
                    <div className="flex-1 min-w-0">
                      <div className={`p-4 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-card shadow-lg border-2 border-primary/30' 
                          : 'bg-card/50 border border-border/50'
                      }`}>
                        <h4 className="font-semibold text-lg mb-1">{stage.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{stage.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{stage.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stage Details */}
          <div className="scroll-reveal">
            <Card className={`overflow-hidden transition-all duration-300 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <StageIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold">{currentStage.title}</h3>
                    <p className="text-muted-foreground">{currentStage.location}</p>
                  </div>
                </div>

                <p className="text-lg mb-6">{currentStage.details.description}</p>

                {/* Environmental Conditions */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <Thermometer className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Temperature</span>
                    </div>
                    <div className="text-2xl font-bold text-primary mt-1">{currentStage.temperature}</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-herb-green" />
                      <span className="font-semibold">Recorded</span>
                    </div>
                    <div className="text-sm font-medium text-herb-green mt-1">{currentStage.timestamp}</div>
                  </div>
                </div>

                {/* Detailed Records */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Blockchain Records</h4>
                  {currentStage.details.records.map((record, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-accent/30 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-herb-green flex-shrink-0" />
                      <span className="text-sm">{record}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex space-x-4">
                  <Button 
                    className="herb-button"
                    disabled={selectedStage === supplyStages.length - 1}
                    onClick={() => handleStageClick(Math.min(selectedStage + 1, supplyStages.length - 1))}
                  >
                    Next Stage
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    View Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyChain;