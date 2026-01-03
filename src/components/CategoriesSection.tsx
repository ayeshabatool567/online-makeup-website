import { ArrowUpRight } from "lucide-react";
import lipsImage from "@/assets/category-lips.jpg";
import eyesImage from "@/assets/category-eyes.jpg";
import faceImage from "@/assets/category-face.jpg";
import brushesImage from "@/assets/category-brushes.jpg";
import skincareImage from "@/assets/category-skincare.jpg";
import fragranceImage from "@/assets/category-fragrance.jpg";

const categories = [
  {
    name: "Lips",
    description: "Lipsticks, glosses & liners",
    image: lipsImage,
    products: 120,
  },
  {
    name: "Eyes",
    description: "Palettes, mascaras & more",
    image: eyesImage,
    products: 85,
  },
  {
    name: "Face",
    description: "Foundation, blush & contour",
    image: faceImage,
    products: 95,
  },
  {
    name: "Tools",
    description: "Brushes & accessories",
    image: brushesImage,
    products: 60,
  },
  {
    name: "Skincare",
    description: "Serums, creams & treatments",
    image: skincareImage,
    products: 75,
  },
  {
    name: "Fragrance",
    description: "Perfumes & body mists",
    image: fragranceImage,
    products: 45,
  },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Shop by Category
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold mt-3 mb-4">
            Explore Our Collections
          </h2>
          <p className="text-muted-foreground">
            Discover premium beauty products curated for your unique style and needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-background mb-1">
                      {category.name}
                    </h3>
                    <p className="text-background/80 text-sm">
                      {category.description}
                    </p>
                    <p className="text-background/60 text-xs mt-2">
                      {category.products} products
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-5 w-5 text-background group-hover:text-primary-foreground" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
