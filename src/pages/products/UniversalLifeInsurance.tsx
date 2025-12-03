import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Settings, LineChart, Shield, Sliders } from "lucide-react";

const UniversalLifeInsurance = () => {
  const features = [
    {
      icon: Sliders,
      title: "Flexible Premiums",
      description: "Adjust your premium payments based on your financial situation and needs."
    },
    {
      icon: Settings,
      title: "Adjustable Coverage",
      description: "Modify your death benefit as your life circumstances change over time."
    },
    {
      icon: LineChart,
      title: "Investment Options",
      description: "Choose from various investment options to grow your cash value potential."
    },
    {
      icon: Shield,
      title: "Permanent Protection",
      description: "Enjoy lifelong coverage that adapts to your evolving needs."
    }
  ];

  const benefits = [
    "Flexibility to adjust premiums and coverage",
    "Potential for higher cash value growth",
    "Access to cash value through loans or withdrawals",
    "Tax-deferred growth on cash value",
    "Ability to increase or decrease death benefit",
    "Multiple policy types (indexed, variable, guaranteed)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
          <div className="container mx-auto px-4">
            <Link to="/#products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
            <div className="max-w-3xl">
              <span className="inline-block font-body text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
                Universal Life Insurance
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Flexible Coverage That Adapts to Your Life
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground mb-8">
                Universal life insurance offers the flexibility to adjust your premiums and death benefit 
                as your life changes. It combines permanent protection with investment opportunities 
                for those seeking more control.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg">
                  Get Your Free Quote
                </Button>
                <Button variant="outline" size="lg">
                  Talk to an Expert
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="bg-card rounded-2xl p-6 shadow-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Universal Life Insurance?
                </h2>
                <p className="font-body text-muted-foreground mb-8">
                  Universal life insurance is perfect for those who want flexibility in their coverage. 
                  It allows you to adapt your policy as your financial situation and needs evolve.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="font-body text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Customize Your Coverage
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  Learn how universal life insurance can provide the flexibility you need for your unique situation.
                </p>
                <Button variant="default" size="lg" className="w-full">
                  Calculate Your Premium
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UniversalLifeInsurance;
