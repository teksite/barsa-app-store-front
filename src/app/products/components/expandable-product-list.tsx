"use client";

import {useState, useEffect, useId} from "react";
import {ProductBase} from "@/contracts/product";
import {ProductCard} from "@/app/products/components/expandable-product";
import {ProductModal} from "@/app/products/components/expanded-product";


interface Props {
    products: ProductBase[];
}

export default function ExpandableCardDemo({products}: Props) {
    const [active, setActive] = useState<ProductBase | null>(null);
    const id = useId();

    // Escape key listener
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActive(null);
            }
        };

        document.body.style.overflow = active ? "hidden" : "auto";
        window.addEventListener("keydown", onKeyDown);

        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    return (
        <>
            <ProductModal product={active} layoutIdPrefix={id} onClose={() => setActive(null)}/>

            <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (

                    <ProductCard product={product} layoutIdPrefix={id} onClick={setActive} key={product.id}/>
                ))}
            </ul>
        </>
    );
}
