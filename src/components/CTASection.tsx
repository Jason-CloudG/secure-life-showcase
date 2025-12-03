import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block font-body text-sm font-semibold text-secondary uppercase tracking-wider mb-4 animate-fade-in">
            Get Started Today
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Ready to Protect Your Family's Future?
          </h2>
          
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Get a free, no-obligation quote in minutes. Our licensed advisors are ready to help 
            you find the perfect coverage for your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Schedule a Call
            </Button>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a
              href="tel:1-800-SECURE"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-body text-sm">Call Us Anytime</p>
                <p className="font-body font-semibold">1-800-SECURE</p>
              </div>
            </a>
            
            <a
              href="mailto:contact@securelife.com"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-body text-sm">Email Us</p>
                <p className="font-body font-semibold">contact@securelife.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
