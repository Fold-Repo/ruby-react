export const formatDigits = (num: number): [string, string] => {
    const str = num.toString().padStart(2, '0');
    return [str[0], str[1]];
}

/**
 * Calculates the percentage off between original price and discounted price.
 * @param originalPrice - The original price before discount.
 * @param discountedPrice - The discounted (current) price.
 * @returns The percentage off as a number (e.g. 20 for 20% off).
 */
export function getDiscountPercentage(originalPrice: number | string, discountedPrice: number | string): number {

    const original = Number(originalPrice);
    const discounted = Number(discountedPrice);

    if(!original || original <= 0 || discounted >= original) {
        return 0;
    }

    const discount = ((original - discounted) / original) * 100;
    return Math.round(discount);
}

export const removeEmptyFields = (obj: Record<string, any>): Record<string, any> => {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, v]) => v !== "" && v !== null)
    );
};