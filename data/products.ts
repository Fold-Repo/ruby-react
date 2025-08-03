import type { ProductType } from "@/types"
import { DiscountType } from "@/types/product"

export const products: ProductType[] = [
    {
        id: 1,
        title: "Double-button Trench Coat",
        category: "Clothing",
        brand: "EcoStyle",
        description:
            "Sustainable Elegance Double-Button Trench Coat: Step into timeless sophistication with our eco-conscious trench coat, masterfully crafted from premium recycled materials. This classic double-button design features a tailored silhouette that flatters every figure, complete with a removable belt for versatile styling. The water-resistant finish and breathable lining make it perfect for transitional weather, while the sustainable construction reflects your commitment to environmental responsibility. Available in sophisticated neutral tones, this investment piece seamlessly transitions from business meetings to weekend adventures. Key Features: Made from 100% recycled materials, Classic double-button closure, Water-resistant coating, Removable belt for custom fit, Breathable organic cotton lining, Timeless design that never goes out of style.",
        price: 89.99,
        oldPrice: 120.0,
        inStock: true,
        stock: 45,
        sku: "ECO-TC-001",
        tags: ["sustainable", "trench coat", "eco-friendly", "classic", "outerwear"],
        deliveryEstimate: "3-5 business days",
        sizes: ["S", "M", "L", "XL"],
        images: [
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "Black",
                hex: "#000000",
                image:
                    "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Navy",
                hex: "#000080",
                image:
                    "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 4.2,
        ratingTotal: 56,
        vendor: {
            id: "eco-style-001",
            name: "EcoStyle Sustainable Fashion",
        },
        shipping: {
            freeShipping: true,
            weight: "1.2 lbs",
            dimensions: "12 x 8 x 2 inches",
        },
        ratingsBreakdown: {
            5: 28,
            4: 15,
            3: 8,
            2: 3,
            1: 2,
        },
        reviews: [
            {
                id: "rev-001",
                user: { name: "Sarah M." },
                rating: 5,
                comment:
                    "Absolutely love this trench coat! The quality is exceptional and I feel great knowing it's made from recycled materials.",
                createdAt: "2024-01-15",
            },
            {
                id: "rev-002",
                user: { name: "Emma K." },
                rating: 4,
                comment: "Beautiful coat, fits perfectly. The beige color is exactly as shown in the photos.",
                createdAt: "2024-01-10",
            },
        ],
    },
    {
        id: 2,
        title: "Wireless Bluetooth Earbuds",
        category: "Electronics",
        brand: "SoundWave",
        description:
            "Premium Wireless Bluetooth Earbuds: Experience audio excellence with our cutting-edge noise-cancelling earbuds, engineered for the modern lifestyle. Featuring advanced Bluetooth 5.3 technology and premium drivers, these earbuds deliver crystal-clear sound with deep bass and crisp highs. The intelligent noise-cancellation technology blocks out distractions, while the 24-hour battery life ensures your music never stops. With IPX7 water resistance and ergonomic design, they're perfect for workouts, commutes, and everything in between. Key Features: Active noise cancellation technology, 24-hour total battery life, IPX7 water resistance, Touch controls with voice assistant, Premium sound quality with deep bass, Comfortable secure fit for all-day wear.",
        price: 79.99,
        oldPrice: 99.99,
        inStock: true,
        stock: 128,
        sku: "SW-WBE-002",
        tags: ["wireless", "bluetooth", "earbuds", "noise-cancelling", "waterproof"],
        deliveryEstimate: "1-2 business days",
        images: [
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "White",
                hex: "#ffffff",
                image:
                    "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Blue",
                hex: "#2563eb",
                image:
                    "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 4.5,
        ratingTotal: 128,
        vendor: {
            id: "soundwave-001",
            name: "SoundWave Audio Technologies",
        },
        shipping: {
            freeShipping: true,
            weight: "0.3 lbs",
            dimensions: "4 x 3 x 2 inches",
        },
        ratingsBreakdown: {
            5: 72,
            4: 35,
            3: 15,
            2: 4,
            1: 2,
        },
        reviews: [
            {
                id: "rev-003",
                user: { name: "Mike R." },
                rating: 5,
                comment: "Amazing sound quality! The noise cancellation works perfectly during my commute.",
                createdAt: "2024-01-20",
            },
            {
                id: "rev-004",
                user: { name: "Lisa T." },
                rating: 4,
                comment: "Great battery life and comfortable fit. Highly recommend for workouts.",
                createdAt: "2024-01-18",
            },
        ],
    },
    {
        id: 3,
        title: "Organic Cotton T-Shirt",
        category: "Clothing",
        brand: "PureWear",
        description:
            "Pure Comfort Organic Cotton T-Shirt: Discover the perfect blend of comfort, style, and sustainability...",
        price: 100.99,
        oldPrice: 300.99,
        inStock: true,
        stock: 89,
        sku: "PW-OCT-003",
        tags: ["organic", "cotton", "t-shirt", "sustainable", "basic"],
        deliveryEstimate: "2-4 business days",
        sizes: ["XS", "S", "M", "L", "XL"],
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "White",
                hex: "#ffffff",
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Navy",
                hex: "#001f3f",
                image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Black",
                hex: "#000000",
                image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Gray",
                hex: "#808080",
                image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 4.0,
        ratingTotal: 89,
        vendor: {
            id: "purewear-001",
            name: "PureWear Organic Clothing",
        },
        shipping: {
            freeShipping: false,
            weight: "0.4 lbs",
            dimensions: "10 x 8 x 1 inches",
        },
        ratingsBreakdown: {
            5: 35,
            4: 28,
            3: 18,
            2: 6,
            1: 2,
        },
        reviews: [
            {
                id: "rev-005",
                user: { name: "Alex P." },
                rating: 4,
                comment: "Super soft and comfortable. The organic cotton feels amazing against the skin.",
                createdAt: "2024-01-22",
            },
        ],
        materials: [
            {
                name: "Organic Cotton",
                price: 0,
                image: "/img/material/1.jpg",
            },
            {
                name: "Bamboo Blend",
                price: 5.00,
                image: "/img/material/2.jpg",
            },
            {
                name: "Recycled Polyester",
                price: 3.50,
                image: "/img/material/3.jpg",
            },
        ],
    },
    {
        id: 4,
        title: "Leather Crossbody Bag",
        category: "Accessories",
        brand: "UrbanLeather",
        description:
            "Artisan Leather Crossbody Bag: Elevate your everyday style with our handcrafted genuine leather crossbody bag, where timeless elegance meets modern functionality. Each bag is meticulously crafted from premium full-grain leather that develops a beautiful patina over time, making every piece uniquely yours. Featuring multiple organized compartments, an adjustable strap, and secure magnetic closure, this versatile bag seamlessly transitions from day to night. The compact yet spacious design accommodates all your essentials while maintaining a sleek silhouette. Key Features: Genuine full-grain leather construction, Multiple compartments for organization, Adjustable crossbody strap, Secure magnetic closure, Develops beautiful patina with age, Handcrafted with attention to detail.",
        price: 65.5,
        oldPrice: 85.0,
        inStock: true,
        stock: 203,
        sku: "UL-LCB-004",
        tags: ["leather", "crossbody", "bag", "handcrafted", "accessories"],
        deliveryEstimate: "3-5 business days",
        images: [
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "Brown",
                hex: "#964B00",
                image:
                    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Black",
                hex: "#000000",
                image:
                    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Tan",
                hex: "#d2b48c",
                image:
                    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 4.7,
        ratingTotal: 203,
        vendor: {
            id: "urbanleather-001",
            name: "UrbanLeather Artisan Goods",
        },
        shipping: {
            freeShipping: true,
            weight: "1.1 lbs",
            dimensions: "9 x 7 x 3 inches",
        },
        ratingsBreakdown: {
            5: 142,
            4: 41,
            3: 15,
            2: 3,
            1: 2,
        },
        reviews: [
            {
                id: "rev-006",
                user: { name: "Jennifer L." },
                rating: 5,
                comment: "Beautiful craftsmanship! The leather quality is exceptional and it's the perfect size for daily use.",
                createdAt: "2024-01-25",
            },
        ],
    },
    {
        id: 5,
        title: "Smart Fitness Watch",
        category: "Electronics",
        brand: "FitTech",
        description:
            "Advanced Smart Fitness Watch: Transform your fitness journey with our cutting-edge smartwatch, designed for the active lifestyle. This comprehensive health companion features advanced biometric monitoring, including continuous heart rate tracking, sleep analysis, and stress management tools. With built-in GPS, 50+ workout modes, and 7-day battery life, it's your perfect training partner. The crystal-clear AMOLED display and premium materials ensure durability and style, while smart notifications keep you connected without distraction. Key Features: Continuous heart rate & sleep monitoring, Built-in GPS with route tracking, 50+ sport modes and workout tracking, 7-day battery life, Water-resistant up to 50 meters, Smart notifications and music control.",
        price: 129.99,
        inStock: false,
        stock: 0,
        sku: "FT-SFW-005",
        tags: ["smartwatch", "fitness", "GPS", "heart rate", "waterproof"],
        deliveryEstimate: "Back in stock in 2-3 weeks",
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "Black",
                hex: "#000000",
                image:
                    "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Rose Gold",
                hex: "#b76e79",
                image:
                    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 4.3,
        ratingTotal: 312,
        vendor: {
            id: "fittech-001",
            name: "FitTech Wearables",
        },
        shipping: {
            freeShipping: true,
            weight: "0.5 lbs",
            dimensions: "5 x 4 x 2 inches",
        },
        ratingsBreakdown: {
            5: 134,
            4: 98,
            3: 56,
            2: 18,
            1: 6,
        },
        reviews: [
            {
                id: "rev-007",
                user: { name: "David K." },
                rating: 4,
                comment: "Great fitness tracking features. Battery life is impressive and the GPS is very accurate.",
                createdAt: "2024-01-12",
            },
        ],
    },
    {
        id: 6,
        title: "Memory Foam Slippers",
        category: "Footwear",
        brand: "ComfySteps",
        description:
            "Luxury Memory Foam House Slippers: Step into cloud-like comfort with our premium memory foam slippers, designed to pamper your feet after long days. Featuring high-density memory foam that molds to your foot's unique shape, these slippers provide personalized support and pressure relief. The breathable knit upper and moisture-wicking lining keep feet comfortable, while the durable rubber sole offers versatility for indoor and light outdoor use. Perfect for relaxation, recovery, or simply treating your feet to the comfort they deserve. Key Features: High-density memory foam cushioning, Breathable knit upper material, Moisture-wicking interior lining, Non-slip rubber sole, Machine washable for easy care, Available in multiple comfort sizes.",
        price: 29.95,
        inStock: true,
        stock: 47,
        sku: "CS-MFS-006",
        tags: ["slippers", "memory foam", "comfort", "house shoes", "cozy"],
        deliveryEstimate: "2-4 business days",
        sizes: ["S", "M", "L"],
        images: [
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "Gray",
                hex: "#808080",
                image:
                    "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Blue",
                hex: "#0000ff",
                image:
                    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Pink",
                hex: "#ffc0cb",
                image:
                    "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 4.1,
        ratingTotal: 47,
        vendor: {
            id: "comfysteps-001",
            name: "ComfySteps Footwear",
        },
        shipping: {
            freeShipping: false,
            weight: "0.8 lbs",
            dimensions: "11 x 6 x 4 inches",
        },
        ratingsBreakdown: {
            5: 19,
            4: 15,
            3: 8,
            2: 3,
            1: 2,
        },
        reviews: [
            {
                id: "rev-008",
                user: { name: "Maria S." },
                rating: 5,
                comment: "So comfortable! Like walking on clouds. Perfect for around the house.",
                createdAt: "2024-01-28",
            },
        ],
    },
    {
        id: 7,
        title: "Ceramic Coffee Mug Set",
        category: "Home",
        brand: "MorningBrew",
        description:
            "Artisan Ceramic Coffee Mug Set: Start every morning with style using our handcrafted ceramic mug collection, designed for the true coffee connoisseur. This elegant 4-piece set features premium ceramic construction with a smooth, non-porous glaze that won't absorb flavors or odors. Each mug boasts an ergonomic handle for comfortable grip and perfect weight balance for an elevated drinking experience. The classic design complements any kitchen décor, while the generous 12oz capacity is ideal for your favorite morning brew, afternoon tea, or evening cocoa. Key Features: Set of 4 premium ceramic mugs, Ergonomic handles for comfortable grip, 12oz capacity perfect for any beverage, Dishwasher and microwave safe, Non-porous glaze prevents staining, Timeless design complements any kitchen.",
        price: 32.0,
        oldPrice: 39.99,
        inStock: true,
        stock: 178,
        sku: "MB-CCM-007",
        tags: ["ceramic", "coffee mugs", "kitchen", "set", "dishwasher safe"],
        deliveryEstimate: "3-5 business days",
        images: [
            "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "White",
                hex: "#ffffff",
                image:
                    "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Black",
                hex: "#000000",
                image:
                    "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 4.6,
        ratingTotal: 178,
        vendor: {
            id: "morningbrew-001",
            name: "MorningBrew Home Collection",
        },
        shipping: {
            freeShipping: true,
            weight: "2.5 lbs",
            dimensions: "10 x 8 x 6 inches",
        },
        ratingsBreakdown: {
            5: 102,
            4: 48,
            3: 20,
            2: 6,
            1: 2,
        },
        reviews: [
            {
                id: "rev-009",
                user: { name: "Robert M." },
                rating: 5,
                comment: "Perfect weight and size. The ceramic quality is excellent and they look great in my kitchen.",
                createdAt: "2024-01-30",
            },
        ],
    },
    {
        id: 8,
        title: "Yoga Mat",
        category: "Fitness",
        brand: "ZenActive",
        description:
            "Premium Non-Slip Yoga Mat: Elevate your practice with our professional-grade yoga mat, engineered for stability, comfort, and durability. Crafted from eco-friendly TPE material, this mat provides exceptional grip and cushioning while being completely free from harmful chemicals. The 6mm thickness offers optimal joint protection without compromising stability, while the textured surface ensures superior traction in any pose. Complete with alignment guides and a convenient carrying strap, it's perfect for home practice, studio sessions, or outdoor yoga adventures. Key Features: Eco-friendly TPE material construction, Superior non-slip textured surface, 6mm thickness for joint protection, Alignment guides for proper positioning, Includes carrying strap for portability, Easy to clean and maintain.",
        price: 45.0,
        inStock: true,
        stock: 92,
        sku: "ZA-YM-008",
        tags: ["yoga", "mat", "fitness", "non-slip", "eco-friendly"],
        deliveryEstimate: "2-4 business days",
        images: [
            "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "Purple",
                hex: "#800080",
                image:
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Teal",
                hex: "#008080",
                image:
                    "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Pink",
                hex: "#ff69b4",
                image:
                    "https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 4.4,
        ratingTotal: 92,
        vendor: {
            id: "zenactive-001",
            name: "ZenActive Wellness",
        },
        shipping: {
            freeShipping: true,
            weight: "2.2 lbs",
            dimensions: "26 x 6 x 6 inches",
        },
        ratingsBreakdown: {
            5: 48,
            4: 28,
            3: 12,
            2: 3,
            1: 1,
        },
        reviews: [
            {
                id: "rev-010",
                user: { name: "Yoga_Sarah" },
                rating: 5,
                comment: "Excellent grip and cushioning. The alignment guides are really helpful for my practice.",
                createdAt: "2024-02-01",
            },
        ],
    },
    {
        id: 9,
        title: "Wireless Charging Pad",
        category: "Electronics",
        brand: "PowerUp",
        description:
            "Fast Wireless Charging Pad: Experience the future of charging with our Qi-certified fast wireless charger, designed for seamless power delivery to all compatible devices. Featuring advanced temperature control and foreign object detection, this sleek charging pad ensures safe, efficient charging every time. The ultra-slim profile and premium materials complement any workspace or bedside table, while LED indicators provide clear charging status. Compatible with all Qi-enabled devices and optimized for fast charging speeds up to 15W. Key Features: Qi-certified for universal compatibility, Fast charging up to 15W output, Advanced safety features and temperature control, Ultra-slim premium design, LED charging status indicators, Works through most phone cases.",
        price: 34.99,
        inStock: false,
        stock: 0,
        sku: "PU-WCP-009",
        tags: ["wireless charging", "Qi certified", "fast charging", "electronics"],
        deliveryEstimate: "Back in stock in 1-2 weeks",
        images: [
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "White",
                hex: "#ffffff",
                image:
                    "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 3.9,
        ratingTotal: 64,
        vendor: {
            id: "powerup-001",
            name: "PowerUp Technologies",
        },
        shipping: {
            freeShipping: false,
            weight: "0.6 lbs",
            dimensions: "6 x 6 x 1 inches",
        },
        ratingsBreakdown: {
            5: 25,
            4: 18,
            3: 12,
            2: 6,
            1: 3,
        },
        reviews: [
            {
                id: "rev-011",
                user: { name: "Tech_Mike" },
                rating: 4,
                comment: "Works well with my phone. Charging speed is good and the design is sleek.",
                createdAt: "2024-01-14",
            },
        ],
    },
    {
        id: 10,
        title: "Stainless Steel Water Bottle",
        category: "Outdoor",
        brand: "HydroFlask",
        description:
            "Premium Insulated Stainless Steel Water Bottle: Stay perfectly hydrated with our professional-grade 32oz water bottle, engineered with double-wall vacuum insulation technology. This premium bottle keeps beverages cold for up to 24 hours and hot for up to 12 hours, making it ideal for any adventure or daily routine. Crafted from food-grade 18/8 stainless steel with a durable powder-coated finish, it's built to withstand the demands of active lifestyles. The wide mouth design accommodates ice cubes and makes cleaning effortless, while the leak-proof cap ensures worry-free transport. Key Features: Double-wall vacuum insulation technology, 32oz capacity perfect for all-day hydration, Food-grade 18/8 stainless steel construction, Keeps drinks cold 24hrs, hot 12hrs, Wide mouth for easy filling and cleaning, Leak-proof cap with comfortable carry handle.",
        price: 39.95,
        oldPrice: 49.95,
        inStock: true,
        stock: 256,
        sku: "HF-SSW-010",
        tags: ["water bottle", "insulated", "stainless steel", "outdoor", "hydration"],
        deliveryEstimate: "1-3 business days",
        images: [
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "Silver",
                hex: "#c0c0c0",
                image:
                    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Blue",
                hex: "#0000ff",
                image:
                    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Green",
                hex: "#008000",
                image:
                    "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Black",
                hex: "#000000",
                image:
                    "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 4.8,
        ratingTotal: 256,
        vendor: {
            id: "hydroflask-001",
            name: "HydroFlask Outdoor Gear",
        },
        shipping: {
            freeShipping: true,
            weight: "1.3 lbs",
            dimensions: "10 x 4 x 4 inches",
        },
        ratingsBreakdown: {
            5: 205,
            4: 35,
            3: 12,
            2: 3,
            1: 1,
        },
        reviews: [
            {
                id: "rev-012",
                user: { name: "Adventure_Amy" },
                rating: 5,
                comment: "Best water bottle I've ever owned! Keeps my water ice cold all day even in summer heat.",
                createdAt: "2024-02-03",
            },
        ],
    },
    {
        id: 11,
        title: "Denim Jacket",
        category: "Clothing",
        brand: "DenimCraft",
        description:
            "Classic Modern Fit Denim Jacket: Embrace timeless style with our expertly crafted denim jacket, where classic design meets contemporary comfort. Made from premium cotton denim with just the right amount of stretch, this jacket offers a flattering modern fit that moves with you. The traditional button-front closure, chest pockets, and adjustable side tabs maintain authentic denim heritage, while updated proportions ensure a fresh, current look. Perfect for layering over tees, dresses, or sweaters, this versatile piece transitions seamlessly from casual weekends to elevated everyday style. Key Features: Premium cotton denim with stretch, Modern fit with classic styling, Traditional button-front closure, Chest pockets and adjustable side tabs, Versatile layering piece, Available in essential washes.",
        price: 59.99,
        inStock: true,
        stock: 187,
        sku: "DC-DJ-011",
        tags: ["denim", "jacket", "classic", "cotton", "layering"],
        deliveryEstimate: "2-4 business days",
        sizes: ["S", "M", "L", "XL"],
        images: [
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "Light Blue",
                hex: "#add8e6",
                image:
                    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Black",
                hex: "#000000",
                image:
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "White",
                hex: "#ffffff",
                image:
                    "https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 4.3,
        ratingTotal: 187,
        vendor: {
            id: "denimcraft-001",
            name: "DenimCraft Apparel",
        },
        shipping: {
            freeShipping: true,
            weight: "1.5 lbs",
            dimensions: "12 x 10 x 3 inches",
        },
        ratingsBreakdown: {
            5: 80,
            4: 67,
            3: 28,
            2: 8,
            1: 4,
        },
        reviews: [
            {
                id: "rev-013",
                user: { name: "Style_Jessica" },
                rating: 4,
                comment: "Great fit and quality. The light blue wash is perfect and goes with everything.",
                createdAt: "2024-02-05",
            },
        ],
    },
    {
        id: 12,
        title: "Air Purifier",
        category: "Home",
        brand: "PureAir",
        description:
            "Advanced HEPA Air Purification System: Breathe cleaner, healthier air with our state-of-the-art air purifier, designed for medium to large rooms up to 500 sq ft. Featuring a true HEPA filter that captures 99.97% of particles as small as 0.3 microns, including dust, pollen, pet dander, and smoke. The activated carbon pre-filter eliminates odors and VOCs, while the quiet operation ensures peaceful sleep and work environments. Smart sensors automatically adjust fan speed based on air quality, and the intuitive touch controls make operation effortless. Key Features: True HEPA filtration captures 99.97% of particles, Activated carbon filter eliminates odors, Covers rooms up to 500 square feet, Smart auto-adjust sensors, Ultra-quiet operation under 30dB, Energy efficient with timer function.",
        price: 149.99,
        oldPrice: 179.99,
        inStock: true,
        stock: 342,
        sku: "PA-AP-012",
        tags: ["air purifier", "HEPA", "home", "clean air", "allergens"],
        deliveryEstimate: "2-4 business days",
        images: [
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "White",
                hex: "#ffffff",
                image:
                    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Black",
                hex: "#000000",
                image:
                    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 4.7,
        ratingTotal: 342,
        vendor: {
            id: "pureair-001",
            name: "PureAir Home Solutions",
        },
        shipping: {
            freeShipping: true,
            weight: "12.5 lbs",
            dimensions: "14 x 8 x 20 inches",
        },
        ratingsBreakdown: {
            5: 240,
            4: 68,
            3: 25,
            2: 6,
            1: 3,
        },
        reviews: [
            {
                id: "rev-014",
                user: { name: "Clean_Air_Chris" },
                rating: 5,
                comment: "Amazing difference in air quality! My allergies have improved significantly since using this.",
                createdAt: "2024-02-07",
            },
        ],
    },
    {
        id: 13,
        title: "Classic Leather Wallet",
        category: "Accessories",
        brand: "LeatherCraft",
        description:
            "Handcrafted Genuine Leather Bifold Wallet: Carry your essentials in style with our meticulously crafted genuine leather wallet, designed for the discerning gentleman. Each wallet is handmade from premium full-grain leather that develops a rich patina over time, ensuring your wallet becomes more beautiful with age. The thoughtful design features multiple card slots, a clear ID window, and spacious bill compartments, all while maintaining a slim profile that fits comfortably in your pocket. RFID-blocking technology protects your cards from electronic theft, combining traditional craftsmanship with modern security. Key Features: Genuine full-grain leather construction, RFID-blocking technology for security, Multiple card slots and ID window, Slim profile design, Spacious bill compartments, Handcrafted with attention to detail.",
        price: 45.99,
        oldPrice: 59.99,
        inStock: true,
        stock: 112,
        sku: "LC-CLW-013",
        tags: ["wallet", "leather", "RFID blocking", "handcrafted", "bifold"],
        deliveryEstimate: "3-5 business days",
        images: [
            "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "Brown",
                hex: "#964B00",
                image:
                    "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Black",
                hex: "#000000",
                image:
                    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 4.5,
        ratingTotal: 112,
        vendor: {
            id: "leathercraft-001",
            name: "LeatherCraft Artisans",
        },
        shipping: {
            freeShipping: false,
            weight: "0.3 lbs",
            dimensions: "4 x 3 x 1 inches",
        },
        ratingsBreakdown: {
            5: 67,
            4: 28,
            3: 12,
            2: 3,
            1: 2,
        },
        reviews: [
            {
                id: "rev-015",
                user: { name: "Wallet_William" },
                rating: 5,
                comment: "Excellent quality leather and craftsmanship. The RFID blocking gives me peace of mind.",
                createdAt: "2024-02-09",
            },
        ],
    },
    {
        id: 14,
        title: "Wireless Gaming Headset",
        category: "Electronics",
        brand: "GameZone",
        description:
            "Professional Wireless Gaming Headset: Immerse yourself in superior gaming audio with our cutting-edge wireless headset, engineered for competitive gaming and extended comfort. Featuring advanced 7.1 surround sound technology and custom-tuned 50mm drivers, every footstep, gunshot, and dialogue comes through with crystal clarity. The active noise cancellation blocks distractions while the crystal-clear microphone ensures perfect team communication. With 30+ hour battery life and ultra-low latency wireless connection, you'll never miss a moment of the action. Key Features: 7.1 surround sound with custom 50mm drivers, Active noise cancellation technology, Crystal-clear detachable microphone, 30+ hour battery life, Ultra-low latency wireless connection, Comfortable over-ear design for extended gaming.",
        price: 129.99,
        inStock: true,
        stock: 287,
        sku: "GZ-WGH-014",
        tags: ["gaming headset", "wireless", "surround sound", "noise cancelling"],
        deliveryEstimate: "1-2 business days",
        images: [
            "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "Black",
                hex: "#000000",
                image:
                    "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Blue",
                hex: "#2563eb",
                image:
                    "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Red",
                hex: "#dc2626",
                image:
                    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 4.6,
        ratingTotal: 287,
        vendor: {
            id: "gamezone-001",
            name: "GameZone Electronics",
        },
        shipping: {
            freeShipping: true,
            weight: "1.8 lbs",
            dimensions: "9 x 8 x 4 inches",
        },
        ratingsBreakdown: {
            5: 176,
            4: 72,
            3: 28,
            2: 8,
            1: 3,
        },
        reviews: [
            {
                id: "rev-016",
                user: { name: "Pro_Gamer_Pete" },
                rating: 5,
                comment: "Incredible sound quality and comfort. The wireless connection is flawless with no lag.",
                createdAt: "2024-02-11",
            },
        ],
    },
    {
        id: 15,
        title: "Knit Sweater",
        category: "Clothing",
        brand: "CozyWear",
        description:
            "Luxurious Knit Sweater: Embrace cozy elegance with our premium knit sweater, crafted from the finest blend of merino wool and cashmere for unparalleled softness and warmth. This versatile piece features a classic crew neck design with ribbed cuffs and hem, creating a timeless silhouette that flatters every body type. The breathable yet insulating fabric makes it perfect for layering or wearing solo, while the pill-resistant construction ensures lasting beauty season after season. Available in sophisticated neutral tones that complement any wardrobe. Key Features: Premium merino wool and cashmere blend, Classic crew neck with ribbed details, Breathable yet warm construction, Pill-resistant for lasting quality, Versatile for layering or solo wear, Available in sophisticated color palette.",
        price: 49.95,
        oldPrice: 69.95,
        inStock: true,
        stock: 94,
        sku: "CW-KS-015",
        tags: ["sweater", "knit", "merino wool", "cashmere", "cozy"],
        deliveryEstimate: "2-4 business days",
        sizes: ["S", "M", "L", "XL"],
        images: [
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "Cream",
                hex: "#FFFDD0",
                image:
                    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Gray",
                hex: "#808080",
                image:
                    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 4.2,
        ratingTotal: 94,
        vendor: {
            id: "cozywear-001",
            name: "CozyWear Knitwear",
        },
        shipping: {
            freeShipping: true,
            weight: "0.9 lbs",
            dimensions: "10 x 8 x 2 inches",
        },
        ratingsBreakdown: {
            5: 39,
            4: 32,
            3: 16,
            2: 5,
            1: 2,
        },
        reviews: [
            {
                id: "rev-017",
                user: { name: "Cozy_Catherine" },
                rating: 4,
                comment: "So soft and warm! The cream color is beautiful and the fit is perfect.",
                createdAt: "2024-02-13",
            },
        ],
    },
    {
        id: 16,
        title: "Vintage Bag",
        category: "Accessories",
        brand: "TechEssentials",
        description:
            "Vintage-Inspired Crossbody Bag: Step back in time with our beautifully crafted vintage-style bag, combining nostalgic charm with modern functionality. Made from premium vegan leather with antique brass hardware, this bag captures the essence of classic design while meeting contemporary needs. The spacious main compartment and organized interior pockets accommodate your daily essentials, while the adjustable crossbody strap ensures comfortable wear. The timeless silhouette and rich texture make it the perfect accessory for both casual outings and special occasions. Key Features: Premium vegan leather construction, Antique brass hardware details, Spacious main compartment with organization, Adjustable crossbody strap, Vintage-inspired timeless design, Suitable for various occasions.",
        price: 19.99,
        inStock: false,
        stock: 0,
        sku: "TE-VB-016",
        tags: ["vintage", "bag", "crossbody", "vegan leather", "accessories"],
        deliveryEstimate: "Back in stock in 1-2 weeks",
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "Vintage Brown",
                hex: "#C9C38D",
                image:
                    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 3.9,
        ratingTotal: 56,
        vendor: {
            id: "techessentials-001",
            name: "TechEssentials Accessories",
        },
        shipping: {
            freeShipping: false,
            weight: "0.7 lbs",
            dimensions: "8 x 6 x 3 inches",
        },
        ratingsBreakdown: {
            5: 22,
            4: 18,
            3: 10,
            2: 4,
            1: 2,
        },
        reviews: [
            {
                id: "rev-018",
                user: { name: "Vintage_Vera" },
                rating: 4,
                comment: "Love the vintage look! Great quality for the price and perfect size for daily use.",
                createdAt: "2024-01-16",
            },
        ],
    },
    {
        id: 17,
        title: "Canvas Backpack",
        category: "Accessories",
        brand: "UrbanGear",
        description:
            "Durable Canvas Adventure Backpack: Conquer your daily adventures with our rugged canvas backpack, designed for the modern explorer who values both style and functionality. Crafted from heavy-duty waxed canvas with reinforced stitching, this backpack withstands the demands of urban commuting and outdoor adventures alike. The padded laptop compartment safely houses devices up to 15 inches, while multiple organizational pockets keep your gear accessible and secure. Comfortable padded straps and a breathable back panel ensure all-day comfort, making it perfect for work, travel, or weekend getaways. Key Features: Heavy-duty waxed canvas construction, Padded laptop compartment fits 15-inch devices, Multiple organizational pockets, Comfortable padded shoulder straps, Water-resistant coating, Classic design with modern functionality.",
        price: 54.5,
        inStock: true,
        stock: 178,
        sku: "UG-CB-018",
        tags: ["backpack", "canvas", "laptop", "durable", "urban"],
        deliveryEstimate: "2-4 business days",
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "Khaki",
                hex: "#F0E68C",
                image:
                    "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Black",
                hex: "#000000",
                image:
                    "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 4.4,
        ratingTotal: 178,
        vendor: {
            id: "urbangear-001",
            name: "UrbanGear Outdoor",
        },
        shipping: {
            freeShipping: true,
            weight: "2.1 lbs",
            dimensions: "18 x 12 x 6 inches",
        },
        ratingsBreakdown: {
            5: 98,
            4: 52,
            3: 20,
            2: 6,
            1: 2,
        },
        reviews: [
            {
                id: "rev-019",
                user: { name: "Commuter_Carlos" },
                rating: 5,
                comment:
                    "Perfect for daily commuting! The laptop compartment is well-padded and the canvas feels very durable.",
                createdAt: "2024-02-15",
            },
        ],
    },
    {
        id: 18,
        title: "Blender Bottle",
        category: "Fitness",
        brand: "MixIt",
        description:
            "Professional Shaker Bottle: Elevate your fitness nutrition with our premium leak-proof shaker bottle, engineered for the serious athlete and fitness enthusiast. Featuring our patented mixing system with surgical-grade stainless steel whisk ball, this bottle creates perfectly smooth protein shakes, pre-workout drinks, and meal replacements every time. The BPA-free Tritan plastic construction is virtually unbreakable, while the secure screw-on lid with flip cap ensures zero leaks during transport. Measurement markings and a wide mouth make mixing and cleaning effortless. Key Features: Patented mixing system with steel whisk ball, 100% leak-proof secure lid design, BPA-free Tritan plastic construction, Easy-to-read measurement markings, Wide mouth for easy filling and cleaning, Dishwasher safe for convenient maintenance.",
        price: 14.99,
        inStock: true,
        stock: 203,
        sku: "MI-BB-019",
        tags: ["shaker bottle", "protein", "fitness", "leak-proof", "BPA-free"],
        deliveryEstimate: "1-3 business days",
        images: [
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
            {
                name: "Blue",
                hex: "#2563eb",
                image:
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Black",
                hex: "#000000",
                image:
                    "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Purple",
                hex: "#9333ea",
                image:
                    "https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
        ],
        ratingAverage: 4.3,
        ratingTotal: 203,
        vendor: {
            id: "mixit-001",
            name: "MixIt Fitness Gear",
        },
        shipping: {
            freeShipping: false,
            weight: "0.5 lbs",
            dimensions: "9 x 4 x 4 inches",
        },
        ratingsBreakdown: {
            5: 87,
            4: 71,
            3: 32,
            2: 9,
            1: 4,
        },
        reviews: [
            {
                id: "rev-020",
                user: { name: "Fitness_Frank" },
                rating: 4,
                comment: "Great mixing action and no leaks! Perfect for my post-workout protein shakes.",
                createdAt: "2024-02-17",
            },
        ],
    },
]

export const discount: DiscountType[] = [
    {
        id: "disc-001",
        title: "Summer Sale",
        percentage: 10,
        description: "Enjoy 10% off all organic cotton items!",
        active: true,
    },
    {
        id: "disc-002",
        title: "Back to School",
        percentage: 5,
        description: "Extra 5% for students",
        active: false,
    }
]