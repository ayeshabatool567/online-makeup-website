import serviceConsultation from "@/assets/service-consultation.jpg";
import serviceMakeup from "@/assets/service-makeup.jpg";
import serviceWorkshop from "@/assets/service-workshop.jpg";

const services = [
  {
    image: serviceConsultation,
    title: "Skincare Consultation",
    description: "Expert skincare advice tailored to your unique needs",
  },
  {
    image: serviceMakeup,
    title: "Makeup Application",
    description: "Professional makeup for any occasion",
  },
  {
    image: serviceWorkshop,
    title: "Beauty Workshops",
    description: "Learn techniques from our beauty experts",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Professional beauty services tailored for you
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
