import { OrderType } from "@/types";

export const ordersData: OrderType[] = [
    // Ongoing
    {
        image: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Double-button Trench Coat",
        orderId: "ORD10001",
        status: "Ongoing" as const,
        orderDate: "12/08/2025",
        productDetails: {
            name: "Double-button trench coat",
            quantity: 3,
            oldPrice: 283.0,
            price: 849.0,
        },
        paymentInfo: {
            method: "Credit Card",
            breakdown: {
                totalItems: 849.0,
                deliveryFee: 50.0,
                discount: 5.0,
                totalSummary: 894.0,
            },
        },
        deliveryInfo: {
            method: "Door Delivery",
            address: "1234 Fashion Street, Suite 567, New York",
            timeline: {
                orderPlaced: { timestamp: "17/08/2025", status: "current" },
                productPackaging: { timestamp: "", status: "pending" },
                productShipped: { timestamp: "", status: "pending" },
                outForDelivery: { timestamp: "", status: "pending" },
                delivered: { timestamp: "", status: "pending" },
            },
        },
    },
    {
        image: "https://images.pexels.com/photos/7679463/pexels-photo-7679463.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Slim Fit Chinos",
        orderId: "ORD10002",
        status: "Ongoing" as const,
        orderDate: "14/08/2025",
        productDetails: {
            name: "Slim Fit Chinos",
            quantity: 2,
            oldPrice: 75.0,
            price: 150.0,
        },
        paymentInfo: {
            method: "Debit Card",
            breakdown: {
                totalItems: 150.0,
                deliveryFee: 20.0,
                discount: 10.0,
                totalSummary: 160.0,
            },
        },
        deliveryInfo: {
            method: "Pickup Station",
            address: "456 Modern Road, LA",
            timeline: {
                orderPlaced: { timestamp: "12/08/2025", status: "completed" },
                productPackaging: { timestamp: "13/08/2025", status: "completed" },
                productShipped: { timestamp: "13/08/2025", status: "completed" },
                outForDelivery: { timestamp: "14/08/2025", status: "completed" },
                delivered: { timestamp: "15/08/2025", status: "completed" },
            },
        },
    },
    {
        image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Leather Biker Jacket",
        orderId: "ORD10003",
        status: "Ongoing" as const,
        orderDate: "15/08/2025",
        productDetails: {
            name: "Leather Biker Jacket",
            quantity: 1,
            oldPrice: 320.0,
            price: 320.0,
        },
        paymentInfo: {
            method: "PayPal",
            breakdown: {
                totalItems: 320.0,
                deliveryFee: 30.0,
                discount: 0.0,
                totalSummary: 350.0,
            },
        },
        deliveryInfo: {
            method: "Door Delivery",
            address: "22 Leather Street, Texas",
            timeline: {
                orderPlaced: { timestamp: "14/08/2025", status: "completed" },
                productPackaging: { timestamp: "14/08/2025", status: "completed" },
                productShipped: { timestamp: "15/08/2025", status: "completed" },
                outForDelivery: { timestamp: "15/08/2025", status: "completed" },
                delivered: { timestamp: "16/08/2025", status: "current" },
            },
        },
    },
    {
        image: "https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Casual Zip Hoodie",
        orderId: "ORD10004",
        status: "Ongoing" as const,
        orderDate: "16/08/2025",
        productDetails: {
            name: "Casual Zip Hoodie",
            quantity: 2,
            oldPrice: 65.0,
            price: 130.0,
        },
        paymentInfo: {
            method: "Credit Card",
            breakdown: {
                totalItems: 130.0,
                deliveryFee: 15.0,
                discount: 5.0,
                totalSummary: 140.0,
            },
        },
        deliveryInfo: {
            method: "Door Delivery",
            address: "89 Zip Lane, Florida",
            timeline: {
                orderPlaced: { timestamp: "15/08/2025", status: "completed" },
                productPackaging: { timestamp: "15/08/2025", status: "completed" },
                productShipped: { timestamp: "16/08/2025", status: "current" },
                outForDelivery: { timestamp: "", status: "pending" },
                delivered: { timestamp: "", status: "pending" },
            },
        },
    },
    {
        image: "https://images.pexels.com/photos/10026481/pexels-photo-10026481.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Graphic T-Shirt",
        orderId: "ORD10005",
        status: "Ongoing" as const,
        orderDate: "17/08/2025",
        productDetails: {
            name: "Graphic T-Shirt",
            quantity: 4,
            oldPrice: 25.0,
            price: 100.0,
        },
        paymentInfo: {
            method: "Bank Transfer",
            breakdown: {
                totalItems: 100.0,
                deliveryFee: 10.0,
                discount: 0.0,
                totalSummary: 110.0,
            },
        },
        deliveryInfo: {
            method: "Pickup Station",
            address: "22 Graphics Blvd, Seattle",
            timeline: {
                orderPlaced: { timestamp: "16/08/2025", status: "current" },
                productPackaging: { timestamp: "16/08/2025", status: "current" },
                productShipped: { timestamp: "", status: "pending" },
                outForDelivery: { timestamp: "", status: "pending" },
                delivered: { timestamp: "", status: "pending" },
            },
        },
    },
    {
        image: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Distressed Denim Jeans",
        orderId: "ORD10006",
        status: "Ongoing" as const,
        orderDate: "18/08/2025",
        productDetails: {
            name: "Distressed Denim Jeans",
            quantity: 1,
            oldPrice: 90.0,
            price: 90.0,
        },
        paymentInfo: {
            method: "Credit Card",
            breakdown: {
                totalItems: 90.0,
                deliveryFee: 20.0,
                discount: 5.0,
                totalSummary: 105.0,
            },
        },
        deliveryInfo: {
            method: "Door Delivery",
            address: "76 Denim Drive, Houston",
            timeline: {
                orderPlaced: { timestamp: "17/08/2025", status: "current" },
                productPackaging: { timestamp: "", status: "pending" },
                productShipped: { timestamp: "", status: "pending" },
                outForDelivery: { timestamp: "", status: "pending" },
                delivered: { timestamp: "", status: "pending" },
            },
        },
    },
    // Delivered
    {
        image: "https://images.pexels.com/photos/13627272/pexels-photo-13627272.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Slim-fit Denim Jacket",
        orderId: "ORD20001",
        status: "Delivered",
        orderDate: "11/07/2025",
        productDetails: {
            name: "Slim-fit Denim Jacket",
            quantity: 1,
            oldPrice: 150.0,
            price: 150.0,
        },
        paymentInfo: {
            method: "Credit Card",
            breakdown: {
                totalItems: 150.0,
                deliveryFee: 20.0,
                discount: 10.0,
                totalSummary: 160.0,
            },
        },
        deliveryInfo: {
            method: "Door Delivery",
            address: "456 Denim Lane, New York",
            timeline: {
                orderPlaced: { timestamp: "08/07/2025", status: "completed" },
                productPackaging: { timestamp: "09/07/2025", status: "completed" },
                productShipped: { timestamp: "10/07/2025", status: "completed" },
                outForDelivery: { timestamp: "11/07/2025", status: "completed" },
                delivered: { timestamp: "11/07/2025", status: "completed" },
            },
        },
    },
    {
        image: "https://images.pexels.com/photos/6311617/pexels-photo-6311617.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Suede Chelsea Boots",
        orderId: "ORD20002",
        status: "Delivered",
        orderDate: "10/07/2025",
        productDetails: {
            name: "Suede Chelsea Boots",
            quantity: 1,
            oldPrice: 120.0,
            price: 120.0,
        },
        paymentInfo: {
            method: "PayPal",
            breakdown: {
                totalItems: 120.0,
                deliveryFee: 25.0,
                discount: 0.0,
                totalSummary: 145.0,
            },
        },
        deliveryInfo: {
            method: "Door Delivery",
            address: "789 Shoe Ave, California",
            timeline: {
                orderPlaced: { timestamp: "07/07/2025", status: "completed" },
                productPackaging: { timestamp: "08/07/2025", status: "completed" },
                productShipped: { timestamp: "09/07/2025", status: "completed" },
                outForDelivery: { timestamp: "10/07/2025", status: "completed" },
                delivered: { timestamp: "10/07/2025", status: "completed" },
            },
        },
    },
    {
        image: "https://images.pexels.com/photos/11226012/pexels-photo-11226012.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Wool Winter Scarf",
        orderId: "ORD20003",
        status: "Delivered",
        orderDate: "09/07/2025",
        productDetails: {
            name: "Wool Winter Scarf",
            quantity: 2,
            oldPrice: 40.0,
            price: 80.0,
        },
        paymentInfo: {
            method: "Credit Card",
            breakdown: {
                totalItems: 80.0,
                deliveryFee: 15.0,
                discount: 5.0,
                totalSummary: 90.0,
            },
        },
        deliveryInfo: {
            method: "Pickup Station",
            address: "321 Cozy Street, Chicago",
            timeline: {
                orderPlaced: { timestamp: "06/07/2025", status: "completed" },
                productPackaging: { timestamp: "07/07/2025", status: "completed" },
                productShipped: { timestamp: "08/07/2025", status: "completed" },
                outForDelivery: { timestamp: "09/07/2025", status: "completed" },
                delivered: { timestamp: "09/07/2025", status: "completed" },
            },
        },
    },
    {
        image: "https://images.pexels.com/photos/8386644/pexels-photo-8386644.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Retro Sunglasses",
        orderId: "ORD20004",
        status: "Delivered",
        orderDate: "08/07/2025",
        productDetails: {
            name: "Retro Sunglasses",
            quantity: 1,
            oldPrice: 60.0,
            price: 60.0,
        },
        paymentInfo: {
            method: "Debit Card",
            breakdown: {
                totalItems: 60.0,
                deliveryFee: 10.0,
                discount: 0.0,
                totalSummary: 70.0,
            },
        },
        deliveryInfo: {
            method: "Door Delivery",
            address: "101 Retro Blvd, Miami",
            timeline: {
                orderPlaced: { timestamp: "06/07/2025", status: "completed" },
                productPackaging: { timestamp: "07/07/2025", status: "completed" },
                productShipped: { timestamp: "08/07/2025", status: "completed" },
                outForDelivery: { timestamp: "08/07/2025", status: "completed" },
                delivered: { timestamp: "08/07/2025", status: "completed" },
            },
        },
    },
    {
        image: "https://images.pexels.com/photos/13750442/pexels-photo-13750442.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Minimalist Watch",
        orderId: "ORD20005",
        status: "Delivered",
        orderDate: "07/07/2025",
        productDetails: {
            name: "Minimalist Watch",
            quantity: 1,
            oldPrice: 180.0,
            price: 180.0,
        },
        paymentInfo: {
            method: "Credit Card",
            breakdown: {
                totalItems: 180.0,
                deliveryFee: 0.0,
                discount: 0.0,
                totalSummary: 180.0,
            },
        },
        deliveryInfo: {
            method: "Door Delivery",
            address: "654 Minimal St, Dallas",
            timeline: {
                orderPlaced: { timestamp: "05/07/2025", status: "completed" },
                productPackaging: { timestamp: "06/07/2025", status: "completed" },
                productShipped: { timestamp: "06/07/2025", status: "completed" },
                outForDelivery: { timestamp: "07/07/2025", status: "completed" },
                delivered: { timestamp: "07/07/2025", status: "completed" },
            },
        },
    },
    {
        image: "https://images.pexels.com/photos/1306543/pexels-photo-1306543.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Leather Wallet",
        orderId: "ORD20006",
        status: "Delivered",
        orderDate: "06/07/2025",
        productDetails: {
            name: "Leather Wallet",
            quantity: 1,
            oldPrice: 90.0,
            price: 90.0,
        },
        paymentInfo: {
            method: "Bank Transfer",
            breakdown: {
                totalItems: 90.0,
                deliveryFee: 10.0,
                discount: 5.0,
                totalSummary: 95.0,
            },
        },
        deliveryInfo: {
            method: "Pickup Station",
            address: "890 Wallet Way, Atlanta",
            timeline: {
                orderPlaced: { timestamp: "04/07/2025", status: "completed" },
                productPackaging: { timestamp: "05/07/2025", status: "completed" },
                productShipped: { timestamp: "05/07/2025", status: "completed" },
                outForDelivery: { timestamp: "06/07/2025", status: "completed" },
                delivered: { timestamp: "06/07/2025", status: "completed" },
            },
        },
    },
    // Returned
    {
        image: "https://images.pexels.com/photos/1301358/pexels-photo-1301358.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Canvas Travel Backpack",
        orderId: "ORD30001",
        status: "Returned",
        orderDate: "05/06/2025",
        productDetails: {
            name: "Canvas Travel Backpack",
            quantity: 1,
            oldPrice: 75.0,
            price: 75.0,
        },
        paymentInfo: {
            method: "Credit Card",
            breakdown: {
                totalItems: 75.0,
                deliveryFee: 10.0,
                discount: 0.0,
                totalSummary: 85.0,
            },
        },
        deliveryInfo: {
            method: "Door Delivery",
            address: "12 Backpack Blvd, Austin",
            timeline: {
                orderPlaced: { timestamp: "02/06/2025", status: "completed" },
                productPackaging: { timestamp: "03/06/2025", status: "completed" },
                productShipped: { timestamp: "03/06/2025", status: "completed" },
                outForDelivery: { timestamp: "04/06/2025", status: "completed" },
                delivered: { timestamp: "05/06/2025", status: "completed" },
            },
        },
    },
    {
        image: "https://images.pexels.com/photos/11204785/pexels-photo-11204785.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Silver Chain Necklace",
        orderId: "ORD30002",
        status: "Returned",
        orderDate: "04/06/2025",
        productDetails: {
            name: "Silver Chain Necklace",
            quantity: 2,
            oldPrice: 45.0,
            price: 90.0,
        },
        paymentInfo: {
            method: "Debit Card",
            breakdown: {
                totalItems: 90.0,
                deliveryFee: 5.0,
                discount: 10.0,
                totalSummary: 85.0,
            },
        },
        deliveryInfo: {
            method: "Pickup Station",
            address: "34 Jewelry Lane, Houston",
            timeline: {
                orderPlaced: { timestamp: "01/06/2025", status: "completed" },
                productPackaging: { timestamp: "02/06/2025", status: "completed" },
                productShipped: { timestamp: "03/06/2025", status: "completed" },
                outForDelivery: { timestamp: "04/06/2025", status: "completed" },
                delivered: { timestamp: "04/06/2025", status: "completed" },
            },
        },
    },
    {
        image: "https://images.pexels.com/photos/776111/pexels-photo-776111.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Snapback Cap",
        orderId: "ORD30003",
        status: "Returned",
        orderDate: "03/06/2025",
        productDetails: {
            name: "Snapback Cap",
            quantity: 1,
            oldPrice: 25.0,
            price: 25.0,
        },
        paymentInfo: {
            method: "Credit Card",
            breakdown: {
                totalItems: 25.0,
                deliveryFee: 5.0,
                discount: 0.0,
                totalSummary: 30.0,
            },
        },
        deliveryInfo: {
            method: "Door Delivery",
            address: "89 Cap Alley, Brooklyn",
            timeline: {
                orderPlaced: { timestamp: "31/05/2025", status: "completed" },
                productPackaging: { timestamp: "01/06/2025", status: "completed" },
                productShipped: { timestamp: "01/06/2025", status: "completed" },
                outForDelivery: { timestamp: "02/06/2025", status: "completed" },
                delivered: { timestamp: "03/06/2025", status: "completed" },
            },
        },
    },
    {
        image: "https://images.pexels.com/photos/1047940/pexels-photo-1047940.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Knitted Beanie",
        orderId: "ORD30004",
        status: "Returned",
        orderDate: "02/06/2025",
        productDetails: {
            name: "Knitted Beanie",
            quantity: 1,
            oldPrice: 20.0,
            price: 20.0,
        },
        paymentInfo: {
            method: "PayPal",
            breakdown: {
                totalItems: 20.0,
                deliveryFee: 5.0,
                discount: 0.0,
                totalSummary: 25.0,
            },
        },
        deliveryInfo: {
            method: "Door Delivery",
            address: "9 Winter Rd, Boston",
            timeline: {
                orderPlaced: { timestamp: "30/05/2025", status: "completed" },
                productPackaging: { timestamp: "31/05/2025", status: "completed" },
                productShipped: { timestamp: "31/05/2025", status: "completed" },
                outForDelivery: { timestamp: "01/06/2025", status: "completed" },
                delivered: { timestamp: "02/06/2025", status: "completed" },
            },
        },
    },
    {
        image: "https://images.pexels.com/photos/6461926/pexels-photo-6461926.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Leather Bracelet",
        orderId: "ORD30005",
        status: "Returned",
        orderDate: "01/06/2025",
        productDetails: {
            name: "Leather Bracelet",
            quantity: 1,
            oldPrice: 35.0,
            price: 35.0,
        },
        paymentInfo: {
            method: "Credit Card",
            breakdown: {
                totalItems: 35.0,
                deliveryFee: 5.0,
                discount: 0.0,
                totalSummary: 40.0,
            },
        },
        deliveryInfo: {
            method: "Door Delivery",
            address: "17 Style Way, Seattle",
            timeline: {
                orderPlaced: { timestamp: "29/05/2025", status: "completed" },
                productPackaging: { timestamp: "30/05/2025", status: "completed" },
                productShipped: { timestamp: "30/05/2025", status: "completed" },
                outForDelivery: { timestamp: "31/05/2025", status: "completed" },
                delivered: { timestamp: "01/06/2025", status: "completed" },
            },
        },
    },
    {
        image: "https://images.pexels.com/photos/6461326/pexels-photo-6461326.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        title: "Thermal Gloves",
        orderId: "ORD30006",
        status: "Returned",
        orderDate: "31/05/2025",
        productDetails: {
            name: "Thermal Gloves",
            quantity: 2,
            oldPrice: 30.0,
            price: 60.0,
        },
        paymentInfo: {
            method: "Debit Card",
            breakdown: {
                totalItems: 60.0,
                deliveryFee: 5.0,
                discount: 5.0,
                totalSummary: 60.0,
            },
        },
        deliveryInfo: {
            method: "Door Delivery",
            address: "45 Warm St, Denver",
            timeline: {
                orderPlaced: { timestamp: "28/05/2025", status: "completed" },
                productPackaging: { timestamp: "29/05/2025", status: "completed" },
                productShipped: { timestamp: "30/05/2025", status: "completed" },
                outForDelivery: { timestamp: "31/05/2025", status: "completed" },
                delivered: { timestamp: "31/05/2025", status: "completed" },
            },
        },
    },

];