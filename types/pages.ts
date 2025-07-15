export type FeedBackType = {
    name: string;
    role: string;
    image: string;
    message: string;
    rating: number;
}

export type TeamMemberType = {
    name: string;
    role: string;
    image: string;
    bio: string;
    socials: {
        facebook?: string;
        twitter?: string;
        dribbble?: string;
        github?: string;
    };
}

export type StoreCardType = {
    name: string;
    isNew?: boolean;
    email: string;
    phone: string;
    monToSat: string;
    sun: string;
    location: string;
};

export type AddressType = {
    name: string;
    address: string;
    phone: string;
    isDefault?: boolean;
    onEdit?: () => void;
    showSetDefault?: boolean;
};
