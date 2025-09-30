import {shimmer} from "@/shared/common-css";
import {HeroPropertiesSkeleton} from "@/app/products/[slug]/components/skeletons/hero-properties-skeleton";
import {HeroRecommendationSkeleton} from "@/app/products/[slug]/components/skeletons/hero-recommendation-skeleton";

export function VersionSkeleton() {
    return (
        <div className='space-y-6'>
            <div className={`${shimmer} p-2 h-24`}></div>
            <div className={`${shimmer} p-2 h-24`}></div>
            <div className={`${shimmer} p-2 h-24`}></div>
            <div className={`${shimmer} p-2 h-24`}></div>
            <div className={`${shimmer} p-2 h-24`}></div>
        </div>
    );
}