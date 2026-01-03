import { Leaf, Heart, Award, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Leaf,
    title: "Clean Beauty",
    description: "All our products are made with natural, non-toxic ingredients.",
  },
  {
    icon: Heart,
    title: "Cruelty-Free",
    description: "We never test on animals. Beauty without compromise.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Luxurious formulations that deliver exceptional results.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free express delivery on all orders over $50.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-semibold mt-3 mb-6">
              Beauty That Celebrates You
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              At Rosé Beauty, we believe that makeup should enhance your natural
              beauty, not mask it. Founded in 2020, we've been on a mission to
              create luxurious, inclusive beauty products that work for every skin
              type and tone.
            </p>
            <p className="text-muted-foreground mb-8">
              Our collections are thoughtfully formulated with clean, sustainable
              ingredients that nourish your skin while delivering stunning,
              long-lasting results. Because you deserve beauty that feels as good
              as it looks.
            </p>
            <Button variant="hero" size="lg">
              Learn Our Story
            </Button>
          </div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card shadow-card hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
