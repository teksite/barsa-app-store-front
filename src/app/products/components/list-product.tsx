import {ProductBase} from "@/contracts/product";
import {RecommendationProduct} from "@/app/products/[slug]/components/recommendation";
import Link from "next/link";
import Image from "next/image";

export function ListProduct({products}: { products: ProductBase[] }) {
    return (
        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product: ProductBase) => (
                <li key={product.id}>
                    <Link href={`/products/${product.slug}`}>
                        <div className="border border-slate-300 bg-white rounded-xl p-3 select-none">
                            <div className="flex products-start justify-between gap-3 items-start">
                                {product.featured_image &&
                                    <Image src={product.featured_image} alt={product.title}
                                           className="rounded-lg mb-6" fetchPriority="low"
                                           decoding="async" loading="lazy"
                                           width="100" height="100"/>
                                }
                                <RecommendationProduct value={product.recommend_type} showTitle={false}/>
                            </div>
                            <div className="font-bold">
                                {product.title}
                                <span className='text-xs'>({product.owner.title})</span>
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
