import { shimmer } from "@/shared/common-css";
import { HeroPropertiesSkeleton } from "@/app/products/[slug]/components/skeletons/hero-properties-skeleton";
import { HeroRecommendationSkeleton } from "@/app/products/[slug]/components/skeletons/hero-recommendation-skeleton";
import { ProductBase } from "@/contracts/product";

export function ProductListSkeleton() {
    const items = Array.from({ length: 25 });

    return (
        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((_, i) => (
                <li key={i}>
                    <div className={`${shimmer} p-2 h-48 w-full`}></div>
                </li>
            ))}
        </ul>
    );
}
