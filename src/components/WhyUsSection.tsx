import { Shield, Clock, Users, Award, HeadphonesIcon, DollarSign } from "lucide-react";

const stats = [
  { value: "50+", label: "Years of Experience" },
  { value: "2M+", label: "Families Protected" },
  { value: "$50B+", label: "Claims Paid" },
  { value: "A+", label: "Financial Rating" },
];

const features = [
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    description: "Tailored policies that protect your loved ones from life's uncertainties.",
  },
  {
    icon: Clock,
    title: "Fast & Easy Process",
    description: "Get covered in minutes with our streamlined online application.",
  },
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description: "Affordable premiums that fit your budget without compromising coverage.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our dedicated team is here to assist you whenever you need help.",
  },
  {
    icon: Users,
    title: "Family-First Approach",
    description: "We treat every policyholder like family, because protecting yours is our mission.",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Consistently rated among the top life insurance providers nationwide.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Stats Bar */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 mb-20 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-sm md:text-base text-primary-foreground/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-block font-body text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
            Why Choose SecureLife
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Trusted Partner in Protection
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            For over five decades, families have trusted SecureLife to safeguard their futures. 
            Here's what sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex gap-5 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
