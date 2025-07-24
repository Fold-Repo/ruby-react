import { ProductType } from "@/types";

export const products: ProductType[] = [
    {
        id: 1,
        title: "Double-button Trench Coat",
        category: "Clothing",
        brand: "EcoStyle",
        description: "Sustainable trench coat made with recycled materials",
        price: 89.99,
        oldPrice: 120.00,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        images: [
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { name: "Beige", hex: "#f5f5dc", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
            { name: "Black", hex: "#000000", image: "https://images.pexels.com/photos/4928993/pexels-photo-4928993.jpeg?auto=compress&cs=tinysrgb&w=800" },
            { name: "Navy", hex: "#000080", image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
        ],
        ratingAverage: 4.2,
        ratingTotal: 56
    },
    {
        id: 2,
        title: "Wireless Bluetooth Earbuds",
        category: "Electronics",
        brand: "SoundWave",
        description: "Noise-cancelling wireless earbuds with 24hr battery life",
        price: 79.99,
        oldPrice: 99.99,
        inStock: true,
        images: [
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        colors: [
            { name: "White", hex: "#ffffff", image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=800" },
            { name: "Black", hex: "#000000", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
            { name: "Blue", hex: "#2563eb", image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
        ],
        ratingAverage: 4.5,
        ratingTotal: 128
    },
    {
        id: 3,
        title: "Organic Cotton T-Shirt",
        category: "Clothing",
        brand: "PureWear",
        description: "100% organic cotton crew neck t-shirt",
        price: 24.99,
        inStock: true,
        sizes: ["XS", "S", "M", "L", "XL"],
        images: [
            "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { name: "White", hex: "#ffffff", image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=800" },
            { name: "Navy", hex: "#001f3f", image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
            { name: "Black", hex: "#000000", image: "https://images.pexels.com/photos/9558699/pexels-photo-9558699.jpeg?auto=compress&cs=tinysrgb&w=800" },
            { name: "Gray", hex: "#808080", image: "https://images.pexels.com/photos/9558604/pexels-photo-9558604.jpeg?auto=compress&cs=tinysrgb&w=800" }
        ],
        ratingAverage: 4.0,
        ratingTotal: 89
    },
    {
        id: 4,
        title: "Leather Crossbody Bag",
        category: "Accessories",
        brand: "UrbanLeather",
        description: "Genuine leather crossbody bag with multiple compartments",
        price: 65.50,
        oldPrice: 85.00,
        inStock: true,
        images: [
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        colors: [
            { name: "Brown", hex: "#964B00", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
            { name: "Black", hex: "#000000", image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800" },
            { name: "Tan", hex: "#d2b48c", image: "https://images.pexels.com/photos/16690455/pexels-photo-16690455.jpeg" }
        ],
        ratingAverage: 4.7,
        ratingTotal: 203
    },
    {
        id: 5,
        title: "Smart Fitness Watch",
        category: "Electronics",
        brand: "FitTech",
        description: "Waterproof fitness tracker with heart rate monitor",
        price: 129.99,
        inStock: false,
        images: [
            "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { name: "Black", hex: "#000000", image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800" },
            { name: "Rose Gold", hex: "#b76e79", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
        ],
        ratingAverage: 4.3,
        ratingTotal: 312
    },
    {
        id: 6,
        title: "Memory Foam Slippers",
        category: "Footwear",
        brand: "ComfySteps",
        description: "Ultra-soft memory foam house slippers",
        price: 29.95,
        inStock: true,
        sizes: ["S", "M", "L"],
        images: [
            "https://images.pexels.com/photos/40737/sandals-flip-flops-footwear-beach-40737.jpeg",
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { name: "Gray", hex: "#808080", image: "https://images.pexels.com/photos/17033082/pexels-photo-17033082.jpeg?auto=compress&cs=tinysrgb&w=800" },
            { name: "Blue", hex: "#0000ff", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
            { name: "Pink", hex: "#ffc0cb", image: "https://images.pexels.com/photos/6214478/pexels-photo-6214478.jpeg?auto=compress&cs=tinysrgb&w=800" }
        ],
        ratingAverage: 4.1,
        ratingTotal: 47
    },
    {
        id: 7,
        title: "Ceramic Coffee Mug Set",
        category: "Home",
        brand: "MorningBrew",
        description: "Set of 4 ceramic mugs with ergonomic handles",
        price: 32.00,
        oldPrice: 39.99,
        inStock: true,
        images: [
            "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        colors: [
            { name: "White", hex: "#ffffff", image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
            { name: "Black", hex: "#000000", image: "https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=800" }
        ],
        ratingAverage: 4.6,
        ratingTotal: 178
    },
    {
        id: 8,
        title: "Yoga Mat",
        category: "Fitness",
        brand: "ZenActive",
        description: "Non-slip yoga mat with carrying strap",
        price: 45.00,
        inStock: true,
        images: [
            "https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { name: "Purple", hex: "#800080", image: "https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=800" },
            { name: "Teal", hex: "#008080", image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
            { name: "Pink", hex: "#ff69b4", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
        ],
        ratingAverage: 4.4,
        ratingTotal: 92
    },
    {
        id: 9,
        title: "Wireless Charging Pad",
        category: "Electronics",
        brand: "PowerUp",
        description: "Qi-certified fast wireless charger",
        price: 34.99,
        inStock: false,
        images: [
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        colors: [
            { name: "White", hex: "#ffffff", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
            { name: "Black", hex: "#000000", image: "https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&w=800" }
        ],
        ratingAverage: 3.9,
        ratingTotal: 64
    },
    {
        id: 10,
        title: "Stainless Steel Water Bottle",
        category: "Outdoor",
        brand: "HydroFlask",
        description: "Insulated 32oz stainless steel bottle",
        price: 39.95,
        oldPrice: 49.95,
        inStock: true,
        images: [
            "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { name: "Silver", hex: "#c0c0c0", image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800" },
            { name: "Blue", hex: "#0000ff", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
            { name: "Green", hex: "#008000", image: "https://images.pexels.com/photos/7879823/pexels-photo-7879823.jpeg?auto=format&fit=crop&w=800&q=80" },
            { name: "Black", hex: "#000000", image: "https://images.pexels.com/photos/7879841/pexels-photo-7879841.jpeg?auto=format&fit=crop&w=800&q=80" }
        ],
        ratingAverage: 4.8,
        ratingTotal: 256
    },
    {
        id: 11,
        title: "Denim Jacket",
        category: "Clothing",
        brand: "DenimCraft",
        description: "Classic denim jacket with modern fit",
        price: 59.99,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        images: [
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        colors: [
            { name: "Light Blue", hex: "#add8e6", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
            { name: "Black", hex: "#000000", image: "https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=800" },
            { name: "White", hex: "#ffffff", image: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
        ],
        ratingAverage: 4.3,
        ratingTotal: 187
    },
    {
        id: 12,
        title: "Air Purifier",
        category: "Home",
        brand: "PureAir",
        description: "HEPA filter air purifier for medium rooms",
        price: 149.99,
        oldPrice: 179.99,
        inStock: true,
        images: [
            "https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { name: "White", hex: "#ffffff", image: "https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=800" },
            { name: "Black", hex: "#000000", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
        ],
        ratingAverage: 4.7,
        ratingTotal: 342
    },
    {
        id: 13,
        title: "Classic Leather Wallet",
        category: "Accessories",
        brand: "LeatherCraft",
        description: "Genuine leather bifold wallet with multiple card slots",
        price: 45.99,
        oldPrice: 59.99,
        inStock: true,
        images: [
            "/img/product/1.png",
            "/img/product/3.jpg"
        ],
        colors: [
            { name: "Brown", hex: "#964B00", image: "/img/product/1.png" },
            { name: "Black", hex: "#000000", image: "/img/product/4.jpg" }
        ],
        ratingAverage: 4.5,
        ratingTotal: 112
    },
    {
        id: 14,
        title: "Wireless Gaming Headset",
        category: "Electronics",
        brand: "GameZone",
        description: "Surround sound wireless headset with noise cancellation",
        price: 129.99,
        inStock: true,
        images: [
            "/img/product/8.png",
            "/img/product/9.png"
        ],
        colors: [
            { name: "Black", hex: "#000000", image: "/img/product/14.jpg" },
            { name: "Blue", hex: "#2563eb", image: "/img/product/9.png" },
            { name: "Red", hex: "#dc2626", image: "/img/product/8.png" }
        ],
        ratingAverage: 4.6,
        ratingTotal: 287
    },
    {
        id: 15,
        title: "Knit Sweater",
        category: "Clothing",
        brand: "CozyWear",
        description: "Warm knit sweater for cold seasons",
        price: 49.95,
        oldPrice: 69.95,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        images: [
            "/img/product/19.jpg",
            "/img/product/20.png"
        ],
        colors: [
            { name: "Cream", hex: "#FFFDD0", image: "/img/product/21.png" },
            { name: "Gray", hex: "#808080", image: "/img/product/19.jpg" },
            { name: "Navy", hex: "#000080", image: "/img/product/20.png" }
        ],
        ratingAverage: 4.2,
        ratingTotal: 94
    },
    {
        id: 16,
        title: "Vintage Bag",
        category: "Accessories",
        brand: "TechEssentials",
        description: "Adjustable smartphone stand for desk use",
        price: 19.99,
        inStock: false,
        images: [
            "/img/product/10.jpg",
            "/img/product/11.jpg"
        ],
        colors: [
            { name: "Black", hex: "#C9C38D", image: "/img/product/11.jpg" },
        ],
        ratingAverage: 3.9,
        ratingTotal: 56
    },
    {
        id: 18,
        title: "Canvas Backpack",
        category: "Accessories",
        brand: "UrbanGear",
        description: "Durable canvas backpack with laptop compartment",
        price: 54.50,
        inStock: true,
        images: [
            "/img/product/12.jpg",
            "/img/product/13.jpg"
        ],
        colors: [
            { name: "Khaki", hex: "#F0E68C", image: "/img/product/18.png" },
            { name: "Black", hex: "#000000", image: "/img/product/13.jpg" },
        ],
        ratingAverage: 4.4,
        ratingTotal: 178
    },
    {
        id: 19,
        title: "Blender Bottle",
        category: "Fitness",
        brand: "MixIt",
        description: "Leak-proof shaker bottle for protein shakes",
        price: 14.99,
        inStock: true,
        images: [
            "/img/product/5.jpg",
            "/img/product/6.jpg"
        ],
        colors: [
            { name: "Blue", hex: "#2563eb", image: "/img/product/5.jpg" },
            { name: "Black", hex: "#000000", image: "/img/product/6.jpg" },
            { name: "Purple", hex: "#9333ea", image: "/img/product/7.jpg" }
        ],
        ratingAverage: 4.3,
        ratingTotal: 203
    }
];