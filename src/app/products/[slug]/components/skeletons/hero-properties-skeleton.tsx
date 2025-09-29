import {shimmer} from "@/shared/common-css";

export function HeroPropertiesSkeleton() {
    return (
        <div className="space-y-3 mt-6">
            <div className="flex flex-wrap items-center gap-1">
                <span className={`${shimmer} h-2 p-2 w-16`}></span>
                <span className={`${shimmer} h-3 p-3 w-48`}></span>
                <span className={`${shimmer} h-3 p-3 w-48`}></span>
                <span className={`${shimmer} h-3 p-3 w-48`}></span>
            </div>
            <div className="flex flex-wrap items-center gap-1">
                <span className={`${shimmer} h-2 p-2 w-16`}></span>
                <span className={`${shimmer} h-3 p-3 w-48`}></span>
                <span className={`${shimmer} h-3 p-3 w-48`}></span>
                <span className={`${shimmer} h-3 p-3 w-48`}></span>
            </div>
        </div>
    );
}