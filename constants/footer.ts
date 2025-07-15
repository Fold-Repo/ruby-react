export type FooterLinkSection = {
    title: string;
    links: { label: string; href: string }[];
};

export const footerSections: FooterLinkSection[] = [
    {
        title: 'Information',
        links: [
            { label: 'About Us', href: '#' },
            { label: 'Our Stories', href: '#' },
            { label: 'Size Guide', href: '#' },
            { label: 'Contact Us', href: '#' },
            { label: 'Career', href: '#' },
            { label: 'My Account', href: '#' },
        ],
    },
    {
        title: 'Customer Services',
        links: [
            { label: 'Shipping', href: '#' },
            { label: 'Return & Refund', href: '#' },
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms & Conditions', href: '#' },
            { label: 'Orders FAQs', href: '#' },
            { label: 'My Wishlist', href: '#' },
        ],
    },
];

export const footerContact = {
    logo: '/img/logo/white_logo.png',
    email: 'Hello@support.com',
    phone: '+477 097-3948-098',
};

export const newsletterText =
    'Subscribe to our newsletter to stay up to date on new features, announcements and more.';
