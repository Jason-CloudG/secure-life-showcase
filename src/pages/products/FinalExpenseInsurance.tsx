import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Heart, FileCheck, Clock, Shield } from "lucide-react";

const FinalExpenseInsurance = () => {
  const features = [
    {
      icon: FileCheck,
      title: "Easy Approval",
      description: "Simplified underwriting process with guaranteed or simplified issue options."
    },
    {
      icon: Heart,
      title: "No Medical Exam",
      description: "Get covered without the hassle of medical exams or extensive health questions."
    },
    {
      icon: Clock,
      title: "Quick Payout",
      description: "Benefits are typically paid within days, helping your family when they need it most."
    },
    {
      icon: Shield,
      title: "Permanent Coverage",
      description: "Coverage that lasts your entire life with premiums that never increase."
    }
  ];

  const benefits = [
    "Cover funeral and burial expenses",
    "Pay off remaining medical bills",
    "Settle outstanding debts",
    "Leave a small inheritance",
    "Affordable monthly premiums",
    "Peace of mind for you and your family"
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
                Final Expense Insurance
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Protect Your Loved Ones from End-of-Life Costs
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground mb-8">
                Final expense insurance is designed to cover funeral costs, medical bills, and other 
                end-of-life expenses. It ensures your family won't face financial burden during 
                an already difficult time.
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
                  Why Choose Final Expense Insurance?
                </h2>
                <p className="font-body text-muted-foreground mb-8">
                  Final expense insurance provides an affordable way to ensure your family isn't 
                  burdened with end-of-life costs. It's easy to qualify for and provides peace of mind.
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
                  Give Your Family Peace of Mind
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  See how affordable it is to protect your loved ones from unexpected expenses.
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

export default FinalExpenseInsurance;
