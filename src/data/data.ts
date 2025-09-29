export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating: number;
  reviews: number;
  image: string;
  thumbnails: string[];
  color: string[];
  size: string[];
  description: string; // ✅ added
};

export const products: Product[] = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    category: "T-shirts",
    price: 145,
    oldPrice: 182, // 20% higher
    rating: 4.9,
    reviews: 1355,
    image: "/pic3.png",
    thumbnails: ["/pic3.png", "/pic3.png", "/pic3.png"],
    color: ["gray", "blue"],
    size: ["Small", "Medium", "Large"],
    description: "A stylish gradient T-shirt made from soft, breathable cotton for ultimate comfort."
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    category: "shirt",
    price: 180,
    oldPrice: 225, // 20% higher
    rating: 4.8,
    reviews: 455,
    image: "/pic2.png",
    thumbnails: ["/pic2.png", "/pic2.png","/pic2.png"],
    color: ["pink"],
    size: ["Medium", "Large", "X-Large"],
    description: "Classic polo shirt with subtle tipping details. Perfect for casual and semi-formal wear."
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    category: "T-shirts",
    price: 120,
    oldPrice: 160,
    discount: "-25%",
    rating: 4.7,
    reviews: 568,
    image: "/pic1.png",
    thumbnails: ["/pic1.png", "/pic1.png", "/pic1.png"],
    color: ["black"],
    size: ["X-Small", "Small", "Medium"],
    description: "Black striped T-shirt that combines casual style with comfort for everyday wear."
  },
  {
    id: 4,
    name: "Skirt",
    category: "Jeans",
    price: 240,
    oldPrice: 260,
    discount: "-20%",
    rating: 4.6,
    reviews: 180,
    image: "/products/p1.png",
    thumbnails: ["/products/p1.png", "/products/p1.png","/products/p1.png"],
    color: ["green", "blue"],
    size: ["Small", "Medium", "Large", "X-Large"],
    description: "Elegant skirt with comfortable fit, ideal for casual outings or office wear."
  },
  {
    id: 5,
    name: "Checkered Shirt",
    category: "Shirts",
    price: 180,
    oldPrice: 225,
    rating: 4.6,
    reviews: 375,
    image: "/products/p2.png",
    thumbnails: ["/products/p2.png", "/products/p2.png","/products/p2.png"],
    color: ["orange", "red"],
    size: ["Large", "X-Large", "XX-Large"],
    description: "Classic checkered shirt made with high-quality fabric for a stylish, comfortable fit."
  },
  {
    id: 6,
    name: "Shorts",
    category: "Shorts",
    price: 130,
    oldPrice: 160,
    discount: "-30%",
    rating: 4.5,
    reviews: 520,
    image: "/products/p3.png",
    thumbnails: ["/products/p3.png", "/products/p3.png","/products/p3.png"],
    color: ["blue"],
    size: ["Small", "Medium", "Large"],
    description: "Casual shorts perfect for summer wear, offering comfort and style in one."
  },
  {
    id: 7,
    name: "Vertical Striped Shirt",
    category: "Shirts",
    price: 212,
    oldPrice: 265,
    discount: "-20%",
    rating: 4.4,
    reviews: 210,
    image: "/products/p1.png",
    thumbnails: ["/products/p1.png", "/products/p1.png","/products/p1.png"],
    color: ["green"],
    size: ["Medium", "Large", "X-Large"],
    description: "Vertical striped shirt designed for a sleek look, suitable for casual and semi-formal events."
  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    category: "T-shirts",
    price: 145,
    oldPrice: 182,
    rating: 4.0,
    reviews: 105,
    image: "/products/p2.png",
    thumbnails: ["/products/p2.png", "/products/p2.png","/products/p2.png"],
    color: ["orange", "yellow"],
    size: ["X-Small", "Small", "Medium"],
    description: "Courage graphic T-shirt with eye-catching design and a soft, comfortable feel."
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    category: "Shorts",
    price: 80,
    oldPrice: 100,
    rating: 4.3,
    reviews: 335,
    image: "/products/p3.png",
    thumbnails: ["/products/p3.png", "/products/p3.png","/products/p3.png"],
    color: ["blue"],
    size: ["Medium", "Large", "X-Large"],
    description: "Loose fit Bermuda shorts ideal for relaxed summer outings and sports activities."
  },
  {
    id: 10,
    name: "Gradient Graphic T-shirt",
    category: "T-shirts",
    price: 145,
    oldPrice: 182,
    rating: 4.9,
    reviews: 1355,
    image: "/products/p1.png",
    thumbnails: ["/products/p1.png", "/products/p1.png","/products/p1.png"],
    color: ["green"],
    size: ["Small", "Medium", "Large"],
    description: "Trendy gradient graphic T-shirt designed for everyday style and comfort."
  },
  {
    id: 11,
    name: "Polo with Tipping Details",
    category: "Shirts",
    price: 180,
    oldPrice: 225,
    rating: 4.8,
    reviews: 455,
    image: "/products/p2.png",
    thumbnails: ["/products/p2.png", "/products/p2.png","/products/p2.png"],
    color: ["orange"],
    size: ["Large", "X-Large", "XX-Large"],
    description: "Premium polo shirt with tipping details for a refined, casual look."
  },
  {
    id: 12,
    name: "Black Striped T-shirt",
    category: "T-shirts",
    price: 120,
    oldPrice: 160,
    discount: "-25%",
    rating: 4.7,
    reviews: 568,
    image: "/products/p3.png",
    thumbnails: ["/products/p3.png", "/products/p3.png", "/products/p3.png"],
    color: [ "black"],
    size: ["Small", "Medium", "Large", "X-Large"],
    description: "Black striped T-shirt with comfortable fit, perfect for casual wear."
  },
  {
    id: 13,
    name: "Black Pant",
    category: "pant",
    price: 120,
    oldPrice: 160,
    discount: "-25%",
    rating: 4.7,
    reviews: 568,
    image: "/dress8.png",
    thumbnails: ["/dress8.png", "/dress8.png", "/dress8.png"],
    color: [ "black"],
    size: ["Small", "Medium", "Large", "X-Large"],
    description: "Black striped pant with comfortable fit, perfect for casual wear."
  },
  {
    id: 14,
    name: "Black Pant",
    category: "pant",
    price: 160,
    oldPrice: 200,
    discount: "-20%",
    rating: 4.7,
    reviews: 568,
    image: "/dress8.png",
    thumbnails: ["/dress8.png", "/dress8.png", "/dress8.png"],
    color: [ "black"],
    size: ["Small", "Medium", "Large", "X-Large"],
    description: "Black striped pant with comfortable fit, perfect for casual wear."
  },
  {
    id: 15,
    name: "Pink Tshirt",
    category: "shirt",
    price: 140,
    oldPrice: 205, // 20% higher
    rating: 4.8,
    reviews: 455,
    image: "/pic2.png",
    thumbnails: ["/pic2.png", "/pic2.png","/pic2.png"],
    color: ["pink"],
    size: ["Medium", "Large", "X-Large"],
    description: "Classic polo shirt with subtle tipping details. Perfect for casual and semi-formal wear."
  },
];

