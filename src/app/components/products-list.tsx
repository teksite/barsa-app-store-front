import {ProductBase} from "@/contracts/product";
import {Box} from "@/components/Box";
import Link from "next/link";
import Image from "next/image";

export function ProductsList({products =[]}: { products?: ProductBase[] }) {
    if (!products || !products.length) return null;

    return (
        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-12">
            {products.map((product: ProductBase) => {
                return (
                    <li key={product.id}>
                        <Box>
                            <Link href={`/products/${product.id}`}>
                                <figure>
                                    {product.featured_image && <Image src={product.featured_image} alt={product.title}
                                            className="rounded-lg mb-3" decoding="async" fetchPriority="low"
                                            loading="lazy"
                                            width="100" height="100"/>}
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
                            </Link>
                        </Box>
                    </li>
                );
            })}
        </ul>
    );
}