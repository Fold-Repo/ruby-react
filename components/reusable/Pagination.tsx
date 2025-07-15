"use client";

import { cn } from "@/lib";
import { Pagination as HeroPagination } from "@heroui/react";
import { useEffect, useState } from "react";

interface PaginationProps {
    initialPage?: number;
    total: number;
    perPage?: number;
    size?: "sm" | "md" | "lg";
    className?: string;
    onChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    initialPage = 1,
    total,
    perPage = 10,
    size = "sm",
    className,
    onChange,
}) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    useEffect(() => {
        setCurrentPage(initialPage);
    }, [initialPage]);

    const totalPages = Math.ceil(total / perPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        onChange?.(page); 
    };

    if (totalPages <= 1) return null; 

    return (
        <div className={cn("flex justify-center", className)}>
            <HeroPagination
                total={totalPages}
                page={currentPage}
                size={size}
                onChange={handlePageChange}
                showControls
            />
        </div>
    );
};

export default Pagination;
