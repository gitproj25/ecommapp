export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating: number;
  reviews: number;
  image: string;
  color: string; // single color
};

export const products: Product[] = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 4.9,
    reviews: 1355,
    image: "/pic3.png",
    color: "white",
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.8,
    reviews: 455,
    image: "/pic2.png",
    color: "pink",
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    price: 120,
    oldPrice: 160,
    discount: "-25%",
    rating: 4.7,
    reviews: 568,
    image: "/pic1.png",
    color: "black",
  },
  {
    id: 4,
    name: "Skirt",
    price: 240,
    oldPrice: 260,
    discount: "-20%",
    rating: 4.6,
    reviews: 180,
    image: "/products/p1.png",
    color: "green",
  },
  {
    id: 5,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.6,
    reviews: 375,
    image: "/products/p2.png",
    color: "orange",
  },
  {
    id: 6,
    name: "shorts",
    price: 130,
    oldPrice: 160,
    discount: "-30%",
    rating: 4.5,
    reviews: 520,
    image: "/products/p3.png",
    color: "blue",
  },
  {
    id: 7,
    name: "Vertical Striped Shirt",
    price: 212,
    oldPrice: 232,
    discount: "-20%",
    rating: 4.4,
    reviews: 210,
    image: "/products/p1.png",
    color: "green",
  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.0,
    reviews: 105,
    image: "/products/p2.png",
    color: "orange",
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 4.3,
    reviews: 335,
    image: "/products/p3.png",
    color: "blue",
  },
  {
    id: 10,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 4.9,
    reviews: 1355,
    image: "/products/p1.png",
    color: "green",
  },
  {
    id: 11,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.8,
    reviews: 455,
    image: "/products/p2.png",
    color: "orange",
  },
  {
    id: 12,
    name: "Black Striped T-shirt",
    price: 120,
    oldPrice: 160,
    discount: "-25%",
    rating: 4.7,
    reviews: 568,
    image: "/products/p3.png",
    color: "blue",
  },
];
