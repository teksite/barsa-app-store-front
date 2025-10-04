"use client";

import {motion, AnimatePresence} from "motion/react";
import {ProductBase} from "@/contracts/product";
import {useRef} from "react";
import {useOutsideClick} from "@/hooks/use-outside-click";
import Image from "next/image";
import {RecommendationProduct} from "@/app/products/[slug]/components/recommendation";
import Link from "next/link";
import {SafeImage} from "@/components/safe-Image";

interface ProductModalProps {
    product: ProductBase | null;
    layoutIdPrefix: string;
    onClose: () => void;
}

export function ProductModal({product, layoutIdPrefix, onClose}: ProductModalProps) {
    const ref = useRef<HTMLDivElement>(null);
    useOutsideClick(ref, onClose);

    return (
        <AnimatePresence>
            {product && (
                <>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 bg-black/20 backdrop-blur-xs z-10"/>
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.div
                            layoutId={`product-${product.title}-${layoutIdPrefix}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white sm:rounded-3xl overflow-hidden">
                            <div className='p-6'>
                                <div className='flex items-start gap-6 justify-start mb-6'>
                                    {product.featured_image &&
                                        <motion.div layoutId={`image-${product.title}-${layoutIdPrefix}`}>
                                            <SafeImage src={product.featured_image} alt={product.title}
                                                       className="rounded-lg" decoding="async"
                                                       fetchPriority="low"
                                                       loading="lazy" width="100" height="100"/>
                                        </motion.div>
                                    }
                                    <div className="py-3">
                                        <motion.h3
                                            layoutId={`title-${product.title}-${layoutIdPrefix}`}
                                            className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
                                            {product.title}
                                        </motion.h3>
                                        <motion.h3 layoutId={`recommend_type-${product.title}-${layoutIdPrefix}`}>
                                            <RecommendationProduct value={product.recommend_type} showTitle={true}/>
                                        </motion.h3>
                                        <div>
                                            {product.owner.title}
                                        </div>

                                    </div>
                                </div>
                                <div className="">
                                    <p className="text-neutral-600 dark:text-neutral-400 text-base">
                                        {product.excerpt}
                                    </p>
                                    { product.last_version && product.last_version.published_at &&
                                        <div className="mt-3 flex items-center justify-start gap-3 text-sm">
                                             <span>
                                                {'آخرین نگارش منتشر شده'}:
                                            </span>
                                            <span>
                                                {product.last_version.published_at}
                                            </span>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className='flex'>
                                <button type="button" onClick={onClose}
                                        className="w-full p-3 border border-zinc-300 hover:bg-zinc-300">
                                    بستن
                                </button>
                                <Link href={`/products/${product.slug}`}
                                      className="text-center w-full p-3 border border-zinc-300 hover:bg-zinc-300">
                                    مشاهده جزییات
                                </Link>
                            </div>
                        </motion.div>

                    </div>
                </>
            )}
        </AnimatePresence>
    );
}

export const CloseIcon = () => (
    <motion.svg
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.05}}}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-black"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M18 6l-12 12"/>
        <path d="M6 6l12 12"/>
    </motion.svg>
);
