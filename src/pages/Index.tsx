import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Glowing | Luxury Skincare & Beauty Products</title>
        <meta
          name="description"
          content="Discover luxurious skincare and beauty products at Glowing. Premium consultations, makeup application, and beauty workshops. Free shipping on orders over $50."
        />
        <meta
          name="keywords"
          content="skincare, beauty, makeup, consultation, lipstick, foundation, serum, moisturizer"
        />
        <link rel="canonical" href="https://glowing.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ProductsSection />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
