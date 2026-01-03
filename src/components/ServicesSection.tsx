import { Palette, Gift, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "Virtual Try-On",
    description:
      "Experience our products virtually with our AR-powered try-on feature. See how each shade looks on you before you buy.",
    cta: "Try Now",
  },
  {
    icon: Gift,
    title: "Gift Sets",
    description:
      "Curated luxury gift sets for every occasion. Beautifully packaged and ready to delight your loved ones.",
    cta: "Shop Gifts",
  },
  {
    icon: Sparkles,
    title: "Beauty Rewards",
    description:
      "Join our loyalty program and earn points on every purchase. Unlock exclusive perks, early access, and special discounts.",
    cta: "Join Free",
  },
  {
    icon: Users,
    title: "Expert Consultations",
    description:
      "Book a one-on-one session with our beauty experts. Get personalized recommendations tailored to your unique needs.",
    cta: "Book Now",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold mt-3 mb-4">
            Elevate Your Experience
          </h2>
          <p className="text-muted-foreground">
            Beyond products, we offer personalized services to make your beauty
            journey exceptional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 lg:p-10 rounded-2xl border border-border/50 bg-gradient-card hover-lift ${
                index % 2 === 0 ? "md:translate-y-8" : ""
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-primary">
                  <service.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground flex-grow mb-6">
                  {service.description}
                </p>
                <Button variant="outline" className="w-fit">
                  {service.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
