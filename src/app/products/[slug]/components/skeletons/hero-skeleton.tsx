import {shimmer} from "@/shared/common-css";
import {HeroPropertiesSkeleton} from "@/app/products/[slug]/components/skeletons/hero-properties-skeleton";
import {HeroRecommendationSkeleton} from "@/app/products/[slug]/components/skeletons/hero-recommendation-skeleton";

export function HeroSkeleton() {
    return (
        <div className="py-6">
            <div className="inner-container border-b border-zinc-600 py-6">
                <div className="flex items-center gap-3">
                    <div className={`w-[100px] h-[100px] ${shimmer}`}> </div>
                    <div className="flex flex-col gap-3 justify-center">
                        <span className={`mb-0 p-3 w-32 h-3  ${shimmer}`}> </span>
                        <span className={`mb-0 p-1 w-16 h-1  ${shimmer}`}> </span>
                    </div>
                </div>
                <div className={`mt-3 w-64 p-2 h-1 ${shimmer}`}></div>
                <HeroPropertiesSkeleton />
                <HeroRecommendationSkeleton />
            </div>
        </div>
    );
}