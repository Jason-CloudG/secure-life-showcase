import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Mother of Three",
    quote:
      "SecureLife gave us peace of mind when we needed it most. The process was simple, and knowing my children are protected lets me sleep better at night.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Small Business Owner",
    quote:
      "I compared multiple providers, and SecureLife offered the best coverage at an unbeatable price. Their customer service is exceptional.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Healthcare Professional",
    quote:
      "After losing my father unexpectedly, I understood the importance of life insurance. SecureLife made it easy to protect my own family's future.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-block font-body text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
            Customer Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Families Like Yours
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Don't just take our word for it. Hear from families who chose SecureLife 
            to protect what matters most.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-card border border-border relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Quote className="w-5 h-5 text-secondary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-body text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
