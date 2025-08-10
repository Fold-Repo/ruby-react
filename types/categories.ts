export type MenCollectionType = {
    id: string;
    name: string;
    brand: string;
    image: string;
}

export type BrandType = {
    id: string | number;
    name: string;
    image: string;
};

export type ElectCategoryType = {
    id: string, 
    name: string, 
    image: string
    count?: number
}