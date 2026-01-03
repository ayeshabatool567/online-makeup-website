import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Rosé Beauty | Luxury Cruelty-Free Makeup & Skincare</title>
        <meta
          name="description"
          content="Discover luxurious, cruelty-free makeup and skincare at Rosé Beauty. Shop premium lipsticks, eyeshadows, foundations, and more. Free shipping on orders over $50."
        />
        <meta
          name="keywords"
          content="makeup, cosmetics, beauty, skincare, cruelty-free, lipstick, eyeshadow, foundation"
        />
        <link rel="canonical" href="https://rosebeauty.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <CategoriesSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
