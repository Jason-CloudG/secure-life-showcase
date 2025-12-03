import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Target, Heart, Handshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "50+", label: "Years of Experience" },
  { value: "2M+", label: "Families Protected" },
  { value: "$50B+", label: "Claims Paid" },
  { value: "A+", label: "Financial Rating" },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Security",
    description: "We've built our reputation on being a company families can rely on for generations."
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make starts with asking: 'How does this benefit our policyholders?'"
  },
  {
    icon: Target,
    title: "Integrity",
    description: "We operate with complete transparency, ensuring you understand every aspect of your coverage."
  },
  {
    icon: Handshake,
    title: "Commitment",
    description: "We're committed to being there when your family needs us most, no matter what."
  },
];

const leadership = [
  {
    name: "Robert Mitchell",
    role: "Chief Executive Officer",
    bio: "30+ years in insurance industry leadership",
  },
  {
    name: "Sarah Chen",
    role: "Chief Financial Officer",
    bio: "Former VP at Fortune 500 financial services",
  },
  {
    name: "Michael Torres",
    role: "Chief Operations Officer",
    bio: "Expert in customer experience optimization",
  },
  {
    name: "Emily Watson",
    role: "Chief Marketing Officer",
    bio: "Award-winning brand strategist",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block font-body text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              About SecureLife
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 max-w-4xl mx-auto">
              Protecting Families for Over 50 Years
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Since 1974, SecureLife has been America's trusted partner in life insurance, 
              helping millions of families secure their financial future.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="font-body text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block font-body text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
                  Our Story
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Legacy of Protection
                </h2>
                <div className="space-y-4 font-body text-muted-foreground">
                  <p>
                    SecureLife was founded in 1974 by John Mitchell, a young father who understood 
                    the importance of protecting what matters most. After losing his own father at a 
                    young age, he witnessed firsthand the financial hardship a family faces without 
                    proper life insurance coverage.
                  </p>
                  <p>
                    What started as a small regional insurance agency in Hartford, Connecticut has 
                    grown into one of America's most trusted life insurance providers. Today, we 
                    serve over 2 million policyholders across all 50 states.
                  </p>
                  <p>
                    Our mission remains the same as it was 50 years ago: to provide affordable, 
                    comprehensive life insurance that gives families peace of mind and financial 
                    security for generations to come.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 rounded-2xl p-6 text-center">
                  <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <p className="font-display text-lg font-bold text-foreground">A+ Rated</p>
                  <p className="text-sm text-muted-foreground">by AM Best</p>
                </div>
                <div className="bg-secondary/10 rounded-2xl p-6 text-center">
                  <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <p className="font-display text-lg font-bold text-foreground">Top 10</p>
                  <p className="text-sm text-muted-foreground">Life Insurer in USA</p>
                </div>
                <div className="bg-secondary/10 rounded-2xl p-6 text-center">
                  <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <p className="font-display text-lg font-bold text-foreground">99.8%</p>
                  <p className="text-sm text-muted-foreground">Claims Paid</p>
                </div>
                <div className="bg-primary/10 rounded-2xl p-6 text-center">
                  <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <p className="font-display text-lg font-bold text-foreground">4.9/5</p>
                  <p className="text-sm text-muted-foreground">Customer Rating</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block font-body text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
                Our Values
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                What We Stand For
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Our core values guide every interaction and decision we make.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="text-center p-6">
                  <CardContent className="pt-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block font-body text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
                Leadership
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Meet Our Team
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Experienced leaders dedicated to protecting your family's future.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((leader) => (
                <Card key={leader.name} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {leader.name}
                    </h3>
                    <p className="font-body text-secondary text-sm font-medium mb-2">
                      {leader.role}
                    </p>
                    <p className="font-body text-muted-foreground text-sm">
                      {leader.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Protect Your Family?
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join over 2 million families who trust SecureLife with their future.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/quote">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
