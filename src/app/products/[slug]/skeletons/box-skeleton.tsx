import {shimmer} from "@/shared/common-css";
import {HeroPropertiesSkeleton} from "@/app/products/[slug]/skeletons/hero-properties-skeleton";
import {HeroRecommendationSkeleton} from "@/app/products/[slug]/skeletons/hero-recommendation-skeleton";

export function BoxSkeleton() {
    return (
        <div className={`${shimmer} p-2 h-48 w-1/2`}></div>
    );
}