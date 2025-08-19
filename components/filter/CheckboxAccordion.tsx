'use client';

import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { SearchInput } from "../search";

interface DataItem {
    key: string;
    label: string;
}

interface SelectionAccordionProps {
    title: string;
    data: DataItem[];
    type: "checkbox" | "radio";
    search?: boolean;
    onChange?: (selected: string) => void;
    initialSelectedKeys?: string[];
    maxHeight?: number;
}

const SelectionAccordion: React.FC<SelectionAccordionProps> = ({
    title,
    data,
    type,
    search = true,
    onChange,
    initialSelectedKeys = [],
    maxHeight = 250,
}) => {

    const [isOpen, setIsOpen] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedKeys, setSelectedKeys] = useState<string[]>(initialSelectedKeys);

    const filteredData = data.filter((item) =>
        item.label.toLowerCase().includes(searchTerm)
    );

    const toggleSelect = (key: string) => {
        let updatedSelected: string[];

        if (type === "radio") {
            updatedSelected = [key];
        } else {
            if (selectedKeys.includes(key)) {
                updatedSelected = selectedKeys.filter((k) => k !== key);
            } else {
                updatedSelected = [...selectedKeys, key];
            }
        }

        setSelectedKeys(updatedSelected);

        if (onChange) {
            onChange(type === "radio" ? key : updatedSelected.join(","));
        }
    };

    const clearAll = () => {
        setSelectedKeys([]);
        if (onChange) {
            onChange("");
        }
    };

    return (
        <div className="space-y-3">

            <div className="flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setIsOpen((prev) => !prev);
                }}>

                <span className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{title}</span>

                {selectedKeys.length > 0 && type === "checkbox" ? (
                    <button
                        type="button"
                        className="text-xs font-medium text-danger dark:text-red-400"
                        onClick={(e) => {
                            e.stopPropagation();
                            clearAll();
                        }}>
                        Clear All
                    </button>
                ) : (
                    <ChevronRightIcon
                        className={`w-4 h-4 text-gray-700 dark:text-gray-300 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                    />
                )}
            </div>

            {isOpen && (
                <>
                    {search && (
                        <SearchInput
                            className="py-2.5 text-xs !border !border-gray-500 dark:!border-gray-600 rounded-lg dark:bg-gray-800 dark:text-gray-200"
                            placeholder="Search"
                            onSearch={setSearchTerm}
                        />
                    )}

                    <div className="overflow-auto scrollbar-thin flex flex-col gap-y-3 pt-2"
                        style={{ maxHeight }}>

                        {filteredData.length > 0 ? (
                            filteredData.map(({ key, label }) => (
                                <label
                                    key={key}
                                    className="flex items-center gap-2 cursor-pointer select-none dark:text-gray-200">
                                    <input
                                        type={type}
                                        name={`selection-${title}`}
                                        className={`
                                                cursor-pointer size-4 
                                                text-black checked:bg-black bg-gray-200 border-gray-300
                                                dark:bg-gray-700 dark:checked:bg-gray-900 dark:border-gray-600
                                                focus:outline-none focus:ring-0 ring-offset-0
                                                ${type === 'radio' ? 'rounded-full' : 'rounded'}
                                                `}
                                        checked={selectedKeys.includes(key)}

                                        onChange={() => toggleSelect(key)}
                                    />
                                    <span className="text-[13px] font-medium text-gray-600 dark:text-gray-300">{label}</span>
                                </label>
                            ))
                        ) : (
                            <p className="text-sm text-gray-500 dark:text-gray-400">No results found.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default SelectionAccordion;
