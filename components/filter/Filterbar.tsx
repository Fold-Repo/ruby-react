'use client';

import React, { useState } from 'react';
import { useQueryParams } from '@/hooks';
import { FilterDataType } from '@/types';
import SelectionAccordion from './CheckboxAccordion';
import PriceRangeInput from './PriceRangeInput';
import { Button } from '@heroui/react';
import { FilterSkeleton } from '../skeleton';
import { cn } from '@/lib';

interface FilterbarProps {
    data: FilterDataType;
    type?: 'immediate' | 'apply';
    close?: () => void;
    loading?: boolean;
    grid?: boolean;
}

const Filterbar: React.FC<FilterbarProps> = ({ data, type = 'immediate', close, loading, grid }) => {
    const {
        categories,
        stockOptions,
        priceRange,
        sizes,
        colors,
        brands,
    } = data;

    const { searchParams, updateQueryParams, removeQueryParams } = useQueryParams();
    const [localParams, setLocalParams] = useState<Record<string, string>>({});

    const handleParamChange = (param: string) => (value: string) => {
        if (type === 'immediate') {
            updateQueryParams({ [param]: value });
        } else {
            setLocalParams(prev => ({
                ...prev,
                [param]: value
            }));
        }
    };

    const handleClearAll = () => {
        removeQueryParams([
            'category',
            'stock',
            'minPrice',
            'maxPrice',
            'size',
            'color',
            'brand'
        ]);
        close?.();
    };

    const handleApply = () => {
        if (type === 'apply') {
            updateQueryParams(localParams);
            close?.();
        }
    };

    const getParamValue = (param: string) => {
        return searchParams.get(param)?.split(',') || [];
    };

    if (loading) return <FilterSkeleton girid={grid} />;

    return (
        <div className={cn(type === 'immediate' ? 'sticky top-24' : '', 
                grid ? 'grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-3 pt-5' : 'space-y-7 px-3 pt-5')}>

            {/* Column 1: Categories + Stock */}
            <div className="space-y-10">

                {categories?.length > 0 && (
                    <SelectionAccordion
                        title="Product Categories"
                        data={categories.map(cat => ({
                            key: cat.slug,
                            label: `${cat.name} (${cat.count})`
                        }))}
                        type="checkbox"
                        onChange={handleParamChange('category')}
                        initialSelectedKeys={getParamValue('category')}
                    />
                )}

                {stockOptions?.length > 0 && (
                    <SelectionAccordion
                        title="Available Stock"
                        data={stockOptions.map(option => ({
                            key: option.id,
                            label: `${option.label} (${option.count})`
                        }))}
                        type="radio"
                        search={false}
                        onChange={handleParamChange('stock')}
                        initialSelectedKeys={getParamValue('stock')}
                    />
                )}
            </div>

            {/* Column 2: Price Range + Sizes */}
            <div className="space-y-5">
                <PriceRangeInput
                    priceRange={priceRange}
                    updateQueryParams={
                        type === 'immediate'
                            ? updateQueryParams
                            : params => setLocalParams(prev => ({ ...prev, ...params }))
                    }
                />

                {sizes?.length > 0 && (
                    <SelectionAccordion
                        title="Sizes"
                        data={sizes.map(size => ({
                            key: size,
                            label: size.toUpperCase()
                        }))}
                        type="checkbox"
                        search={true}
                        onChange={handleParamChange('size')}
                        initialSelectedKeys={getParamValue('size')}
                    />
                )}
            </div>

            {/* Column 3: Brands */}
            <div className="space-y-5">
                {brands?.length > 0 && (
                    <SelectionAccordion
                        title="Available Brands"
                        data={brands.map(brand => ({
                            key: brand.label,
                            label: `${brand.label} (${brand.count})`
                        }))}
                        type="checkbox"
                        search={true}
                        onChange={handleParamChange('brand')}
                        initialSelectedKeys={getParamValue('brand')}
                    />
                )}
            </div>

            {/* Column 4: Colors */}
            <div className="space-y-5">
                {colors?.length > 0 && (
                    <SelectionAccordion
                        title="Color"
                        data={colors.map(color => ({
                            key: color.name,
                            label: color.name
                        }))}
                        type="checkbox"
                        search={false}
                        onChange={handleParamChange('color')}
                        initialSelectedKeys={getParamValue('color')}
                    />
                )}
            </div>

            {type === 'apply' && (
                <div className="flex items-center justify-between w-full gap-5 pt-12 px-3">

                    <Button
                        size="md"
                        variant="light"
                        className="w-full !text-xs"
                        onPress={handleClearAll}>
                        Clear all
                    </Button>

                    <Button
                        size="md"
                        className="bg-black text-white w-full !text-xs"
                        onPress={handleApply}>
                        Apply
                    </Button>

                </div>
            )}

        </div>
    );
};

export default Filterbar;
