import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Heart, X, ShoppingBag } from "lucide-react";

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Array<{ id: string; name: string; price: number; image: string }>;
  onRemove: (id: string) => void;
  onAddToCart: (id: string) => void;
}

const FavoritesDrawer = ({ isOpen, onClose, favorites, onRemove, onAddToCart }: FavoritesDrawerProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-xl flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            My Favorites ({favorites.length})
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 flex-1 overflow-auto">
          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="h-12 w-12 mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">No favorites yet</p>
              <p className="text-sm text-muted-foreground mt-1">
                Save your favorite products here
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {favorites.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-xl bg-muted/50"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-primary font-semibold mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onAddToCart(item.id)}
                      >
                        <ShoppingBag className="h-4 w-4 mr-1" />
                        Add to Cart
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onRemove(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FavoritesDrawer;
