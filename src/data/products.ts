import productLipstick1 from "@/assets/product-lipstick-1.jpg";
import productLipgloss from "@/assets/product-lipgloss.jpg";
import productEyeshadow from "@/assets/product-eyeshadow.jpg";
import productLipstickSet from "@/assets/product-lipstick-set.jpg";
import productFoundation from "@/assets/product-foundation.jpg";
import productSerum from "@/assets/product-serum.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Rose Matte Lipstick",
    category: "Lipsticks",
    price: 24.99,
    image: productLipstick1,
  },
  {
    id: "2",
    name: "Rose Gold Gloss",
    category: "Lipsticks",
    price: 18.99,
    image: productLipgloss,
  },
  {
    id: "3",
    name: "Coral Crush Palette",
    category: "Eyeshadows",
    price: 45.99,
    image: productEyeshadow,
  },
  {
    id: "4",
    name: "Berry Bliss Collection",
    category: "Lipsticks",
    price: 32.99,
    image: productLipstickSet,
  },
  {
    id: "5",
    name: "Glow Foundation",
    category: "Foundations",
    price: 38.99,
    image: productFoundation,
  },
  {
    id: "6",
    name: "Hydra Serum",
    category: "Skincare",
    price: 55.99,
    image: productSerum,
  },
];

export const categories = ["All Products", "Lipsticks", "Foundations", "Eyeshadows", "Skincare"];
