import { Shield, Users, Award, TrendingUp, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Benefits = () => {
  const stakeholders = [
    {
      title: "Consumers",
      icon: Users,
      color: "herb-green",
      benefits: [
        "Verify product authenticity instantly",
        "Access complete supply chain history",
        "Ensure premium quality and safety",
        "Support sustainable farming practices",
        "Get detailed product information"
      ],
      highlight: "Buy with confidence knowing every herb is genuine and ethically sourced"
    },
    {
      title: "Regulators",
      icon: Shield,
      color: "primary",
      benefits: [
        "Monitor compliance in real-time",
        "Track harvesting sustainability",
        "Verify organic certifications",
        "Prevent counterfeit products",
        "Ensure safety standards"
      ],
      highlight: "Maintain industry standards with transparent, immutable records"
    },
    {
      title: "Manufacturers",
      icon: Award,
      color: "ayur-copper",
      benefits: [
        "Prove ingredient authenticity",
        "Reduce supply chain risks",
        "Build consumer trust",
        "Streamline quality assurance",
        "Access premium suppliers"
      ],
      highlight: "Create products with verified, high-quality Ayurvedic ingredients"
    },
    {
      title: "Farmers",
      icon: TrendingUp,
      color: "ayur-turmeric",
      benefits: [
        "Get fair prices for quality herbs",
        "Build direct relationships",
        "Showcase sustainable practices",
        "Reduce middleman dependency",
        "Access larger markets"
      ],
      highlight: "Earn recognition and premium prices for authentic, quality herbs"
    }
  ];

  const platformBenefits = [
    {
      title: "100% Transparency",
      description: "Every step recorded on immutable blockchain",
      icon: Shield,
      stat: "10,000+ herbs tracked"
    },
    {
      title: "Real-time Tracking",
      description: "Live updates throughout the supply chain",
      icon: TrendingUp,
      stat: "< 2 min verification"
    },
    {
      title: "Quality Assurance",
      description: "Multiple verification checkpoints",
      icon: Award,
      stat: "99.9% accuracy"
    },
    {
      title: "Sustainability Focus",
      description: "Promoting responsible harvesting practices",
      icon: Star,
      stat: "500+ eco-farmers"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Benefits for <span className="text-gradient-primary">Everyone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AyurChain creates value for every stakeholder in the Ayurvedic supply chain, 
            building trust and transparency that benefits everyone from farmer to consumer.
          </p>
        </div>

        {/* Stakeholder Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon;
            
            return (
              <div
                key={stakeholder.title}
                className="scroll-reveal"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${stakeholder.color} to-${stakeholder.color}/70 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-playfair">{stakeholder.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className={`text-sm font-medium text-${stakeholder.color} bg-${stakeholder.color}/10 p-3 rounded-lg`}>
                      {stakeholder.highlight}
                    </p>
                    
                    <div className="space-y-2">
                      {stakeholder.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className={`h-4 w-4 text-${stakeholder.color} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Platform Benefits Grid */}
        <div className="scroll-reveal">
          <h3 className="text-3xl font-playfair font-bold text-center mb-12">
            Why Choose <span className="text-gradient-herbal">AyurChain</span>?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              
              return (
                <Card
                  key={benefit.title}
                  className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-playfair font-semibold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{benefit.description}</p>
                  <div className="text-2xl font-bold text-primary">{benefit.stat}</div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 bg-card rounded-3xl p-8 md:p-12 scroll-reveal">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-muted-foreground">
              Join the growing network of verified Ayurvedic suppliers and consumers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-herb-green mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Registered Farmers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground">Products Tracked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ayur-copper mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Manufacturing Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ayur-turmeric mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Verification Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;