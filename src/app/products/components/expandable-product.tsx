"use client";

import {motion} from "motion/react";
import {ProductBase} from "@/contracts/product";
import Image from "next/image";
import {RecommendationProduct} from "@/app/products/[slug]/components/recommendation";
import Link from "next/link";

interface ProductCardProps {
    product: ProductBase;
    layoutIdPrefix: string;
    onClick: (product: ProductBase) => void;
}

export function ProductCard({product, layoutIdPrefix, onClick}: ProductCardProps) {
    return (
        <div className="border border-slate-300 bg-white rounded-xl select-none">
            <motion.div className=' cursor-pointer  p-3 '
                layoutId={`product-${product.title}-${layoutIdPrefix}`}
                key={product.id}
                onClick={() => onClick(product)}>
                <div>
                    <div className="flex products-start justify-between gap-3 items-start mb-6">
                        <motion.div layoutId={`image-${product.title}-${layoutIdPrefix}`}>
                            {product.featured_image &&
                                <Image width={100} height={100} loading='lazy' fetchPriority='low' decoding='async'
                                       src={product.featured_image} alt={product.title} className="rounded-lg"/>}

                        </motion.div>
                        <motion.div className={'justify-self-end'}
                                    layoutId={`recommend_type-${product.title}-${layoutIdPrefix}`}>
                            <RecommendationProduct value={product.recommend_type} showTitle={false}/>
                        </motion.div>
                    </div>
                    <motion.span
                        layoutId={`title-${product.title}-${layoutIdPrefix}`}
                        className="h4">
                        {product.title}
                    </motion.span>
                </div>
            </motion.div>
            <div className='flex justify-end py-1 px-3 border-t border-zinc-300'>
                <Link href={`/products/${product.slug}`}
                      className="">
                    مشاهده جزییات
                </Link>
            </div>
        </div>
    );
}
