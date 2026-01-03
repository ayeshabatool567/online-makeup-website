import aboutTeam from "@/assets/about-team.jpg";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50K+", label: "Happy Customers" },
  { value: "500+", label: "Products" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground">
            About Glowing
          </h2>
          <p className="text-muted-foreground mt-4">
            Your trusted partner in beauty and skincare excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
              Our Story
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded with a passion for beauty and self-expression, Glowing has been helping people discover their unique glow for over a decade. We believe that everyone deserves to feel confident and beautiful in their own skin.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our carefully curated collection features premium products from trusted brands, alongside our own exclusive formulations developed by beauty experts and dermatologists.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-3xl lg:text-4xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Team Image */}
          <div className="relative">
            <img
              src={aboutTeam}
              alt="Our team of beauty experts"
              className="w-full rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
