# Ruby React - E-commerce Platform

A modern, responsive e-commerce platform built with Next.js 15, React 19, and TypeScript. This project features multiple home page layouts for different industries, comprehensive product management, shopping cart functionality, and a robust admin system.

## 🚀 Features

- **Multiple Home Page Layouts**: 8 different home page designs for various industries (Fashion, Electronics, Beauty, Books, Furniture, Sports, etc.)
- **Product Management**: Complete product catalog with categories, collections, and specifications
- **Shopping Cart**: Full cart functionality with quantity management and checkout
- **User Authentication**: Login, register, forgot password, and reset password
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Built-in dark/light theme switching
- **API Integration**: RESTful API with React Query for data fetching
- **State Management**: Redux Toolkit with persistence
- **Animations**: Framer Motion for smooth animations
- **Type Safety**: Full TypeScript implementation
- **Blog System**: Complete blog functionality with multiple layouts
- **Wishlist**: Add/remove products from wishlist
- **Search**: Advanced product search functionality

## 📋 Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ruby-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deployment

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
ruby-react/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── forgot-password/      # Forgot password page
│   │   ├── login/               # Login page
│   │   ├── register/            # Registration page
│   │   └── reset-password/      # Reset password page
│   ├── api/                      # API routes
│   │   ├── category/            # Category API endpoints
│   │   ├── collection/          # Collection API endpoints
│   │   ├── electronics/         # Electronics API endpoints
│   │   ├── post/                # Blog post API endpoints
│   │   ├── product/             # Product API endpoints
│   │   ├── sport/               # Sports API endpoints
│   │   ├── top-categories/      # Top categories API
│   │   └── wishlist/            # Wishlist API endpoints
│   ├── blog/                     # Blog pages
│   │   ├── [id]/                # Dynamic blog post
│   │   ├── blog-detail-2/       # Blog details variant 2
│   │   ├── blog-grid/           # Blog grid layout
│   │   ├── blog-list/           # Blog list layout
│   │   ├── blog-list-2/         # Blog list variant 2
│   │   └── page.tsx             # Main blog page
│   ├── cart/                     # Shopping cart page
│   ├── checkout/                 # Checkout page
│   ├── home/                     # Home page variants
│   │   ├── beauty-skin-care/    # Beauty & skincare home
│   │   ├── book-store/          # Book store home
│   │   ├── electronic/          # Electronics home
│   │   ├── furniture/           # Furniture home
│   │   ├── men-fashion/         # Men's fashion home
│   │   ├── sport-accessory/     # Sports accessories home
│   │   ├── trending-fashion/    # Trending fashion home
│   │   └── women-fashion/       # Women's fashion home
│   ├── pages/                    # Utility pages
│   │   ├── (coming)/            # Coming soon pages
│   │   ├── (contact)/           # Contact pages
│   │   ├── (store)/             # Store pages
│   │   ├── 404/                 # 404 error page
│   │   ├── about/               # About page
│   │   ├── account/             # Account management
│   │   ├── customer-feedbacks/  # Customer feedback
│   │   ├── faqs/                # FAQ page
│   │   ├── payment-confirmation/# Payment confirmation
│   │   ├── payment-failure/     # Payment failure
│   │   ├── terms/               # Terms of service
│   │   └── tracking/            # Order tracking
│   ├── products/                 # Product pages
│   │   ├── [id]/                # Dynamic product page
│   │   ├── features/            # Product features
│   │   ├── layouts/             # Product layouts
│   │   └── swatches/            # Product swatches
│   ├── providers/                # React providers
│   ├── search/                   # Search page
│   ├── shop/                     # Shop pages
│   │   ├── product_hover/       # Product hover effects
│   │   ├── shop_features/       # Shop features
│   │   └── shop_layout/         # Shop layouts
│   ├── wishlist/                 # Wishlist page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Root page
├── components/                   # Reusable components
│   ├── account/                 # Account components
│   ├── blog/                    # Blog components
│   ├── cards/                   # Card components
│   │   ├── blog/                # Blog card variants
│   │   ├── category/            # Category card variants
│   │   ├── products/            # Product card variants
│   │   └── testimonial/         # Testimonial card variants
│   ├── carousel/                # Carousel components
│   ├── cart/                    # Shopping cart components
│   ├── checkout/                # Checkout components
│   ├── comments/                # Comment components
│   ├── contact/                 # Contact components
│   ├── filter/                  # Filter components
│   ├── footer/                  # Footer component
│   ├── header/                  # Header components
│   ├── modal/                   # Modal components
│   ├── product/                 # Product components
│   ├── reusable/                # Reusable UI components
│   ├── search/                  # Search components
│   ├── services/                # Service components
│   ├── skeleton/                # Loading skeleton components
│   └── ui/                      # UI components
├── constants/                    # Application constants
│   ├── endpoint.ts              # API endpoints
│   ├── faq.ts                   # FAQ data
│   ├── filter.ts                # Filter constants
│   ├── footer.ts                # Footer data
│   └── nav.ts                   # Navigation data
├── data/                        # Static data
│   ├── books.ts                 # Book data
│   ├── categories.ts            # Category data
│   ├── collections.ts           # Collection data
│   ├── electronics.ts           # Electronics data
│   ├── order.ts                 # Order data
│   ├── pages.ts                 # Page data
│   ├── post.ts                  # Blog post data
│   ├── products.ts              # Product data
│   ├── sport.ts                 # Sports data
│   └── testimonials.ts          # Testimonial data
├── hooks/                       # Custom React hooks
│   ├── useClickOutside.ts       # Click outside hook
│   ├── useCountdown.ts          # Countdown timer hook
│   ├── useGoBack.ts             # Navigation hook
│   ├── useInfiniteScroll.ts     # Infinite scroll hook
│   └── useQueryParams.ts        # Query parameters hook
├── lib/                         # Utility libraries
│   ├── axiosConfig.ts           # Axios configuration
│   ├── classname.ts             # Class name utilities
│   ├── formatCurrency.ts        # Currency formatting
│   └── time.ts                  # Time utilities
├── public/                      # Static assets
│   ├── fonts/                   # Custom fonts
│   ├── icon/                    # Icons
│   └── img/                     # Images
│       ├── products/            # Product images
│       └── users/               # User avatars
├── service/                     # API service layer
│   ├── categories.ts            # Category services
│   ├── collection.ts            # Collection services
│   ├── electronics.ts           # Electronics services
│   ├── post/                    # Blog post services
│   ├── product/                 # Product services
│   ├── sport.ts                 # Sports services
│   └── top_category.ts          # Top category services
├── store/                       # Redux store
│   ├── cartSlice.ts             # Cart state management
│   ├── productSlice.ts          # Product state management
│   ├── wishlistSlice.ts         # Wishlist state management
│   └── hooks.ts                 # Typed hooks
├── types/                       # TypeScript type definitions
│   ├── blog.ts                  # Blog types
│   ├── cart.ts                  # Cart types
│   ├── categories.ts            # Category types
│   ├── global.ts                # Global types
│   ├── nav.ts                   # Navigation types
│   ├── order.ts                 # Order types
│   ├── pages.ts                 # Page types
│   ├── product.ts               # Product types
│   └── sport.ts                 # Sports types
├── utils/                       # Utility functions
│   ├── debounce.ts              # Debounce utility
│   ├── helper.ts                # Helper functions
│   ├── internetCheck.tsx        # Internet connectivity check
│   └── paginate.ts              # Pagination utility
├── views/                       # Page view components
│   ├── auth/                    # Authentication views
│   ├── blog/                    # Blog page views
│   ├── home/                    # Home page views
│   │   ├── beauty/              # Beauty & skincare view
│   │   ├── book/                # Book store view
│   │   ├── elect/               # Electronics view
│   │   ├── furniture/           # Furniture view
│   │   ├── home/                # Main home view
│   │   ├── men-fashion/         # Men's fashion view
│   │   ├── sport/               # Sports view
│   │   ├── trending/            # Trending fashion view
│   │   └── women-fashion/       # Women's fashion view
│   ├── pages/                   # Utility page views
│   ├── products/                # Product page views
│   └── shop/                    # Shop page views
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## 🏠 Home Page Variants

### Main Home Page
- **Route**: `/`
- **Features**: Hero banner, featured brands, flash sales, new arrivals, top categories, testimonials
- **Components**: `HomeBanner`, `FeaturedBrand`, `FlashSales`, `NewArrival`, `TopCategory`, `TestimonialSection`

### Beauty & Skincare Home
- **Route**: `/home/beauty-skin-care`
- **Features**: Beauty banner, shop by type, today's top picks, unbeatable beauty, client success stories
- **Components**: `BeautySkinBanner`, `ShopByType`, `TodaysTopPick`, `UnbeatableBeauty`, `ClientSuccessStories`

### Book Store Home
- **Route**: `/home/book-store`
- **Features**: Book store banner, book deals, shop categories, new releases, recommended books
- **Components**: `BookStoreBanner`, `BookDeal`, `BookShopCategory`, `NewReleases`, `RecommendedAndBestSeller`

### Electronics Home
- **Route**: `/home/electronic`
- **Features**: Electronics banner, top categories, trending products, brands, today's picks
- **Components**: `ElectBanner`, `ElectTopCategories`, `ElectTrendingProducts`, `ElectBrands`, `ElectTodayPicks`

### Furniture Home
- **Route**: `/home/furniture`
- **Features**: Furniture banner, best selling furniture, explore collection, happy customers
- **Components**: `FurnitureBanner`, `BestSellingFurniture`, `ExploreCollection`, `HappyCustomer`

### Men's Fashion Home
- **Route**: `/home/men-fashion`
- **Features**: Men's fashion banner, categories, new collection, coming soon products
- **Components**: `MenFashionBanner`, `MenFashionCategories`, `MenNewCollection`, `MenComingSoonProducts`

### Sports Accessories Home
- **Route**: `/home/sport-accessory`
- **Features**: Sports banner, latest sneakers, apparel section, top picks, testimonials
- **Components**: `SportBanner`, `LatestSneaker`, `ApparelSection`, `TopPicksSection`, `SportTestimonial`

### Trending Fashion Home
- **Route**: `/home/trending-fashion`
- **Features**: Trending fashion banner, categories, new arrivals, deal of the day
- **Components**: `TrendingFashionBanner`, `TrendingFashionCategories`, `NewArrivalProducts`, `DealOFTheDay`

### Women's Fashion Home
- **Route**: `/home/women-fashion`
- **Features**: Women's fashion banner, best selling, top picks, top brands, testimonials
- **Components**: `WomenFashionBanner`, `WomenBestSelling`, `WomenTopPicks`, `WomenTopBrand`, `WomenFashionTestimonial`

## 🛒 E-commerce Features

### Product Management
- **Product Cards**: Multiple product card variants with hover effects
- **Product Details**: Comprehensive product detail pages with specifications
- **Categories**: Hierarchical category system with filtering
- **Collections**: Curated product collections
- **Wishlist**: Add/remove products from wishlist with persistence
- **Search**: Advanced product search with filters

### Shopping Cart
- **Cart Management**: Add, remove, update quantities with real-time updates
- **Cart Persistence**: Cart state persists across sessions using Redux Persist
- **Checkout Process**: Multi-step checkout flow with payment integration
- **Coupon System**: Discount coupon functionality

### User Authentication
- **Login/Register**: User registration and login with validation
- **Password Recovery**: Forgot password and reset password functionality
- **Account Management**: User profile and account settings
- **Order Tracking**: Track order status and history

## 🎨 Design System

### Components
- **Cards**: Product, blog, category, testimonial cards with multiple variants
- **Forms**: Input fields, buttons, validation with React Hook Form
- **Navigation**: Header, mobile menu, breadcrumbs with responsive design
- **Layout**: Grid systems, containers, sections with Tailwind CSS
- **Animations**: Framer Motion animations and hover effects

### Styling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Dark Mode**: Built-in dark/light theme support with system preference detection
- **Responsive**: Mobile-first responsive design with breakpoints
- **Custom Components**: Reusable UI components with HeroUI integration

## 🔧 Technology Stack

### Frontend
- **Next.js 15**: React framework with App Router and Turbopack
- **React 19**: Latest React version with concurrent features
- **TypeScript**: Type-safe JavaScript with strict configuration
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Framer Motion**: Animation library for smooth transitions

### State Management
- **Redux Toolkit**: Predictable state container with RTK Query
- **React Query**: Server state management with caching and synchronization
- **Redux Persist**: State persistence for cart and user preferences

### UI Components
- **HeroUI**: Modern UI component library with accessibility features
- **Heroicons**: Beautiful SVG icons with consistent design
- **React Icons**: Popular icon library with extensive icon sets
- **Swiper**: Touch slider component for carousels and galleries

### Forms & Validation
- **React Hook Form**: Performant forms with minimal re-renders
- **React Hot Toast**: Toast notifications for user feedback

### Development Tools
- **ESLint**: Code linting with Next.js configuration
- **TypeScript**: Static type checking with strict mode
- **Turbopack**: Fast bundler for development (Next.js 15)

## 📱 Responsive Design

The application is fully responsive with mobile-first approach:
- **Mobile**: < 768px - Optimized for touch interactions
- **Tablet**: 768px - 1024px - Balanced layout for medium screens
- **Desktop**: > 1024px - Full feature set with hover effects

## 🌙 Dark Mode

Built-in dark mode support with:
- System preference detection
- Manual toggle with ThemeSwitcher component
- Persistent theme selection across sessions
- Consistent styling across all components and pages

## 🚀 Performance

- **Next.js Optimization**: Automatic code splitting, image optimization, and static generation
- **React Query**: Efficient data fetching with caching, background updates, and optimistic updates
- **Lazy Loading**: Component and image lazy loading for better performance
- **Bundle Optimization**: Tree shaking, minification, and compression
- **Turbopack**: Fast development builds with incremental compilation

## 📊 API Structure

### Endpoints
- **Categories**: `/api/category/...` - Category management
- **Collections**: `/api/collection/...` - Collection management
- **Electronics**: `/api/electronics/...` - Electronics-specific data
- **Products**: `/api/product/...` - Product management
- **Blog Posts**: `/api/post/...` - Blog post management
- **Sports**: `/api/sport/...` - Sports-specific data
- **Wishlist**: `/api/wishlist/...` - Wishlist management

### Data Flow
1. **API Routes**: Next.js API routes handle server-side logic and data fetching
2. **Service Layer**: Service functions for API calls with error handling
3. **React Query**: Client-side data fetching, caching, and synchronization
4. **Components**: UI components consume data with loading and error states

## 🔒 Security

- **Type Safety**: Full TypeScript implementation with strict type checking
- **Input Validation**: Form validation with comprehensive error handling
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **API Security**: Secure API endpoints with proper error responses

## 📈 SEO & Accessibility

- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Performance**: Core Web Vitals optimization with Next.js features
- **Semantic HTML**: Proper HTML structure with meaningful elements

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Structure
- **Components**: Reusable UI components with TypeScript
- **Views**: Page-level components with business logic
- **Services**: API service layer with error handling
- **Types**: TypeScript type definitions for all data structures
- **Utils**: Utility functions and helpers
- **Hooks**: Custom React hooks for common functionality

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using Next.js 15, React 19, and TypeScript**
