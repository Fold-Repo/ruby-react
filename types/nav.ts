export type NavLink = {
    label: string;
    href: string;
};

export type MenuItemType = NavLink;
export type DropdownItemType = NavLink;

export type NavItemType = {
    title: string;
    href?: string;
    hasDropdown?: boolean;
    linkOnly?: boolean;
    dropdownItems?: NavLink[];
    megaMenuType?: 'home' | 'product' | 'shop';
};

export interface MenuGroupType {
    title: string;
    items: NavLink[]
}

export interface HomeCategoryType {
    title: string;
    href: string;
    img: string;
    badge?: {
        label: string;
        color: string;
    };
}

export type MegaMenuType = 'home' | 'product' | 'shop' | null;
