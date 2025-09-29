import {shimmer} from "@/shared/common-css";
import {HeroPropertiesSkeleton} from "@/app/products/[slug]/components/skeletons/hero-properties-skeleton";
import {HeroRecommendationSkeleton} from "@/app/products/[slug]/components/skeletons/hero-recommendation-skeleton";

export function BodySkeleton() {
    return (
      <div className=''>
          <div className="space-y-3 mb-12">
              <div className={`${shimmer} p-2 h-2 w-16`}></div>
              <div className={`${shimmer} p-2 h-2 w-full`}></div>
              <div className={`${shimmer} p-2 h-2 w-full`}></div>
              <div className={`${shimmer} p-2 h-2 w-full`}></div>
              <div className={`${shimmer} p-2 h-2 w-full`}></div>
          </div>
          <div className="space-y-3 mb-12">
              <div className={`${shimmer} p-2 h-2 w-32`}></div>
              <div className={`${shimmer} p-2 h-2 w-full`}></div>
              <div className={`${shimmer} p-2 h-2 w-full`}></div>
              <div className={`${shimmer} p-2 h-2 w-full`}></div>
              <div className={`${shimmer} p-2 h-2 w-full`}></div>
          </div>
          <div className="space-y-3 mb-12 w-1/2">
              <div className={`${shimmer} p-2 h-2 w-32`}></div>
              <div className={`${shimmer} p-2 h-2 w-full`}></div>
              <div className={`${shimmer} p-2 h-2 w-full`}></div>
              <div className={`${shimmer} p-2 h-2 w-full`}></div>
              <div className={`${shimmer} p-2 h-2 w-full`}></div>
          </div>
      </div>
    );
}