import React, { useState, useMemo } from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Input } from "../ui";
import { debounce } from "@/utils";

interface PriceRange {
    min?: number;
    max?: number;
}

interface PriceRangeInputProps {
    priceRange?: PriceRange;
    updateQueryParams: (params: { minPrice?: string; maxPrice?: string }) => void;
}

const PriceRangeInput: React.FC<PriceRangeInputProps> = ({
    priceRange,
    updateQueryParams,
}) => {
    const [minPrice, setMinPrice] = useState(priceRange?.min?.toString() || "");
    const [maxPrice, setMaxPrice] = useState(priceRange?.max?.toString() || "");

    const debouncedMinPriceUpdate = useMemo(
        () =>
            debounce((value: string) => {
                updateQueryParams({ minPrice: value });
            }, 600),
        [updateQueryParams]
    );

    const debouncedMaxPriceUpdate = useMemo(
        () =>
            debounce((value: string) => {
                updateQueryParams({ maxPrice: value });
            }, 600),
        [updateQueryParams]
    );

    return (
        <div className="flex flex-col gap-y-3">

            <div className="flex items-center justify-between gap-x-2">

                <h2 className="text-[13px] font-bold">Product Price</h2>

            </div>

            <div className="space-y-2 text-[13px] pt-1">
                <Input
                    name="minPrice"
                    placeholder="Min Price"
                    value={minPrice}
                    isCurrency
                    onChange={(e) => {
                        setMinPrice(e.target.value);
                        debouncedMinPriceUpdate(e.target.value);
                    }}
                    inputSize="sm"
                    className="text-xs"
                    radius="full"
                    endContent={
                        <CurrencyDollarIcon className="w-5 h-5 text-muted-foreground" />
                    }
                />
                <Input
                    name="maxPrice"
                    placeholder="Max Price"
                    value={maxPrice}
                    isCurrency
                    onChange={(e) => {
                        setMaxPrice(e.target.value);
                        debouncedMaxPriceUpdate(e.target.value);
                    }}
                    inputSize="sm"
                    className="text-xs"
                    radius="full"
                    endContent={
                        <CurrencyDollarIcon className="w-5 h-5 text-muted-foreground" />
                    }
                />
            </div>

        </div>
    );
};

export default PriceRangeInput;
