import { useState } from 'react';
import { Scan, Check, X, ArrowRight, Package, MapPin, Calendar, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const QRScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [qrInput, setQrInput] = useState('');

  // Sample herb data for demonstration
  const sampleHerbData = {
    'QR001': {
      name: 'Organic Turmeric',
      status: 'verified',
      batch: 'TP-2024-1115',
      farmer: 'Rajesh Kumar',
      location: 'Kerala, India',
      harvestDate: '2024-11-15',
      quality: 'Premium A+',
      certification: 'Organic Certified',
      journey: [
        { stage: 'Harvested', date: '2024-11-15', location: 'Kerala' },
        { stage: 'Processed', date: '2024-11-16', location: 'Kochi' },
        { stage: 'Packaged', date: '2024-11-18', location: 'Mumbai' },
        { stage: 'Shipped', date: '2024-11-19', location: 'Delhi' }
      ]
    },
    'QR002': {
      name: 'Ashwagandha Root',
      status: 'verified',
      batch: 'AR-2024-1120',
      farmer: 'Sunita Devi',
      location: 'Rajasthan, India',
      harvestDate: '2024-11-20',
      quality: 'Premium',
      certification: 'Wild Crafted',
      journey: [
        { stage: 'Harvested', date: '2024-11-20', location: 'Rajasthan' },
        { stage: 'Processed', date: '2024-11-21', location: 'Jaipur' }
      ]
    }
  };

  const handleScan = (qrCode) => {
    setIsScanning(true);
    
    setTimeout(() => {
      const herbData = sampleHerbData[qrCode];
      setScanResult(herbData || null);
      setIsScanning(false);
    }, 1500);
  };

  const handleManualInput = () => {
    if (qrInput.trim()) {
      handleScan(qrInput.trim());
      setQrInput('');
    }
  };

  return (
    <section id="scanner" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            <span className="text-gradient-primary">QR Scanner</span> Verification
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scan any QR code on Ayurvedic products to instantly verify authenticity and 
            view the complete journey from farm to shelf.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Scanner Interface */}
          <div className="scroll-reveal">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Scan className="h-6 w-6 text-primary" />
                  <span>QR Code Scanner</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Mock Scanner Display */}
                <div className="relative bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-8 min-h-[300px] flex items-center justify-center border-2 border-dashed border-border">
                  {isScanning ? (
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-muted-foreground">Scanning QR Code...</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Scan className="h-24 w-24 text-muted-foreground/50 mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">Position QR code within the frame</p>
                      <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
                        <Button
                          onClick={() => handleScan('QR001')}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                        >
                          Demo: Turmeric
                        </Button>
                        <Button
                          onClick={() => handleScan('QR002')}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                        >
                          Demo: Ashwagandha
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Manual Input */}
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Or enter QR code manually
                  </p>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter QR code (e.g., QR001)"
                      value={qrInput}
                      onChange={(e) => setQrInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleManualInput()}
                    />
                    <Button onClick={handleManualInput} disabled={!qrInput.trim()}>
                      Verify
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Display */}
          <div className="scroll-reveal">
            {scanResult ? (
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-herb-green" />
                    <span>Verification Result</span>
                    <div className="ml-auto">
                      <span className="bg-herb-green/20 text-herb-green px-3 py-1 rounded-full text-sm font-medium">
                        Verified
                      </span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Product Info */}
                  <div className="bg-gradient-herbal p-6 rounded-2xl text-white">
                    <h3 className="text-2xl font-playfair font-bold mb-2">{scanResult.name}</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm opacity-90">
                      <div>
                        <span className="block opacity-75">Batch Number</span>
                        <span className="font-semibold">{scanResult.batch}</span>
                      </div>
                      <div>
                        <span className="block opacity-75">Quality Grade</span>
                        <span className="font-semibold">{scanResult.quality}</span>
                      </div>
                    </div>
                  </div>

                  {/* Farmer & Origin Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-accent/30 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <Package className="h-5 w-5 text-herb-green" />
                        <span className="font-semibold">Farmer</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{scanResult.farmer}</p>
                    </div>
                    
                    <div className="bg-accent/30 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Origin</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{scanResult.location}</p>
                    </div>
                  </div>

                  {/* Journey Timeline */}
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center space-x-2">
                      <ArrowRight className="h-5 w-5 text-primary" />
                      <span>Supply Chain Journey</span>
                    </h4>
                    <div className="space-y-3">
                      {scanResult.journey.map((step, index) => (
                        <div key={index} className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg">
                          <div className="w-8 h-8 bg-herb-green rounded-full flex items-center justify-center">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{step.stage}</div>
                            <div className="text-sm text-muted-foreground flex items-center space-x-4">
                              <span className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>{step.date}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <MapPin className="h-3 w-3" />
                                <span>{step.location}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Certifications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-herb-green" />
                      <span className="text-sm">{scanResult.certification}</span>
                    </div>
                  </div>

                  <Button className="ayur-button w-full">
                    Download Certificate
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="overflow-hidden">
                <CardContent className="p-12 text-center">
                  <div className="w-24 h-24 bg-muted/30 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Scan className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-4">
                    Scan QR Code to Verify
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Use the scanner on the left to verify any Ayurvedic product's authenticity 
                    and view its complete supply chain journey.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRScanner;