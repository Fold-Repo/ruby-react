export const filterData = {
    categories: [
        { name: 'Clothing', slug: 'clothing', count: 24 },
        { name: 'Footwear', slug: 'footwear', count: 18 },
        { name: 'Accessories', slug: 'accessories', count: 12 },
    ],
    stockOptions: [
        { id: 'in_stock', label: 'In Stock', count: 30 },
        { id: 'out_of_stock', label: 'Out of Stock', count: 5 },
    ],
    priceRange: {
        min: 1000,
        max: 100000,
    },
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
        { name: 'Red', color: '#ff0000' },
        { name: 'Blue', color: '#0000ff' },
        { name: 'Green', color: '#00ff00' },
        { name: 'Black', color: '#000000' },
        { name: 'White', color: '#ffffff' },
    ],
    brands: [
        { id: 'nike', label: 'Nike', count: 15 },
        { id: 'adidas', label: 'Adidas', count: 10 },
        { id: 'puma', label: 'Puma', count: 8 },
        { id: 'zara', label: 'Zara', count: 12 },
    ],
};
