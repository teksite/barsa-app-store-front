import {shimmer} from "@/shared/common-css";

export function HeroRecommendationSkeleton() {
    return (
        <div className={`${shimmer} h-1 p-2 w-64 mt-6`}></div>
    );
}