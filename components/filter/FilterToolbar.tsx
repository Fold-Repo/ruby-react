'use client';

import React from 'react';
import { cn } from '@/lib';
import Dropdown from '../Dropdown';
import { GridSwitcher } from '../reusable';
import FilterToggle from './FilterToggle';
import { FilterDataType } from '@/types';
import { useQueryParams } from '@/hooks';
import DropdownFilterToggle from './DropdownFilterToggle';

const sortOptions = [
    { label: 'Best Selling', value: 'best-selling' },
    { label: 'Alphabetically, A - Z', value: 'az' },
    { label: 'Alphabetically, Z - A', value: 'za' },
    { label: 'Price low to high', value: 'price-low' },
    { label: 'Price high to low', value: 'price-high' },
];

type FilterToolbarProps = {
    data: FilterDataType;
    loading?: boolean;
    className?: string;
    selectedGrid: string;
    selectedSort: string;
    showFilterToggle?: boolean;
    showGridSwitcher?: boolean;
    showSortDropdown?: boolean;
    type?: 'sidebar' | 'dropdown';
};


const FilterToolbar: React.FC<FilterToolbarProps> = ({
    data,
    loading,
    className,
    selectedGrid,
    selectedSort,
    showFilterToggle,
    showGridSwitcher,
    showSortDropdown,
    type = 'sidebar'
}) => {

    const { updateQueryParams } = useQueryParams()

    return (
        <div className={cn(
            'flex flex-wrap sm:flex-nowrap items-center gap-4 justify-center sm:justify-between relative',
            className
        )}>

            {showSortDropdown !== false && (
                <Dropdown
                    label="Sort by:"
                    options={sortOptions}
                    selected={selectedSort}
                    onSelect={(value) => updateQueryParams({ sort: value })}
                />
            )}

            {/* Grid Switcher */}
            {showGridSwitcher !== false && (
                <GridSwitcher
                    selected={selectedGrid}
                    onSelect={(value) => updateQueryParams({ grid: value })}
                />
            )}

            {/* Filter Toggle Button */}
            {showFilterToggle !== false && (
                <>
                    {type === 'sidebar' && <FilterToggle loading={loading} data={data} />}
                    {type === 'dropdown' && <DropdownFilterToggle loading={loading} data={data} />}
                </>
            )}

        </div>
    );
};

export default FilterToolbar;
