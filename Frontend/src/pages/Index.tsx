import { useState, useEffect } from 'react';
import { Leaf, Shield, MapPin, Scan, Users, Award, ChevronDown, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import QRScanner from '@/components/QRScanner';
import SupplyChain from '@/components/SupplyChain';
import Benefits from '@/components/Benefits';
import TrackingDemo from '@/components/TrackingDemo';
import Footer from '@/components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorks />
        <SupplyChain />
        <TrackingDemo />
        <QRScanner />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
};

export default Index;