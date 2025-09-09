import { useState } from 'react';
import { Search, MapPin, Clock, Package, Truck, Store, CheckCircle, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TrackingDemo = () => {
  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const demoData = {
    'AYUR001': {
      productName: 'Premium Turmeric Powder',
      currentStatus: 'In Transit',
      currentLocation: 'Delhi Distribution Hub',
      estimatedDelivery: '2024-11-22',
      progress: 75,
      timeline: [
        {
          stage: 'Harvested',
          status: 'completed',
          date: '2024-11-15',
          time: '06:30 AM',
          location: 'Organic Farm, Kerala',
          description: 'Fresh turmeric roots harvested by certified farmer',
          icon: Package,
          details: {
            farmer: 'Rajesh Kumar',
            coordinates: '9.9312° N, 76.2673° E',
            quality: 'Premium Grade A',
            quantity: '500 kg'
          }
        },
        {
          stage: 'Quality Check',
          status: 'completed',
          date: '2024-11-16',
          time: '10:15 AM',
          location: 'Processing Unit, Kochi',
          description: 'Quality inspection and certification completed',
          icon: CheckCircle,
          details: {
            inspector: 'Dr. Priya Singh',
            moisture: '8.2%',
            purity: '99.5%',
            certificates: ['Organic', 'FSSAI']
          }
        },
        {
          stage: 'Processing',
          status: 'completed',
          date: '2024-11-17',
          time: '02:30 PM',
          location: 'Mumbai Processing Facility',
          description: 'Traditional grinding and packaging completed',
          icon: Package,
          details: {
            method: 'Stone Ground',
            packaging: 'Vacuum Sealed',
            batchId: 'TP-2024-1117',
            expiry: '2026-11-17'
          }
        },
        {
          stage: 'Shipped',
          status: 'active',
          date: '2024-11-20',
          time: '08:00 AM',
          location: 'Mumbai → Delhi',
          description: 'In transit to distribution center',
          icon: Truck,
          details: {
            carrier: 'AyurLogistics',
            vehicle: 'TR-9876',
            driver: 'Amit Sharma',
            temperature: 'Climate Controlled'
          }
        },
        {
          stage: 'Delivered',
          status: 'pending',
          date: '2024-11-22',
          time: 'Expected 06:00 PM',
          location: 'AyurMart Store, Delhi',
          description: 'Ready for consumer purchase',
          icon: Store,
          details: {
            store: 'AyurMart Central Delhi',
            manager: 'Sunita Patel',
            shelf: 'Ayurvedic Spices - A12',
            price: '₹299/500g'
          }
        }
      ]
    },
    'AYUR002': {
      productName: 'Organic Ashwagandha Capsules',
      currentStatus: 'Delivered',
      currentLocation: 'AyurWellness Store, Pune',
      estimatedDelivery: 'Delivered on 2024-11-21',
      progress: 100,
      timeline: [
        {
          stage: 'Harvested',
          status: 'completed',
          date: '2024-11-10',
          time: '05:45 AM',
          location: 'Wild Crafted Forest, Rajasthan',
          description: 'Sustainably harvested Ashwagandha roots',
          icon: Package,
          details: {
            harvester: 'Sunita Devi',
            method: 'Wild Crafted',
            sustainability: 'Certified Sustainable',
            quantity: '200 kg'
          }
        },
        {
          stage: 'Processing',
          status: 'completed',
          date: '2024-11-12',
          time: '11:20 AM',
          location: 'Ayur Pharmaceuticals, Jaipur',
          description: 'Extracted and encapsulated using traditional methods',
          icon: Package,
          details: {
            extraction: 'CO2 Supercritical',
            potency: '5% Withanolides',
            capsules: '60 capsules/bottle',
            testing: 'Third-party verified'
          }
        },
        {
          stage: 'Delivered',
          status: 'completed',
          date: '2024-11-21',
          time: '03:30 PM',
          location: 'AyurWellness Store, Pune',
          description: 'Successfully delivered and available for sale',
          icon: Store,
          details: {
            store: 'AyurWellness Pune',
            stock: '50 bottles',
            price: '₹1,299/bottle',
            rating: '4.9/5 stars'
          }
        }
      ]
    }
  };

  const handleTracking = (id) => {
    setIsLoading(true);
    
    setTimeout(() => {
      const result = demoData[id];
      setTrackingResult(result || null);
      setIsLoading(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackingId.trim()) {
      handleTracking(trackingId.trim());
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-herb-green" />;
      case 'active':
        return <div className="w-5 h-5 rounded-full bg-primary animate-pulse" />;
      case 'pending':
        return <div className="w-5 h-5 rounded-full border-2 border-muted-foreground" />;
      default:
        return <div className="w-5 h-5 rounded-full bg-muted" />;
    }
  };

  return (
    <section id="tracking" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Track Your <span className="text-gradient-herbal">Ayurvedic Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enter any product tracking ID to see the complete journey from harvest to delivery 
            with real-time updates and blockchain verification.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search Interface */}
          <Card className="mb-12 scroll-reveal">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Search className="h-6 w-6 text-primary" />
                <span>Product Tracking</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex space-x-4">
                  <Input
                    placeholder="Enter tracking ID (e.g., AYUR001, AYUR002)"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" disabled={!trackingId.trim() || isLoading}>
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Search className="h-4 w-4" />
                    )}
                    Track
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-muted-foreground">Try demo IDs:</span>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleTracking('AYUR001')}
                  >
                    AYUR001
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleTracking('AYUR002')}
                  >
                    AYUR002
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Tracking Results */}
          {trackingResult ? (
            <div className="space-y-8 scroll-reveal">
              {/* Product Header */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                    <div>
                      <h3 className="text-2xl font-playfair font-bold mb-2">
                        {trackingResult.productName}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{trackingResult.currentLocation}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{trackingResult.estimatedDelivery}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${
                        trackingResult.currentStatus === 'Delivered' 
                          ? 'bg-herb-green/20 text-herb-green'
                          : 'bg-primary/20 text-primary'
                      }`}>
                        {getStatusIcon(trackingResult.currentStatus === 'Delivered' ? 'completed' : 'active')}
                        <span>{trackingResult.currentStatus}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {trackingResult.progress}% Complete
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-herbal h-2 rounded-full transition-all duration-500"
                        style={{ width: `${trackingResult.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Supply Chain Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
                    
                    {trackingResult.timeline.map((event, index) => {
                      const Icon = event.icon;
                      
                      return (
                        <div key={index} className="relative flex items-start space-x-6 pb-8 last:pb-0">
                          {/* Timeline Node */}
                          <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center ${
                            event.status === 'completed' 
                              ? 'bg-herb-green shadow-lg' 
                              : event.status === 'active'
                              ? 'bg-primary shadow-lg pulse-glow'
                              : 'bg-muted'
                          }`}>
                            <Icon className={`h-8 w-8 ${
                              event.status === 'pending' ? 'text-muted-foreground' : 'text-white'
                            }`} />
                          </div>
                          
                          {/* Event Content */}
                          <div className="flex-1 min-w-0">
                            <div className="bg-card border rounded-xl p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h4 className="font-semibold text-lg">{event.stage}</h4>
                                  <p className="text-sm text-muted-foreground">{event.description}</p>
                                </div>
                                <div className="text-right text-sm">
                                  <div className="font-medium">{event.date}</div>
                                  <div className="text-muted-foreground">{event.time}</div>
                                </div>
                              </div>

                              <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
                                <MapPin className="h-4 w-4" />
                                <span>{event.location}</span>
                              </div>

                              {/* Event Details */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {Object.entries(event.details).map(([key, value]) => (
                                  <div key={key} className="bg-muted/30 p-3 rounded-lg">
                                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                                      {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </div>
                                    <div className="text-sm font-medium">
                                      {Array.isArray(value) ? value.join(', ') : String(value)}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            !isLoading && (
              <Card className="scroll-reveal">
                <CardContent className="p-12 text-center">
                  <div className="w-24 h-24 bg-muted/30 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Search className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-4">
                    Enter Tracking ID
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Use the search box above to track any Ayurvedic product and view its 
                    complete supply chain journey with blockchain verification.
                  </p>
                </CardContent>
              </Card>
            )
          )}
          
          {isLoading && (
            <Card className="scroll-reveal">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                <h3 className="text-xl font-playfair font-semibold mb-4">
                  Searching Blockchain Records...
                </h3>
                <p className="text-muted-foreground">
                  Retrieving product information and supply chain data
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackingDemo;