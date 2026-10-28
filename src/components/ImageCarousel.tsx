"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
    images: string[];
    alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {

    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
    const next = () => setCurrent((i) => (i + 1) % images.length);

    return (
        <div
        className="relative"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${alt} screenshots`}
        tabIndex={0}
        onKeyDown={(e) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        }}>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}>
                    {images.map((src, i) => (
                        <div key={src} className="relative aspect-video w-full shrink-0" aria-hidden={i !== current}>
                            <Image
                            src={src}
                            alt={`${alt} screenshot ${i + 1} of ${images.length}`}
                            fill
                            sizes="(min-width: 1024px) 1024px, 100vw"
                            className="object-cover"
                            priority={i === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 border border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-white transition-colors duration-200 cursor-pointer">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 border border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-white transition-colors duration-200 cursor-pointer">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className="flex items-center justify-center gap-2 mt-4">
                {images.map((src, i) => (
                    <button
                    key={src}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to image ${i + 1}`}
                    aria-current={i === current}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === current ? "w-6 bg-gray-700" : "w-1.5 bg-gray-300 hover:bg-gray-400"}`}
                    />
                ))}
            </div>
        </div>
    );
}
