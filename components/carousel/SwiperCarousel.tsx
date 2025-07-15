'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type SwiperCarouselProps = {
    className?: string;
    children: React.ReactNode;

    mobile?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;

    space?: number;
    spaceMd?: number;
    spaceLg?: number;

    pagination?: number;
    paginationMd?: number;
    paginationLg?: number;
    paginationXl?: number;

    loop?: boolean;
    centered?: boolean;

    navPrevClass?: string;
    navNextClass?: string;
    paginationClass?: string;
};

const SwiperCarousel: React.FC<SwiperCarouselProps> = ({
    className = '',
    children,
    mobile = 1,
    sm,
    md,
    lg,
    xl,
    space = 10,
    spaceMd = 20,
    spaceLg = 30,
    pagination = 1,
    paginationMd = 2,
    paginationLg = 3,
    paginationXl = 4,
    loop = false,
    centered = false,
    navPrevClass = '.nav-prev-categories',
    navNextClass = '.nav-next-categories',
    paginationClass = '.sw-pagination-categories',
}) => {
    return (
        <Swiper
            className={className}
            slidesPerView={mobile}
            spaceBetween={space}
            speed={1000}
            loop={loop}
            centeredSlides={centered}
            observer={true}
            observeParents={true}
            pagination={{
                el: paginationClass,
                clickable: true,
            }}
            navigation={{
                prevEl: navPrevClass,
                nextEl: navNextClass,
                // clickable: true,
            }}
            slidesPerGroup={pagination}
            breakpoints={{
                640: {
                    slidesPerView: sm ?? mobile,
                    spaceBetween: space,
                    slidesPerGroup: pagination ?? 1,
                },
                768: {
                    slidesPerView: md ?? sm ?? mobile,
                    spaceBetween: spaceMd,
                    slidesPerGroup: paginationMd ?? pagination ?? 1,
                },
                1024: {
                    slidesPerView: lg ?? md ?? mobile,
                    spaceBetween: spaceLg,
                    slidesPerGroup: paginationLg ?? paginationMd ?? pagination ?? 1,
                },
                1280: {
                    slidesPerView: xl ?? lg ?? md ?? mobile,
                    spaceBetween: spaceLg,
                    slidesPerGroup:
                        paginationXl ?? paginationLg ?? paginationMd ?? pagination ?? 1,
                },
            }}
            modules={[Pagination, Navigation]}>
            {children}
        </Swiper>
    );
};

export { SwiperSlide };
export default SwiperCarousel;
