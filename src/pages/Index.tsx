import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface FavoriteItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

const Index = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  const handleAddToCart = (product: { id: string; name: string; price: number; image: string }) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToFavorites = (product: { id: string; name: string; price: number; image: string }) => {
    setFavorites((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.filter((item) => item.id !== product.id);
      }
      toast({
        title: "Added to favorites",
        description: `${product.name} has been added to your favorites.`,
      });
      return [...prev, product];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

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
        <Navbar
          cartItems={cartItems}
          favorites={favorites}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveFromCart={handleRemoveFromCart}
          onRemoveFavorite={handleRemoveFavorite}
          onAddToCart={handleAddToCart}
          onAddToFavorites={handleAddToFavorites}
          onClearCart={handleClearCart}
        />
        <main>
          <HeroSection />
          <ProductsSection 
            onAddToCart={handleAddToCart}
            onAddToFavorites={handleAddToFavorites}
          />
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
