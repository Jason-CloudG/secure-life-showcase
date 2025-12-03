import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, Phone } from "lucide-react";

const GetQuote = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
            <span className="inline-block font-body text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              Free Quote
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Your Personalized Quote
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Answer a few simple questions and receive a customized life insurance quote in minutes. 
              No obligations, no hidden fees.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Tell Us About Yourself</CardTitle>
                  <CardDescription>All information is kept confidential and secure.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="coverage">Coverage Amount</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select amount" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="100000">$100,000</SelectItem>
                          <SelectItem value="250000">$250,000</SelectItem>
                          <SelectItem value="500000">$500,000</SelectItem>
                          <SelectItem value="1000000">$1,000,000</SelectItem>
                          <SelectItem value="2000000">$2,000,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product">Insurance Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="term">Term Life Insurance</SelectItem>
                          <SelectItem value="whole">Whole Life Insurance</SelectItem>
                          <SelectItem value="universal">Universal Life Insurance</SelectItem>
                          <SelectItem value="final">Final Expense Insurance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="health">General Health Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select health status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="average">Average</SelectItem>
                        <SelectItem value="below-average">Below Average</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button variant="default" size="lg" className="w-full">
                    Get My Free Quote
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8" />
                    <h3 className="font-display text-xl font-bold">Why Choose Us?</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "No medical exam required",
                      "Instant online quotes",
                      "Coverage starts immediately",
                      "Affordable monthly payments",
                      "24/7 customer support"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-6 h-6 text-secondary" />
                    <h3 className="font-display text-lg font-bold">Prefer to Talk?</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our licensed agents are ready to help you find the perfect coverage.
                  </p>
                  <p className="font-display text-2xl font-bold text-primary">1-800-SECURE</p>
                  <p className="text-xs text-muted-foreground">Mon-Fri: 8AM-8PM EST</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetQuote;
