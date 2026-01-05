import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, ShoppingBag, Heart } from "lucide-react";
import { products, Product } from "@/data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (product: Product) => void;
  onAddToFavorites?: (product: Product) => void;
}

const popularSearches = ["Lipstick", "Foundation", "Serum", "Moisturizer", "Eyeshadow"];

const SearchModal = ({ isOpen, onClose, onAddToCart, onAddToFavorites }: SearchModalProps) => {
  const [query, setQuery] = useState("");

  const filteredProducts = query.trim()
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleAddToCart = (product: Product) => {
    onAddToCart?.(product);
  };

  const handleAddToFavorites = (product: Product) => {
    onAddToFavorites?.(product);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Search Products</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-10 h-12"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Search Results */}
        {query.trim() && (
          <div className="flex-1 overflow-y-auto mt-4">
            {filteredProducts.length > 0 ? (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {filteredProducts.length} result{filteredProducts.length !== 1 ? "s" : ""} found
                </p>
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                      <p className="text-sm font-semibold text-primary">${product.price.toFixed(2)}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-9 w-9"
                        onClick={() => handleAddToFavorites(product)}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="default"
                        className="h-9 w-9"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No products found for "{query}"</p>
              </div>
            )}
          </div>
        )}

        {/* Popular Searches - Only show when no query */}
        {!query.trim() && (
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-3">Popular Searches</p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-4 py-2 text-sm bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
