'use client';

import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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

    group?: number;
    groupMd?: number;
    groupLg?: number;
    groupXl?: number;

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
    group = 1,
    groupMd = 1,
    groupLg = 1,
    groupXl = 1,
    loop = false,
    centered = false,
    navPrevClass = '.nav-prev-categories',
    navNextClass = '.nav-next-categories',
    paginationClass = '.sw-pagination-categories',
}) => {
    return (
        <Swiper
            modules={[Pagination, Navigation]}
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
            }}
            slidesPerGroup={group}
            breakpoints={{
                640: {
                    slidesPerView: sm ?? mobile,
                    spaceBetween: space,
                    slidesPerGroup: group ?? 1,
                },
                768: {
                    slidesPerView: md ?? sm ?? mobile,
                    spaceBetween: spaceMd,
                    slidesPerGroup: groupMd ?? group ?? 1,
                },
                1024: {
                    slidesPerView: lg ?? md ?? mobile,
                    spaceBetween: spaceLg,
                    slidesPerGroup: groupLg ?? groupMd ?? group ?? 1,
                },
                1280: {
                    slidesPerView: xl ?? lg ?? md ?? mobile,
                    spaceBetween: spaceLg,
                    slidesPerGroup: groupXl ?? groupLg ?? groupMd ?? group ?? 1,
                },
            }}>
            {children}
        </Swiper>
    );
};

export { SwiperSlide };
export default SwiperCarousel;
