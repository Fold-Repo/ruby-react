import { DropdownItemType, HomeCategoryType, MenuGroupType, NavItemType } from "@/types";

const pagesMenu: DropdownItemType[] = [
    { label: 'About Us', href: '/pages/about' },
    { label: 'Store List 1', href: '/pages/store-list-1' },
    { label: 'Store List 2', href: '/pages/store-list-2' },
    { label: 'Contact Us 1', href: '/pages/contact-1' },
    { label: 'Contact Us 2', href: '/pages/contact-2' },
    { label: '404', href: '/pages/404' },
    { label: 'FAQs', href: '/pages/faqs' },
    { label: 'Terms Of Use', href: '/pages/terms' },
    { label: 'Coming Soon', href: '/pages/coming-soon' },
    { label: 'Coming Soon 2', href: '/pages/coming-soon-2' },
    { label: 'Customer Feedbacks', href: '/pages/customer-feedbacks' },
    { label: 'Payment Confirmation', href: '/pages/payment-confirmation' },
    { label: 'Payment Failure', href: '/pages/payment-failure' },
    { label: 'My Account', href: '/pages/account' },
];

const blogMenu: DropdownItemType[] = [
    { label: 'Blog Default', href: '/blog' },
    { label: 'Blog List', href: '/blog/blog-list' },
    { label: 'Blog List 2', href: '/blog/blog-list-2' },
    { label: 'Blog Grid', href: '/blog/blog-grid' },
    { label: 'Blog Detail 1', href: '/blog/1' },
    { label: 'Blog Detail 2', href: '/blog/blog-detail-2' },
];

export const menuItems: NavItemType[] = [
    { title: 'Home', hasDropdown: true, megaMenuType: 'home' },
    { title: 'Product', hasDropdown: true, megaMenuType: 'product' },
    { title: 'Pages', hasDropdown: true, dropdownItems: pagesMenu },
    { title: 'Shop', hasDropdown: true, megaMenuType: 'shop' },
    { title: 'Blog', hasDropdown: true, dropdownItems: blogMenu },
    { title: 'Purchase Theme', linkOnly: true, href: 'https://themeforest.net/' },
]

export const productMenuItems: MenuGroupType[] = [
    {
        title: 'Products Layout',
        items: [
            { label: 'Product Default', href: '/products/layouts/default' },
            { label: 'Product Grid 1', href: '/products/layouts/grid-1' },
            { label: 'Product Grid 2', href: '/products/layouts/grid-2' },
            { label: 'Product Stacked', href: '/products/layouts/stacked' },
            { label: 'Product Right Thumbnails', href: '/products/layouts/right-thumbnails' },
            { label: 'Product Bottom Thumbnails', href: '/products/layouts/bottom-thumbnails' },
            { label: 'Product Description Accordion', href: '/products/layouts/description-accordion' },
            { label: 'Product Description List', href: '/products/layouts/description-list' },
            { label: 'Product Description Menu Tab', href: '/products/layouts/description-tab' },
            { label: 'Product Description Fullwidth', href: '/products/layouts/description-fullwidth' },
            { label: 'Product Fixed Price', href: '/products/layouts/fixed-price' },
            { label: 'Product Fixed Scrolls', href: '/products/layouts/fixed-scrolls' },
        ],
    },
    {
        title: 'Products Features',
        items: [
            { label: 'Frequently Bought Together', href: '/products/features/frequently-bought' },
            { label: 'Up Sell', href: '/products/features/upsell' },
            { label: 'Pre-Orders', href: '/products/features/pre-orders' },
            { label: 'Grouped', href: '/products/features/grouped' },
            { label: 'Customer Note', href: '/products/features/customer-note' },
            { label: 'Out Of Stock', href: '/products/features/out-of-stock' },
            { label: 'Pick Up Available', href: '/products/features/pickup-available' },
            { label: 'Variable', href: '/products/features/variable' },
            { label: 'Deals', href: '/products/features/deals' },
            { label: 'With Discount', href: '/products/features/with-discount' },
            { label: 'Subscribe Save', href: '/products/features/subscribe-save' },
            { label: 'Deals grid', href: '/products/features/deals-grid' },
            { label: 'Buy X Get Y', href: '/products/features/buy-x-get-y' },
        ],
    },
    {
        title: 'Color Swatches',
        items: [
            { label: 'Product Swatch Color', href: '/products/swatches/color' },
            { label: 'Product Swatch Rounded', href: '/products/swatches/rounded' },
            { label: 'Product Swatch Rounded Colors', href: '/products/swatches/rounded-colors' },
            { label: 'Product Swatch Image', href: '/products/swatches/image' },
            { label: 'Product Swatch Rounded Image', href: '/products/swatches/rounded-image' },
            { label: 'Product Swatch Dropdown', href: '/products/swatches/dropdown' },
            { label: 'Product Swatch Dropdown Color', href: '/products/swatches/dropdown-color' },
        ],
    },
];

export const shopMenuGroups: MenuGroupType[] = [
    {
        title: 'Shop Layout',
        items: [
            { label: 'Default Grid', href: '/shop/shop_layout' },
            { label: 'Default List', href: '/shop/shop_layout/lists' },
            { label: 'Full Width List', href: '/shop/shop_layout/full-lists' },
            { label: 'Full Width Grid', href: '/shop/shop_layout/grid' },
            { label: 'Left Sidebar', href: '/shop/shop_layout/left_sidebar' },
            { label: 'Right Sidebar', href: '/shop/shop_layout/right_sidebar' },
            { label: 'Filter Dropdown', href: '/shop/shop_layout/filter_dropdown' },
            { label: 'Filter Canvas', href: '/shop/shop_layout' },
        ],
    },
    {
        title: 'Shop Features',
        items: [
            { label: 'Categories Top 1', href: '/shop/shop_features/categories_top_1' },
            { label: 'Categories Top 2', href: '/shop/shop_features/categories_top_2' },
            { label: 'Shop Collection', href: '/shop/shop_features/shop_collection' },
            { label: 'Book Collection', href: '/shop/shop_features/book_collection' },
            { label: 'Breadcrumb IMG', href: '/shop/shop_features/breadcrumb_img' },
            { label: 'Breadcrumb Left', href: '/shop/shop_features/breadcrumb_left' },
            { label: 'Breadcrumb BG', href: '/shop/shop_features/breadcrumb_bg' },
            { label: 'Load Button', href: '/shop/shop_features/load_button' },
            { label: 'Pagination', href: '/shop/shop_features/pagination' },
            { label: 'Infinite Scrolling', href: '/shop/shop_features/infinite' },
        ],
    },
    {
        title: 'Products Hover',
        items: [
            { label: 'Product Style 1', href: '/shop/product_hover/style_1' },
            { label: 'Product Style 2', href: '/shop/product_hover/style_2' },
            { label: 'Product Style 3', href: '/shop/product_hover/style_3' },
            { label: 'Product Style 4', href: '/shop/product_hover/style_4' },
            { label: 'Product Style 5', href: '/shop/product_hover/style_5' },
            { label: 'Product Style 6', href: '/shop/product_hover/style_6' },
            { label: 'Product Style 7', href: '/shop/product_hover/style_7' },
        ],
    },
    {
        title: 'My Pages',
        items: [
            { label: 'Wish List', href: '/wishlist' },
            { label: 'Search Result', href: '/search' },
            { label: 'Shopping Cart', href: '/cart' },
            { label: 'Login/Register', href: '/login' },
            { label: 'Forget Password', href: '/forgot-password' },
            { label: 'Order Tracking', href: '/pages/tracking' },
            { label: 'My Account', href: '/pages/account' },
        ],
    },
];

export const homeCategories: HomeCategoryType[] = [
    {
        title: 'Women Fashion',
        href: '/home/women-fashion',
        img: '/img/mega_menu/home/1.png',
        badge: { label: 'Hot', color: 'bg-primary' },
    },
    {
        title: 'Trending Fashion',
        href: '/home/trending-fashion',
        img: '/img/mega_menu/home/2.png',
        badge: { label: 'Hot', color: 'bg-[#9747FF]' },
    },
    {
        title: 'Men Fashion',
        href: '/home/men-fashion',
        img: '/img/mega_menu/home/3.png',
        badge: { label: 'Hot', color: 'bg-[#06B181]' },
    },
    {
        title: 'Electronic',
        href: '/home/electronic',
        img: '/img/mega_menu/home/4.png',
    },
    {
        title: 'Book Store',
        href: '/home/book-store',
        img: '/img/mega_menu/home/5.png',
    },
    {
        title: 'Sport Accessory',
        href: '/home/sport-accessory',
        img: '/img/mega_menu/home/6.png',
    },
    {
        title: 'Furniture',
        href: '/home/furniture',
        img: '/img/mega_menu/home/7.png',
    },
    {
        title: 'Beauty Skin Care',
        href: '/home/beauty-skin-care',
        img: '/img/mega_menu/home/8.png',
    },
];
