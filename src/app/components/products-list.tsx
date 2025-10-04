import {ProductBase} from "@/contracts/product";
import {Box} from "@/components/Box";
import Link from "next/link";
import Image from "next/image";
import {IconPicker} from "@/components/icon";
import {SafeImage} from "@/components/safe-Image";

export function ProductsList({products = []}: { products?: ProductBase[] }) {
    if (!products || !products.length) return null;

    return (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {products.map((product: ProductBase) => {
                return (
                    <li key={product.id} className={'relative overflow-hidden group p-1'}>
                        <Box className="relative z-10">
                            <figure>
                                {product.featured_image &&
                                    <SafeImage src={product.featured_image} alt={product.title}
                                           className="rounded-lg mb-3" decoding="async"
                                           fetchPriority="low"
                                           loading="lazy" width="100" height="100"/>}
                                <figcaption>
                                    <h3>
                                        {product.title}
                                    </h3>
                                </figcaption>
                                {product.excerpt &&
                                    <p>
                                        {product.excerpt}
                                    </p>
                                }
                            </figure>
                        </Box>
                        <div
                            className='flex items-center justify-end pe-3 lg:-translate-y-16 transition-all duration-150 ease-linear lg:group-hover:translate-y-0'>
                            <span className='bg-white px-3 py-1 rounded-b-xl shadow'>
                                <Link href={`/products/${product.slug}`}
                                      className='flex items-center justify-center gap-1'>
                                {'مشاهده'}
                                    <IconPicker icon={'arrow-left'} width={14} height={14}/>
                            </Link>
                            </span>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}