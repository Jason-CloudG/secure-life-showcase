import { Heart, Umbrella, Building, Wallet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Heart,
    title: "Term Life Insurance",
    description:
      "Affordable coverage for a specific period. Ideal for protecting your family during your working years.",
    features: ["Fixed premiums", "Coverage up to $5M", "10-30 year terms"],
  },
  {
    icon: Umbrella,
    title: "Whole Life Insurance",
    description:
      "Lifetime protection with cash value accumulation. Build wealth while ensuring your family's security.",
    features: ["Lifetime coverage", "Cash value growth", "Fixed premiums"],
  },
  {
    icon: Building,
    title: "Universal Life Insurance",
    description:
      "Flexible coverage with adjustable premiums and death benefits. Adapt as your life changes.",
    features: ["Flexible premiums", "Adjustable coverage", "Investment options"],
  },
  {
    icon: Wallet,
    title: "Final Expense Insurance",
    description:
      "Affordable coverage to help your loved ones manage end-of-life expenses without financial burden.",
    features: ["Easy approval", "No medical exam", "Quick payout"],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-block font-body text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
            Our Coverage Options
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Life Insurance Plans for Every Stage
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Whether you're starting a family or planning for retirement, we have the right 
            coverage to protect what matters most to you.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <product.icon className="w-7 h-7 text-secondary" />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {product.title}
              </h3>

              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="font-body text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="ghost"
                className="w-full justify-between text-primary hover:text-secondary group/btn"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
