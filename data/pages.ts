import { FeedBackType, TeamMemberType } from "@/types";
import { StoreCardType } from "@/types";

export const feedbacksData: FeedBackType[] = [
    {
        name: 'Anjali Verma',
        role: 'Customer',
        image: 'https://i.pravatar.cc/150?u=anjali.verma',
        message: 'Good effort, but there’s room for improvement in performance speed.',
        rating: 4,
    },
    {
        name: 'David Lee',
        role: 'Client',
        image: 'https://i.pravatar.cc/150?u=david.lee',
        message: 'Fantastic service! Quick delivery and great support.',
        rating: 5,
    },
    {
        name: 'Maria Gonzalez',
        role: 'Verified Buyer',
        image: 'https://i.pravatar.cc/150?u=maria.gonzalez',
        message: 'I loved the user interface. Super intuitive and clean.',
        rating: 5,
    },
    {
        name: 'James Smith',
        role: 'Customer',
        image: 'https://i.pravatar.cc/150?u=james.smith',
        message: 'The app sometimes crashes on my device. Please fix.',
        rating: 3,
    },
    {
        name: 'Chen Wei',
        role: 'Frequent Buyer',
        image: 'https://i.pravatar.cc/150?u=chen.wei',
        message: 'Responsive team and great features. Totally worth it!',
        rating: 4,
    },
    {
        name: 'Fatima Yusuf',
        role: 'Customer',
        image: 'https://i.pravatar.cc/150?u=fatima.yusuf',
        message: 'Had some login issues, but support resolved it quickly.',
        rating: 4,
    },
    {
        name: 'John Doe',
        role: 'Long-time User',
        image: 'https://i.pravatar.cc/150?u=john.doe',
        message: 'Consistent updates and attention to user feedback.',
        rating: 5,
    },
    {
        name: 'Isabella Rossi',
        role: 'Customer',
        image: 'https://i.pravatar.cc/150?u=isabella.rossi',
        message: 'Could use more themes and personalization options.',
        rating: 3,
    },
    {
        name: 'Adebayo Samuel',
        role: 'Customer',
        image: 'https://i.pravatar.cc/150?u=adebayo.samuel',
        message: 'Best customer service I’ve experienced in a long time!',
        rating: 5,
    },
    {
        name: 'Lina Müller',
        role: 'Verified User',
        image: 'https://i.pravatar.cc/150?u=lina.muller',
        message: 'Sleek design, fast loading times. Very impressed.',
        rating: 5,
    },
    {
        name: 'Kofi Mensah',
        role: 'Customer',
        image: 'https://i.pravatar.cc/150?u=kofi.mensah',
        message: 'Excellent features and very user-friendly. Highly recommend!',
        rating: 3.6,
    },
    {
        name: 'Emily Nguyen',
        role: 'Frequent User',
        image: 'https://i.pravatar.cc/150?u=emily.nguyen',
        message: 'Support was responsive and helpful. Great experience overall.',
        rating: 4.3,
    }

]

export const aboutTabContent: Record<string, string> = {
    intro: `
Welcome to Ruby, your premier destination for fashion-forward clothing and accessories. At Ruby, we pride ourselves on offering a thoughtfully curated collection of elegant and unique pieces, sourced both locally and internationally. Our store is built on a foundation of style, quality, and authenticity. Whether you're shopping for a special event or refreshing your everyday wardrobe, Ruby offers timeless pieces that reflect your individuality.
  `,

    vision: `
Our vision is to redefine the fashion shopping experience by blending creativity, culture, and customer connection. We aspire to be more than just a store — we aim to be a community where personal style is celebrated and inspired. We envision a world where fashion empowers confidence, encourages sustainability, and supports both emerging and established designers.
  `,

    apart: `
What sets us apart is our dedication to exceptional curation and customer satisfaction. Unlike mass-market retailers, we focus on limited-edition collections, exclusive collaborations, and pieces that tell a story. Every item we stock is chosen with care, ensuring it meets our standards for craftsmanship, style, and relevance. We also believe in personalized service, offering styling advice and tailored recommendations for every shopper.
  `,

    commitment: `
At Ruby, our commitment goes beyond fashion. We are dedicated to ethical sourcing, environmental responsibility, and supporting local artisans. We believe in giving back to the communities we operate in, and we regularly partner with charitable organizations to make a meaningful impact. Our customers can trust that every purchase they make supports a brand that values integrity, transparency, and positive change.
  `
};

export const teamMembers: TeamMemberType[] = [
    {
        name: 'Samuel Green',
        role: 'Founder/CEO',
        image: '/img/team/1.jpg',
        bio: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        socials: {
            facebook: '#',
            twitter: '#',
            dribbble: '#',
            github: '#',
        },
    },
    {
        name: 'Thomas Lean',
        role: 'Sales Director',
        image: '/img/team/2.jpg',
        bio: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        socials: {
            facebook: '#',
            twitter: '#',
            dribbble: '#',
            github: '#',
        },
    },
    {
        name: 'Jese Leos',
        role: 'Manager',
        image: '/img/team/3.jpg',
        bio: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        socials: {
            facebook: '#',
            twitter: '#',
            dribbble: '#',
            github: '#',
        },
    },
    {
        name: 'Leslie Livingston',
        role: 'Product Manager',
        image: '/img/team/4.jpg',
        bio: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        socials: {
            facebook: '#',
            twitter: '#',
            dribbble: '#',
            github: '#',
        },
    },
];

export const storeList: StoreCardType[] = [
    {
        name: "London Flagship",
        isNew: true,
        email: "support@rubyfashion.co.uk",
        phone: "+441234567890",
        monToSat: "10am - 8pm",
        sun: "12pm - 6pm",
        location: "123 Oxford Street London, W1D.",
    },
    {
        name: "Miami Office",
        isNew: false,
        email: "support@rubyfashion.co.uk",
        phone: "+441234567890",
        monToSat: "10am - 8pm",
        sun: "12pm - 6pm",
        location: "123 Oxford Street London, W1D.",
    },
    {
        name: "New York Office",
        isNew: false,
        email: "support@rubyfashion.co.uk",
        phone: "+441234567890",
        monToSat: "10am - 8pm",
        sun: "12pm - 6pm",
        location: "123 Oxford Street London, W1D.",
    },
    {
        name: "London Flagship",
        isNew: true,
        email: "support@rubyfashion.co.uk",
        phone: "+441234567890",
        monToSat: "10am - 8pm",
        sun: "12pm - 6pm",
        location: "123 Oxford Street London, W1D.",
    },
    {
        name: "Miami Office",
        isNew: false,
        email: "support@rubyfashion.co.uk",
        phone: "+441234567890",
        monToSat: "10am - 8pm",
        sun: "12pm - 6pm",
        location: "123 Oxford Street London, W1D.",
    },
    {
        name: "New York Office",
        isNew: false,
        email: "support@rubyfashion.co.uk",
        phone: "+441234567890",
        monToSat: "10am - 8pm",
        sun: "12pm - 6pm",
        location: "123 Oxford Street London, W1D.",
    },
];

export const addresses = [
    {
        name: "Sam Ruby",
        address: "1234 Fashion Street, Suite 567 New York",
        phone: "(212) 555-1234 / (212) 555-1234",
        isDefault: true,
    },
    {
        name: "Sam Ruby",
        address: "1234 Fashion Street, Suite 567 New York",
        phone: "(212) 555-1234 / (212) 555-1234",
        isDefault: false,
    },
    {
        name: "Sam Ruby",
        address: "1234 Fashion Street, Suite 567 New York",
        phone: "(212) 555-1234 / (212) 555-1234",
        isDefault: false,
    },
];
