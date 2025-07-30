import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Flower2, TrendingUp, BarChart, FileText } from 'lucide-react';
import Image from 'next/image';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center p-6 text-center bg-card rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="p-4 rounded-full bg-primary/10 mb-4">
        <Icon className="w-10 h-10 text-accent" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-auto">
            <Image src="/Grams to Gains.png" alt="Grams to Gains" width={180} height={40} />
          </Link>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter">
              The B2B Cannabis Marketplace, Reimagined.
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Grams to Gains is the all-in-one platform connecting manufacturers, dispensaries, and growers. Streamline your operations, gain market insights, and grow your business with our AI-powered tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">Get Started For Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/login">Access Your Portal</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-96">
            <Image
              src="/landing.jpeg"
              alt="Cannabis products"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </section>

        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 text-muted">
            <svg viewBox="0 0 1440 120" fill="currentColor" className="w-full h-auto -mb-px">
                <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C840,7.35031847 960,0 1080,0 C1200,0 1320,7.35031847 1440,21.2101911 Z"></path>
            </svg>
          </div>
        </div>

        <section className="py-20 md:py-24 bg-muted">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Powerful Tools for Every Player</h2>
                <p className="mt-4 text-lg text-muted-foreground">Whether you produce, sell, or grow, Grams to Gains provides the features you need to succeed in the competitive cannabis market.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard 
                    icon={TrendingUp}
                    title="AI Demand Forecasting"
                    description="For Manufacturers: Predict product demand with unparalleled accuracy to optimize production and never miss a sale."
                />
                 <FeatureCard 
                    icon={BarChart}
                    title="Smart Inventory"
                    description="For Dispensaries: Get AI-driven recommendations on what to stock, ensuring your shelves are always filled with top-sellers."
                />
                 <FeatureCard 
                    icon={FileText}
                    title="Procurement Hub"
                    description="For Growers: Find and connect with dispensaries and manufacturers actively looking for your flower strains."
                />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-8 flex items-center justify-between">
            <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Grams to Gains. All rights reserved.</p>
            <div className="flex items-center gap-4">
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
            </div>
        </div>
      </footer>
    </div>
  );
}
