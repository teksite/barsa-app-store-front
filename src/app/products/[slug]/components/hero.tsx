"use client";

import { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";

import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/contracts/product";
import { RecommendationProduct } from "@/app/products/[slug]/components/recommendation";
import { Properties } from "@/app/products/[slug]/components/properties";
import { IconPicker } from "@/components/icon";

export function Hero({ product }: { product: ProductType }) {
    const [bg, setBg] = useState("");
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!imgRef.current) return;

        const colorThief = new ColorThief();

        const handleLoad = () => {
            try {
                const color = colorThief.getColor(imgRef.current!);
                setBg(`radial-gradient(at 85% 0%, rgba(${color[0]},${color[1]},${color[2]},0.4) 0%, transparent 70%)`);
            } catch (err) {
                console.error("ColorThief error:", err);
            }
        };

        if (imgRef.current.complete) {
            handleLoad();
        } else {
            imgRef.current.addEventListener("load", handleLoad);
        }
    }, []);

    return (
        <header
            className="py-6"
            id="productHeader"
            style={{ backgroundImage: bg }}
        >
            <section className="inner-container border-b border-zinc-600 py-6 relative">
                <figure className="flex items-center gap-3">

                    {/* Hidden image only for color extraction */}
                    <img
                        ref={imgRef}
                        src={product.featured_image ?? ""}
                        crossOrigin="anonymous"
                        alt="hidden-color-img"
                        className='hidden'
                    />

                    {/* Visible Product Image */}
                    <Image
                        src={product.featured_image ?? ""}
                        alt={product.title}
                        width={100}
                        height={100}
                        priority
                        className="rounded-xl"
                    />

                    <figcaption className="flex flex-col gap-3 justify-center">
                        <h1 className="mb-0">{product?.title}</h1>

                        {product?.owner?.url ? (
                            <a href={product?.owner?.url} rel="external" className="link font-semibold">
                                {product?.owner.title}
                            </a>
                        ) : (
                            <span className="link font-semibold">{product?.owner.title}</span>
                        )}
                    </figcaption>
                </figure>

                {product.excerpt && <p className="mt-3">{product?.excerpt}</p>}

                <Properties properties={product.properties} />
                <RecommendationProduct value={product.recommend_type || 1} />

                <Link
                    href={`/products/`}
                    className="absolute top-6 end-6 text-main_color flex items-center gap-1"
                >
                    همه محصولات
                    <IconPicker icon={"arrow-left"} width={14} height={14} />
                </Link>
            </section>
        </header>
    );
}
