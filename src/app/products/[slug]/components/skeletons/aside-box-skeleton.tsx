import {shimmer} from "@/shared/common-css";
import {HeroPropertiesSkeleton} from "@/app/products/[slug]/components/skeletons/hero-properties-skeleton";
import {HeroRecommendationSkeleton} from "@/app/products/[slug]/components/skeletons/hero-recommendation-skeleton";

export function AsideBoxSkeleton() {
    return (
        <div className={`${shimmer} p-2 h-48 w-full`}></div>
    );
}