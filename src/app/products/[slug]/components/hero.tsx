import Image from "next/image";
import {ProductType} from "@/contracts/product";
import {RecommendationProduct} from "@/app/products/[slug]/components/recommendation";
import {Properties} from "@/app/products/[slug]/components/properties";
import Link from "next/link";
import {IconPicker} from "@/app/components/icon";

export function Hero({product}: { product: ProductType }) {
    return (
        <header className="py-6 bg-radial-[at_85%_0%] to-70% to-transparent " id="productHeader">
            <section className="inner-container border-b border-zinc-600 py-6 relative">
                <figure className="flex items-center gap-3">
                    <Image src={product.featured_image ?? ''} alt={product.title} width={100} height={100}
                           fetchPriority="high" decoding="sync" priority className="rounded-xl"/>
                    <figcaption className="flex flex-col gap-3 justify-center">
                        <h1 className="mb-0">
                            {product?.title}
                        </h1>
                        {
                            product?.owner?.url ?
                            <a href={product?.owner?.url} rel="external" className="link font-semibold">
                                {product?.owner.title}
                            </a>:
                            <span className="link font-semibold">
                                {product?.owner.title}
                            </span>
                        }
                    </figcaption>
                </figure>
                { product.excerpt &&  <p className="mt-3">{product?.excerpt}</p> }
                <Properties properties={product.properties} />
                <RecommendationProduct value={product.recommend_type || 1} />

                <Link href={`/products/`} className={'absolute top-6 end-6 text-main_color flex items-center gap-1'}>
                    {'همه محصولات'}
                    <IconPicker icon={'arrow-left'} width={14} height={14}/>
                </Link>
            </section>
        </header>

    );
}

