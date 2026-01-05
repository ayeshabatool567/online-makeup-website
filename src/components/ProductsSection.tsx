import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";

interface ProductsSectionProps {
  onAddToCart?: (product: { id: string; name: string; price: number; image: string }) => void;
  onAddToFavorites?: (product: { id: string; name: string; price: number; image: string }) => void;
}

const ProductsSection = ({ onAddToCart, onAddToFavorites }: ProductsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts = activeCategory === "All Products"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground">
            Our Products
          </h2>
          <p className="text-muted-foreground mt-4">
            Premium beauty products for every need
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={() => onAddToFavorites?.(product)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-semibold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onAddToCart?.(product)}
                  >
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
