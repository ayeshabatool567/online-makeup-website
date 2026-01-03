import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-makeup.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury makeup collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm text-secondary-foreground text-sm font-medium mb-6 animate-fade-up">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>New Collection 2025</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] mb-6 animate-fade-up animation-delay-100">
            Discover Your
            <br />
            <span className="text-primary">Perfect Glow</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-muted-foreground max-w-lg mb-8 animate-fade-up animation-delay-200">
            Elevate your beauty routine with our luxurious collection of
            cruelty-free, high-performance makeup crafted for every skin tone.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl">
              Shop Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Explore Collection
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 animate-fade-up animation-delay-400">
            <div>
              <p className="font-display text-3xl font-semibold text-foreground">
                500+
              </p>
              <p className="text-sm text-muted-foreground">Products</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-display text-3xl font-semibold text-foreground">
                50K+
              </p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-display text-3xl font-semibold text-foreground">
                100%
              </p>
              <p className="text-sm text-muted-foreground">Cruelty-Free</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
