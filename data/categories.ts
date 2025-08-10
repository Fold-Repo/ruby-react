import { BrandType, CategoryType, ElectCategoryType, MenCollectionType, TrendingFashionType } from "@/types";

export const categoryData: CategoryType[] = [
    {
        id: 1,
        name: "New In",
        img: "/img/category/6.jpg",
    },
    {
        id: 2,
        name: "Accessories",
        img: "/img/category/2.jpg",
    },
    {
        id: 3,
        name: "Bags",
        img: "/img/category/4.jpg",
    },
    {
        id: 4,
        name: "Clothing",
        img: "/img/category/5.jpg",
    },
    {
        id: 5,
        name: "Promotion",
        img: "/img/category/1.jpg",
    },
    {
        id: 6,
        name: "Shoes",
        img: "/img/category/3.jpg",
    },
];

export const categoryDataTwo: CategoryType[] = [
    { id: 1, name: "New In", img: "/img/category/7.jpg" },
    { id: 2, name: "Clothing", img: "/img/category/8.jpg" },
    { id: 3, name: "Dresses", img: "/img/category/9.jpg" },
    { id: 4, name: "Promotion", img: "/img/category/10.jpg" },
    { id: 5, name: "Jacket", img: "/img/category/11.jpg" },
    {
        id: 6,
        name: "Accessories",
        img: "/img/category/2.jpg",
    },
];

export const trendingFashionData: TrendingFashionType[] = [
    {
        id: 1,
        image: '/img/category/6.jpg',
        title: 'New Women Fashion',
        desc: 'Offer 50% off',
    },
    {
        id: 2,
        image: '/img/category/3.jpg',
        title: 'New Jacket',
        desc: 'Buy one get one free',
    },
    {
        id: 3,
        image: '/img/category/1.jpg',
        title: 'New Hoodie',
        desc: 'Buy one get one free',
    },
    {
        id: 4,
        image: '/img/category/5.jpg',
        title: 'New Women Fashion',
        desc: 'Offer 50% off',
    },
];

export const menCollectionData: MenCollectionType[] = [
    {
        id: "1",
        name: "Athletic wear",
        brand: "Adidas",
        image: "/img/home/man_fashion/1.png",
    },
    {
        id: "2",
        name: "Streetwear",
        brand: "Nike",
        image: "/img/home/man_fashion/2.jpg",
    },
    {
        id: "3",
        name: "Formal suit",
        brand: "Zara",
        image: "/img/home/man_fashion/3.jpg",
    },
    {
        id: "4",
        name: "Casual look",
        brand: "H&M",
        image: "/img/home/man_fashion/4.jpg",
    },
    {
        id: "5",
        name: "Denim style",
        brand: "Levi’s",
        image: "/img/home/man_fashion/5.jpg",
    },
    {
        id: "6",
        name: "Winter fashion",
        brand: "Uniqlo",
        image: "/img/home/man_fashion/6.jpg",
    },
];

export const brands: BrandType[] = [
    {
        id: 1,
        name: "Puma",
        image: "/img/home/home/15.jpg",
    },
    {
        id: 2,
        name: "Nike",
        image: "/img/home/home/16.jpg",
    },
    {
        id: 3,
        name: "Adidas",
        image: "/img/home/home/17.jpg",
    },
    {
        id: 4,
        name: "Reebok",
        image: "/img/home/home/18.jpg",
    },
    {
        id: 5,
        name: "Under Armour",
        image: "/img/home/home/19.jpg",
    },
    {
        id: 6,
        name: "New Balance",
        image: "/img/home/home/20.jpg",
    },
];
